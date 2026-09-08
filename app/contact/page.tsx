import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall, ExternalLink, MessageSquare, ShieldAlert } from "lucide-react";
import { TelegramIcon, LinkedInIcon, InstagramIcon } from "@/components/brand-icons";
import ContactForm from "@/components/contact-form";
import { SITE_EMAILS } from "@/lib/site-contact";
import { SITE_SOCIAL } from "@/lib/site-social";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with AURA",
  description:
    "Get in touch with AURA in Addis Ababa, Ethiopia. Connect via our online contact form, official email, or Telegram (@AURA_MHP) for community inquiries, partnerships, or volunteer support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact AURA — Ethiopian Mental Health Initiative",
    description:
      "Reach out for community support, partnerships, speaking requests, or volunteer inquiries.",
    url: "https://www.auramentalhealth.org/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AURA",
    url: "https://www.auramentalhealth.org/contact",
    description:
      "Get in touch with AURA in Addis Ababa, Ethiopia for mental health peer support, partnerships, and community awareness.",
    mainEntity: {
      "@type": "Organization",
      name: "AURA — Alliance for Understanding Recovery & Awareness",
      email: SITE_EMAILS.info,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressRegion: "Bole Sub-City",
        addressCountry: "ET",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background pt-24 text-foreground">
      <JsonLd data={contactSchema} />

      {/* Header Banner */}
      <section className="border-b border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Community Support &bull; Not a Crisis Clinic</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have questions about our peer support circles, educational campaigns, or want to partner with us? We are here to listen and connect.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-6 lg:px-8">
        {/* Left Column: Contact Form */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="mb-6 border-b border-border pb-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Send us a Message
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Please fill out the form below. Required fields are marked with an asterisk (*).
            </p>
          </div>

          <ContactForm accessKey="3d128a47-d696-46ef-8dc1-8094ee35f175" />
        </div>

        {/* Right Column: Contact Details, Socials, Crisis Disclaimer, Map */}
        <div className="space-y-6">
          {/* Direct Channels Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">
              Direct Channels
            </h2>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Bole Sub-City, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">General Inquiries</p>
                  <a
                    href={`mailto:${SITE_EMAILS.info}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_EMAILS.info}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Support &amp; Community Care</p>
                  <a
                    href={`mailto:${SITE_EMAILS.support}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_EMAILS.support}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TelegramIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Official Telegram</p>
                  <a
                    href={SITE_SOCIAL.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    @AURA_MHP
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow AURA
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={SITE_SOCIAL.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  aria-label="Telegram"
                >
                  <TelegramIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE_SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE_SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Crisis & Safety Notice */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive">
              <ShieldAlert className="h-5 w-5" />
              <h3 className="font-semibold">Safety &amp; Crisis Disclaimer</h3>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              AURA provides community awareness, peer support circles, and educational resources. We are not an emergency medical service or a psychiatric crisis clinic. If you or someone you know is experiencing an immediate life-threatening crisis or severe emotional distress, please seek emergency help immediately.
            </p>
            <div className="mt-4 rounded-xl border border-destructive/20 bg-background/60 p-3 text-xs">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <PhoneCall className="h-4 w-4 text-destructive" />
                <span>National Emergency Crisis Helpline: Call <strong>952</strong> (Ethiopia)</span>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="AURA Location - Bole Sub-City, Addis Ababa"
              src="https://www.google.com/maps?q=Bole%20Sub-City%2C%20Addis%20Ababa&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
