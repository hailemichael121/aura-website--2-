import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  HeartHandshake,
  Users,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import HomeActivitySection from "@/components/home-activity-section";
import ImpactCounters from "@/components/impact-counters";
import { getActivePromotions } from "@/lib/site-campaigns";

const focusAreas = [
  {
    title: "Safe support pathways",
    text: "Guided listening, peer support circles, and community care.",
    icon: HeartHandshake,
  },
  {
    title: "Community understanding",
    text: "Open public dialogues, awareness campaigns, and community forums that combat mental health stigma in Ethiopia.",
    icon: Users,
  },
  {
    title: "Practical resources",
    text: "Culturally adapted tools, stress management guides, and educational materials for students, families, and professionals.",
    icon: BookOpenText,
  },
];

export default function HomePage() {
  const events = getActivePromotions("event");
  const campaigns = getActivePromotions("campaign");

  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <ImpactCounters />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">How AURA supports wellness</h2>
        <div className="mt-6 grid auto-rows-fr gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
            >
              <item.icon className="mb-2.5 h-5 w-5 text-primary" aria-hidden />
              <h3 className="text-base font-semibold leading-snug sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <HomeActivitySection events={events} campaigns={campaigns} />

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl auto-rows-fr gap-3 px-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 md:px-6 lg:px-8">
          <Link
            href="/get-help"
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md sm:p-5"
          >
            <h3 className="text-base font-semibold sm:text-lg">Need support?</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              Immediate options, peer listening, and trusted referrals.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
              Get Help <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/programs"
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md sm:p-5"
          >
            <h3 className="text-base font-semibold sm:text-lg">Join a program</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              Family Time, trainings, youth sessions, and events.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
              Explore programs <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/community"
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md sm:col-span-2 sm:p-5 lg:col-span-1"
          >
            <h3 className="text-base font-semibold sm:text-lg">Build community</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              Forum, stories, and spaces built on privacy and care.
            </p>
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
              Visit community <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
