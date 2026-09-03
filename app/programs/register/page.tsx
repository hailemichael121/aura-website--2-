import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Program Registration",
  alternates: { canonical: "/programs/register" },
};

export default function ProgramRegistrationPage() {
  return <ComingSoon pageKey="programs" />;
}
