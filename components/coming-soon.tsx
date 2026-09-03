"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import ComingSoonPanel from "@/components/coming-soon-panel";

type ComingSoonProps = {
  pageKey?: string;
};

export default function ComingSoon({ pageKey }: ComingSoonProps) {
  const { t } = useLanguage();
  const pageLabel = pageKey ? t(`comingSoon.pages.${pageKey}`) : undefined;

  return (
    <div className="bg-background">
      <ComingSoonPanel
        variant="page"
        eyebrow={pageLabel}
        title={t("comingSoon.title")}
        message={t("comingSoon.message")}
      />
      <p className="-mt-8 pb-16 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {t("comingSoon.returnHome")}
        </Link>
      </p>
    </div>
  );
}
