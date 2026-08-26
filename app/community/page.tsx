import Link from "next/link";
import { Users, MessageCircle, HandHeart, Shield, ArrowRight } from "lucide-react";

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
          <h2 className="text-xl font-medium">Community safety commitments</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              Confidentiality and respectful listening are expected in every
              gathering.
            </li>
            <li>
              No shaming, no hate speech, no pressure to share personal details.
            </li>
            <li>
              When urgent risks appear, we prioritize immediate professional or
              emergency referrals.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/forum"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit discussion forum{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center text-primary hover:underline"
            >
              Become a volunteer{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
