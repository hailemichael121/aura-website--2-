"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/language-context";

const navigation = [
  { nameKey: "home", href: "/" },
  { nameKey: "about", href: "/about" },
  { nameKey: "getHelp", href: "/get-help" },
  { nameKey: "community", href: "/community" },
  {
    nameKey: "programs",
    href: "/programs",
    children: [
      { label: "All programs", href: "/programs" },
      { label: "Register", href: "/programs/register" },
    ],
  },
  { nameKey: "contact", href: "/contact" },
  { nameKey: "getInvolved", href: "/get-involved" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLabel = (key: string) => t(`nav.${key}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        className={`mx-auto w-full transition-all duration-300 ${
          isScrolled
            ? "max-w-6xl rounded-full border border-border/80 bg-background/95 px-4 shadow-[0_14px_32px_-20px_rgba(17,24,39,0.75)] backdrop-blur"
            : "max-w-screen-2xl rounded-2xl border border-transparent bg-transparent px-2"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image src="/images/aura-logo.jpg" alt="AURA logo" width={40} height={40} className="rounded-xl object-cover" />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-base font-semibold text-foreground">AURA</p>
              <p className="truncate text-xs text-muted-foreground">Alliance for Understanding Recovery &amp; Awareness</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const label = getLabel(item.nameKey);

              if (item.children) {
                return (
                  <DropdownMenu key={item.nameKey}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm transition ${
                          active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {label}
                        <ChevronDown className="ml-2 h-3.5 w-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="rounded-xl">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href}>{child.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.nameKey}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="mt-8 space-y-2">
                  {navigation.map((item) => (
                    <Link key={item.nameKey} href={item.href} className="block rounded-lg px-4 py-3 text-foreground hover:bg-secondary">
                      {getLabel(item.nameKey)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
