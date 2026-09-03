"use client"

import { useState } from "react"
import Link from "next/link"
import { HeartHandshake, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_EMAILS } from "@/lib/site-contact"

const quickPaths = [
  { href: "/get-help", label: "Get help & support" },
  { href: "/resources", label: "Resource library" },
  { href: "/community", label: "Community spaces" },
  { href: "/contact", label: "Contact the team" },
]

export default function FloatingTelegram() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[min(100vw-2rem,320px)] border border-border bg-background shadow-lg">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
            <div className="flex items-start gap-2.5">
              <HeartHandshake
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <p className="text-sm font-bold text-foreground">AURA support</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  Find a path to resources, community, or direct contact.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={() => setIsOpen(false)}
              aria-label="Close support menu"
            >
              <X className="size-4" />
            </Button>
          </div>
          <div className="space-y-1 px-2 py-2">
            {quickPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
            <a
              href={`mailto:${SITE_EMAILS.support}`}
              className="font-medium text-foreground hover:underline"
            >
              {SITE_EMAILS.support}
            </a>
            <span className="mx-1.5">·</span>
            <a
              href="https://t.me/AURA_MHP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @AURA_MHP
            </a>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="size-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
          aria-label="Open AURA support menu"
        >
          <HeartHandshake className="size-6" strokeWidth={1.75} />
        </Button>
      )}
    </div>
  )
}

export { FloatingTelegram }
