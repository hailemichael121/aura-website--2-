import Image from "next/image";
import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";
import { InstagramIcon, MailIcon, TelegramIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/get-involved#membership", label: "Become a Member" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved#donate", label: "Fund Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-[#145c1e] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/aura-logo.webp"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-white/40"
            />
            <div>
              <p className="text-lg font-semibold leading-none">AURA</p>
              <p className="mt-1 text-xs text-white/80">
                Alliance for Understanding Recovery &amp; Awareness
              </p>
            </div>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Registered Ethiopian CSO under Proclamation No. 1113/2011. We create
            safe spaces for conversation, healing, and community care.
          </p>
          <Button
            asChild
            className="mt-5 bg-white text-[#369319] hover:bg-white/90"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          <div className="mt-5 flex gap-2">
            <a
              href="mailto:contact@auramentalhealth.com"
              aria-label="Email AURA"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/red8_fe"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
              Bole Sub-City, Addis Ababa
            </li>
            <li className="flex items-start gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
              contact@auramentalhealth.com
            </li>
            <li className="flex items-start gap-2">
              <TelegramIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
              @AURA_MHP
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
              Crisis: Call 952
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Newsletter
          </h4>
          <p className="mt-4 text-sm text-white/80">
            Subscribe for programs, dialogues, and community updates.
          </p>
          <form className="mt-4 space-y-2" action="/contact">
            <Input
              type="email"
              name="email"
              required
              aria-label="Email"
              placeholder="your.email@example.com"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="firstName"
                aria-label="First name"
                placeholder="First name"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Input
                name="lastName"
                aria-label="Last name"
                placeholder="Last name"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-[#369319] hover:bg-white/90"
            >
              Submit
            </Button>
          </form>
          <p className="mt-2 text-xs text-white/60">
            We value your privacy and will never send irrelevant information.
          </p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/65 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Alliance for Understanding Recovery
            &amp; Awareness (AURA). All Rights Reserved.
          </p>
          <p>AURA is not a crisis clinic. In an emergency, call 952.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
