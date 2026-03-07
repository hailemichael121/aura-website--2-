import Image from "next/image";
import { Eye, Heart, MapPin, Target, Users2 } from "lucide-react";
import { FounderCard } from "@/components/founder-card";

const values = [
  {
    title: "Compassion first",
    text: "We meet people where they are, with dignity and respect.",
    icon: Heart,
  },
  {
    title: "Local understanding",
    text: "Our work is grounded in Ethiopian realities, languages, and community life.",
    icon: MapPin,
  },
  {
    title: "Shared responsibility",
    text: "Mental wellness grows stronger when families, schools, and workplaces participate.",
    icon: Users2,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(60,176,67,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.16),transparent_45%)] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About AURA</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Alliance for Understanding Recovery &amp; Awareness (AURA) is a mental health awareness and support organization based in Bole, Addis Ababa. We work to make care, conversation, and recovery support more accessible for Ethiopian communities.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">Our story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AURA began with a simple truth: many people are silently carrying emotional pain while lacking safe places to talk. We started by creating small, trusted spaces for conversation and have continued growing through community partnerships, youth engagement, and referral support.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are not here to replace professional services. We are here to bridge the gap between silence and support—so that people can be heard early, supported respectfully, and connected to the right help.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <Target className="h-6 w-6 text-[#3CB043]" />
              <h3 className="mt-3 font-medium">Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">Normalize mental health conversations and strengthen support pathways across Ethiopia.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Eye className="h-6 w-6 text-[#0096FF]" />
              <h3 className="mt-3 font-medium">Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">A society where seeking support is seen as strength and everyone can access care with dignity.</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl border border-border bg-card p-4 shadow-sm">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(rgba(17,24,39,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
          <Image
            src="/images/mental-health-hero.png"
            alt="AURA awareness event in Ethiopia"
            width={900}
            height={680}
            className="relative h-full w-full rounded-2xl object-cover shadow-[0_24px_50px_-36px_rgba(17,24,39,0.65)]"
          />
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">What guides our work</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <value.icon className="h-7 w-7 text-[#3CB043]" />
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Meet Our Founder</h2>
          <p className="mt-3 text-muted-foreground">Visionary leadership driving change in mental health advocacy.</p>
        </div>

        <article className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="rounded-2xl bg-gradient-to-br from-[#3CB043] to-[#0096FF] p-6 text-white lg:w-64">
              <p className="text-4xl font-semibold">RF</p>
              <h3 className="mt-6 text-2xl font-semibold">Dr. Rediet Feleke</h3>
              <p className="mt-1 text-sm text-white/90">Founder &amp; Medical Director</p>
              <ul className="mt-5 space-y-2 text-sm text-white/90">
                <li>Medical Student</li>
                <li>Asela University</li>
                <li>Mental Health Advocate</li>
                <li>Highly Honored</li>
              </ul>
            </div>
            <div className="flex-1 space-y-4 text-muted-foreground">
              <p>
                Dr. Rediet Feleke is a passionate medical student at Asela University with a deep commitment to bridging mental health gaps for underserved communities. Her vision for AURA stems from her firsthand experience witnessing the mental health challenges faced by Ethiopian youth and families.
              </p>
              <p>
                As a highly honored student and emerging leader in the medical field, Rediet combines clinical knowledge with community-centered approaches to create sustainable mental health solutions. Her leadership has been instrumental in establishing AURA as a trusted voice in Ethiopia&apos;s mental health landscape.
              </p>
              <p className="font-medium text-foreground">Recognized for outstanding contributions to community mental health.</p>
            </div>
          </div>
        </article>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Our Team</h3>
          <p className="mt-2 text-muted-foreground">Dedicated professionals working together for mental wellness.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FounderCard
              initials="SD"
              name="Simret G. Dessie"
              role="Community Outreach Coordinator"
              bio="Leading community engagement initiatives and building connections across Ethiopian communities."
              tags={["Community", "Outreach", "Partnerships"]}
              handle="@lunashine12"
            />
            <FounderCard
              initials="MG"
              name="Messeret Gossa"
              role="Program Development Specialist"
              bio="Designing and implementing innovative mental health programs tailored to Ethiopian contexts."
              tags={["Programs", "Research", "Innovation"]}
              accent="blue"
              handle="@mesigosaa"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
