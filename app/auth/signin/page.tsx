import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return <ComingSoon pageKey="auth" />;
}
