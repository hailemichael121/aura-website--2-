import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Mail,
  PhoneCall,
} from "lucide-react";
import { InstagramIcon, LinkedInIcon, MailIcon, TelegramIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_EMAILS } from "@/lib/site-contact";
import { SITE_SOCIAL } from "@/lib/site-social";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/get-involved#membership", label: "Become a Member" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved", label: "Fund Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-primary text-white">
      {/* Main Multi-Column Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Standing (Span 4) */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" scroll={true} className="inline-flex items-center gap-3">
              <Image
                src="/images/aura-logo.webp"
                alt="AURA Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30"
              />
              <div>
                <p className="text-xl font-bold tracking-tight text-white">AURA</p>
                <p className="text-xs text-white/80">
                  Alliance for Understanding Recovery &amp; Awareness
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/80">
              Registered Ethiopian Civil Society Organization (CSO) under{" "}
              <span className="font-semibold text-white">Proclamation No. 1113/2011</span>. We create safe spaces for open conversation, stigma reduction, and accessible mental health support.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full bg-pearl-white font-medium text-primary hover:bg-pearl-white/90"
              >
                <Link href="/contact" scroll={true}>
                  <Mail className="mr-1.5 h-3.5 w-3.5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-9 rounded-full border-white/30 bg-white/5 font-medium text-white hover:bg-white/15 hover:text-white"
              >
                <Link href="/get-help" scroll={true}>
                  <HeartHandshake className="mr-1.5 h-3.5 w-3.5" />
                  Get Help
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`mailto:${SITE_EMAILS.info}`}
                aria-label="Email AURA"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:w-auto hover:border-white/40 hover:bg-white/20 hover:px-3 hover:shadow-md"
              >
                <MailIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pl-2 group-hover:opacity-100">
                  Email AURA
                </span>
              </a>
              <a
                href={SITE_SOCIAL.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:w-auto hover:border-white/40 hover:bg-white/20 hover:px-3 hover:shadow-md"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pl-2 group-hover:opacity-100">
                  AURA on LinkedIn
                </span>
              </a>
              <a
                href={SITE_SOCIAL.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:w-auto hover:border-white/40 hover:bg-white/20 hover:px-3 hover:shadow-md"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pl-2 group-hover:opacity-100">
                  AURA on Instagram
                </span>
              </a>
              <a
                href={SITE_SOCIAL.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram Community"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:w-auto hover:border-white/40 hover:bg-white/20 hover:px-3 hover:shadow-md"
              >
                <TelegramIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pl-2 group-hover:opacity-100">
                  AURA on Telegram
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (per architecture doc) */}
          <div className="space-y-3 lg:col-span-2 lg:pl-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    scroll={true}
                    className="inline-block transition hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-white/70" />
                <a
                  href={`mailto:${SITE_EMAILS.info}`}
                  className="hover:text-white"
                >
                  {SITE_EMAILS.info}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInIcon className="h-4 w-4 shrink-0 text-white/70" />
                <a
                  href={SITE_SOCIAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  AURA on LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <TelegramIcon className="h-4 w-4 shrink-0 text-white/70" />
                <a
                  href={SITE_SOCIAL.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  @AURA_MHP
                </a>
              </li>
              <li className="flex items-center gap-2 font-medium text-white">
                <PhoneCall className="h-4 w-4 shrink-0 text-pearl-white" />
                <span>Emergency Crisis Helpline: Call 952</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Newsletter
            </h4>
            <p className="text-xs text-white/80">
              Subscribe to our newsletter. We value your privacy and will never
              send irrelevant information.
            </p>

            <form className="space-y-2" action={`mailto:${SITE_EMAILS.newsletter}`} method="post" encType="text/plain">
              <Input
                type="email"
                name="email"
                required
                aria-label="Email"
                placeholder="your.email@example.com"
                className="h-10 rounded-md border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50 focus:border-white focus:bg-white/15"
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="firstName"
                  aria-label="First name"
                  placeholder="First name"
                  className="h-9 rounded-md border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
                />
                <Input
                  name="lastName"
                  aria-label="Last name"
                  placeholder="Last name"
                  className="h-9 rounded-md border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-md bg-pearl-white font-medium text-primary hover:bg-pearl-white/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Alliance for Understanding Recovery &amp; Awareness (AURA). All Rights Reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
}

export { Footer };
