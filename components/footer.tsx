import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">AURA</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Alliance for Understanding Recovery &amp; Awareness
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            AURA is a mental health awareness and support organization in Addis
            Ababa, creating safe spaces for conversation, healing, and community
            care.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Team credits: Rediet Feleke, Simret G. Dessie, Messeret Gossa.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Quick links
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/get-help" className="hover:text-foreground">
                Get Help
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-foreground">
                Community
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-foreground">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-foreground">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h4>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              Bole, Addis Ababa, Ethiopia
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              hello@auraethiopia.org
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4" />
              @AURA_MHP
            </li>
          </ul>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a
              href="https://www.instagram.com/red8_fe"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AURA — Alliance for Understanding
            Recovery &amp; Awareness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
