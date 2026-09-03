import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Get Help",
  alternates: { canonical: "/get-help" },
};

export default function GetHelpPage() {
  return <ComingSoon pageKey="getHelp" />;
}
