import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Community Forum | Peer Discussions & Support",
    template: "%s | AURA Forum",
  },
  description:
    "Join respectful mental health discussions, ask questions, share recovery milestones, and connect with peers across Ethiopian communities.",
  alternates: {
    canonical: "/forum",
  },
  openGraph: {
    title: "AURA Community Forum — Peer Discussions & Support",
    description:
      "Join respectful mental health discussions and connect with supportive peers.",
    url: "https://www.auramentalhealth.org/forum",
  },
}

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
