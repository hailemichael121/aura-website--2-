import type { Metadata } from "next";
import Link from "next/link";
import { Users, MessageCircle, HandHeart, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Community & Peer Support Circles",
  description:
    "Join AURA community spaces built for listening, dignity, and care. Participate in support circles, discussion forums, and wellness gatherings across Ethiopia.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "AURA Community — Support Circles & Discussion",
    description: "Safe spaces built for listening, dignity, and care in Ethiopian communities.",
    url: "https://www.auramentalhealth.org/community",
  },
};

const sections = [
  {
    title: "Support circles",
    text: "Small, facilitated circles for people navigating anxiety, burnout, grief, and recovery.",
    icon: Users,
  },
  {
    title: "Discussion spaces",
    text: "Respectful conversations where members can ask questions, listen, and share experiences.",
    icon: MessageCircle,
  },
  {
    title: "Shared experiences",
    text: "Story sessions that remind people they are not alone and healing can happen in community.",
    icon: HandHeart,
  },
  {
    title: "Volunteer opportunities",
    text: "Contribute through community outreach, event support, translation, and peer care training.",
    icon: Shield,
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Community</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            AURA community spaces are built for listening, dignity, and care. We
            welcome open conversation while protecting privacy and emotional
            safety.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <section.icon className="h-7 w-7 text-primary" />
              <h2 className="mt-4 text-xl font-medium">{section.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6 md:p-8">
          <h2 className="text-xl font-medium">Safety &amp; Code of Conduct</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Strict confidentiality:</span>{" "}
              What is shared in AURA spaces stays in AURA spaces.
            </li>
            <li>
              <span className="font-medium text-foreground">Non-judgmental respect:</span>{" "}
              Valuing every individual&apos;s unique story without bias.
            </li>
            <li>
              <span className="font-medium text-foreground">Empathetic listening:</span>{" "}
              Focus on active support rather than unsolicited advice.
            </li>
            <li>
              <span className="font-medium text-foreground">Safety first:</span>{" "}
              Immediate warm handoffs for acute clinical needs.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/auth/signin"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Sign up
            </Link>
            <Link
              href="/forum"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              Visit discussion forum{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
