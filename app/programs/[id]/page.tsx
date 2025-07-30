import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Video, MessageSquare } from "lucide-react"

interface Program {
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
  schedule: Array<{
    day: string
    time: string
    activity: string
  }>
}

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  // Mock program data - replace with actual API call
  const programs: Program[] = [
    {
      id: 1,
      title: "Community Therapy Circles",
      description: "Weekly support groups facilitated by trained volunteers in local communities.",
      fullDescription:
        "Our Community Therapy Circles provide a safe, supportive environment where individuals can share their experiences, learn coping strategies, and build meaningful connections with others who understand their journey. Led by trained volunteer facilitators, these circles focus on peer support, emotional healing, and practical mental health tools.",
      category: "Support Groups",
      frequency: "Weekly",
      location: "Various Communities",
      participants: "8-12 people",
      nextSession: "Every Thursday, 6:00 PM",
      duration: "90 minutes",
      requirements: [
        "Commitment to attend regularly",
        "Respect for confidentiality",
        "Willingness to participate in group discussions",
        "Open mind and supportive attitude",
      ],
      benefits: [
        "Peer support and understanding",
        "Learn practical coping strategies",
        "Build lasting friendships",
        "Reduce feelings of isolation",
        "Develop emotional resilience",
      ],
      schedule: [
        { day: "Thursday", time: "6:00 PM - 7:30 PM", activity: "Group Discussion & Support" },
        { day: "Thursday", time: "7:30 PM - 8:00 PM", activity: "Mindfulness & Reflection" },
      ],
    },
    {
      id: 2,
      title: "Youth Empowerment Workshops",
      description: "Self-expression & coping strategies for high school and university students.",
      fullDescription:
        "Designed specifically for young people aged 16-25, these workshops combine creative expression, peer learning, and practical mental health skills. We address the unique challenges faced by Ethiopian youth, including academic pressure, family expectations, and social transitions.",
      category: "Youth Programs",
      frequency: "Bi-weekly",
      location: "Schools & Universities",
      participants: "15-25 students",
      nextSession: "Saturday, 2:00 PM",
      duration: "2 hours",
      requirements: [
        "Age 16-25",
        "Student status (high school or university)",
        "Parental consent if under 18",
        "Commitment to workshop series",
      ],
      benefits: [
        "Develop healthy coping mechanisms",
        "Improve academic performance",
        "Build self-confidence",
        "Connect with peers",
        "Learn stress management",
      ],
      schedule: [
        { day: "Saturday", time: "2:00 PM - 3:00 PM", activity: "Creative Expression Session" },
        { day: "Saturday", time: "3:00 PM - 4:00 PM", activity: "Skill Building & Discussion" },
      ],
    },
  ]

  const program = programs.find((p) => p.id === Number.parseInt(params.id))

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/programs" className="inline-flex items-center text-[#31960F] hover:text-[#2A7F0C] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programs
        </Link>

        {/* Program Header */}
        <Card className="border-0 shadow-xl rounded-3xl bg-white mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-[#31960F] text-white">{program.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {program.duration}
              </div>
            </div>
            <CardTitle className="text-3xl font-playfair">{program.title}</CardTitle>
            <CardDescription className="text-lg text-gray-600">{program.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-[#31960F]" />
                <div>
                  <div className="font-medium">{program.frequency}</div>
                  <div className="text-xs">{program.nextSession}</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-[#31960F]" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-[#31960F]" />
                <span>{program.participants}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full flex-1">
                <Video className="w-4 h-4 mr-2" />
                Register Now
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Description */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white">
            <CardHeader>
              <CardTitle className="text-xl">About This Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{program.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white">
            <CardHeader>
              <CardTitle className="text-xl">Session Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {program.schedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">{session.day}</div>
                      <div className="text-sm text-gray-600">{session.activity}</div>
                    </div>
                    <div className="text-sm font-medium text-[#31960F]">{session.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white">
            <CardHeader>
              <CardTitle className="text-xl">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {program.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#31960F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-0 shadow-lg rounded-3xl bg-white">
            <CardHeader>
              <CardTitle className="text-xl">What You'll Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#3284FC] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Take the first step towards healing and growth. Our community is here to support you every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#31960F] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Register for This Program
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Contact Us First
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
