import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Users, BookOpenText } from "lucide-react";
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
      {/* Hero */}
      <section className="border-b border-border pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Mental Wellness is a Right, Not a Luxury
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              AURA creates safe spaces for open conversation, recovery support,
              and mental wellness awareness across Ethiopian communities.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="px-6 py-6 text-base">
                <Link href="/get-help">
                  Get Help <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-6 text-base"
              >
                <Link href="/community">Join the Community</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
            <Image
              src="/images/community-support.png"
              alt="Community members supporting each other in a calm group setting"
              width={700}
              height={540}
              className="h-auto w-full rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">
          How AURA supports mental wellness
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="border-l-2 border-primary pl-5">
              <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-y border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Community impact
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each number represents people, stories, and healing journeys.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium">Need support right now?</h3>
            <p className="mt-2 text-muted-foreground">
              Visit our Get Help page for immediate support options, peer
              listening, and trusted referrals.
            </p>
            <Link
              href="/get-help"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              Go to Get Help &rarr;
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium">Join a program</h3>
            <p className="mt-2 text-muted-foreground">
              Workshops, youth-focused sessions, and awareness campaigns are
              open to students, families, and volunteers.
            </p>
            <Link
              href="/programs"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              Explore programs &rarr;
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium">Build community with us</h3>
            <p className="mt-2 text-muted-foreground">
              You are not alone. Our circles are built on privacy, safety, and
              shared understanding.
            </p>
            <Link
              href="/community"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              Visit community page &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
