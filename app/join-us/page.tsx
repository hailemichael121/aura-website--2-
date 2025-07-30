import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Heart, Handshake, DollarSign, Calendar, MapPin, Clock, Star } from "lucide-react"

export default function JoinUsPage() {
  const opportunities = [
    {
      id: 1,
      title: "Volunteer Counselor",
      description: "Provide one-on-one support to community members seeking help",
      commitment: "4-6 hours/week",
      requirements: ["Basic counseling training", "Empathy and patience", "Reliable internet connection"],
      icon: Heart,
      color: "bg-green-500",
      spots: 15,
    },
    {
      id: 2,
      title: "Community Outreach Coordinator",
      description: "Help organize and facilitate community events and workshops",
      commitment: "6-8 hours/week",
      requirements: ["Event planning experience", "Strong communication skills", "Local community connections"],
      icon: Users,
      color: "bg-blue-500",
      spots: 8,
    },
    {
      id: 3,
      title: "Content Creator",
      description: "Develop educational materials, blog posts, and social media content",
      commitment: "3-5 hours/week",
      requirements: ["Writing or design skills", "Mental health awareness", "Creative mindset"],
      icon: Star,
      color: "bg-purple-500",
      spots: 10,
    },
    {
      id: 4,
      title: "Peer Support Specialist",
      description: "Share your recovery journey to inspire and guide others",
      commitment: "2-4 hours/week",
      requirements: ["Personal recovery experience", "Willingness to share story", "Completed peer training"],
      icon: Handshake,
      color: "bg-orange-500",
      spots: 12,
    },
  ]

  const partnershipTypes = [
    {
      title: "Healthcare Organizations",
      description: "Collaborate with hospitals, clinics, and mental health facilities",
      benefits: ["Referral network", "Professional training", "Resource sharing"],
      icon: "🏥",
    },
    {
      title: "Educational Institutions",
      description: "Partner with schools and universities for student mental health",
      benefits: ["Campus programs", "Student workshops", "Research collaboration"],
      icon: "🎓",
    },
    {
      title: "Faith Communities",
      description: "Work with religious organizations to integrate mental health support",
      benefits: ["Community trust", "Cultural sensitivity", "Spiritual care integration"],
      icon: "🕊️",
    },
    {
      title: "Corporate Partners",
      description: "Engage businesses in workplace mental health initiatives",
      benefits: ["Employee wellness", "Funding opportunities", "Professional expertise"],
      icon: "🏢",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Be Part of the Movement</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Whether you're a volunteer, donor, mental health professional, or just a caring soul — there's space for you
            at AURA.
          </p>
        </div>
      </section>

      {/* Join Options Tabs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="volunteer" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/50 backdrop-blur-sm rounded-full p-2">
              <TabsTrigger
                value="volunteer"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Users className="w-4 h-4 mr-2" />
                Volunteer
              </TabsTrigger>
              <TabsTrigger
                value="partner"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Handshake className="w-4 h-4 mr-2" />
                Partner With Us
              </TabsTrigger>
              <TabsTrigger
                value="donate"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Donate
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Join Events
              </TabsTrigger>
            </TabsList>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
                <p className="text-lg text-gray-600">Make a direct impact in your community's mental health</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {opportunities.map((opportunity) => (
                  <Card
                    key={opportunity.id}
                    className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 ${opportunity.color} rounded-full flex items-center justify-center mr-4`}
                        >
                          <opportunity.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                            <Badge className="bg-[#FFE066] text-black">{opportunity.spots} spots</Badge>
                          </div>
                          <CardDescription className="text-gray-600 mt-2">{opportunity.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-[#31960F]" />
                          <span>Commitment: {opportunity.commitment}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {opportunity.requirements.map((req, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-[#31960F] rounded-full mr-2"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Volunteer Application Form */}
              <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Volunteer Application</CardTitle>
                  <CardDescription>
                    Tell us about yourself and how you'd like to contribute to AURA's mission
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" placeholder="Your full name" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+251-xxx-xxx-xxx" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telegram">Telegram Handle</Label>
                        <Input id="telegram" placeholder="@yourusername" className="rounded-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Preferred Volunteer Role *</Label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
                        <option value="">Select a role</option>
                        <option value="counselor">Volunteer Counselor</option>
                        <option value="outreach">Community Outreach Coordinator</option>
                        <option value="content">Content Creator</option>
                        <option value="peer">Peer Support Specialist</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        placeholder="Tell us about your background, skills, or experience relevant to mental health support..."
                        rows={4}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to volunteer with AURA? *</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Share your motivation for joining our mission..."
                        rows={4}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Textarea
                        id="availability"
                        placeholder="When are you available? (days, times, frequency)"
                        rows={3}
                        className="rounded-2xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Partner Tab */}
            <TabsContent value="partner" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
                <p className="text-lg text-gray-600">
                  Collaborate with us to expand mental health support across Ethiopia
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {partnershipTypes.map((partnership, index) => (
                  <Card key={index} className="border-0 shadow-lg rounded-3xl hover-glow bg-white">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{partnership.icon}</div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">{partnership.title}</h3>
                        <p className="text-gray-600">{partnership.description}</p>
                      </div>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium text-gray-900">Partnership Benefits:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {partnership.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-[#31960F] rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-[#31960F] hover:bg-[#2A7F0C] text-white rounded-full">
                        Explore Partnership
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Partnership Contact Form */}
              <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Partnership Inquiry</CardTitle>
                  <CardDescription>
                    Let's discuss how we can work together to improve mental health in our communities
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="orgName">Organization Name *</Label>
                        <Input id="orgName" placeholder="Your organization" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input id="contactName" placeholder="Your name" className="rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="partnerEmail">Email Address *</Label>
                        <Input
                          id="partnerEmail"
                          type="email"
                          placeholder="contact@organization.com"
                          className="rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnershipType">Partnership Type</Label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
                          <option value="">Select partnership type</option>
                          <option value="healthcare">Healthcare Organization</option>
                          <option value="education">Educational Institution</option>
                          <option value="faith">Faith Community</option>
                          <option value="corporate">Corporate Partner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="partnershipGoals">Partnership Goals *</Label>
                      <Textarea
                        id="partnershipGoals"
                        placeholder="What would you like to achieve through this partnership?"
                        rows={4}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resources">Resources You Can Offer</Label>
                      <Textarea
                        id="resources"
                        placeholder="What resources, expertise, or support can your organization provide?"
                        rows={4}
                        className="rounded-2xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4"
                    >
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Donate Tab */}
            <TabsContent value="donate" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
                <p className="text-lg text-gray-600">
                  Your donation helps us provide free mental health support to those who need it most
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Donation Impact */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-gray-900">Your Impact</h3>

                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#B8E6CC] to-[#A8D8EA]">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="text-2xl mr-3">💰</div>
                          <h4 className="font-semibold text-lg">$25/month</h4>
                        </div>
                        <p className="text-gray-700">Provides one counseling session for someone in need</p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFE8F5] to-[#F0E8FF]">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="text-2xl mr-3">📚</div>
                          <h4 className="font-semibold text-lg">$50/month</h4>
                        </div>
                        <p className="text-gray-700">
                          Funds educational materials and resources for a community workshop
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#E8F5FF] to-[#F0F8FF]">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="text-2xl mr-3">🏥</div>
                          <h4 className="font-semibold text-lg">$100/month</h4>
                        </div>
                        <p className="text-gray-700">Supports a full Family Time session for 50+ participants</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Donation Form */}
                <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Make a Donation</CardTitle>
                    <CardDescription>
                      Every contribution makes a difference in someone's mental health journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <Label>Donation Amount</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["$25", "$50", "$100", "$250"].map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant="outline"
                              className="rounded-full hover:bg-[#31960F] hover:text-white bg-transparent"
                            >
                              {amount}
                            </Button>
                          ))}
                        </div>
                        <Input placeholder="Custom amount" className="rounded-full" />
                      </div>

                      <div className="space-y-4">
                        <Label>Donation Type</Label>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            className="flex-1 bg-[#31960F] hover:bg-[#2A7F0C] text-white rounded-full"
                          >
                            Monthly
                          </Button>
                          <Button type="button" variant="outline" className="flex-1 rounded-full bg-transparent">
                            One-time
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="donorName">Full Name</Label>
                          <Input id="donorName" placeholder="Your name" className="rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="donorEmail">Email Address</Label>
                          <Input id="donorEmail" type="email" placeholder="your@email.com" className="rounded-full" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Leave a message of support..."
                          rows={3}
                          className="rounded-2xl"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4"
                      >
                        Donate Now
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        Your donation is secure and helps us continue providing free mental health support.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                <p className="text-lg text-gray-600">Join us for workshops, support groups, and community gatherings</p>
              </div>

              {/* TODO: This would be populated from the events table */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg rounded-3xl hover-glow bg-white">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">📅</div>
                      <Badge className="bg-[#31960F] text-white mb-2">Family Time</Badge>
                      <h3 className="font-semibold text-lg">Understanding Anxiety</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        May 5, 2024
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        7:00 PM - 8:30 PM
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Zoom Session
                      </div>
                    </div>
                    <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white rounded-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-3xl hover-glow bg-white">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🧠</div>
                      <Badge className="bg-[#7E00E6] text-white mb-2">Workshop</Badge>
                      <h3 className="font-semibold text-lg">Youth Mental Health</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        May 8, 2024
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        2:00 PM - 4:00 PM
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        AURA Center, Bole
                      </div>
                    </div>
                    <Button className="w-full bg-[#7E00E6] hover:bg-[#6B00C7] text-white rounded-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-3xl hover-glow bg-white">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🤝</div>
                      <Badge className="bg-[#FF6B6B] text-white mb-2">Support Group</Badge>
                      <h3 className="font-semibold text-lg">Grief Support Circle</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        May 12, 2024
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        6:00 PM - 7:30 PM
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Hybrid (In-person + Online)
                      </div>
                    </div>
                    <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Link href="/programs">
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                    View All Events
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Every Action Creates Ripples of Hope</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            When you join AURA, you're not just helping individuals – you're helping to transform how our entire
            community approaches mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#31960F] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
