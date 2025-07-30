import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, MessageSquare, Clock, Globe, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and support",
      contact: "hello@auraethiopia.org",
      availability: "Response within 24 hours",
      color: "bg-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Telegram",
      description: "Quick questions and community chat",
      contact: "@AURA_MHP",
      availability: "Usually active 9 AM - 9 PM",
      color: "bg-[#3284FC]",
    },
    {
      icon: Phone,
      title: "Crisis Hotline",
      description: "Immediate mental health support",
      contact: "+251-911-123-456",
      availability: "24/7 Available",
      color: "bg-red-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "In-person meetings and sessions",
      contact: "Bole, Addis Ababa, Ethiopia",
      availability: "By appointment only",
      color: "bg-green-500",
    },
  ]

  const teamContacts = [
    {
      name: "Dr. Rediet Feleke",
      role: "Founder & Medical Director",
      email: "rediet@auraethiopia.org",
      telegram: "@red8_fe",
      instagram: "@red8_fe",
      specialties: ["Clinical Psychology", "Community Mental Health", "Youth Programs"],
    },
    {
      name: "Simret G. Dessie",
      role: "Community Outreach Coordinator",
      email: "simret@auraethiopia.org",
      telegram: "@lunashine12",
      specialties: ["Community Engagement", "Program Development", "Cultural Sensitivity"],
    },
    {
      name: "Messeret Gossa",
      role: "Program Development Specialist",
      email: "messeret@auraethiopia.org",
      telegram: "@mesigosa",
      specialties: ["Program Design", "Training Development", "Research"],
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", type: "General Office Hours" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", type: "Community Programs" },
    { day: "Sunday", hours: "Closed", type: "Rest Day" },
    { day: "Emergency", hours: "24/7", type: "Crisis Support Available" },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're here to listen, support, and connect. Reach out to us through any of these channels – your mental
            wellness matters to us.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that feels most comfortable for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mr-4`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription className="text-gray-600">{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="text-lg font-semibold text-gray-900">{method.contact}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#31960F]" />
                      <span>{method.availability}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                    {method.title === "Email Us" && "Send Email"}
                    {method.title === "Telegram" && "Open Telegram"}
                    {method.title === "Crisis Hotline" && "Call Now"}
                    {method.title === "Visit Us" && "Get Directions"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair">Send Us a Message</CardTitle>
              <CardDescription className="text-lg">
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" className="rounded-full" />
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
                    <Label htmlFor="reason">Reason for Contact *</Label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
                      <option value="">Select a reason</option>
                      <option value="support">Need Mental Health Support</option>
                      <option value="volunteer">Volunteer Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media">Media/Press Inquiry</option>
                      <option value="feedback">Feedback/Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="Brief subject line" className="rounded-full" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="rounded-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded" />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to AURA's privacy policy and consent to being contacted about my inquiry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <Label htmlFor="newsletter" className="text-sm">
                      I'd like to receive updates about AURA's programs and mental health resources
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4"
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours. For urgent matters, please use our crisis hotline.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="section-padding bg-[#FFFFF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect directly with our team members for specific inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamContacts.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-3xl hover-glow bg-white text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{member.name}</h3>
                  <Badge className="bg-[#31960F] text-white mb-4">{member.role}</Badge>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{member.telegram}</span>
                    </div>
                    {member.instagram && (
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Instagram className="w-4 h-4 mr-2" />
                        <span>{member.instagram}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="section-padding bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-[#31960F]" />
                  Office Hours
                </CardTitle>
                <CardDescription>When you can reach us for different types of support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <div className="font-medium text-gray-900">{schedule.day}</div>
                        <div className="text-sm text-gray-600">{schedule.type}</div>
                      </div>
                      <div className="font-semibold text-[#31960F]">{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location & Social */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#31960F]" />
                  Location & Social
                </CardTitle>
                <CardDescription>Find us online and in person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <h4 className="font-medium text-gray-900 mb-2">Physical Address</h4>
                    <p className="text-gray-600">
                      Bole, Addis Ababa, Ethiopia
                      <br />
                      <span className="text-sm">(Exact address provided upon appointment scheduling)</span>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-[#3284FC] hover:bg-[#2A73E3] text-white rounded-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Telegram
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button size="sm" className="bg-[#0077B5] hover:bg-[#005885] text-white rounded-full">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-[#31960F] to-[#3284FC] rounded-2xl text-white">
                    <div className="flex items-center mb-2">
                      <Globe className="w-5 h-5 mr-2" />
                      <h4 className="font-medium">Language Support</h4>
                    </div>
                    <p className="text-white/90 text-sm">
                      We provide support in Amharic, English, and Oromo. Let us know your preferred language when
                      contacting us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Phone className="w-16 h-16 mx-auto mb-4 text-white" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">In Case of Emergency</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you or someone you know is in immediate danger or having thoughts of self-harm, please reach out for help
            immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Ethiopian Mental Health Hotline</h3>
              <div className="text-3xl font-bold mb-2">922</div>
              <p className="text-white/80 text-sm">24/7 Crisis Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Alternative Emergency Line</h3>
              <div className="text-3xl font-bold mb-2">907</div>
              <p className="text-white/80 text-sm">Secondary Crisis Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">AURA Crisis Line</h3>
              <div className="text-xl font-bold mb-2">+251-911-123-456</div>
              <p className="text-white/80 text-sm">Direct Crisis Support</p>
            </div>
          </div>
          <p className="text-white/80">
            Remember: You are not alone. Help is always available, and your life has value.
          </p>
        </div>
      </section>
    </div>
  )
}
