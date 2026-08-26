"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Get Help", href: "/get-help" },
  {
    name: "Community",
    href: "/community",
    children: [
      { name: "Forum", href: "/forum" },
      { name: "Stories", href: "/stories" },
      { name: "Confessions", href: "/confessions" },
    ],
  },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Join Us", href: "/join-us" },
      { name: "Resources", href: "/resources" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div
        className={`border-b transition-all duration-200 ${
          isScrolled
            ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/aura-logo.jpg"
              alt="AURA logo"
              width={36}
              height={36}
              className="rounded object-cover"
            />
            <div className="min-w-0">
              <p className="text-base font-semibold leading-none text-foreground">
                AURA
              </p>
              <p className="mt-0.5 hidden text-xs text-muted-foreground xl:block">
                Alliance for Understanding Recovery &amp; Awareness
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (!item.children?.length) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm transition ${
                      active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm transition ${
                        active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    <DropdownMenuItem asChild>
                      <Link href={item.href}>{item.name} overview</Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
          </div>

          <div className="hidden items-center gap-1 xl:flex">
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Send className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Send className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="mt-10 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2.5 text-foreground hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="ml-3 block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
