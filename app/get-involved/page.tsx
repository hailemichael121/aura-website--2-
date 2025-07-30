import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Heart,
  Calendar,
  BookOpen,
  Megaphone,
  HandHeart,
  GraduationCap,
  MessageSquare,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved with AURA</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our mission to transform mental health care in Ethiopia. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find the perfect way to contribute your skills and passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Peer Support Volunteer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B089] to-[#31960F] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Peer Support Volunteer</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Provide emotional support and guidance to community members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>5-10 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Remote & In-person</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Training provided</span>
                  </div>
                </div>
                <Button className="w-full bg-[#00B089] hover:bg-[#00A078] text-white">Apply Now</Button>
              </CardContent>
            </Card>

            {/* Community Outreach */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#3284FC] to-[#7E00E6] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Community Outreach</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Help spread awareness and organize community events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Flexible hours</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Various locations</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Event-based</span>
                  </div>
                </div>
                <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white">Apply Now</Button>
              </CardContent>
            </Card>

            {/* Content Creator */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#7E00E6] to-[#FF6B6B] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Content Creator</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Create educational content and resources for our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>3-5 hours/week</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span>Writing/Design skills</span>
                  </div>
                </div>
                <Button className="w-full bg-[#7E00E6] hover:bg-[#6B00C7] text-white">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AURA Advocates Program */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#FFE066] text-black mb-4">Featured Program</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                AURA Advocates Network
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Join our elite network of mental health advocates. This comprehensive program trains passionate
                individuals to become community leaders in mental health awareness and support.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B089] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Comprehensive Training</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      6-week intensive program covering mental health basics, crisis intervention, and community
                      engagement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B089] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Leadership Opportunities</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lead workshops, facilitate support groups, and represent AURA at community events
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B089] rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ongoing Support</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monthly supervision, continuing education, and peer support network
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="font-semibold text-red-800 dark:text-red-300">Application Deadline</span>
                </div>
                <p className="text-red-700 dark:text-red-300">May 5, 2024 - Don't miss this opportunity!</p>
              </div>

              <Button size="lg" className="bg-[#FFE066] text-black hover:bg-[#FFD700] font-semibold">
                Apply for Advocates Program
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/group-therapy.png"
                alt="AURA Advocates Training"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Collaborate with us to expand mental health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Healthcare Partnerships */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <HandHeart className="w-12 h-12 text-[#00B089] mb-4" />
                <CardTitle className="text-gray-900 dark:text-white">Healthcare Partnerships</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Partner with us to provide integrated mental health services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li>• Referral network development</li>
                  <li>• Joint training programs</li>
                  <li>• Resource sharing initiatives</li>
                  <li>• Community health campaigns</li>
                </ul>
                <Button className="w-full bg-[#00B089] hover:bg-[#00A078] text-white">Explore Partnership</Button>
              </CardContent>
            </Card>

            {/* Educational Partnerships */}
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-[#3284FC] mb-4" />
                <CardTitle className="text-gray-900 dark:text-white">Educational Partnerships</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Collaborate on mental health education and research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li>• Student internship programs</li>
                  <li>• Research collaborations</li>
                  <li>• Campus mental health initiatives</li>
                  <li>• Faculty exchange programs</li>
                </ul>
                <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white">Explore Partnership</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF] dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="peer-support">Peer Support Volunteer</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="content">Content Creation</option>
                    <option value="advocates">AURA Advocates Program</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tell us about yourself
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Share your background, experience, and why you want to get involved with AURA..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00B089] to-[#3284FC] hover:from-[#00A078] hover:to-[#2A73E3] text-white font-semibold py-3"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00B089] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">volunteer@aura-ethiopia.org</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#3284FC] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">+251 911 123 456</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#7E00E6] rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Message Us</h3>
              <p className="text-gray-600 dark:text-gray-300">@aura_ethiopia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
