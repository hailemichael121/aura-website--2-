"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "People connected" },
  { value: 100, suffix: "+", label: "Directly supported" },
  { value: 80, suffix: "+", label: "Conversations hosted" },
];

function easeOutQuint(t: number) {
  return 1 - (1 - t) ** 5;
}

function Stat({
  value,
  suffix,
  label,
  delay,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  start: boolean;
}) {
  const [shown, setShown] = useState(0);
  const [brake, setBrake] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (!start) return;
    if (reduced.current) {
      setShown(value);
      return;
    }

    let frame = 0;
    const duration = 1650;
    const wait = window.setTimeout(() => {
      const begin = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - begin) / duration);
        setShown(Math.round(easeOutQuint(t) * value));
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setShown(value);
          setBrake(true);
        }
      };
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(wait);
      cancelAnimationFrame(frame);
    };
  }, [delay, start, value]);

  return (
    <div className="px-2 py-2 text-center sm:px-8">
      <p
        className={brake ? "counter-brake" : undefined}
        aria-live="polite"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          lineHeight: 1,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "hsl(var(--primary))",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {shown.toLocaleString("en-US")}
        <span className="text-[0.62em] font-medium">{suffix}</span>
      </p>
      <p className="mt-3 text-[13px] font-medium tracking-[0.01em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export default function ImpactCounters() {
  const rootRef = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let done = false;

    const revealIfVisible = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (
        rect.height > 40 &&
        rect.bottom > 60 &&
        rect.top < window.innerHeight - 40
      ) {
        done = true;
        setStart(true);
      }
    };

    revealIfVisible();
    const frame = requestAnimationFrame(revealIfVisible);
    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          done = true;
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);

    return () => {
      done = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="border-b border-border/60 bg-background"
      aria-label="AURA impact"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-border/70 px-4 py-16 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-6 lg:px-8 lg:py-20">
        {stats.map((stat, i) => (
          <Stat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 160}
            start={start}
          />
        ))}
      </div>
    </section>
  );
}
