"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import type { SitePromotion } from "@/lib/site-campaigns";
import {
  FORUM_FEED,
  PROGRAMS_FEED,
  statusLabel,
  type HomeFeedItem,
} from "@/lib/home-feed";
import EmptyFeedState from "@/components/empty-feed-state";
import { cn } from "@/lib/utils";

type TabId = "events" | "campaigns" | "forum" | "programs";

type TabConfig = {
  id: TabId;
  label: string;
  count: number;
};

type HomeActivitySectionProps = {
  events: SitePromotion[];
  campaigns: SitePromotion[];
};

function formatDateRange(item: SitePromotion): string | null {
  if (!item.startsAt) return null;
  if (item.endsAt && item.endsAt !== item.startsAt) {
    return `${item.startsAt} — ${item.endsAt}`;
  }
  return item.startsAt;
}

function PromotionSlide({ item }: { item: SitePromotion }) {
  const href = item.href ?? (item.kind === "campaign" ? "/campaign" : "/programs");
  const date = formatDateRange(item);

  return (
    <div className="grid border border-border bg-card md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="flex min-h-[220px] items-center justify-center border-b border-border bg-muted/15 p-4 md:min-h-[300px] md:border-b-0 md:border-r">
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={720}
          height={720}
          className="max-h-[260px] w-full object-contain md:max-h-[300px]"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-6 md:px-7 md:py-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
          {item.kind === "campaign" ? "Campaign" : "Event"}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
          {item.title}
        </h3>
        {date ? (
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
            {date}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {item.description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {item.kind === "campaign" ? "View campaign" : "View event details"}
        </Link>
      </div>
    </div>
  );
}

function FeedSlide({ item }: { item: HomeFeedItem }) {
  const external = item.href.startsWith("http");

  return (
    <div className="border border-border bg-card px-6 py-8 md:px-10 md:py-10">
      <div className="flex flex-wrap items-center gap-3">
        {item.status ? (
          <span
            className={cn(
              "text-[11px] font-medium uppercase tracking-[0.12em]",
              item.status === "live"
                ? "text-primary"
                : "text-muted-foreground",
            )}
          >
            {statusLabel(item.status)}
          </span>
        ) : null}
        {item.dateLabel ? (
          <span className="text-xs text-muted-foreground">{item.dateLabel}</span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug text-foreground md:text-2xl">
        {item.title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.description}
      </p>
      {external ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Open {item.title}
        </a>
      ) : (
        <Link
          href={item.href}
          className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Learn more
        </Link>
      )}
    </div>
  );
}

function EmptySlide({ tab, tabLabel }: { tab: TabId; tabLabel: string }) {
  const title: "Coming soon" | "Nothing found" =
    tab === "events" || tab === "campaigns" ? "Nothing found" : "Coming soon";

  return <EmptyFeedState title={title} eyebrow={tabLabel} />;
}

export default function HomeActivitySection({
  events,
  campaigns,
}: HomeActivitySectionProps) {
  const tabs: TabConfig[] = useMemo(
    () => [
      { id: "events", label: "Events", count: events.length },
      { id: "campaigns", label: "Campaigns", count: campaigns.length },
      { id: "forum", label: "Forum", count: FORUM_FEED.length },
      { id: "programs", label: "Programs", count: PROGRAMS_FEED.length },
    ],
    [events.length, campaigns.length],
  );

  const [activeTab, setActiveTab] = useState<TabId>("events");
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    switch (activeTab) {
      case "events":
        return events;
      case "campaigns":
        return campaigns;
      case "forum":
        return FORUM_FEED;
      case "programs":
        return PROGRAMS_FEED;
    }
  }, [activeTab, events, campaigns]);

  const slideCount = slides.length;

  const goTo = useCallback(
    (next: number) => {
      if (slideCount === 0) return;
      setIndex((next + slideCount) % slideCount);
    },
    [slideCount],
  );

  const selectTab = (tab: TabId) => {
    setActiveTab(tab);
    setIndex(0);
  };

  const isPromotion = (item: unknown): item is SitePromotion =>
    typeof item === "object" &&
    item !== null &&
    "kind" in item &&
    "image" in item;

  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Events &amp; campaigns
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Upcoming sessions, awareness drives, and community channels.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Activity categories"
            className="-mx-1 flex gap-1.5 overflow-x-auto overscroll-x-contain px-1 pb-1 md:mx-0 md:flex-wrap md:justify-end md:overflow-visible md:pb-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => selectTab(tab.id)}
                className={cn(
                  "shrink-0 touch-manipulation rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground ring-1 ring-border hover:text-foreground",
                )}
              >
                {tab.label}
                <span className="ml-1.5 tabular-nums opacity-80">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8">
          {slideCount === 0 ? (
            <EmptySlide
              tab={activeTab}
              tabLabel={tabs.find((t) => t.id === activeTab)?.label ?? activeTab}
            />
          ) : (
            <>
              {isPromotion(slides[index]) ? (
                <PromotionSlide item={slides[index]} />
              ) : (
                <FeedSlide item={slides[index] as HomeFeedItem} />
              )}

              {slideCount > 1 ? (
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <button
                      type="button"
                      onClick={() => goTo(index - 1)}
                      aria-label="Previous item"
                      className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md border border-border bg-background text-foreground active:bg-muted"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(index + 1)}
                      aria-label="Next item"
                      className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md border border-border bg-background text-foreground active:bg-muted"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="ml-1 text-xs tabular-nums text-muted-foreground">
                      {index + 1} / {slideCount}
                    </p>
                  </div>

                  {slideCount <= 6 ? (
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      {slides.map((slide, i) => (
                        <button
                          key={"id" in slide ? slide.id : i}
                          type="button"
                          aria-label={`Go to slide ${i + 1}`}
                          aria-current={i === index ? "true" : undefined}
                          onClick={() => setIndex(i)}
                          className={cn(
                            "h-1.5 shrink-0 rounded-full transition-all",
                            i === index
                              ? "w-6 bg-primary"
                              : "w-1.5 bg-border hover:bg-muted-foreground/40",
                          )}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mx-auto w-full max-w-xs sm:mx-0">
                      <div className="h-1.5 overflow-hidden rounded-full bg-border">
                        <span
                          className="block h-full rounded-full bg-primary transition-all duration-300"
                          style={{
                            width: `${((index + 1) / slideCount) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link
            href="/programs"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            All programs &amp; events
          </Link>
          <Link
            href="/campaign"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            All campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}
