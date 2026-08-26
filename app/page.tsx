import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  HeartHandshake,
  Users,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import ImpactCounters from "@/components/impact-counters";

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
  return (
    <div className="bg-background text-foreground">
      <HeroSection />

      <ImpactCounters />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">How AURA supports wellness</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 md:px-6 lg:px-8">
          <Link
            href="/get-help"
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-medium">Need support?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Immediate options, peer listening, and trusted referrals.
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Get Help <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/programs"
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-medium">Join a program</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Family Time, trainings, youth sessions, and events.
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Explore programs <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/community"
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-medium">Build community</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Forum, stories, and spaces built on privacy and care.
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Visit community <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
