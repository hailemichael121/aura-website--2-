import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Program Details",
};

export default function ProgramDetailPage() {
  return <ComingSoon pageKey="programs" />;
}
