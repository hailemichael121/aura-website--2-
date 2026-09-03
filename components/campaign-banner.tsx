"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SitePromotion } from "@/lib/site-campaigns";
import {
  setCampaignDismissed,
  shouldShowCampaignPopup,
} from "@/lib/campaign-dismiss";

type CampaignBannerProps = {
  campaign: SitePromotion;
};

export default function CampaignBanner({ campaign }: CampaignBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    setCampaignDismissed(campaign.id);
  };

  useEffect(() => {
    if (!shouldShowCampaignPopup(campaign.id)) return;

    const timer = window.setTimeout(() => setIsOpen(true), 400);
    return () => window.clearTimeout(timer);
  }, [campaign.id]);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden
      />
      <button
        type="button"
        className="absolute inset-0 z-[1]"
        aria-label="Dismiss announcement"
        onClick={handleClose}
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aura-campaign-title"
        className="relative z-10 flex max-h-[min(92vh,820px)] w-full max-w-xl flex-col overflow-hidden bg-background shadow-[0_24px_64px_rgba(0,0,0,0.4)] ring-1 ring-white/10"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
          <p
            id="aura-campaign-title"
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
          >
            {campaign.kind === "campaign" ? "Campaign" : "Event"} ·{" "}
            {campaign.title}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/15 p-3 sm:p-4">
          {campaign.href ? (
            <Link href={campaign.href} onClick={handleClose} className="block w-full">
              <Image
                src={campaign.image}
                alt={campaign.imageAlt}
                width={800}
                height={800}
                className="mx-auto max-h-[min(58vh,520px)] w-full object-contain"
                priority
              />
            </Link>
          ) : (
            <Image
              src={campaign.image}
              alt={campaign.imageAlt}
              width={800}
              height={800}
              className="mx-auto max-h-[min(58vh,520px)] w-full object-contain"
              priority
            />
          )}
        </div>

        <div className="shrink-0 border-t border-border px-4 py-3 sm:px-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {campaign.description}
          </p>
          {campaign.href ? (
            <Link
              href={campaign.href}
              onClick={handleClose}
              className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Learn more
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
