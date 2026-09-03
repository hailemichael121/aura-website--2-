import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "New Post",
};

export default function NewPostPage() {
  return <ComingSoon pageKey="forum" />;
}
