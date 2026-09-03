import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Article",
};

export default function ArticlePage() {
  return <ComingSoon pageKey="resources" />;
}
