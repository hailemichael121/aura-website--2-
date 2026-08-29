import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anonymous Confessions | Safe & Stigma-Free Sharing",
  description:
    "A private, anonymous space to share your mental health burdens, release emotional weight, and receive quiet community solidarity.",
  alternates: {
    canonical: "/confessions",
  },
  openGraph: {
    title: "Anonymous Confessions | AURA Ethiopia",
    description:
      "A private, anonymous space to share your mental health burdens without judgment.",
    url: "https://www.auramentalhealth.org/confessions",
  },
}

export default function ConfessionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
