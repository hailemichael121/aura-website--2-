import { Calendar, Clock, Heart, MapPin, Star, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const opportunities = [
  {
    title: "Volunteer Counselor",
    description: "Provide one-on-one support to community members seeking help.",
    commitment: "4-6 hours/week",
    requirements: ["Basic counseling training", "Empathy and patience", "Reliable internet connection"],
    icon: Heart,
    spots: 15,
  },
  {
    title: "Community Outreach Coordinator",
    description: "Help organize and facilitate events and workshops.",
    commitment: "6-8 hours/week",
    requirements: ["Event planning", "Strong communication", "Local community connections"],
    icon: Users,
    spots: 8,
  },
  {
    title: "Content Creator",
    description: "Develop educational resources and awareness content.",
    commitment: "3-5 hours/week",
    requirements: ["Writing or design skills", "Mental health awareness", "Creative mindset"],
    icon: Star,
    spots: 10,
  },
]

const partnershipTypes = [
  {
    title: "Healthcare Organizations",
    description: "Collaborate with hospitals, clinics, and mental health facilities.",
    benefits: ["Referral network", "Professional training", "Resource sharing"],
  },
  {
    title: "Educational Institutions",
    description: "Partner with schools and universities for student mental health.",
    benefits: ["Campus programs", "Student workshops", "Research collaboration"],
  },
  {
    title: "Faith Communities",
    description: "Integrate mental health support through trusted spiritual spaces.",
    benefits: ["Community trust", "Cultural sensitivity", "Spiritual care integration"],
  },
  {
    title: "Corporate Partners",
    description: "Engage businesses in workplace mental health initiatives.",
    benefits: ["Employee wellness", "Funding opportunities", "Professional expertise"],
  },
]

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="border-b border-border bg-muted/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit">Get Involved</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Be Part of the Movement</h1>
          <p className="mt-4 max-w-4xl text-lg text-muted-foreground">
            Whether you&apos;re a volunteer, donor, mental health professional, or just a caring soul &mdash; there&apos;s space for you at AURA.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="volunteer" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 gap-1 rounded-lg bg-muted p-1 md:grid-cols-4">
              <TabsTrigger value="volunteer" className="rounded-md">Volunteer</TabsTrigger>
              <TabsTrigger value="partner" className="rounded-md">Partner</TabsTrigger>
              <TabsTrigger value="events" className="rounded-md">Events</TabsTrigger>
              <TabsTrigger value="donate" className="rounded-md">Donate</TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.title} className="border-border">
                  <CardHeader>
                    <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <opportunity.icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Commitment:</strong> {opportunity.commitment}</p>
                    <p><strong className="text-foreground">Open spots:</strong> {opportunity.spots}</p>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((item) => <li key={item}>&bull; {item}</li>)}
                    </ul>
                    <Button className="w-full">Apply for this role</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="partner" className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {partnershipTypes.map((partnership) => (
                <Card key={partnership.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{partnership.title}</CardTitle>
                    <CardDescription>{partnership.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {partnership.benefits.map((benefit) => <li key={benefit}>&bull; {benefit}</li>)}
                    </ul>
                    <Button variant="outline">Explore partnership</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="events" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Understanding Anxiety", "Youth Mental Health", "Grief Support Circle"].map((event, index) => (
                <Card key={event} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{event}</CardTitle>
                    <CardDescription>{index === 0 ? "Family session" : index === 1 ? "Workshop" : "Support group"}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p className="inline-flex items-center"><Calendar className="mr-2 size-4" />May {5 + index * 3}, 2024</p>
                    <p className="inline-flex items-center"><Clock className="mr-2 size-4" />{index === 1 ? "2:00 PM - 4:00 PM" : "6:00 PM - 7:30 PM"}</p>
                    <p className="inline-flex items-center"><MapPin className="mr-2 size-4" />{index === 0 ? "Zoom Session" : "Hybrid"}</p>
                    <Button className="mt-3 w-full">Register now</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="donate">
              <Card className="border-border">
                <CardContent className="flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Support sustainable mental health programs</h2>
                    <p className="mt-2 max-w-2xl text-muted-foreground">Your contribution directly supports peer circles, education resources, and underserved families.</p>
                  </div>
                  <Button className="px-8">Donate securely</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground">Every action creates ripples of hope</h2>
          <p className="mt-3 text-muted-foreground">When you join AURA, you help transform how communities approach mental health support.</p>
          <Button className="mt-6">Get in touch</Button>
        </div>
      </section>
    </div>
  )
}
