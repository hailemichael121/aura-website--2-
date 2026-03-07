import { Award, HeartHandshake, Stethoscope } from "lucide-react";
import { FounderCard } from "@/components/founder-card";

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background pt-24 text-foreground">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(60,176,67,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.18),transparent_46%)] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Meet Our Founder</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Visionary leadership driving change in mental health advocacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="rounded-3xl bg-gradient-to-br from-[#3CB043] to-[#0096FF] p-8 text-white">
              <p className="text-5xl font-semibold">RF</p>
              <h2 className="mt-6 text-3xl font-semibold">Dr. Rediet Feleke</h2>
              <p className="mt-1 text-sm text-white/90">Founder &amp; Medical Director</p>
              <ul className="mt-8 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2"><Stethoscope className="h-4 w-4" />Medical Student</li>
                <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4" />Asela University</li>
                <li className="flex items-center gap-2"><Award className="h-4 w-4" />Highly Honored</li>
              </ul>
            </div>
            <div className="space-y-4 text-muted-foreground">
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
      </section>

      <section className="border-t border-border bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Our Team</h2>
          <p className="mt-2 text-muted-foreground">Dedicated professionals working together for mental wellness.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FounderCard
              initials="SD"
              name="Simret G. Dessie"
              role="Community Outreach Coordinator"
              bio="Leading community engagement initiatives and building connections across Ethiopian communities."
              tags={["Community", "Engagement", "Cultural liaison"]}
              handle="@lunashine12"
            />
            <FounderCard
              initials="MG"
              name="Messeret Gossa"
              role="Program Development Specialist"
              bio="Designing and implementing innovative mental health programs tailored to Ethiopian contexts."
              tags={["Program design", "Research", "Innovation"]}
              accent="blue"
              handle="@mesigosaa"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
