import Image from "next/image";
import {
  Eye,
  Handshake,
  Heart,
  Scale,
  ShieldCheck,
  Target,
  Users2,
} from "lucide-react";
import TeamMemberCard from "@/components/team-member-card";

const values = [
  {
    title: "Empathy & Respect",
    text: "Compassionate, stigma-free care.",
    icon: Heart,
  },
  {
    title: "Inclusivity & Accessibility",
    text: "Equitable outreach for all.",
    icon: Users2,
  },
  {
    title: "Integrity & Transparency",
    text: "Ethical and accountable governance.",
    icon: Scale,
  },
  {
    title: "Community-Centered Care",
    text: "Safe spaces and peer resilience.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic Collaboration",
    text: "Partnerships for systemic impact.",
    icon: Handshake,
  },
];

const board = [
  {
    initials: "MA",
    name: "Prof. Mubarek Abera Mengistie",
    title: "Board Chairman",
    photo: "/images/team/member-3.webp",
    bio: "Full Professor of Mental Health and Nutrition with over 15 years of experience in academia, health system leadership, and international research collaborations. Lead consultant for national strategic initiatives (UNICEF/MoH) and a widely published author. He provides overall board stewardship, focusing on institutional strategy, academic alignment, research integrity, and senior advisory leadership.",
  },
  {
    initials: "RD",
    name: "Ms. Rediet Dadi Tafa",
    title: "Board Member",
    photo: "/images/team/member-6.webp",
    bio: "Senior psychologist, training director, and psychotherapist with over 5 years of experience leading nationwide personal development and psychological training initiatives. She leverages her background in trauma-focused therapy and capacity building so AURA initiatives deliver measurable behavioral change and community impact.",
  },
  {
    initials: "AF",
    name: "Asst. Prof. Anteneh Fikrie Tekola",
    title: "Board Member",
    photo: "/images/team/member-2.webp",
    bio: "Assistant Professor of Public Health, Director of Research & International Partnerships at Bule Hora University, external PhD candidate (Maastricht University), and PLoS ONE editor. He ensures our public health and research methodologies are ethically sound, rigorous, and positioned for international institutional partnerships.",
  },
  {
    initials: "TT",
    name: "Dr. Tamrat Tefera Ali",
    title: "Board Member",
    photo: "/images/team/member-4.webp",
    bio: "Assistant professor of psychiatry, certified psychotherapist (University of Toronto), and specialist in child and adolescent mental health. He provides strategic guidance so therapeutic, training, and community outreach programs meet high clinical standards.",
  },
  {
    initials: "RT",
    name: "Ms. Ruth Tesfaye Tegen",
    title: "Board Member",
    photo: "/images/team/member-7.webp",
    bio: "Dedicated advocate for youth empowerment and community-driven social initiatives. She focuses on creating inclusive, accessible spaces that empower young people to lead mental health advocacy efforts.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Alliance for Understanding Recovery &amp; Awareness (AURA) is a
            registered Ethiopian Civil Society Organization creating accessible,
            culturally attuned safe spaces for mental health support.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">Mission, vision, and values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-medium">Our mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To create accessible, culturally attuned safe spaces for mental
                health support and stigma reduction by empowering youth,
                leveraging digital innovation, and driving multi-stakeholder
                action.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-medium">Our vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A society where mental wellness is understood, valued,
                protected, and accessible to all—free from stigma and
                exclusion.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <Image
            src="/images/mental-health-hero.webp"
            alt="AURA awareness gathering"
            width={900}
            height={680}
            className="h-full w-full rounded object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Core values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-border bg-card p-5"
              >
                <value.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-base font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Governance &amp; legal compliance</h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
          AURA (Alliance for Understanding Recovery &amp; Awareness) is
          officially registered as an Ethiopian Civil Society Organization (CSO)
          under Proclamation No. 1113/2011. We adhere to national governance
          regulations and international non-profit best practices to ensure full
          operational transparency and impact accountability.
        </p>
      </section>

      <section className="border-y border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Our leadership &amp; governance</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Guided by vision, grounded in accountability, and driven by
            community impact.
          </p>
          <div className="mt-8 grid gap-6">
            <TeamMemberCard
              initials="RF"
              name="Rediet Feleke"
              title="Founder & Executive Director"
              photo="/images/team/member-1.webp"
              bio="Rediet Feleke is the Founder and Executive Director of AURA. As the primary visionary behind the initiative, she directs organizational strategy, cross-sector partnerships, and community program execution to advance accessible, stigma-free mental health support across Ethiopian communities."
              highlight
            />
            <div className="grid gap-6 md:grid-cols-2">
              <TeamMemberCard
                initials="SG"
                name="Simret Gashaw"
                title="Co-Founder"
                photo="/images/team/member-5.webp"
                bio="Simret Gashaw is a Co-Founder of AURA, driving strategic outreach, community engagement, and program development. She plays a key role in shaping AURA's foundational mission, expanding support networks, and fostering safe, inclusive spaces for mental health awareness."
              />
              <TeamMemberCard
                initials="MG"
                name="Meseret Gossa"
                title="Co-Founder"
                photo="/images/team/member-7.webp"
                bio="Meseret Gossa is a Co-Founder of AURA, contributing to organizational vision, initiative design, and stakeholder collaboration. She works closely with the founding team to build sustainable pathways for mental health advocacy and community recovery."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">The Board</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {board.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
