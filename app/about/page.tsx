import Image from "next/image";
import { Heart, MapPin, Target, Eye, Users2 } from "lucide-react";

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
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d9e6de] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About AURA</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#3d5649]">
            Alliance for Understanding Recovery & Awareness (AURA) is a mental health awareness and support organization based in Bole, Addis Ababa. We work to make care, conversation, and recovery support more accessible for Ethiopian communities.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">Our story</h2>
          <p className="mt-4 leading-relaxed text-[#425a4e]">
            AURA began with a simple truth: many people are silently carrying emotional pain while lacking safe places to talk. We started by creating small, trusted spaces for conversation and have continued growing through community partnerships, youth engagement, and referral support.
          </p>
          <p className="mt-4 leading-relaxed text-[#425a4e]">
            We are not here to replace professional services. We are here to bridge the gap between silence and support—so that people can be heard early, supported respectfully, and connected to the right help.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d5e4da] bg-white p-5">
              <Target className="h-6 w-6 text-[#1f6b48]" />
              <h3 className="mt-3 font-medium">Mission</h3>
              <p className="mt-2 text-sm text-[#4d6458]">Normalize mental health conversations and strengthen support pathways across Ethiopia.</p>
            </div>
            <div className="rounded-2xl border border-[#d5e4da] bg-white p-5">
              <Eye className="h-6 w-6 text-[#1f6b48]" />
              <h3 className="mt-3 font-medium">Vision</h3>
              <p className="mt-2 text-sm text-[#4d6458]">A society where seeking support is seen as strength and everyone can access care with dignity.</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[#d7e5dc] bg-white p-4">
          <Image
            src="/images/mental-health-hero.png"
            alt="AURA awareness event in Ethiopia"
            width={900}
            height={680}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="border-y border-[#d9e6de] bg-[#f2f7f3] py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">What guides our work</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-[#d0dfd5] bg-white p-6">
                <value.icon className="h-7 w-7 text-[#1f6b48]" />
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-[#4a6256]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
