import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  GraduationCap,
  Laptop,
  Megaphone,
  Users,
  UsersRound,
} from "lucide-react";
import EmptyFeedState from "@/components/empty-feed-state";
import PromotionCard from "@/components/promotion-card";
import { getActivePromotions, type SitePromotion } from "@/lib/site-campaigns";
import { SITE_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Programs & Community Initiatives",
  description:
    "AURA programs and events: Weekly Family Time, trainings, community gatherings, and awareness campaigns.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "AURA Programs & Community Initiatives",
    url: `${SITE_URL}/programs`,
  },
};

type ProgramCategory = {
  id: string;
  icon: typeof Users;
  label: string;
  match: (items: SitePromotion[]) => SitePromotion[];
};

const programCategories: ProgramCategory[] = [
  {
    id: "family-time",
    icon: Users,
    label: "Weekly Family Time",
    match: (items) => items.filter((item) => item.id.includes("family-time")),
  },
  {
    id: "virtual-trainings",
    icon: Laptop,
    label: "Virtual trainings",
    match: (items) =>
      items.filter(
        (item) =>
          item.id.includes("virtual") ||
          item.title.toLowerCase().includes("virtual"),
      ),
  },
  {
    id: "in-person-trainings",
    icon: GraduationCap,
    label: "In-person trainings",
    match: () => [],
  },
  {
    id: "community-workshops",
    icon: UsersRound,
    label: "Community workshops",
    match: () => [],
  },
];

const programLinks = [
  { icon: Users, label: "Weekly Family Time", href: "#family-time" },
  { icon: Laptop, label: "Virtual trainings", href: "#virtual-trainings" },
  { icon: Megaphone, label: "Campaign", href: "/campaign" },
  { icon: GraduationCap, label: "In-person trainings", href: "#in-person-trainings" },
  { icon: CalendarDays, label: "Events", href: "#events" },
  { icon: UsersRound, label: "Community workshops", href: "#community-workshops" },
] as const;

function CategorySection({
  category,
  events,
}: {
  category: ProgramCategory;
  events: SitePromotion[];
}) {
  const items = category.match(events);
  const Icon = category.icon;

  return (
    <section id={category.id} className="scroll-mt-24 border-b border-border py-8">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h2 className="text-lg font-bold text-foreground">{category.label}</h2>
      </div>
      {items.length > 0 ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PromotionCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <EmptyFeedState
            title="Coming soon"
            eyebrow={category.label}
          />
        </div>
      )}
    </section>
  );
}

export default function ProgramsPage() {
  const events = getActivePromotions("event");
  const campaigns = getActivePromotions("campaign");

  return (
    <div className="min-h-screen bg-background pt-[4.75rem]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="border-b border-border py-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Programs &amp; events
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Programs and events
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Family conversations, trainings, public events, and awareness
            campaigns across Ethiopian communities.
          </p>
        </header>

        <nav
          aria-label="Program categories"
          className="grid gap-2 border-b border-border py-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 border border-border px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/40"
            >
              <item.icon className="h-4 w-4 shrink-0 text-primary" />
              {item.label}
            </Link>
          ))}
        </nav>

        {programCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            events={events}
          />
        ))}

        <section id="events" className="scroll-mt-24 border-b border-border py-8">
          <h2 className="text-lg font-bold text-foreground">All events</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Upcoming sessions, dialogues, and virtual gatherings.
          </p>
          {events.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((item) => (
                <PromotionCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-5">
              <EmptyFeedState title="Nothing found" eyebrow="All events" />
            </div>
          )}
        </section>

        <section id="campaigns" className="scroll-mt-24 py-8">
          <h2 className="text-lg font-bold text-foreground">Campaigns</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Active awareness drives and public calls to action.
          </p>
          {campaigns.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((item) => (
                <PromotionCard key={item.id} item={item} detailHref="/campaign" />
              ))}
            </div>
          ) : (
            <div className="mt-5">
              <EmptyFeedState title="Nothing found" eyebrow="Campaigns" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
