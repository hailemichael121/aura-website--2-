import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Heart,
  Landmark,
  Scale,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_EMAILS, SITE_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "About Us | Mission, Leadership & Governance",
  description:
    "AURA (Alliance for Understanding Recovery & Awareness) is a registered Ethiopian Civil Society Organization building accessible, culturally grounded mental health support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AURA — Mission, Leadership & Governance",
    description:
      "AURA is an officially registered Ethiopian Civil Society Organization dedicated to accessible, culturally attuned mental health support.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    title: "Empathy & respect",
    text: "Compassionate, stigma-free care.",
    icon: Heart,
  },
  {
    title: "Inclusivity & accessibility",
    text: "Equitable outreach for all.",
    icon: Users2,
  },
  {
    title: "Integrity & transparency",
    text: "Ethical and accountable governance.",
    icon: Scale,
  },
  {
    title: "Community-centered care",
    text: "Safe spaces and peer resilience.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic collaboration",
    text: "Partnerships for systemic impact.",
    icon: Handshake,
  },
];

type Profile = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const teamPhoto = (name: string) => `/images/team/architecture/${name}.webp`;

const leadership: Profile[] = [
  {
    name: "Rediet Feleke",
    role: "Founder & Executive Director",
    photo: teamPhoto("rediet-feleke"),
    bio: "Rediet Feleke is the Founder and Executive Director of AURA. As the primary visionary behind the initiative, she directs organizational strategy, cross-sector partnerships, and community program execution to advance accessible, stigma-free mental health support across Ethiopian communities.",
  },
];

const coFounders: Profile[] = [
  {
    name: "Simret Gashaw",
    role: "Co-Founder",
    photo: teamPhoto("simret-gashaw"),
    bio: "Simret Gashaw is a Co-Founder of AURA, driving strategic outreach, community engagement, and program development. She plays a key role in shaping AURA's foundational mission, expanding support networks, and fostering safe, inclusive spaces for mental health awareness.",
  },
  {
    name: "Meseret Gossa",
    role: "Co-Founder",
    photo: teamPhoto("meseret-gossa"),
    bio: "Meseret Gossa is a Co-Founder of AURA, contributing to organizational vision, initiative design, and stakeholder collaboration. She works closely with the founding team to build sustainable pathways for mental health advocacy and community recovery.",
  },
];

const board: Profile[] = [
  {
    name: "Prof. Mubarek Abera Mengistie",
    role: "Board Chairman",
    photo: teamPhoto("mubarek-mengistie"),
    bio: "Full Professor of Mental Health and Nutrition with over 15 years of experience in academia, health system leadership, and international research collaborations. Lead consultant for national strategic initiatives (UNICEF/MoH) and a widely published author. He provides overall board stewardship, focusing on institutional strategy, academic alignment, research integrity, and senior advisory leadership.",
  },
  {
    name: "Ms. Rediet Dadi Tafa",
    role: "Board Member",
    photo: teamPhoto("rediet-dadi"),
    bio: "Senior Psychologist, Training Director, and Psychotherapist with over 5 years of experience leading nationwide personal development and psychological training initiatives. She leverages her background in trauma-focused therapy and capacity building to ensure our initiatives deliver measurable behavioral change and community impact.",
  },
  {
    name: "Asst. Prof. Anteneh Fikrie Tekola",
    role: "Board Member",
    photo: teamPhoto("anteneh-tekola"),
    bio: "Assistant Professor of Public Health, Director of Research & International Partnerships at Bule Hora University, external PhD candidate (Maastricht University), and PLoS ONE editor. He ensures our public health and research methodologies are ethically sound, rigorous, and positioned for international institutional partnerships.",
  },
  {
    name: "Dr. Tamrat Tefera Ali",
    role: "Board Member",
    photo: teamPhoto("tamrat-tefera"),
    bio: "Assistant professor of Psychiatry, Certified Psychotherapist (Toronto University), and specialist in child and adolescent mental health. He provides strategic guidance to ensure all therapeutic, training, and community outreach programs meet high clinical standards.",
  },
  {
    name: "Ms. Ruth Tesfaye Tegen",
    role: "Board Member",
    photo: teamPhoto("ruth-tegen"),
    bio: "Dedicated advocate for youth empowerment and community-driven social initiatives. She focuses on creating inclusive, accessible spaces that empower young people to lead mental health advocacy efforts.",
  },
];

function FeaturedProfile({ person }: { person: Profile }) {
  return (
    <article className="grid gap-8 border-b border-border pb-12 md:grid-cols-[minmax(200px,240px)_1fr] md:gap-10">
      <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden bg-muted">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="240px"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
          {person.role}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {person.name}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {person.bio}
        </p>
      </div>
    </article>
  );
}

function ProfileRow({ person }: { person: Profile }) {
  return (
    <article className="grid gap-5 border-b border-border py-8 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-8">
      <div className="relative mx-auto aspect-square w-[120px] overflow-hidden bg-muted sm:mx-0">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
          {person.role}
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground">{person.name}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {person.bio}
        </p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border pt-28">
        <div className="mx-auto max-w-3xl px-4 pb-14 md:px-6 md:pb-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            About us
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Alliance for Understanding Recovery &amp; Awareness
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            AURA is a registered Ethiopian Civil Society Organization. We build
            safe spaces for mental health support, recovery, and open
            conversation across Ethiopian communities.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-14 md:grid-cols-2 md:px-6 md:py-16 lg:px-8">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Our mission
            </h2>
            <p className="mt-4 text-xl font-bold leading-snug text-foreground md:text-2xl">
              To create accessible, culturally attuned safe spaces for mental
              health support and stigma reduction by empowering youth,
              leveraging digital innovation, and driving multi-stakeholder
              action.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Our vision
            </h2>
            <p className="mt-4 text-xl font-bold leading-snug text-foreground md:text-2xl">
              A society where mental wellness is understood, valued, protected,
              and accessible to all—free from stigma and exclusion.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            Core values
          </h2>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <li
                  key={value.title}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:gap-10"
                >
                  <div className="flex items-center gap-2.5 sm:w-64 sm:shrink-0">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    <span className="font-medium text-foreground">
                      {value.title}
                    </span>
                  </div>
                  <span className="text-muted-foreground">{value.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-muted/25">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-start gap-3">
              <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
              <div>
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  Governance &amp; legal compliance
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Proclamation No. 1113/2011
                </p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              AURA (Alliance for Understanding Recovery &amp; Awareness) is
              officially registered as an Ethiopian Civil Society Organization
              (CSO) under Proclamation No. 1113/2011. We adhere to national
              governance regulations and international non-profit best practices
              to ensure full operational transparency and impact accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            Our leadership &amp; governance
          </h2>
          <div className="mt-10 space-y-12">
            <FeaturedProfile person={leadership[0]} />
            <div className="grid gap-12 md:grid-cols-2">
              {coFounders.map((person) => (
                <ProfileRow key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <h2 className="text-xl font-bold text-foreground md:text-2xl">
            The board
          </h2>
          <div className="mt-8">
            {board.map((person) => (
              <ProfileRow key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <div className="flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base text-foreground">
                Reach the team at{" "}
                <a
                  href={`mailto:${SITE_EMAILS.info}`}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {SITE_EMAILS.info}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-md px-6">
                <Link href="/get-involved">Get involved</Link>
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
