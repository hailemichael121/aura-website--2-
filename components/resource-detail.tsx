"use client";

import Image from "next/image";
import { ArrowDownToLine, ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { useViewTransitionNav } from "@/hooks/use-view-transition-nav";
import { resourceCoverTransitionName } from "@/lib/resource-cover-transition";
import {
  getPrimaryCreators,
  getResourceAccess,
  type ResourceRecord,
} from "@/lib/resource-catalog";
import { cn } from "@/lib/utils";

function CoverBlock({ resource }: { resource: ResourceRecord }) {
  const coverTransition: CSSProperties = {
    viewTransitionName: resourceCoverTransitionName(resource.id),
  };

  const shell = (
    <div
      style={coverTransition}
      className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[2.5rem_1.25rem_2rem_1.75rem] bg-muted shadow-[0_20px_55px_hsl(var(--primary)/0.12)] ring-1 ring-border/60"
    >
      {resource.cover_image ? (
        <Image
          src={resource.cover_image}
          alt={resource.cover_alt ?? resource.title}
          fill
          sizes="(max-width: 768px) 65vw, 280px"
          className="object-cover object-top"
          priority
        />
      ) : (
        <div className="flex h-full flex-col justify-end p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {resource.category}
          </p>
          <p className="mt-3 font-serif text-xl leading-snug text-foreground">{resource.title}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="resource-hero-in relative mx-auto lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute -left-8 top-1/2 h-[120%] w-[130%] -translate-y-1/2 rounded-t-[999px] bg-primary/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 top-8 h-20 w-16 rotate-12 rounded-[1rem] bg-primary"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6 left-1/2 h-14 w-24 -translate-x-1/3 rotate-[-6deg] rounded-[0.85rem] bg-brand-azure/25"
      />
      <div className="relative">{shell}</div>
    </div>
  );
}

export default function ResourceDetail({ resource }: { resource: ResourceRecord }) {
  const { hasDownload, primaryHref, officialUrl, localFile } = getResourceAccess(resource);
  const creators = getPrimaryCreators(resource);
  const { push } = useViewTransitionNav();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pt-[4.75rem] text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 h-72 w-56 rotate-6 rounded-[2rem] bg-primary/[0.06]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <button
          type="button"
          onClick={() => push("/resources")}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to resources
        </button>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="shrink-0 lg:w-[300px]">
            <CoverBlock resource={resource} />
          </div>

          <div className="min-w-0 flex-1 lg:pt-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {resource.category}
            </p>
            <h1 className="mt-2 font-serif text-3xl leading-[1.08] text-foreground sm:text-[2.35rem]">
              {resource.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">{creators}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {resource.publication_year ?? "Date not listed"}
              {resource.edition ? ` · ${resource.edition} edition` : ""}
              {resource.pages ? ` · ${resource.pages} pages` : ""}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/90">{resource.summary}</p>

            {resource.content_notice && (
              <p className="mt-5 max-w-2xl border-l-2 border-brand-azure pl-4 text-sm leading-6 text-muted-foreground">
                {resource.content_notice}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {hasDownload && localFile ? (
                <Button asChild className="rounded-full px-6">
                  <a href={localFile} download={resource.local_file}>
                    Download PDF
                    <ArrowDownToLine aria-hidden="true" className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button asChild className="rounded-full px-6">
                  <a href={primaryHref} target="_blank" rel="noreferrer">
                    {resource.source_label ?? "Read"}
                    <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}

              {officialUrl && hasDownload && (
                <Button asChild variant="outline" className="rounded-full px-6">
                  <a href={officialUrl} target="_blank" rel="noreferrer">
                    {resource.source_label ?? "Official source"}
                    <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-14 lg:mt-20">
          {resource.highlights && resource.highlights.length > 0 && (
            <ScrollReveal>
              <section className="max-w-3xl lg:ml-[8%]">
                <h2 className="font-serif text-2xl text-foreground">From the source</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                  {resource.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-5 text-muted-foreground">
                  <cite className="not-italic">
                    {resource.highlights_citation ??
                      `${getPrimaryCreators(resource)}. ${resource.title}${
                        resource.publication_year ? ` (${resource.publication_year})` : ""
                      }.`}
                  </cite>{" "}
                  <a
                    href={resource.source_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                  >
                    Source
                  </a>
                </p>
              </section>
            </ScrollReveal>
          )}

          <ScrollReveal delay={resource.highlights?.length ? 60 : 0}>
            <section className="relative max-w-3xl lg:ml-[12%]">
              <div
                aria-hidden="true"
                className="absolute -left-6 top-0 h-full w-1 rounded-full bg-primary/35"
              />
              <h2 className="font-serif text-2xl text-foreground">Why it may help</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{resource.relevance}</p>
              {resource.audience.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {resource.audience.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <section className="relative max-w-3xl lg:mr-[8%] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -right-4 top-1/2 hidden h-32 w-24 -translate-y-1/2 rotate-6 rounded-[1.25rem] bg-accent/80 lg:block"
              />
              <h2 className="font-serif text-2xl text-foreground">What&apos;s inside</h2>
              {resource.chapters.length > 0 ? (
                <ol className="mt-6 space-y-3">
                  {resource.chapters.map((chapter, index) => (
                    <li
                      key={`${chapter.title}-${index}`}
                      className={cnChapterPanel(index)}
                    >
                      <span className="font-medium tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/90">
                        {chapter.title}
                        {chapter.page ? (
                          <span className="text-muted-foreground"> · p. {chapter.page}</span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-4 text-base leading-7 text-muted-foreground">{resource.description}</p>
              )}
            </section>
          </ScrollReveal>

          <section
            id="support-options"
            className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-lg">
              <h2 className="font-serif text-lg text-foreground">Need support now?</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                These materials are for learning, not emergencies. Find confidential helplines by
                country if you need to talk to someone.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-full">
              <a href="https://findahelpline.com/" target="_blank" rel="noreferrer">
                Find a helpline
                <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

function cnChapterPanel(index: number) {
  const shapes = [
    "rounded-[1.25rem_0.5rem_1.5rem_0.75rem] bg-card/90 px-4 py-3 ring-1 ring-border/50",
    "rounded-[0.75rem_1.5rem_0.75rem_1.25rem] bg-muted/80 px-4 py-3 ml-4",
    "rounded-[1rem_1.25rem_1.25rem_0.5rem] bg-card/70 px-4 py-3 ring-1 ring-border/40",
  ];
  return `flex gap-4 text-sm leading-6 ${shapes[index % shapes.length]}`;
}
