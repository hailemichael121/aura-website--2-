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
  /** Custom duration in ms for this slide */
  duration?: number;
  /** Custom object position, e.g. "object-top" */
  objectPosition?: string;
  /** Custom inline object position style, e.g. "center 0%" */
  objectPositionStyle?: string;
  /** Photo already has the lime brand overlay baked in. */
  preTinted?: boolean;
};

const slides: HeroSlide[] = [
  {
    id: "founder-dialogue-session",
    type: "image",
    src: "/images/hero/community-dialogue-7.webp",
    alt: "Dr. Rediet Feleke leading an AURA community mental health dialogue session",
    duration: 6000, // 6 seconds
    objectPosition: "object-center",
    objectPositionStyle: "center 30%", // Centers directly on founder and dialogue participants
  },
  {
    id: "community-dialogue-2",
    type: "image",
    src: "/images/hero/community-dialogue-2.webp",
    alt: "Community dialogue and peer listening session in Addis Ababa",
    duration: 5000,
    objectPosition: "object-center",
  },
  {
    id: "community-dialogue-4",
    type: "image",
    src: "/images/hero/community-dialogue-4.webp",
    alt: "AURA community workshop and group participation",
    duration: 5000,
    objectPosition: "object-center",
  },
  {
    id: "community-care-5",
    type: "video",
    src: "/videos/hero/community-care-5.mp4",
    poster: "/images/hero/posters/community-care-5.webp",
    alt: "Community members moving together outdoors",
    duration: 5000,
  },
  {
    id: "community-dialogue-3",
    type: "image",
    src: "/images/hero/community-dialogue-3.webp",
    alt: "Community members sitting together in supportive connection",
    duration: 5000,
    objectPosition: "object-center",
  },
  {
    id: "community-dialogue-6",
    type: "image",
    src: "/images/hero/community-dialogue-6.webp",
    alt: "Engaged participants in mental wellness training",
    duration: 5000,
    objectPosition: "object-center",
  },
];

const DEFAULT_AUTOPLAY_MS = 5000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reducedMotion = useRef(false);
  const { eased, fly, registerSizer } = useBrandDock();

  const currentDuration = slides[index]?.duration || DEFAULT_AUTOPLAY_MS;

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
        return prev + (step / currentDuration) * 100;
      });
    }, step);
    return () => window.clearInterval(timer);
  }, [playing, paginate, currentDuration]);

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
                "hero-slide-layer pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive
                  ? "hero-slide-layer--active z-10 opacity-100"
                  : isLeaving
                    ? "hero-slide-layer--leaving z-0 opacity-0"
                    : "opacity-0",
              )}
              aria-hidden={!isActive}
            >
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  poster={slide.poster}
                  className="h-full w-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  style={
                    slide.objectPositionStyle
                      ? { objectPosition: slide.objectPositionStyle }
                      : undefined
                  }
                  className={cn(
                    "object-cover",
                    slide.objectPosition || "object-center",
                  )}
                  sizes="100vw"
                />
              )}
              <div
                className={cn(
                  "hero-lime-wash pointer-events-none absolute inset-0 mix-blend-multiply",
                  slide.preTinted && "opacity-0",
                )}
                aria-hidden
              />
              <div
                className="hero-dim-scrim pointer-events-none absolute inset-0"
                aria-hidden
              />
            </div>
          );
        })}
      </div>

      <div
        className="hero-top-scrim pointer-events-none absolute inset-x-0 top-0 z-20 h-44 bg-gradient-to-b from-black/55 via-black/25 to-transparent"
        aria-hidden
      />

      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-28 pt-28 text-center sm:px-6 lg:px-8">
        <div
          ref={registerSizer}
          className="hero-static-lockup flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          style={{ opacity: eased }}
        >
          <AuraHeroLockup />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8f5e9]/90 sm:text-sm">
          Alliance for Understanding Recovery &amp; Awareness
        </p>

        <h1
          className="hero-headline mt-3 text-balance font-extrabold tracking-tight"
          style={{
            fontSize: "clamp(2.1rem, 5.2vw, 3.85rem)",
            lineHeight: 1.1,
          }}
        >
          Mental Wellbeing for All!
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-[#f4faf4] sm:text-base md:text-lg">
          Alliance for Understanding Recovery &amp; Awareness (AURA) creates
          accessible, culturally attuned safe spaces for mental health support
          and stigma reduction by empowering youth, leveraging digital
          innovation, and driving multi-stakeholder action across Ethiopian
          communities.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            className="hero-cta h-11 shrink-0 whitespace-nowrap rounded-full bg-white px-5 text-sm font-semibold text-[#1a7a28] shadow-md hover:bg-white/90 sm:text-base"
          >
            <Link href="/resources">
              <Library className="h-4 w-4 text-[#1a7a28]" />
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

      {/* Left-Aligned Minimal Hero Controls */}
      <div className="absolute bottom-20 left-4 z-30 flex items-center gap-2 sm:bottom-24 sm:left-8 md:left-12 lg:left-16">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 backdrop-blur-md shadow-lg">
          {/* Prev */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Minimal Progress Indicators */}
          <div className="flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300",
                  i === index ? "w-6 bg-white/40" : "w-1.5 hover:bg-white/60",
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

          {/* Next */}
          <button
            type="button"
            onClick={() => paginate(1)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Divider */}
          <span className="h-3 w-px bg-white/25" />

          {/* Play/Pause */}
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            {playing ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
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
