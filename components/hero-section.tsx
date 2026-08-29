"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuraHeroLockup } from "@/components/aura-hero-lockup";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Library,
  Pause,
  Play,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBrandDock } from "@/hooks/use-brand-dock";

type HeroSlide = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** Photo already has the lime brand overlay baked in. */
  preTinted?: boolean;
};

const slides: HeroSlide[] = [
  {
    id: "community-together",
    type: "image",
    src: "/images/hero/community-dialogue-3.webp",
    alt: "Friends sitting together in community",
  },
  {
    id: "community-care-2",
    type: "video",
    src: "/videos/hero/community-care-2.mp4",
    poster: "/images/hero/posters/community-care-2.webp",
    alt: "A volunteer offering a supportive hand",
  },
  {
    id: "community-care-3",
    type: "video",
    src: "/videos/hero/community-care-3.mp4",
    poster: "/images/hero/posters/community-care-3.webp",
    alt: "Hands stacked together in a circle of support",
  },
  {
    id: "community-care-5",
    type: "video",
    src: "/videos/hero/community-care-5.mp4",
    poster: "/images/hero/posters/community-care-5.webp",
    alt: "Friends moving together outdoors in community",
  },
];

const AUTOPLAY_MS = 8000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reducedMotion = useRef(false);
  const { eased, fly, registerSizer } = useBrandDock();

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const wrapped = ((next % slides.length) + slides.length) % slides.length;
      if (wrapped === index) return;
      setLeaving(index);
      setIndex(wrapped);
      setSlideProgress(0);
    },
    [index],
  );

  const paginate = useCallback(
    (dir: number) => {
      goTo(index + dir);
    },
    [goTo, index],
  );

  useEffect(() => {
    if (!playing) return;
    const step = 50;
    const timer = window.setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + (step / AUTOPLAY_MS) * 100;
      });
    }, step);
    return () => window.clearInterval(timer);
  }, [playing, paginate]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index && slides[i].type === "video") {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [index]);

  return (
    <section className="relative isolate min-h-[100svh] bg-[#1a7a28] text-white">
      <div className="absolute inset-0 overflow-hidden bg-[#145c1e]">
        {slides.map((slide, i) => {
          const isActive = i === index;
          const isLeaving = i === leaving;

          return (
            <div
              key={slide.id}
              className={cn(
                "hero-slide",
                isActive && "is-active",
                isLeaving && "is-leaving",
                !isActive && "pointer-events-none",
              )}
              onTransitionEnd={(event) => {
                if (event.target !== event.currentTarget) return;
                if (isLeaving && event.propertyName === "opacity") {
                  setLeaving(null);
                }
              }}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="hero-media"
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  playsInline
                  loop
                  preload={isActive || Math.abs(i - index) === 1 ? "auto" : "metadata"}
                  autoPlay={isActive}
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="hero-media hero-media-still object-cover"
                  sizes="100vw"
                />
              )}
              {!slide.preTinted && (
                <div
                  className="pointer-events-none absolute inset-0 bg-[#3ad645]/55 mix-blend-multiply"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[#3ad645]/20 mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/40"
        aria-hidden
      />

      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 pb-28 pt-28 text-center md:px-6">
        <div id="hero-brand-rest" className="relative min-h-[5.5rem] sm:min-h-[6rem]">
          <div
            id="hero-brand-sizer"
            ref={registerSizer}
            className={cn(
              "hero-lockup flex flex-col items-center gap-5 sm:flex-row sm:gap-6",
              fly.pinned && "invisible",
            )}
            aria-hidden={fly.pinned}
          >
            <AuraHeroLockup />
          </div>
        </div>

        <div
          className="hero-copy mt-10 max-w-3xl space-y-4"
          style={{
            opacity: Math.max(0, 1 - eased * 1.15),
            pointerEvents: eased > 0.55 ? "none" : undefined,
          }}
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Mental Wellbeing for All!
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/92 sm:text-lg">
            AURA creates safe spaces for open conversation, recovery support,
            and mental wellness awareness across Ethiopian communities. We
            break stigma and foster healing through peer circles, public
            dialogues, and community care.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{
            opacity: Math.max(0, 1 - eased * 1.15),
            pointerEvents: eased > 0.55 ? "none" : undefined,
          }}
        >
          <Button
            asChild
            className="hero-cta h-11 shrink-0 whitespace-nowrap rounded-full bg-white px-5 text-sm text-[#369319] hover:bg-white/90 sm:text-base"
          >
            <Link href="/resources">
              <Library className="h-4 w-4" />
              Resources
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hero-cta h-11 shrink-0 whitespace-nowrap rounded-full border-2 border-white bg-transparent px-5 text-sm text-white hover:bg-white/20 hover:text-white sm:text-base"
          >
            <Link href="/programs">
              <CalendarDays className="h-4 w-4" />
              Upcoming Events
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hero-cta h-11 shrink-0 whitespace-nowrap rounded-full border-2 border-white bg-transparent px-5 text-sm text-white hover:bg-white/20 hover:text-white sm:text-base"
          >
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="h-4 w-4" />
              Join the Community
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 z-30 flex items-center justify-center gap-2.5 px-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-2 backdrop-blur-md">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 overflow-hidden rounded-full bg-white/35 transition-all duration-500",
                i === index ? "w-10" : "w-2 hover:bg-white/60",
              )}
            >
              {i === index ? (
                <span
                  className="block h-full bg-white"
                  style={{ width: `${slideProgress}%` }}
                />
              ) : null}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(1)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 overflow-hidden leading-[0]">
        <svg
          className="hero-wave relative block h-16 w-[120%] min-w-full text-background sm:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,64 C240,120 360,0 720,48 C1080,96 1200,16 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
