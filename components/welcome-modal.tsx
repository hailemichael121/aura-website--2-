"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("aura-welcome-shown", "true")
  }

  useEffect(() => {
    const hasShownWelcome = sessionStorage.getItem("aura-welcome-shown")
    if (hasShownWelcome) return
    const timer = setTimeout(() => setIsOpen(true), 700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    closeRef.current?.focus()
    document.body.style.overflow = "hidden"

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose()
      if (event.key !== "Tab" || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-foreground/20"
        aria-label="Dismiss welcome"
        onClick={handleClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aura-welcome-title"
        className="relative z-10 w-full max-w-[26rem] bg-background px-6 py-7 shadow-[0_18px_48px_rgba(0,0,0,0.12)] sm:px-8 sm:py-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline sm:right-5 sm:top-5"
        >
          Close
        </button>

        <div className="pr-10">
          <Image
            src="/images/aura-logo.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />

          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Alliance for Understanding Recovery &amp; Awareness
          </p>

          <h2
            id="aura-welcome-title"
            className="mt-2 text-[1.625rem] font-bold leading-[1.2] text-foreground"
          >
            Welcome to AURA
          </h2>

          <p className="mt-4 text-[15px] leading-[1.65] text-foreground/85">
            We provide safe spaces, practical tools, and trusted support for
            your mental wellness journey.
          </p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">Private and respectful.</span>{" "}
              Your privacy and wellbeing are protected.
            </p>
            <p>
              <span className="text-foreground">Peer community support.</span>{" "}
              Connect with people who understand your experience.
            </p>
            <p>
              <span className="text-foreground">Professional resources.</span>{" "}
              Access trusted guidance from trained contributors.
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-10 items-center justify-center bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="text-left text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Explore later
          </button>
        </div>

        <p className="mt-6 border-t border-border/70 pt-4 text-[11px] leading-relaxed text-muted-foreground">
          Registered Ethiopian Civil Society Organization · Proclamation No.
          1113/2011.{" "}
          <Link
            href="/get-help"
            onClick={handleClose}
            className="text-foreground/70 underline-offset-2 hover:text-foreground hover:underline"
          >
            Need support now?
          </Link>
        </p>
      </div>
    </div>
  )
}
