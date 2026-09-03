import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Confessions",
  alternates: { canonical: "/confessions" },
};

export default function ConfessionsPage() {
  return <ComingSoon pageKey="confessions" />;
}
