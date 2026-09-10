"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Heart,
  Landmark,
  Scale,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { SITE_EMAILS } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

const introWords = ["Mission,", "vision,", "and", "values"];

const values = [
  {
    title: "Empathy & respect",
    text: "Compassionate, stigma-free care.",
    icon: Heart,
  },
  {
    title: "Inclusivity & accessibility",
    text: "Equitable outreach for all.",
    icon: Users2,
  },
  {
    title: "Integrity & transparency",
    text: "Ethical and accountable governance.",
    icon: Scale,
  },
  {
    title: "Community-centered care",
    text: "Safe spaces and peer resilience.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic collaboration",
    text: "Partnerships for systemic impact.",
    icon: Handshake,
  },
];

const VALUES_AUTO_MS = 4500;
const VALUES_PAUSE_MS = 9000;

function CoreValuesCarousel() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const programmaticScroll = useRef(false);

  const pauseAuto = useCallback(() => {
    setAutoPlay(false);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setAutoPlay(true), VALUES_PAUSE_MS);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoPlay(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % values.length);
    }, VALUES_AUTO_MS);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    programmaticScroll.current = true;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    const reset = window.setTimeout(() => {
      programmaticScroll.current = false;
    }, 450);

    return () => window.clearTimeout(reset);
  }, [index]);

  const syncIndexFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const target = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, i) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - target);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });

    setIndex(closest);
  }, []);

  const handleScroll = () => {
    if (programmaticScroll.current) return;
    pauseAuto();
    syncIndexFromScroll();
  };

  const goTo = (next: number) => {
    pauseAuto();
    setIndex(next);
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={pauseAuto}
        onPointerDown={pauseAuto}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-x-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="Core values"
      >
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article
              key={value.title}
              className="about-card-hover flex min-w-[min(88vw,20rem)] shrink-0 snap-center flex-col rounded-xl border border-border bg-card p-5 shadow-sm sm:min-w-[18rem] md:min-w-0 md:flex-1 lg:min-w-0 lg:flex-1"
            >
              <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
              <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
        {values.map((value, i) => (
          <button
            key={value.title}
            type="button"
            aria-label={`Go to ${value.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-border hover:bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

type Profile = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const teamPhoto = (name: string) => `/images/team/architecture/${name}.webp`;

const leadership: Profile[] = [
  {
    name: "Rediet Feleke",
    role: "Founder & Executive Director",
    photo: teamPhoto("rediet-feleke"),
    bio: "Rediet Feleke is the Founder and Executive Director of AURA. As the primary visionary behind the initiative, she directs organizational strategy, cross-sector partnerships, and community program execution to advance accessible, stigma-free mental health support across Ethiopian communities.",
  },
];

const coFounders: Profile[] = [
  {
    name: "Simret Gashaw",
    role: "Co-Founder",
    photo: teamPhoto("simret-gashaw"),
    bio: "Simret Gashaw is a Co-Founder of AURA, driving strategic outreach, community engagement, and program development. She plays a key role in shaping AURA's foundational mission, expanding support networks, and fostering safe, inclusive spaces for mental health awareness.",
  },
  {
    name: "Meseret Gossa",
    role: "Co-Founder",
    photo: teamPhoto("meseret-gossa"),
    bio: "Meseret Gossa is a Co-Founder of AURA, contributing to organizational vision, initiative design, and stakeholder collaboration. She works closely with the founding team to build sustainable pathways for mental health advocacy and community recovery.",
  },
];

const board: Profile[] = [
  {
    name: "Prof. Mubarek Abera Mengistie",
    role: "Board Chairman",
    photo: teamPhoto("mubarek-mengistie"),
    bio: "Full Professor of Mental Health and Nutrition with over 15 years of experience in academia, health system leadership, and international research collaborations. Lead consultant for national strategic initiatives (UNICEF/MoH) and widely published author. He provides overall board stewardship, focusing on institutional strategy, academic alignment, research integrity, and senior advisory leadership.",
  },
  {
    name: "Ms. Rediet Dadi Tafa",
    role: "Vice Chair",
    photo: teamPhoto("rediet-dadi"),
    bio: "Senior Psychologist, Training Director, and Psychotherapist with over 5 years of experience leading nationwide personal development and psychological training initiatives. She leverages her background in trauma-focused therapy and capacity building to ensure our initiatives deliver measurable behavioral change and community impact.",
  },
  {
    name: "Asst. Prof. Anteneh Fikrie Tekola",
    role: "Board Secretary",
    photo: teamPhoto("anteneh-tekola"),
    bio: "Assistant Professor of Public Health, Director of Research & International Partnerships at Bule Hora University, external PhD candidate (Maastricht University), and PLoS ONE editor. He ensures our public health and research methodologies are ethically sound, rigorous, and positioned for international institutional partnerships.",
  },
  {
    name: "Dr. Tamrat Tefera Ali",
    role: "Board Member",
    photo: teamPhoto("tamrat-tefera"),
    bio: "Assistant professor of Psychiatry, Certified Psychotherapist (Toronto University), and specialist in child and adolescent mental health. He provides strategic guidance to ensure all therapeutic, training, and community outreach programs meet high clinical standards.",
  },
  {
    name: "Ms. Ruth Tesfaye Tegen",
    role: "Board Member",
    photo: teamPhoto("ruth-tegen"),
    bio: "Dedicated advocate for youth empowerment and community-driven social initiatives. She focuses on creating inclusive, accessible spaces that empower young people to lead mental health advocacy efforts.",
  },
];

function FeaturedProfile({ person, delay = 0 }: { person: Profile; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="about-card-hover grid gap-8 rounded-xl border border-border/80 bg-card/50 p-5 md:grid-cols-[minmax(200px,240px)_1fr] md:gap-10 md:p-0 md:rounded-none md:border-0 md:bg-transparent">
        <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-lg bg-muted shadow-sm">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="240px"
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
            {person.role}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {person.name}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {person.bio}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ProfileRow({ person, delay = 0 }: { person: Profile; delay?: number }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="about-card-hover grid gap-5 rounded-xl border border-border/70 bg-card/40 p-5 sm:grid-cols-[120px_1fr] sm:gap-8 md:rounded-none md:border-0 md:border-b md:border-border md:bg-transparent md:p-0 md:py-8 md:last:border-b-0">
        <div className="relative mx-auto aspect-square w-[120px] overflow-hidden rounded-lg bg-muted shadow-sm sm:mx-0">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="120px"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
            {person.role}
          </p>
          <h3 className="mt-1 text-lg font-bold text-foreground">{person.name}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {person.bio}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function AboutPageContent() {
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIntroReady(true);
      return;
    }
    const timer = window.setTimeout(() => setIntroReady(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border pt-28">
        <div
          className="about-glow-orb pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="about-glow-orb pointer-events-none absolute -right-10 top-24 h-40 w-40 rounded-full bg-brand-azure/10 blur-3xl [animation-delay:2s]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-12 md:px-6 md:pb-14 lg:px-8">
          <div className="about-intro-line h-0.5 w-16 rounded-full bg-primary/80" />
          <p
            className={cn(
              "mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
              introReady ? "about-word-in" : "opacity-0",
            )}
            style={{ animationDelay: "120ms" }}
          >
            About us
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {introWords.map((word, index) => (
              <span
                key={word}
                className={cn(
                  "about-word-in mr-[0.28em] last:mr-0",
                  !introReady && "opacity-0",
                )}
                style={{ animationDelay: `${220 + index * 90}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p
            className={cn(
              "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
              introReady ? "about-word-in" : "opacity-0",
            )}
            style={{ animationDelay: "620ms" }}
          >
            Alliance for Understanding Recovery &amp; Awareness — a registered
            Ethiopian Civil Society Organization.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14 lg:px-8">
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Our mission
                </h2>
                <p className="mt-4 text-base font-semibold leading-relaxed text-foreground md:text-xl">
                  To create accessible, culturally attuned safe spaces for mental
                  health support and stigma reduction by empowering youth,
                  leveraging digital innovation, and driving multi-stakeholder
                  action.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Our vision
                </h2>
                <p className="mt-4 text-base font-semibold leading-relaxed text-foreground md:text-xl">
                  A society where mental wellness is understood, valued, protected,
                  and accessible to all—free from stigma and exclusion.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-6 md:py-14 lg:px-8">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Core values
            </h2>
          </ScrollReveal>
          <div className="mt-6">
            <CoreValuesCarousel />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/25">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <ScrollReveal>
            <div className="about-card-hover rounded-xl border border-border/80 bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-3">
                <Landmark
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={1.75}
                />
                <div>
                  <h2 className="text-xl font-bold text-foreground md:text-2xl">
                    Governance &amp; legal compliance
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Proclamation No. 1113/2011
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                AURA (Alliance for Understanding Recovery &amp; Awareness) is
                officially registered as an Ethiopian Civil Society Organization
                (CSO) under Proclamation No. 1113/2011. We adhere to national
                governance regulations and international non-profit best practices
                to ensure full operational transparency and impact accountability.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Our leadership &amp; governance
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Guided by vision, grounded in accountability, and driven by community
              impact.
            </p>
          </ScrollReveal>
          <div className="mt-10 space-y-8 md:space-y-12">
            <FeaturedProfile person={leadership[0]} />
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {coFounders.map((person, index) => (
                <ProfileRow key={person.name} person={person} delay={index * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <ScrollReveal>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              The board
            </h2>
          </ScrollReveal>
          <div className="mt-8 space-y-4 md:space-y-0">
            {board.map((person, index) => (
              <ProfileRow key={person.name} person={person} delay={index * 60} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="about-glow-orb pointer-events-none absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="about-outro-panel about-card-hover flex flex-col gap-6 rounded-2xl border border-border p-6 shadow-md md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
                  Connect with AURA
                </p>
                <p className="mt-2 text-base text-foreground md:text-lg">
                  Reach the team at{" "}
                  <a
                    href={`mailto:${SITE_EMAILS.info}`}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {SITE_EMAILS.info}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-md px-6">
                  <Link href="/get-involved">Get involved</Link>
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
