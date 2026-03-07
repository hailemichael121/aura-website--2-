import { Megaphone, UsersRound, GraduationCap, HeartPulse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const programs = [
  {
    name: "Mental health awareness campaigns",
    description: "Public conversations in schools, campuses, and neighborhoods that challenge stigma and encourage early support-seeking.",
    impact: "Reached 1,000+ people through talks, social campaigns, and community sessions.",
    join: "Join as an outreach volunteer or host partner.",
    icon: Megaphone,
  },
  {
    name: "Community workshops",
    description: "Facilitated learning sessions on stress regulation, communication, and emotional wellbeing for families and local groups.",
    impact: "Supported safer conversations in homes, youth circles, and community institutions.",
    join: "Register your group for a monthly workshop.",
    icon: UsersRound,
  },
  {
    name: "Youth mental wellness programs",
    description: "Student-focused spaces addressing academic pressure, identity, anxiety, and transitions to adulthood.",
    impact: "Helped youth participants build coping practices and peer support networks.",
    join: "Sign up as a participant or campus coordinator.",
    icon: GraduationCap,
  },
  {
    name: "Recovery support groups",
    description: "Ongoing support circles for people in recovery, centered on hope, accountability, and community care.",
    impact: "Created consistent support pathways for participants navigating healing journeys.",
    join: "Contact AURA for referral and orientation details.",
    icon: HeartPulse,
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d8e5dd] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Programs</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f584b]">
            AURA programs are practical, community-centered, and designed to make mental wellness support more visible and accessible in Ethiopia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.name} className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
              <program.icon className="h-8 w-8 text-[#1f6b48]" />
              <h2 className="mt-4 text-2xl font-medium">{program.name}</h2>
              <p className="mt-3 text-[#4d6458]">{program.description}</p>
              <p className="mt-3 text-sm text-[#3e564a]"><span className="font-medium text-[#234d37]">Impact:</span> {program.impact}</p>
              <p className="mt-1 text-sm text-[#3e564a]"><span className="font-medium text-[#234d37]">How to participate:</span> {program.join}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#cfe0d6] bg-[#f2f7f3] p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-medium">Ready to join a program?</h3>
            <p className="mt-2 text-[#4a6156]">We welcome participants, volunteers, schools, and partners.</p>
          </div>
          <Button asChild className="mt-5 bg-[#1f6b48] hover:bg-[#18553a] md:mt-0"><Link href="/programs/register">Register interest</Link></Button>
        </div>
      </section>
    </div>
  );
}
