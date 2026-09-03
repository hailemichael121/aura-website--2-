"use client";

import { useEffect, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SITE_SOCIAL } from "@/lib/site-social";
import { cn } from "@/lib/utils";

type NavChild = { name: string; href: string; description: string };

type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

function isActivePath(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function MobileNavLink({
  href,
  children,
  className,
  onNavigate,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex min-h-11 items-center rounded-md px-3 text-[15px] active:bg-muted",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavSection({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(
    () => item.children?.some((c) => isActivePath(pathname, c.href)) ?? false,
  );
  const active = isActivePath(pathname, item.href);

  if (!item.children?.length) {
    return (
      <MobileNavLink
        href={item.href}
        onNavigate={onNavigate}
        className={cn(
          "font-medium text-foreground",
          active && "bg-primary/10 text-primary",
        )}
      >
        {item.name}
      </MobileNavLink>
    );
  }

  return (
    <div className="rounded-md border border-border/80">
      <div className="flex min-h-11 items-stretch">
        <MobileNavLink
          href={item.href}
          onNavigate={onNavigate}
          className={cn(
            "min-w-0 flex-1 font-medium text-foreground",
            active && "text-primary",
          )}
        >
          {item.name}
        </MobileNavLink>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.name} menu`}
          onClick={() => setExpanded((open) => !open)}
          className="inline-flex w-11 shrink-0 items-center justify-center border-l border-border/80 text-muted-foreground active:bg-muted"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>
      {expanded ? (
        <div className="space-y-0.5 border-t border-border/80 px-2 py-2">
          {item.children.map((child) => {
            const childActive = isActivePath(pathname, child.href);
            return (
              <MobileNavLink
                key={child.href + child.name}
                href={child.href}
                onNavigate={onNavigate}
                className={cn(
                  "flex-col items-start gap-0.5 py-2.5 text-sm text-muted-foreground",
                  childActive && "bg-primary/10 text-primary",
                )}
              >
                <span className="font-medium text-foreground">{child.name}</span>
                <span className="text-xs leading-snug">{child.description}</span>
              </MobileNavLink>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

type MobileNavProps = {
  navigation: NavItem[];
  overHero?: boolean;
};

export function MobileNav({ navigation, overHero }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
      <MobileMenuButton overHero={overHero} onClick={() => setOpen(true)} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="flex w-[min(100vw,20rem)] flex-col p-0 sm:max-w-xs">
          <SheetHeader className="border-b border-border px-5 py-4 text-left">
            <SheetTitle className="text-base font-bold">Menu</SheetTitle>
          </SheetHeader>
          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto overscroll-contain px-3 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            <div className="space-y-1.5">
              {navigation.map((item) => (
                <MobileNavSection
                  key={item.name}
                  item={item}
                  pathname={pathname}
                  onNavigate={close}
                />
              ))}
            </div>
          </nav>
          <div
            className={cn(
              "border-t border-border px-4 py-3 text-center text-xs text-muted-foreground",
              overHero && "bg-background",
            )}
          >
            <a
              href={SITE_SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
              onClick={close}
            >
              @AURA_MHP on Telegram
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export function MobileMenuButton({
  overHero,
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  overHero?: boolean;
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Open menu"
      aria-haspopup="dialog"
      onClick={onClick}
      className={cn(
        "h-10 w-10 shrink-0 rounded-full touch-manipulation",
        overHero ? "text-white hover:bg-white/15 hover:text-white" : "",
        className,
      )}
      {...props}
    >
      <Menu className="h-5 w-5" aria-hidden />
    </Button>
  );
}
