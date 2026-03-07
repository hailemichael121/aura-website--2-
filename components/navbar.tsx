"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Get Help", href: "/get-help" },
  { name: "Community", href: "/community" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition ${isScrolled ? "border-[#d5e3db] bg-[#f8fbf9]/95 backdrop-blur" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/aura-logo.jpg" alt="AURA logo" width={42} height={42} className="rounded-md object-cover" />
          <div>
            <p className="text-lg font-semibold text-[#113523]">AURA</p>
            <p className="text-xs text-[#4d6458]">Alliance for Understanding Recovery & Awareness</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${active ? "bg-[#1f6b48] text-white" : "text-[#1d3f2d] hover:bg-[#eaf3ee]"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-[#1f6b48]">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#f8fbf9]">
            <div className="mt-8 space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="block rounded-lg px-4 py-3 text-[#214733] hover:bg-[#eaf3ee]">
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
