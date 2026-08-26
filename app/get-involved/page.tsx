import Link from "next/link"
import { ArrowRight, Building2, GraduationCap, HandHeart, HeartHandshake, Landmark, Stethoscope, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ways = [
  {
    title: "Volunteer",
    description: "Support listening circles, outreach sessions, and local awareness campaigns.",
    icon: HandHeart,
  },
  {
    title: "Partner With Us",
    description: "Collaborate with AURA to expand community-based mental health support.",
    icon: HeartHandshake,
  },
  {
    title: "Donate",
    description: "Fund practical resources, training, and direct support for underserved groups.",
    icon: Landmark,
  },
  {
    title: "Join Events",
    description: "Participate in workshops, dialogues, and community healing initiatives.",
    icon: Users,
  },
]

const partnershipOpportunities = [
  {
    icon: Stethoscope,
    title: "Healthcare Organizations",
    description: "Collaborate with hospitals, clinics, and mental health facilities.",
    benefits: ["Referral network", "Professional training", "Resource sharing"],
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Partner with schools and universities for student mental health support.",
    benefits: ["Campus programs", "Student workshops", "Research collaboration"],
  },
  {
    icon: Users,
    title: "Faith Communities",
    description: "Integrate mental health support through trusted spiritual communities.",
    benefits: ["Community trust", "Cultural sensitivity", "Spiritual care integration"],
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    description: "Co-create workplace wellbeing programs and employee support pathways.",
    benefits: ["Workplace wellness", "Leadership training", "Employee support pathways"],
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="border-b border-border bg-muted/50 py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit">Get Involved</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Be Part of the Movement</h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re a volunteer, donor, mental health professional, or just a caring soul &mdash; there&apos;s space for you at AURA.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way) => (
            <Card key={way.title} className="border-border">
              <CardHeader className="space-y-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <way.icon className="size-5" />
                </div>
                <CardTitle className="text-xl">{way.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-6">{way.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground">Partnership Opportunities</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Collaborate with us to expand mental health support across Ethiopia.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {partnershipOpportunities.map((partner) => (
              <Card key={partner.title} className="border-border">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <partner.icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                  </div>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Partnership Benefits</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {partner.benefits.map((benefit) => (
                        <li key={benefit}>&bull; {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline">Explore Partnership</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <Card className="border-border">
          <CardContent className="flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Start with one step</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Tell us how you&apos;d like to contribute. Our team will guide your onboarding and next actions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Contact the team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/community" className="inline-flex items-center">Community spaces <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
