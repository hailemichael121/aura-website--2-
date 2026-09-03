import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Get Involved",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return <ComingSoon pageKey="getInvolved" />;
}
