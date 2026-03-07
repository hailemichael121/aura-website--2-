import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-[#f8fbf9] pt-24 text-[#111827]">
      <section className="border-b border-[#d8e5dd] bg-[linear-gradient(180deg,#f8fbf9_0%,#eef5f1_100%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Contact AURA</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#3f584b]">
            Reach out for support, partnerships, speaking requests, or volunteer questions. We reply with care and confidentiality.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
          <h2 className="text-2xl font-medium">Send a message</h2>
          <form className="mt-5 space-y-4">
            <Input aria-label="Full name" placeholder="Full name" className="border-[#c8d9ce]" />
            <Input type="email" aria-label="Email" placeholder="Email address" className="border-[#c8d9ce]" />
            <Input aria-label="Subject" placeholder="Subject" className="border-[#c8d9ce]" />
            <Textarea aria-label="Message" placeholder="How can we support you?" className="min-h-32 border-[#c8d9ce]" />
            <Button type="submit" className="bg-[#1f6b48] hover:bg-[#175338]"><Send className="mr-2 h-4 w-4" />Send message</Button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-[#d2e1d7] bg-white p-6">
            <h2 className="text-2xl font-medium">Contact information</h2>
            <div className="mt-4 space-y-3 text-[#4a6256]">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#1f6b48]" />hello@auraethiopia.org</p>
              <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#1f6b48]" />Telegram: @AURA_MHP</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#1f6b48]" />Bole, Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d2e1d7] bg-white">
            <iframe
              title="Map of Bole, Addis Ababa"
              src="https://www.google.com/maps?q=Bole%2C+Addis+Ababa&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
