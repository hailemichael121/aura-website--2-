import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Stories",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return <ComingSoon pageKey="stories" />;
}
