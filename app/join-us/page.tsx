import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Join Us",
  alternates: { canonical: "/join-us" },
};

export default function JoinUsPage() {
  return <ComingSoon pageKey="joinUs" />;
}
