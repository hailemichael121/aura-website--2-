import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { InstagramIcon, MailIcon, TelegramIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const communityLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs & Events" },
  { href: "/community", label: "Community Circles" },
  { href: "/forum", label: "Discussion Forum" },
  { href: "/stories", label: "Recovery Stories" },
  { href: "/confessions", label: "Anonymous Confessions" },
];

const resourceLinks = [
  { href: "/resources", label: "Resource Hub" },
  { href: "/get-help", label: "Get Help & Support" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog & Insights" },
  { href: "/auth/signin", label: "Member Sign In" },
];

const involvementLinks = [
  { href: "/get-involved", label: "Get Involved" },
  { href: "/join-us", label: "Volunteer Roles" },
  { href: "/get-involved", label: "Partnerships" },
  { href: "/get-involved", label: "Membership Info" },
  { href: "/contact", label: "Contact the Team" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a7a28]/30 bg-[#124d1a] text-white">
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
                className="h-9 rounded-full bg-white font-medium text-[#145c1e] hover:bg-white/90"
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
                href="mailto:contact@auramentalhealth.com"
                aria-label="Email AURA"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:w-auto hover:border-white/40 hover:bg-white/20 hover:px-3 hover:shadow-md"
              >
                <MailIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pl-2 group-hover:opacity-100">
                  Email AURA
                </span>
              </a>
              <a
                href="https://www.instagram.com/red8_fe"
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
                href="https://t.me/AURA_MHP"
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

          {/* Col 2: Community & Pages (Span 2) */}
          <div className="space-y-3 lg:col-span-2 lg:pl-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Community
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {communityLinks.map((link) => (
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

          {/* Col 3: Resources & Support (Span 2) */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {resourceLinks.map((link) => (
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

          {/* Col 4: Involvement & Contact Info (Span 4) */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Newsletter &amp; Contact
            </h4>
            <p className="text-xs text-white/80">
              Stay informed on upcoming dialogue circles, workshops, and community stories.
            </p>

            <form className="space-y-2" action="/contact">
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
                className="w-full rounded-md bg-white font-medium text-[#145c1e] hover:bg-white/90"
              >
                Subscribe
              </Button>
            </form>

            <ul className="space-y-2 pt-2 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-white/70" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-white/70" />
                <span>contact@auramentalhealth.com</span>
              </li>
              <li className="flex items-center gap-2 font-medium text-white">
                <PhoneCall className="h-4 w-4 shrink-0 text-[#a3e635]" />
                <span>Emergency Crisis Helpline: Call 952</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0b3311]/90">
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
