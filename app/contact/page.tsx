import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { TelegramIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_EMAILS } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with AURA",
  description:
    "Get in touch with AURA in Addis Ababa, Ethiopia. Connect via email, Telegram (@AURA_MHP), or send an inquiry for support, partnerships, or volunteering.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AURA — Ethiopian Mental Health Initiative",
    description: "Reach out for support, partnerships, speaking requests, or volunteer questions.",
    url: "https://www.auramentalhealth.org/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <p className="inline-flex rounded-md border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            Community support &bull; Not a crisis clinic
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Reach out for support, partnerships, speaking requests, or volunteer
            questions. We reply with care, privacy, and clear next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-medium">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fields marked with * are required.
          </p>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                aria-label="First name"
                placeholder="First name *"
                className="border-border bg-background"
              />
              <Input
                aria-label="Last name"
                placeholder="Last name *"
                className="border-border bg-background"
              />
            </div>
            <Input
              type="email"
              aria-label="Email"
              placeholder="Email address *"
              className="border-border bg-background"
            />
            <Input
              aria-label="Subject"
              placeholder="Subject"
              className="border-border bg-background"
            />
            <Textarea
              aria-label="Message"
              placeholder="How can we support you?"
              className="min-h-36 border-border bg-background"
            />
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Send message
            </Button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-6 md:p-7">
            <h2 className="text-2xl font-medium">Contact information</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Bole Sub-City, Addis Ababa, Ethiopia
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${SITE_EMAILS.info}`} className="hover:text-foreground">
                  {SITE_EMAILS.info}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${SITE_EMAILS.support}`} className="hover:text-foreground">
                  {SITE_EMAILS.support}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <TelegramIcon className="h-4 w-4 text-primary" />
                Telegram: @AURA_MHP
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-destructive/30 bg-muted/40 p-6 md:p-7">
            <h2 className="flex items-center gap-2 text-xl font-medium">
              <PhoneCall className="h-5 w-5 text-primary" />
              Safety &amp; crisis disclaimer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AURA provides community awareness, peer support circles, and
              educational resources. We are not an emergency medical service or
              a psychiatric crisis clinic. If you or someone you know is
              experiencing an immediate life-threatening crisis or severe
              emotional distress, contact national emergency services or visit
              the nearest hospital psychiatric department immediately.
            </p>
            <p className="mt-4 text-sm font-medium text-foreground">
              National Emergency Crisis Helpline: Call 952
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              title="Map of Bole Sub-City, Addis Ababa"
              src="https://www.google.com/maps?q=Bole%20Sub-City%2C%20Addis%20Ababa&output=embed"
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
