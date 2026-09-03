import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Founders",
  alternates: { canonical: "/founders" },
};

export default function FoundersPage() {
  return <ComingSoon pageKey="founders" />;
}
