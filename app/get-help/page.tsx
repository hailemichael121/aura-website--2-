import Link from "next/link"
import { AlertTriangle, BookText, MessageSquareHeart, PhoneCall, UserRoundCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const immediate = [
  {
    label: "Emergency",
    contact: "Call local emergency services",
    detail: "If there is immediate danger to life or safety, seek emergency care first.",
  },
  {
    label: "AURA Support Line",
    contact: "+251 91 112 3456",
    detail: "Daily listening support and guidance to next steps.",
  },
  {
    label: "Telegram",
    contact: "@AURA_MHP",
    detail: "Text-based support for people who prefer writing.",
  },
]

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="border-b border-border bg-muted/50 py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit">Get Help</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">You are not alone</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Whether you need support right now or long-term guidance, AURA can help you take the next step safely.
          </p>
        </div>
      </section>

      <section id="immediate" className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <AlertTriangle className="size-6 text-muted-foreground" />
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">If you need support right now</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {immediate.map((item) => (
            <Card key={item.label} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">{item.label}</CardTitle>
                <CardDescription className="font-medium text-foreground">{item.contact}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <MessageSquareHeart className="size-7 text-muted-foreground" />
              <CardTitle className="mt-2 text-2xl">Peer support</CardTitle>
              <CardDescription>Join calm circles where trained listeners offer understanding and privacy.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Weekly small-group conversations</li>
                <li>One-on-one check-ins by appointment</li>
                <li>Youth-friendly and student-friendly spaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <UserRoundCheck className="size-7 text-muted-foreground" />
              <CardTitle className="mt-2 text-2xl">Professional help</CardTitle>
              <CardDescription>Connect with trusted counselors, psychologists, and partner clinics.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Referral guidance based on your needs</li>
                <li>Low-cost and student-aware options when available</li>
                <li>Support for first-time therapy access</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <Card className="border-border">
          <CardHeader>
            <BookText className="size-7 text-muted-foreground" />
            <CardTitle className="mt-2 text-2xl">Resources</CardTitle>
            <CardDescription>
              Explore practical tools for stress regulation, grounding, emotional communication, and family conversations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link href="/resources">View resource library</Link></Button>
              <Button asChild variant="outline"><Link href="/contact"><PhoneCall className="mr-2 size-4" />Talk to our team</Link></Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
