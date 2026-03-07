import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  BookOpenText,
  CalendarHeart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const impactStats = [
  { label: "People connected", value: "1,000+" },
  { label: "Individuals supported", value: "500+" },
  { label: "Community conversations", value: "50+" },
];

const focusAreas = [
  {
    title: "Safe support pathways",
    text: "From early listening to professional referrals, we help people find the right level of support without judgment.",
    icon: HeartHandshake,
  },
  {
    title: "Community understanding",
    text: "We host open conversations that reduce stigma and build a healthier language around mental wellness in Ethiopian communities.",
    icon: Users,
  },
  {
    title: "Practical resources",
    text: "Simple, culturally aware resources for students, families, and working adults who need calm guidance.",
    icon: BookOpenText,
  },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(60,176,67,0.16),transparent_42%),radial-gradient(circle_at_95%_20%,rgba(0,150,255,0.14),transparent_35%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(146_26%_95%)_100%)] pt-28 pb-16 md:pt-32 md:pb-24 dark:bg-[linear-gradient(180deg,hsl(220_20%_6%)_0%,hsl(220_18%_8%)_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Mental Wellness is a Right, Not a Luxury
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              AURA creates safe spaces for open conversation, recovery support,
              and mental wellness awareness across Ethiopian communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#3CB043] px-6 py-6 text-base text-white hover:bg-[#2f9038]"
              >
                <Link href="/get-help">
                  Get Help <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#0096FF] bg-transparent px-6 py-6 text-base text-[#0073c2] hover:bg-[#0096FF]/10 dark:text-[#7ac8ff]"
              >
                <Link href="/community">Join the Community</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg [perspective:1200px]">
            <div className="grid-bg rounded-3xl border border-border bg-card p-4 shadow-2xl shadow-black/20 transition-transform duration-500 ease-out transform-gpu hover:rotate-y-3 hover:rotate-x-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] [transform-style:preserve-3d]">
              <Image
                src="/images/community-support.png"
                alt="Community members supporting each other in a calm group setting"
                width={700}
                height={540}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
            </div>
            <p className="inline-flex items-center rounded-full border border-border bg-card/90 px-4 py-2 mt-2 text-sm text-muted-foreground">
              Addis Ababa, Ethiopia · Alliance for Understanding Recovery &
              Awareness
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">
          How AURA supports mental wellness
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <item.icon className="mb-4 h-8 w-8 text-primary" aria-hidden />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Community impact
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each number represents people, stories, and healing journeys. We
            measure impact with care and accountability.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <h3 className="mt-4 text-xl font-medium">Need support right now?</h3>
          <p className="mt-2 text-muted-foreground">
            Visit our Get Help page for immediate support options, peer
            listening, and trusted referrals.
          </p>
          <Link
            href="/get-help"
            className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
          >
            Go to Get Help
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <CalendarHeart className="h-7 w-7 text-primary" />
          <h3 className="mt-4 text-xl font-medium">Join a program</h3>
          <p className="mt-2 text-muted-foreground">
            Workshops, youth-focused sessions, and awareness campaigns are open
            to students, families, and volunteers.
          </p>
          <Link
            href="/programs"
            className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
          >
            Explore programs
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <Users className="h-7 w-7 text-primary" />
          <h3 className="mt-4 text-xl font-medium">Build community with us</h3>
          <p className="mt-2 text-muted-foreground">
            You are not alone. Our circles are built on privacy, safety, and
            shared understanding.
          </p>
          <Link
            href="/community"
            className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
          >
            Visit community page
          </Link>
        </div>
      </section>
    </div>
  );
}
