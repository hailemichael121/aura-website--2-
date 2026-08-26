import { Mail, MapPin, MessageCircle, Send, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <p className="inline-flex rounded-md border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            Confidential support &bull; Community-first response
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Contact AURA
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
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                hello@auraethiopia.org
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-primary" />
                Telegram: @AURA_MHP
              </p>
              <p className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-primary" />
                +251 9XX XXX XXX
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Bole, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card">
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
