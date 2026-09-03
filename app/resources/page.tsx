import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ComingSoon pageKey="resources" />;
}
