import Link from "next/link";
import { HandHeart, Users, Megaphone, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ways = [
  {
    title: "Volunteer as a peer supporter",
    description: "Receive training and support participants through listening circles and outreach sessions.",
    icon: HandHeart,
  },
  {
    title: "Host a community conversation",
    description: "Partner with AURA to bring safe, guided dialogue to schools, campuses, and neighborhoods.",
    icon: Users,
  },
  {
    title: "Support awareness campaigns",
    description: "Help spread clear and respectful mental wellness messages in digital and in-person spaces.",
    icon: Megaphone,
  },
  {
    title: "Partner as an institution",
    description: "Collaborate with us as a school, clinic, NGO, or workplace to strengthen referral pathways.",
    icon: Landmark,
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d8e5dd] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Get Involved</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f584b]">
            Healing grows in community. If you believe mental wellness should be accessible and stigma-free, there is a place for you in AURA.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ways.map((way) => (
            <article key={way.title} className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
              <way.icon className="h-8 w-8 text-[#1f6b48]" />
              <h2 className="mt-4 text-2xl font-medium">{way.title}</h2>
              <p className="mt-3 text-[#4c6458]">{way.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#cfe0d6] bg-[#f2f7f3] p-7">
          <h2 className="text-2xl font-medium">Start with one step</h2>
          <p className="mt-3 text-[#496156]">Tell us how you would like to contribute. Our team will guide you through orientation and next actions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-[#1f6b48] hover:bg-[#165336]"><Link href="/contact">Contact the team</Link></Button>
            <Link href="/community" className="inline-flex items-center text-[#1f6b48] underline-offset-4 hover:underline">Learn about community spaces <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
