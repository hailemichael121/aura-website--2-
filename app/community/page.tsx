import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Community",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return <ComingSoon pageKey="community" />;
}
