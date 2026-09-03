import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EmptyFeedState from "@/components/empty-feed-state";
import PromotionCard from "@/components/promotion-card";
import { getActivePromotions } from "@/lib/site-campaigns";
import { SITE_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Campaign",
  description: "AURA awareness campaigns and community initiatives.",
  alternates: {
    canonical: "/campaign",
  },
  openGraph: {
    title: "AURA Campaigns",
    url: `${SITE_URL}/campaign`,
  },
};

export default function CampaignPage() {
  const campaigns = getActivePromotions("campaign");
  const events = getActivePromotions("event");

  return (
    <div className="min-h-screen bg-background pt-[4.75rem] text-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="border-b border-border py-6">
          <Link
            href="/programs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Programs &amp; events
          </Link>
          <h1 className="mt-4 text-2xl font-bold md:text-3xl">Campaigns</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Current awareness drives from AURA — each banner reflects the live
            message on the poster.
          </p>
        </header>

        {campaigns.length > 0 ? (
          <section className="py-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {campaigns.map((item) => (
                <PromotionCard key={item.id} item={item} detailHref="/campaign" />
              ))}
            </div>
          </section>
        ) : (
          <div className="py-8">
            <EmptyFeedState title="Nothing found" eyebrow="Campaigns" />
          </div>
        )}

        {events.length > 0 ? (
          <section className="border-t border-border py-8">
            <h2 className="text-lg font-bold">Related events</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Sessions tied to current campaign work.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((item) => (
                <PromotionCard key={item.id} item={item} detailHref="/programs" />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
