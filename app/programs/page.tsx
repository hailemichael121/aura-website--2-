import Link from "next/link"
import { GraduationCap, HeartPulse, Megaphone, UsersRound } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    id: 1,
    name: "Mental health awareness campaigns",
    description: "Public conversations in schools, campuses, and neighborhoods that challenge stigma and encourage early support-seeking.",
    impact: "Reached 1,000+ people through talks, social campaigns, and community sessions.",
    join: "Join as an outreach volunteer or host partner.",
    icon: Megaphone,
  },
  {
    id: 2,
    name: "Community workshops",
    description: "Facilitated learning sessions on stress regulation, communication, and emotional wellbeing for families and local groups.",
    impact: "Supported safer conversations in homes, youth circles, and community institutions.",
    join: "Register your group for a monthly workshop.",
    icon: UsersRound,
  },
  {
    id: 3,
    name: "Youth mental wellness programs",
    description: "Student-focused spaces addressing academic pressure, identity, anxiety, and transitions to adulthood.",
    impact: "Helped youth participants build coping practices and peer support networks.",
    join: "Sign up as a participant or campus coordinator.",
    icon: GraduationCap,
  },
  {
    id: 4,
    name: "Recovery support groups",
    description: "Ongoing support circles for people in recovery, centered on hope, accountability, and community care.",
    impact: "Created consistent support pathways for participants navigating healing journeys.",
    join: "Contact AURA for referral and orientation details.",
    icon: HeartPulse,
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="border-b border-border bg-muted/50 py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit">Programs</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Community-centered programs</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            AURA programs are practical and accessible, designed to make mental wellness support more visible and actionable across Ethiopia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <Card key={program.name} className="border-border">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <program.icon className="size-5" />
                </div>
                <CardTitle className="pt-3 text-2xl text-foreground">{program.name}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Impact:</span> {program.impact}</p>
                <p><span className="font-semibold text-foreground">How to participate:</span> {program.join}</p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href={`/programs/${program.id}`}>View program details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 border-border">
          <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-medium text-foreground">Ready to join a program?</h3>
              <p className="mt-2 text-muted-foreground">We welcome participants, volunteers, schools, and partners.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/programs/register">Register interest</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact team</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
