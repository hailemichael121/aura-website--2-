"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

const DOCK_DISTANCE = 480;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

type Fly = {
  x: number;
  y: number;
  scale: number;
  pinned: boolean;
};

type BrandDockValue = {
  progress: number;
  eased: number;
  reveal: number;
  fly: Fly;
  isHome: boolean;
  registerSizer: (el: HTMLElement | null) => void;
};

const BrandDockContext = createContext<BrandDockValue>({
  progress: 0,
  eased: 0,
  reveal: 0,
  fly: { x: 0, y: 0, scale: 1, pinned: false },
  isHome: false,
  registerSizer: () => undefined,
});

export function BrandDockProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sizerRef = useRef<HTMLElement | null>(null);
  const measureRef = useRef<() => void>(() => undefined);
  const [progress, setProgress] = useState(0);
  const [eased, setEased] = useState(0);
  const [reveal, setReveal] = useState(0);
  const [fly, setFly] = useState<Fly>({
    x: 0,
    y: 0,
    scale: 1,
    pinned: false,
  });

  const registerSizer = useCallback((el: HTMLElement | null) => {
    sizerRef.current = el;
    measureRef.current();
  }, []);

  useEffect(() => {
    if (!isHome) {
      setProgress(1);
      setEased(1);
      setReveal(1);
      setFly({ x: 0, y: 0, scale: 1, pinned: false });
      measureRef.current = () => undefined;
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let running = true;
    let current = 0;
    let origin: { x: number; y: number; h: number } | null = null;

    const measure = () => {
      if (!running) return;

      const scrollY =
        window.scrollY || document.documentElement.scrollTop || 0;
      const target = reduced
        ? scrollY > 24
          ? 1
          : 0
        : clamp(scrollY / DOCK_DISTANCE);
      const targetEased = reduced ? target : easeOutCubic(target);
      current = targetEased;

      const sizer = sizerRef.current;
      const slot = document.getElementById("nav-brand-slot");

      let nextFly: Fly = { x: 0, y: 0, scale: 1, pinned: false };
      let revealTarget = 0;

      if (sizer && slot) {
        const r = sizer.getBoundingClientRect();
        const t = slot.getBoundingClientRect();
        if (origin === null && r.height >= 40) {
          origin = {
            x: r.left + r.width / 2,
            y: r.top + scrollY + r.height / 2,
            h: r.height,
          };
        }
        if (origin && t.width >= 8 && t.height >= 8) {
          const endX = t.left + t.width / 2;
          const endY = t.top + t.height / 2;
          const x = lerp(origin.x, endX, current);
          const y = lerp(origin.y, endY, current);
          const scale = lerp(1, t.height / origin.h, current);
          nextFly = { x, y, scale, pinned: true };
          const dist = Math.hypot(endX - x, endY - y);
          revealTarget = clamp(1 - dist / 80);
        }
      }

      setProgress(target);
      setEased(current);
      setReveal(reduced ? target : revealTarget);
      setFly(nextFly);
    };

    measureRef.current = measure;

    const onScroll = () => {
      measure();
    };
    const onResize = () => {
      origin = null;
      onScroll();
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      measureRef.current = () => undefined;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isHome]);

  const value = useMemo(
    () => ({ progress, eased, reveal, fly, isHome, registerSizer }),
    [progress, eased, reveal, fly, isHome, registerSizer],
  );

  return (
    <BrandDockContext.Provider value={value}>{children}</BrandDockContext.Provider>
  );
}

export function useBrandDock() {
  return useContext(BrandDockContext);
}
