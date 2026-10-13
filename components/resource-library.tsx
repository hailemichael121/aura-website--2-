"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
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

const PAGE_SIZE = 5;

const cardTilt = ["-rotate-[0.65deg]", "rotate-[0.85deg]", "-rotate-[1deg]", "rotate-[0.55deg]"];
const cardRadius = [
  "rounded-[2rem_1rem_2.5rem_1.25rem]",
  "rounded-[1.25rem_2.25rem_1rem_2rem]",
  "rounded-[2.25rem_1.5rem_1.75rem_2rem]",
  "rounded-[1.5rem_2rem_2rem_1.25rem]",
];

function TransitionLink({
  href,
  className,
  style,
  children,
}: {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { push } = useViewTransitionNav();

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(event) => {
        event.preventDefault();
        push(href);
      }}
    >
      {children}
    </a>
  );
}

function CategoryFilterNav({
  categories,
  category,
  onCategoryChange,
}: {
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const updateScrollState = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;

    const overflow = element.scrollWidth > element.clientWidth + 4;
    setScrollable(overflow);
    setAtStart(element.scrollLeft <= 4);
    setAtEnd(element.scrollLeft + element.clientWidth >= element.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(element);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer.disconnect();
    };
  }, [categories, updateScrollState]);

  const scrollCategories = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -160 : 160,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-4 flex items-center gap-0.5 sm:gap-1">
      {scrollable ? (
        <button
          type="button"
          aria-label="Scroll categories left"
          disabled={atStart}
          onClick={() => scrollCategories("left")}
          className={cn(
            "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-25",
          )}
        >
          <ChevronLeft aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      ) : null}

      <nav
        ref={scrollRef}
        aria-label="Filter by topic"
        className="flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(item)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:text-sm",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {scrollable ? (
        <button
          type="button"
          aria-label="Scroll categories right"
          disabled={atEnd}
          onClick={() => scrollCategories("right")}
          className={cn(
            "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-25",
          )}
        >
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      ) : null}
    </div>
  );
}

function HeroShapeCluster() {
  return (
    <div className="resource-hero-shapes relative hidden h-44 cursor-default lg:block">
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-40 w-[115%] rounded-t-[999px] bg-primary/15"
      />
      <div
        aria-hidden="true"
        className="resource-shape resource-shape--card absolute bottom-6 right-12 h-24 w-32 rotate-0 rounded-[1.25rem] bg-card shadow-sm ring-1 ring-border/50"
      />
      <div
        aria-hidden="true"
        className="resource-shape resource-shape--green absolute bottom-14 right-[52%] h-16 w-20 rotate-[-8deg] rounded-[1rem] bg-primary"
      />
      <div
        aria-hidden="true"
        className="resource-shape resource-shape--azure absolute bottom-20 right-[38%] h-10 w-14 rotate-[6deg] rounded-[0.75rem] bg-brand-azure/80"
      />
    </div>
  );
}

function ResourcePagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Resource pages"
      className="relative mt-14 flex flex-col items-center gap-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 h-16 w-[min(100%,22rem)] -translate-x-1/2 rounded-t-[999px] bg-primary/10"
      />

      <div className="relative flex items-center gap-2 sm:gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-border bg-background"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1.5 rounded-full bg-secondary/90 px-3 py-2 ring-1 ring-border/80">
          {pages.map((pageNumber) => {
            const active = pageNumber === page;
            return (
              <button
                key={pageNumber}
                type="button"
                aria-current={active ? "page" : undefined}
                aria-label={`Page ${pageNumber}`}
                onClick={() => onPageChange(pageNumber)}
                className={cn(
                  "flex h-9 min-w-9 items-center justify-center rounded-full text-sm font-medium transition",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background hover:text-foreground",
                )}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-border bg-background"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Page <span className="font-medium text-foreground">{page}</span> of {totalPages}
      </p>
    </nav>
  );
}

function ResourceCard({
  resource,
  index,
}: {
  resource: ResourceRecord;
  index: number;
}) {
  const creators = getPrimaryCreators(resource);
  const { hasDownload, localFile, primaryHref } = getResourceAccess(resource);
  const tilt = cardTilt[index % cardTilt.length];
  const radius = cardRadius[index % cardRadius.length];
  const stagger = index % 2 === 1 ? "lg:translate-x-6 lg:mt-8" : "lg:-translate-x-2";
  const coverTransition: CSSProperties = {
    viewTransitionName: resourceCoverTransitionName(resource.id),
  };

  return (
    <li
      className={cn(
        "relative list-none transition-transform duration-300 hover:z-10 hover:scale-[1.01]",
        stagger,
        tilt,
      )}
    >
      <ScrollReveal delay={Math.min(index, 4) * 90}>
        <article
          className={cn(
            "overflow-hidden bg-card/95 shadow-[0_18px_50px_hsl(var(--primary)/0.08)] backdrop-blur-sm ring-1 ring-border/60",
            radius,
          )}
        >
          <div className="flex flex-col sm:flex-row">
            <TransitionLink
              href={`/resources/${resource.id}`}
              className="relative block aspect-[5/4] w-full shrink-0 overflow-hidden bg-muted sm:aspect-auto sm:h-auto sm:w-[42%] sm:min-h-[11rem]"
              style={coverTransition}
            >
              {resource.cover_image ? (
                <Image
                  src={resource.cover_image}
                  alt={resource.cover_alt ?? resource.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full min-h-[10rem] flex-col justify-end p-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {resource.category}
                  </p>
                  <p className="mt-2 font-serif text-base leading-snug text-foreground">
                    {resource.title}
                  </p>
                </div>
              )}
            </TransitionLink>

            <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
              <TransitionLink href={`/resources/${resource.id}`} className="group block flex-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                  {resource.category}
                </p>
                <h2 className="mt-2 font-serif text-xl leading-snug text-foreground group-hover:text-primary md:text-[1.35rem]">
                  {resource.title}
                </h2>
                <p className="mt-1.5 line-clamp-1 text-xs text-muted-foreground">{creators}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {resource.summary}
                </p>
              </TransitionLink>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {hasDownload && localFile ? (
                  <Button asChild size="sm" className="rounded-full px-5">
                    <a href={localFile} download={resource.local_file}>
                      Download
                      <ArrowDownToLine aria-hidden="true" className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild size="sm" className="rounded-full px-5">
                    <a href={primaryHref} target="_blank" rel="noreferrer">
                      Read
                      <ArrowUpRight aria-hidden="true" className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                )}
                <TransitionLink
                  href={`/resources/${resource.id}`}
                  className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-[5px] hover:decoration-primary"
                >
                  Details
                </TransitionLink>
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </li>
  );
}

export default function ResourceLibrary({
  resources,
}: {
  resources: ResourceRecord[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["All", ...new Set(resources.map((resource) => resource.category))],
    [resources],
  );

  const visibleResources = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();

    return resources.filter((resource) => {
      const matchesCategory = category === "All" || resource.category === category;
      const searchableText = [
        resource.title,
        resource.summary,
        resource.description,
        resource.category,
        ...resource.subjects,
        ...resource.audience,
        ...resource.creators.map((creator) => creator.name),
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesCategory && (!search || searchableText.includes(search));
    });
  }, [category, query, resources]);

  const totalPages = Math.max(1, Math.ceil(visibleResources.length / PAGE_SIZE));

  const pagedResources = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return visibleResources.slice(start, start + PAGE_SIZE);
  }, [page, visibleResources]);

  useEffect(() => {
    setPage(1);
  }, [query, category]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("resource-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pt-[4.75rem] text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] top-32 h-[420px] w-[140%] rounded-[50%] bg-primary/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[480px] h-64 w-48 rotate-12 rounded-[2rem] bg-brand-azure/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-[720px] hidden h-40 w-28 -rotate-6 rounded-[1.5rem] bg-secondary md:block"
      />

      <header className="resource-hero-in relative mx-auto max-w-6xl px-5 pb-4 pt-8 sm:px-8 sm:pt-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_minmax(0,340px)] lg:gap-4">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Reading list
            </p>
            <h1 className="mt-3 font-serif text-[2.6rem] leading-[0.95] tracking-tight text-foreground sm:text-6xl">
              Resources
            </h1>
            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-muted-foreground sm:text-base">
              Patient guides, training materials, and clinical texts—listed with author and
              publisher.
            </p>
          </div>

          <HeroShapeCluster />
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto mt-8 h-24 max-w-lg overflow-hidden lg:hidden"
        >
          <div className="absolute inset-x-[-10%] bottom-0 h-48 rounded-t-[100%] bg-primary/15" />
        </div>
      </header>

      <section id="resource-list" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 border-b border-border/80 pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="min-w-0 flex-1">
              <h2 className="font-serif text-2xl text-foreground">Browse</h2>
              <CategoryFilterNav
                categories={categories}
                category={category}
                onCategoryChange={setCategory}
              />
            </div>

            <label className="relative block w-full max-w-xs shrink-0 lg:pb-1">
              <span className="sr-only">Search resources</span>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Title or author"
                className="w-full border-0 border-b border-border bg-transparent py-2 pl-8 pr-1 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </label>
          </div>
        </ScrollReveal>

        <p aria-live="polite" className="mt-6 text-sm text-muted-foreground">
          {visibleResources.length} {visibleResources.length === 1 ? "title" : "titles"}
          {category !== "All" ? ` · ${category}` : ""}
        </p>

        {visibleResources.length > 0 ? (
          <>
            <ul
              key={`page-${page}-${category}-${query}`}
              className="resource-list-swap mt-10 flex max-w-4xl flex-col gap-10 p-0 lg:mx-auto lg:gap-14"
            >
              {pagedResources.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </ul>

            <ResourcePagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="mt-12 py-16 text-center">
            <p className="font-serif text-2xl text-foreground">No matches</p>
            <p className="mt-2 text-sm text-muted-foreground">Try another topic or search term.</p>
            <Button
              type="button"
              variant="outline"
              className="mt-6 rounded-full"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>

      <section id="support-options" className="relative border-t border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-16 h-32 rounded-b-[50%] bg-secondary/80"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-lg">
            <h2 className="font-serif text-xl text-foreground">Need to talk to someone?</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              For emergencies, use local emergency services. Find A Helpline lists confidential
              options by country.
            </p>
          </div>
          <Button asChild className="shrink-0 rounded-full px-6">
            <a href="https://findahelpline.com/" target="_blank" rel="noreferrer">
              Find a helpline
              <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
