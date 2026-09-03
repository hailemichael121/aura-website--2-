import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return <ComingSoon pageKey="auth" />;
}
