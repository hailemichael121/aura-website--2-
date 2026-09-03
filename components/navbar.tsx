"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
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
        href: "/programs#family-time",
        description: "Open family conversations around wellness at home.",
      },
      {
        name: "Virtual trainings",
        href: "/programs#virtual-trainings",
        description: "Live online sessions you can join from anywhere.",
      },
      {
        name: "Campaign",
        href: "/campaign",
        description: "Current awareness drives and public initiatives.",
      },
      {
        name: "In-person trainings",
        href: "/programs#in-person-trainings",
        description: "Facilitated sessions in Ethiopian communities.",
      },
      {
        name: "Events",
        href: "/programs#events",
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
  { name: "Resource", href: "/resources" },
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

function NavDropdown({
  item,
  overHero,
  linkClassName,
}: {
  item: NavItem & { children: NavChild[] };
  overHero: boolean;
  linkClassName: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const close = () => setOpen(false);
  const toggle = () => setOpen((value) => !value);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={linkClassName}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={(event) => {
          event.preventDefault();
          toggle();
        }}
      >
        {item.name}
        <ChevronDown
          className={cn(
            "ml-1 h-3.5 w-3.5 opacity-80 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-2">
          <div
            className={cn(
              "grid grid-cols-2 gap-1 border p-3 shadow-md",
              overHero
                ? "border-white/20 bg-white text-foreground"
                : "border-border bg-popover",
            )}
          >
            {item.children.map((child) => (
              <Link
                key={child.href + child.name}
                href={child.href}
                onClick={close}
                className="px-3 py-2.5 text-left hover:bg-muted"
              >
                <p className="text-sm font-medium text-foreground">
                  {child.name}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {child.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { progress, reveal, fly, isHome } = useBrandDock();
  const overHero = isHome && progress < 0.06;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const brandLocked = isHome && reveal < 0.85 && isDesktop;

  const linkBase =
    "inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3.5 text-sm transition-colors duration-200";

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
              pointerEvents: brandLocked ? "none" : "auto",
            }}
            aria-hidden={brandLocked}
            tabIndex={brandLocked ? -1 : undefined}
          >
            <Image
              src="/images/aura-logo.webp"
              alt="AURA logo"
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
            />
            <div className="min-w-0">
              <p className="text-base font-bold leading-none text-foreground">
                AURA
              </p>
              <p className="mt-0.5 hidden text-[11px] font-medium text-brand-azure xl:block">
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
                    ? "bg-white/95 font-medium text-primary shadow-sm hover:bg-white"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                  : active
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              );

              if (!item.children?.length) {
                return (
                  <Link key={item.name} href={item.href} className={pill}>
                    {item.name}
                  </Link>
                );
              }

              return (
                <NavDropdown
                  key={item.name}
                  item={item as NavItem & { children: NavChild[] }}
                  overHero={overHero}
                  linkClassName={pill}
                />
              );
            })}
          </div>

          <div className="hidden items-center gap-1 xl:flex">
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                overHero
                  ? "text-white hover:bg-white/15 hover:text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
            <LanguageSwitcher overHero={overHero} />
            <ThemeSwitcher overHero={overHero} />
          </div>

          <div className="flex items-center gap-0.5 xl:hidden">
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AURA on Telegram"
              className={cn(
                "inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full transition-colors",
                overHero
                  ? "text-white hover:bg-white/15 hover:text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <TelegramIcon className="h-4 w-4" />
            </a>
            <LanguageSwitcher overHero={overHero} />
            <ThemeSwitcher overHero={overHero} />
            <MobileNav navigation={navigation} overHero={overHero} />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
