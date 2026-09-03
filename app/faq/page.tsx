import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <ComingSoon pageKey="faq" />;
}
