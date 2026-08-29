import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the Community | Sign Up",
  description: "Create an AURA account to participate in community discussions and recovery circles.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
