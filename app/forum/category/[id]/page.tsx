import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Forum Category",
};

export default function ForumCategoryPage() {
  return <ComingSoon pageKey="forum" />;
}
