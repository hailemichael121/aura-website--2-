import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Forum Post",
};

export default function ForumPostPage() {
  return <ComingSoon pageKey="forum" />;
}
