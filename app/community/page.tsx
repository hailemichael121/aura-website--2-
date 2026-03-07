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
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d8e5dd] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Community</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3e564a]">
            AURA community spaces are built for listening, dignity, and care. We welcome open conversation while protecting privacy and emotional safety.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-[#d3e1d8] bg-white p-6">
              <section.icon className="h-8 w-8 text-[#1f6b48]" />
              <h2 className="mt-4 text-2xl font-medium">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-[#4b6257]">{section.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#cdded3] bg-[#f2f7f3] p-6 md:p-8">
          <h2 className="text-2xl font-medium">Community safety commitments</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4a6156]">
            <li>Confidentiality and respectful listening are expected in every gathering.</li>
            <li>No shaming, no hate speech, no pressure to share personal details.</li>
            <li>When urgent risks appear, we prioritize immediate professional or emergency referrals.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/forum" className="inline-flex items-center text-[#1f6b48] underline-offset-4 hover:underline">Visit discussion forum <ArrowRight className="ml-1 h-4 w-4" /></Link>
            <Link href="/get-involved" className="inline-flex items-center text-[#1f6b48] underline-offset-4 hover:underline">Become a volunteer <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
