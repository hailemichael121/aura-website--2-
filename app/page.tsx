import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Users, BookOpenText, CalendarHeart, ShieldCheck } from "lucide-react";
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
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(60,176,67,0.18),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.16),transparent_40%)] pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[#2f6f53]/10 blur-3xl" aria-hidden />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-[#9eb9a8]/20 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-border bg-card/80 px-4 py-1 text-sm text-muted-foreground">
              Addis Ababa, Ethiopia · Alliance for Understanding Recovery & Awareness
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Mental Wellness is a Right, Not a Luxury
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              AURA creates safe spaces for open conversation, recovery support, and mental wellness awareness across Ethiopian communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#3CB043] px-6 py-6 text-base text-white hover:bg-[#2f9238]">
                <Link href="/get-help">Get Help <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-[#0096FF] bg-transparent px-6 py-6 text-base text-[#0096FF] hover:bg-[#0096FF]/10">
                <Link href="/community">Join the Community</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative rounded-3xl border border-border bg-card p-4 shadow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(17,24,39,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <Image
                src="/images/community-support.png"
                alt="Community members supporting each other in a calm group setting"
                width={700}
                height={540}
                className="h-auto w-full rounded-2xl object-cover shadow-[0_24px_50px_-36px_rgba(17,24,39,0.65)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">How AURA supports mental wellness</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#d6e4db] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <item.icon className="mb-4 h-8 w-8 text-[#1f6b48]" aria-hidden />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#425b4f]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9e6de] bg-[#f3f8f4] py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Community impact</h2>
          <p className="mt-3 max-w-2xl text-[#41574b]">Each number represents people, stories, and healing journeys. We measure impact with care and accountability.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#cfe0d6] bg-white p-6 text-center">
                <p className="text-3xl font-semibold text-[#1f6b48]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#50665b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#d7e5dc] bg-white p-6">
          <ShieldCheck className="h-7 w-7 text-[#1f6b48]" />
          <h3 className="mt-4 text-xl font-medium">Need support right now?</h3>
          <p className="mt-2 text-[#486154]">Visit our Get Help page for immediate support options, peer listening, and trusted referrals.</p>
          <Link href="/get-help" className="mt-4 inline-block text-[#1f6b48] underline-offset-4 hover:underline">Go to Get Help</Link>
        </div>
        <div className="rounded-2xl border border-[#d7e5dc] bg-white p-6">
          <CalendarHeart className="h-7 w-7 text-[#1f6b48]" />
          <h3 className="mt-4 text-xl font-medium">Join a program</h3>
          <p className="mt-2 text-[#486154]">Workshops, youth-focused sessions, and awareness campaigns are open to students, families, and volunteers.</p>
          <Link href="/programs" className="mt-4 inline-block text-[#1f6b48] underline-offset-4 hover:underline">Explore programs</Link>
        </div>
        <div className="rounded-2xl border border-[#d7e5dc] bg-white p-6">
          <Users className="h-7 w-7 text-[#1f6b48]" />
          <h3 className="mt-4 text-xl font-medium">Build community with us</h3>
          <p className="mt-2 text-[#486154]">You are not alone. Our circles are built on privacy, safety, and shared understanding.</p>
          <Link href="/community" className="mt-4 inline-block text-[#1f6b48] underline-offset-4 hover:underline">Visit community page</Link>
        </div>
      </section>
    </div>
  );
}
