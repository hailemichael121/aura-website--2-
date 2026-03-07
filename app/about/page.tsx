import Image from "next/image";
import { Heart, MapPin, Target, Eye, Users2, Stethoscope } from "lucide-react";
import TeamMemberCard from "@/components/team-member-card";

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
      <section className="border-b border-border bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(146_36%_95%)_65%,hsl(0_0%_100%)_100%)] py-14 md:py-20 dark:bg-[linear-gradient(180deg,hsl(220_20%_6%)_0%,hsl(220_18%_8%)_100%)]">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About AURA</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Alliance for Understanding Recovery & Awareness (AURA) is a mental health awareness and support organization based in Bole, Addis Ababa. We work to make care, conversation, and recovery support more accessible for Ethiopian communities.
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
              <Target className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-medium">Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">Normalize mental health conversations and strengthen support pathways across Ethiopia.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Eye className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-medium">Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">A society where seeking support is seen as strength and everyone can access care with dignity.</p>
            </div>
          </div>
        </div>
        <div className="grid-bg rounded-3xl border border-border bg-card p-4 shadow-lg shadow-primary/10">
          <Image
            src="/images/mental-health-hero.png"
            alt="AURA awareness event in Ethiopia"
            width={900}
            height={680}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Meet Our Founder</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Visionary leadership driving change in mental health advocacy.</p>
          <div className="mt-8">
            <TeamMemberCard
              initials="RF"
              name="Dr. Rediet Feleke"
              title="Founder & Medical Director"
              instagram="@red8_fe"
              telegram="@red8_fe"
              tags={["Medical Student", "Asela University", "Mental Health Advocate", "Highly Honored"]}
              bio="Dr. Rediet Feleke is a passionate medical student at Asela University with a deep commitment to bridging mental health gaps for underserved communities. Her vision for AURA stems from firsthand experience witnessing the mental health challenges faced by Ethiopian youth and families. As an emerging leader in the medical field, she combines clinical knowledge with community-centered approaches to create sustainable, culturally grounded mental health solutions."
              icon={Stethoscope}
              highlight
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Our Team</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">Dedicated professionals working together for mental wellness.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <TeamMemberCard
            initials="SD"
            name="Simret G. Dessie"
            title="Community Outreach Coordinator"
            instagram="@lunashine12"
            tags={["Community engagement", "Partnerships", "Behavior change communication"]}
            bio="Simret leads community engagement initiatives and builds trusted connections across Ethiopian communities to support awareness, reduce stigma, and increase access to care."
          />
          <TeamMemberCard
            initials="MG"
            name="Messeret Gossa"
            title="Program Development Specialist"
            instagram="@mesigosaa"
            tags={["Program design", "Implementation", "Local context adaptation"]}
            bio="Messeret designs and implements innovative mental health programs tailored to Ethiopian contexts, balancing evidence-based structure with practical on-the-ground realities."
          />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">What guides our work</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <value.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
