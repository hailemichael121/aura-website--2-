"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useBrandDock } from "@/hooks/use-brand-dock";
import { AuraHeroLockup } from "@/components/aura-hero-lockup";
import { TelegramIcon } from "@/components/brand-icons";
import { cn } from "@/lib/utils";

type NavChild = { name: string; href: string; description: string };

type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Program and Event",
    href: "/programs",
    children: [
      {
        name: "All programs",
        href: "/programs",
        description: "Awareness campaigns, workshops, and recovery groups.",
      },
      {
        name: "Weekly Family Time",
        href: "/programs",
        description: "Open family conversations around wellness at home.",
      },
      {
        name: "Virtual trainings",
        href: "/programs",
        description: "Live online sessions you can join from anywhere.",
      },
      {
        name: "In-person trainings",
        href: "/programs",
        description: "Facilitated sessions in Addis Ababa communities.",
      },
      {
        name: "Events",
        href: "/programs",
        description: "Dialogues, forums, and community gatherings.",
      },
    ],
  },
  {
    name: "Community",
    href: "/community",
    children: [
      {
        name: "Community overview",
        href: "/community",
        description: "Support circles, discussion spaces, and safety.",
      },
      {
        name: "Forum",
        href: "/forum",
        description: "Ask questions and listen with others.",
      },
      {
        name: "Stories",
        href: "/stories",
        description: "Recovery journeys shared with care.",
      },
      {
        name: "Confessions",
        href: "/confessions",
        description: "Anonymous sharing in a protected space.",
      },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      {
        name: "Get involved",
        href: "/get-involved",
        description: "Volunteer, partner, donate, or attend.",
      },
      {
        name: "Join us",
        href: "/join-us",
        description: "Roles, partnerships, and onboarding.",
      },
      {
        name: "Membership",
        href: "/get-involved",
        description: "Application is closed for now.",
      },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const { progress, reveal, fly, isHome } = useBrandDock();
  const overHero = isHome && progress < 0.06;

  const linkBase =
    "inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-sm transition";

  return (
    <>
      {isHome && fly.pinned ? (
        <div
          className="pointer-events-none fixed z-40 flex flex-col items-center gap-5 text-white will-change-transform sm:flex-row sm:gap-6"
          style={{
            left: fly.x,
            top: fly.y,
            transform: `translate(-50%, -50%) scale(${fly.scale})`,
            opacity: 1 - reveal,
          }}
          aria-hidden
        >
          <AuraHeroLockup />
        </div>
      ) : null}
    <nav className="fixed top-0 z-50 w-full">
      <div
        id="site-nav-bar"
        className={cn(
          "border-b transition-colors duration-300",
          overHero
            ? "border-transparent bg-transparent"
            : "border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link
            href="/"
            id="nav-brand-slot"
            className="flex min-h-9 min-w-[9.5rem] shrink-0 items-center gap-3"
            style={{
              opacity: isHome ? reveal : 1,
              pointerEvents: !isHome || reveal > 0.85 ? "auto" : "none",
            }}
            aria-hidden={isHome && reveal < 0.85}
            tabIndex={isHome && reveal < 0.85 ? -1 : undefined}
          >
            <Image
              src="/images/aura-logo.webp"
              alt="AURA logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-base font-semibold leading-none text-foreground">
                AURA
              </p>
              <p className="mt-0.5 hidden text-[11px] text-[#678ee6] xl:block">
                Alliance for Understanding Recovery &amp; Awareness
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              const pill = cn(
                linkBase,
                overHero
                  ? active
                    ? "bg-white px-4 font-medium text-[#369319] hover:bg-white/90"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                  : active
                    ? "font-semibold text-primary"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
              );

              if (!item.children?.length) {
                return (
                  <Link key={item.name} href={item.href} className={pill}>
                    {item.name}
                  </Link>
                );
              }

              return (
                <div key={item.name} className="group relative">
                  <Link href={item.href} className={pill}>
                    {item.name}
                    <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-80" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      className={cn(
                        "grid grid-cols-2 gap-2 rounded-xl border p-4",
                        overHero
                          ? "border-white/20 bg-white text-foreground"
                          : "border-border bg-popover",
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.name}
                          href={child.href}
                          className="rounded-xl px-3 py-3 text-left hover:bg-muted"
                        >
                          <p className="text-sm font-medium text-foreground">
                            {child.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {child.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={cn(
              "hidden items-center gap-1 xl:flex",
              overHero &&
                "[&_button]:text-white [&_button]:hover:bg-white/15",
            )}
          >
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full",
                overHero
                  ? "text-white hover:bg-white/15"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <div
            className={cn(
              "flex items-center gap-1 xl:hidden",
              overHero &&
                "[&_button]:text-white [&_button]:hover:bg-white/15",
            )}
          >
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full",
                overHero
                  ? "text-white hover:bg-white/15"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={overHero ? "text-white hover:bg-white/15" : ""}
                >
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
                          key={child.href + child.name}
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
    </>
  );
}
