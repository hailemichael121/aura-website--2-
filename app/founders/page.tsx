import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  MessageCircle,
  Award,
  Heart,
  Users,
  Target,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Founders & Leadership Story",
  description:
    "Meet Dr. Rediet Feleke, Simret Gashaw, Meseret Gossa, and the visionary founding team behind AURA.",
  alternates: {
    canonical: "/founders",
  },
  openGraph: {
    title: "Founders & Leadership | AURA Ethiopia",
    description:
      "The founding story and community vision behind Alliance for Understanding Recovery & Awareness.",
    url: "https://www.auramentalhealth.org/founders",
  },
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Meet Our Founders
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Visionary leaders dedicated to transforming mental health care in
            Ethiopia through compassion, innovation, and community-driven
            solutions.
          </p>
        </div>
      </section>

      {/* Main Founder */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 md:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Photo and Basic Info */}
              <div className="text-center lg:text-left">
                <div className="relative mb-6 inline-block">
                  <div className="relative h-64 w-64 overflow-hidden rounded-xl border border-border shadow-md">
                    <Image
                      src="/images/team/member-5.webp"
                      alt="Dr. Rediet Feleke"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                    <Stethoscope className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <h2 className="text-3xl font-semibold">Dr. Rediet Feleke</h2>
                <p className="mt-1 text-lg font-medium text-primary">
                  Founder &amp; Executive Director
                </p>

                <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <Badge variant="secondary">Medical Student</Badge>
                  <Badge variant="outline">Asela University</Badge>
                  <Badge variant="outline">Mental Health Advocate</Badge>
                  <Badge variant="secondary">Highly Honored</Badge>
                </div>

                <div className="mt-4 flex gap-3 justify-center lg:justify-start">
                  <a
                    href="https://www.instagram.com/red8_fe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <Instagram className="mr-2 h-4 w-4" />
                      @red8_fe
                    </Button>
                  </a>
                  <a
                    href="https://t.me/red8_fe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      @red8_fe
                    </Button>
                  </a>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 flex items-center text-xl font-semibold">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Biography
                  </h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Dr. Rediet Feleke is a passionate medical student at Asela
                      University with an unwavering commitment to bridging mental
                      health gaps for underserved communities across Ethiopia.
                    </p>
                    <p>
                      As a highly honored student, Rediet has consistently
                      demonstrated academic excellence while maintaining a deep
                      connection to community service. Her vision for AURA emerged
                      from her belief that mental health care should be accessible,
                      culturally sensitive, and community-driven.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 flex items-center text-xl font-semibold">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Personal Mission
                  </h3>
                  <blockquote className="rounded-md border-l-2 border-primary bg-muted/50 pl-4 py-3 text-muted-foreground italic">
                    &ldquo;I believe that every person deserves access to mental
                    health support that honors their dignity, respects their
                    culture, and empowers their journey toward healing.&rdquo;
                  </blockquote>
                </div>

                <div>
                  <h3 className="mb-3 flex items-center text-xl font-semibold">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Academic excellence — Highly honored medical student at Asela University</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Community leadership — Founded AURA to address mental health gaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Advocacy impact — Recognized for mental health awareness initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Innovation — Pioneering culturally-sensitive mental health approaches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">
            Co-Founders &amp; Core Team
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            The dedicated individuals who help bring AURA&apos;s vision to life
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Simret */}
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border border-border shadow-sm">
                <Image
                  src="/images/team/member-1.webp"
                  alt="Simret Gashaw"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Simret Gashaw</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Co-Founder
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-xs">Community Engagement</Badge>
                <Badge variant="outline" className="text-xs">Partnerships</Badge>
                <Badge variant="outline" className="text-xs">Cultural Liaison</Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Simret leads community engagement initiatives, building bridges
                between AURA and Ethiopian communities. Her deep understanding of
                local cultures and languages makes her instrumental in creating
                culturally appropriate mental health programs.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Based in Addis Ababa
                </div>
              </div>
              <div className="mt-3">
                <Button size="sm" variant="outline">
                  <MessageCircle className="mr-2 h-3.5 w-3.5" />
                  @AURA_MHP
                </Button>
              </div>
            </div>

            {/* Messeret */}
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border border-border shadow-sm">
                <Image
                  src="/images/team/member-7.webp"
                  alt="Meseret Gossa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Meseret Gossa</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Co-Founder
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-xs">Program Design</Badge>
                <Badge variant="outline" className="text-xs">Research</Badge>
                <Badge variant="outline" className="text-xs">Innovation</Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Messeret designs and implements innovative mental health programs
                tailored to Ethiopian contexts. Her expertise in program
                development ensures that AURA&apos;s initiatives are both
                effective and culturally relevant.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Evidence-Based Practice Advocate
                </div>
              </div>
              <div className="mt-3">
                <Button size="sm" variant="outline">
                  <MessageCircle className="mr-2 h-3.5 w-3.5" />
                  @mesigosa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">
            The AURA Story
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            How a vision became a movement
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold">The Beginning (2024)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AURA was born from Dr. Rediet&apos;s observations during her
                  medical training at Asela University. She witnessed the
                  profound gap between mental health needs and available
                  resources in Ethiopian communities.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold">Building the Team</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recognizing that sustainable change requires diverse expertise,
                  Dr. Rediet brought together passionate individuals like Simret
                  and Messeret, each contributing unique skills and perspectives.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center mb-3">
                  <Heart className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold">The Mission Evolves</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  What started as a local initiative has grown into a
                  comprehensive approach to mental health, combining clinical
                  expertise with community wisdom and cultural sensitivity.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/aura-stationery.webp"
                alt="AURA Founding Documents"
                width={600}
                height={400}
                className="rounded-lg border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold">Connect with Our Founders</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Have questions about AURA&apos;s mission? Want to collaborate? Our
            founders are always open to meaningful conversations about mental
            health advocacy.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <Mail className="mx-auto h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium">Email Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                contact@auramentalhealth.com
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <MessageCircle className="mx-auto h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium">Telegram</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                @AURA_MHP
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <MapPin className="mx-auto h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bole, Addis Ababa
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <Button>Contact the Team</Button>
            </Link>
            <Link href="/join-us">
              <Button variant="outline">Join Our Mission</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
