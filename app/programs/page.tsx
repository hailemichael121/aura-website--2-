import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Heart, Brain, MapPin, Clock, Video, MessageSquare } from "lucide-react"

export default function ProgramsPage() {
  // TODO: Replace with real data from Supabase
  const programs = [
    {
      id: 1,
      title: "Community Therapy Circles",
      description: "Weekly support groups facilitated by trained volunteers in local communities.",
      category: "Support Groups",
      frequency: "Weekly",
      location: "Various Communities",
      participants: "8-12 people",
      icon: Users,
      color: "bg-green-500",
      nextSession: "Every Thursday, 6:00 PM",
    },
    {
      id: 2,
      title: "Youth Empowerment Workshops",
      description: "Self-expression & coping strategies for high school and university students.",
      category: "Youth Programs",
      frequency: "Bi-weekly",
      location: "Schools & Universities",
      participants: "15-25 students",
      icon: Brain,
      color: "bg-blue-500",
      nextSession: "Saturday, 2:00 PM",
    },
    {
      id: 3,
      title: "Mental Health First Aid",
      description: "Training everyday people to spot early signs and offer empathetic help.",
      category: "Training",
      frequency: "Monthly",
      location: "AURA Center, Bole",
      participants: "20-30 people",
      icon: Heart,
      color: "bg-red-500",
      nextSession: "May 15, 9:00 AM",
    },
    {
      id: 4,
      title: "Rural Outreach Missions",
      description: "Bringing care and education to places often forgotten.",
      category: "Outreach",
      frequency: "Quarterly",
      location: "Rural Communities",
      participants: "Entire communities",
      icon: MapPin,
      color: "bg-purple-500",
      nextSession: "June 2024",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Family Time: Understanding Anxiety",
      date: "May 5, 2024",
      time: "7:00 PM",
      type: "Zoom Session",
      description: "Join Dr. Rediet for an interactive session on managing anxiety in daily life.",
      registrations: 45,
      maxCapacity: 100,
    },
    {
      id: 2,
      title: "Youth Workshop: Building Resilience",
      date: "May 8, 2024",
      time: "2:00 PM",
      type: "In-Person",
      description: "Practical tools for young people to build emotional resilience.",
      registrations: 18,
      maxCapacity: 25,
    },
    {
      id: 3,
      title: "Community Circle: Grief Support",
      date: "May 12, 2024",
      time: "6:00 PM",
      type: "Hybrid",
      description: "A safe space to share and heal together through loss.",
      registrations: 12,
      maxCapacity: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Healing Work</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health support through community-driven programs designed for healing, growth, and
            empowerment.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each program is designed with cultural sensitivity and community needs in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program) => (
              <Card key={program.id} className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mr-4`}>
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {program.category}
                      </Badge>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#31960F]" />
                      <span>
                        {program.frequency} • {program.nextSession}
                      </span>
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
                  <div className="flex gap-2">
                    <Link href={`/programs/${program.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                        Learn More
                      </Button>
                    </Link>
                    <Link href={`/programs/register?program=${encodeURIComponent(program.title)}`}>
                      <Button variant="outline" className="rounded-full bg-transparent px-6">
                        Register
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join us for these special sessions and workshops</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-0 shadow-lg rounded-3xl hover-glow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#31960F] text-white">{event.type}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#31960F]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-[#31960F]" />
                      <span>
                        {event.registrations}/{event.maxCapacity} registered
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-[#31960F] to-[#3284FC] h-2 rounded-full"
                      style={{ width: `${(event.registrations / event.maxCapacity) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex gap-2">
                    <Link href="/programs/register" className="flex-1">
                      <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white rounded-full">
                        <Video className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full px-8"
              >
                View Full Calendar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Programs?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking support, want to volunteer, or interested in training, there's a place for you in our
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-us">
              <Button
                size="lg"
                className="bg-white text-[#31960F] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Become a Volunteer
              </Button>
            </Link>
            <Link href="/get-help">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
