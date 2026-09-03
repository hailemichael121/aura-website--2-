import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Forum",
  alternates: { canonical: "/forum" },
};

export default function ForumPage() {
  return <ComingSoon pageKey="forum" />;
}
