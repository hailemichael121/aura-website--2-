import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#d2e1d7] bg-[#0f241a] text-[#e8f1ec]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">AURA</h3>
          <p className="mt-2 text-sm text-[#c4d5cb]">Alliance for Understanding Recovery & Awareness</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d0dfd7]">
            AURA is a mental health awareness and support organization in Addis Ababa, creating safe spaces for conversation, healing, and community care.
          </p>
          <p className="mt-4 text-xs text-[#aac0b5]">Team credits: Rediet Feleke, Simret G. Dessie, Messeret Gossa.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d7e5dd]">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#c4d5cb]">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/get-help" className="hover:text-white">Get Help</Link></li>
            <li><Link href="/community" className="hover:text-white">Community</Link></li>
            <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link href="/get-involved" className="hover:text-white">Get Involved</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d7e5dd]">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-[#c4d5cb]">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />Bole, Addis Ababa, Ethiopia</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" />hello@auraethiopia.org</li>
            <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4" />@AURA_MHP</li>
          </ul>
          <div className="mt-4 flex gap-3 text-[#d5e4db]">
            <a href="https://www.instagram.com/red8_fe" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="https://t.me/AURA_MHP" target="_blank" rel="noreferrer" aria-label="Telegram"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
