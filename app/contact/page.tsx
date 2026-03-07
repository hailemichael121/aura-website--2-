import { Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(60,176,67,0.18),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.16),transparent_40%)] py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-5xl">Contact AURA</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Reach out for support, partnerships, speaking requests, or volunteer opportunities. We reply with care and confidentiality.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-[1.1fr,0.9fr] md:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">We usually respond within 24–48 hours.</p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="full-name" className="text-sm font-medium">Full name</label>
              <Input id="full-name" name="fullName" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email address</label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" name="subject" placeholder="How can we help?" required />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="Tell us what you need support with..." className="min-h-36" required />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="h-11 bg-[#3CB043] text-white hover:bg-[#2f9238]">
                <Send className="mr-2 h-4 w-4" />
                Send message
              </Button>
            </div>
          </form>
        </div>

        <div className="space-y-4">
          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[#0096FF]/15 p-2 text-[#0096FF]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">contact@auraethiopia.org</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[#3CB043]/15 p-2 text-[#3CB043]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="mt-1 text-sm text-muted-foreground">+251 91 000 0000</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-foreground/10 p-2 text-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Office</h3>
                <p className="mt-1 text-sm text-muted-foreground">Bole, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-foreground/10 p-2 text-foreground">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Support hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">Monday - Friday · 9:00 AM - 5:00 PM (EAT)</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[#0096FF]/15 p-2 text-[#0096FF]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Telegram</h3>
                <p className="mt-1 text-sm text-muted-foreground">@aura_support</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
