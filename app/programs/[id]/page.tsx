import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, MapPin, MessageSquare, Users, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Program = {
  id: number
  title: string
  description: string
  fullDescription: string
  category: string
  frequency: string
  location: string
  participants: string
  nextSession: string
  duration: string
  requirements: string[]
  benefits: string[]
  schedule: Array<{ day: string; time: string; activity: string }>
}

const programs: Program[] = [
  {
    id: 1,
    title: "Community Therapy Circles",
    description: "Weekly support groups facilitated by trained volunteers in local communities.",
    fullDescription:
      "Community Therapy Circles provide a safe environment where people can share experiences, learn coping skills, and build support networks. Sessions are facilitated by trained volunteers with a clear focus on privacy and practical recovery tools.",
    category: "Support Groups",
    frequency: "Weekly",
    location: "Various Communities",
    participants: "8-12 people",
    nextSession: "Every Thursday, 6:00 PM",
    duration: "90 minutes",
    requirements: ["Regular attendance", "Respect confidentiality", "Willingness to participate"],
    benefits: ["Peer support", "Practical coping skills", "Reduced isolation", "Improved resilience"],
    schedule: [
      { day: "Thursday", time: "6:00 PM - 7:30 PM", activity: "Group discussion" },
      { day: "Thursday", time: "7:30 PM - 8:00 PM", activity: "Grounding practice" },
    ],
  },
  {
    id: 2,
    title: "Youth Empowerment Workshops",
    description: "Skill-building sessions for students and young adults.",
    fullDescription:
      "Youth workshops focus on anxiety management, communication, self-awareness, and decision-making under pressure.",
    category: "Youth Wellness",
    frequency: "Bi-weekly",
    location: "Schools & Campuses",
    participants: "20-30 people",
    nextSession: "Saturday, 2:00 PM",
    duration: "2 hours",
    requirements: ["Student or youth participant", "Willingness to engage", "Respect group norms"],
    benefits: ["Confidence", "Stress regulation", "Peer connection", "Health literacy"],
    schedule: [{ day: "Saturday", time: "2:00 PM - 4:00 PM", activity: "Workshop" }],
  },
]

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programs.find((item) => item.id === Number(params.id))

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Link href="/programs" className="mb-6 inline-flex items-center text-primary hover:text-primary/80">
          <ArrowLeft className="mr-2 size-4" />Back to Programs
        </Link>

        <Card className="mb-8 border-border bg-card shadow-sm">
          <CardHeader>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <Badge className="bg-primary text-primary-foreground">{program.category}</Badge>
              <span className="inline-flex items-center text-sm text-muted-foreground"><Clock className="mr-1 size-4" />{program.duration}</span>
            </div>
            <CardTitle className="text-3xl text-foreground">{program.title}</CardTitle>
            <CardDescription className="text-base">{program.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3 text-sm text-muted-foreground">
              <div className="inline-flex items-center"><Calendar className="mr-2 size-4 text-primary" />{program.frequency} · {program.nextSession}</div>
              <div className="inline-flex items-center"><MapPin className="mr-2 size-4 text-primary" />{program.location}</div>
              <div className="inline-flex items-center"><Users className="mr-2 size-4 text-primary" />{program.participants}</div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Video className="mr-2 size-4" />Register Now
              </Button>
              <Button variant="outline" className="rounded-full border-primary/40 text-foreground hover:bg-primary/10">
                <MessageSquare className="mr-2 size-4" />Ask Questions
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader><CardTitle>About this program</CardTitle></CardHeader>
            <CardContent><p className="leading-relaxed text-muted-foreground">{program.fullDescription}</p></CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader><CardTitle>Session schedule</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {program.schedule.map((session) => (
                <div key={`${session.day}-${session.time}`} className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <div>
                    <p className="font-medium text-foreground">{session.day}</p>
                    <p className="text-sm text-muted-foreground">{session.activity}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">{session.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader><CardTitle>Requirements</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {program.requirements.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card shadow-sm">
            <CardHeader><CardTitle>What you’ll gain</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {program.benefits.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-border bg-card/70 shadow-sm">
          <CardContent className="p-7 text-center">
            <h3 className="text-2xl font-semibold text-foreground">Ready to join?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Take the next step toward healing and growth. Our community is here to support your journey.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">Register for this program</Button>
              <Button variant="outline" className="rounded-full border-primary/40 hover:bg-primary/10">Contact us first</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
