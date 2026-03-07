import Link from "next/link";
import { PhoneCall, MessageSquareHeart, UserRoundCheck, BookText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const immediate = [
  { label: "Emergency", contact: "Call local emergency services", detail: "If there is immediate danger to life or safety, seek emergency care first." },
  { label: "AURA Support Line", contact: "+251 91 112 3456", detail: "Daily listening support and guidance to next steps." },
  { label: "Telegram", contact: "@AURA_MHP", detail: "Text-based support for those who prefer writing." },
];

export default function GetHelpPage() {
  return (
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d8e5dd] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Get Help</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f584b]">
            You are not alone. Whether you need support right now or you are looking for long-term guidance, AURA is here to listen and help you find the right path.
          </p>
        </div>
      </section>

      <section id="immediate" className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-[#1f6b48]" />
          <h2 className="text-2xl font-semibold md:text-3xl">If you need support right now</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {immediate.map((item) => (
            <article key={item.label} className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
              <h3 className="text-lg font-medium">{item.label}</h3>
              <p className="mt-2 font-semibold text-[#1f6b48]">{item.contact}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4c6458]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9e6de] bg-[#f2f7f3] py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <article className="rounded-2xl border border-[#d0dfd5] bg-white p-6">
            <MessageSquareHeart className="h-7 w-7 text-[#1f6b48]" />
            <h3 className="mt-4 text-2xl font-medium">Peer support</h3>
            <p className="mt-3 text-[#4b6257]">Join calm support circles where trained peer listeners offer understanding, privacy, and shared lived experience.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#4f665b]">
              <li>Weekly small-group conversations</li>
              <li>One-on-one check-ins by appointment</li>
              <li>Student-friendly and youth-friendly spaces</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[#d0dfd5] bg-white p-6">
            <UserRoundCheck className="h-7 w-7 text-[#1f6b48]" />
            <h3 className="mt-4 text-2xl font-medium">Professional help</h3>
            <p className="mt-3 text-[#4b6257]">If you need clinical care, AURA can connect you to trusted counselors, psychologists, and partner clinics in Addis Ababa.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#4f665b]">
              <li>Referral guidance based on your needs</li>
              <li>Low-cost and student-aware options when available</li>
              <li>Support for first-time therapy access</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <article className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
          <BookText className="h-7 w-7 text-[#1f6b48]" />
          <h3 className="mt-4 text-2xl font-medium">Resources</h3>
          <p className="mt-3 text-[#496156]">Explore practical tools for stress regulation, grounding, emotional communication, and family conversations.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-[#1f6b48] hover:bg-[#165336]"><Link href="/resources">View resource library</Link></Button>
            <Button asChild variant="outline" className="border-[#1f6b48] text-[#1f6b48] hover:bg-[#edf5f0]"><Link href="/contact"><PhoneCall className="mr-2 h-4 w-4" />Talk to our team</Link></Button>
          </div>
        </article>
      </section>
    </div>
  );
}
