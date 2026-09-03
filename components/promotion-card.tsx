import Image from "next/image";
import Link from "next/link";
import type { SitePromotion } from "@/lib/site-campaigns";

type PromotionCardProps = {
  item: SitePromotion;
  detailHref?: string;
};

export default function PromotionCard({ item, detailHref }: PromotionCardProps) {
  const href = detailHref ?? (item.kind === "campaign" ? "/campaign" : "/programs");

  return (
    <article className="flex flex-col border border-border bg-card">
      <Link href={href} className="block">
        <div className="relative flex min-h-[220px] w-full items-center justify-center bg-muted/20 p-3 sm:min-h-[280px]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={800}
            height={800}
            className="max-h-[320px] w-full object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col border-t border-border px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
          {item.kind === "campaign" ? "Campaign" : "Event"}
        </p>
        <h3 className="mt-1.5 text-lg font-bold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <Link
          href={href}
          className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {item.kind === "campaign" ? "View campaign" : "View event"}
        </Link>
      </div>
    </article>
  );
}
