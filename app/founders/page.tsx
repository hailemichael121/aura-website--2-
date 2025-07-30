import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  MessageCircle,
  Award,
  Heart,
  Users,
  Target,
  Mail,
  MapPin,
  Calendar,
  BookOpen,
  Stethoscope,
} from "lucide-react"

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Meet Our Founders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Visionary leaders dedicated to transforming mental health care in Ethiopia through compassion, innovation,
              and community-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Founder - Dr. Rediet Feleke */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-6xl mx-auto border-0 shadow-2xl rounded-3xl bg-white dark:bg-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Photo and Basic Info */}
                <div className="text-center lg:text-left">
                  <div className="relative mb-8">
                    <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-3xl flex items-center justify-center shadow-2xl">
                      <div className="text-white text-8xl font-bold">RF</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FFE066] rounded-full flex items-center justify-center shadow-lg">
                      <Stethoscope className="w-10 h-10 text-[#00B089]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      Dr. Rediet Feleke
                    </h2>
                    <p className="text-xl text-[#00B089] dark:text-[#4ADE80] font-semibold">
                      Founder & Medical Director
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <Badge className="bg-[#00B089] text-white">Medical Student</Badge>
                      <Badge variant="outline">Asela University</Badge>
                      <Badge variant="outline">Mental Health Advocate</Badge>
                      <Badge className="bg-[#FFE066] text-black">Highly Honored</Badge>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                      <a href="https://www.instagram.com/red8_fe" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                          <Instagram className="w-4 h-4 mr-2" />
                          @red8_fe
                        </Button>
                      </a>
                      <a href="https://t.me/red8_fe" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          @red8_fe
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="space-y-8">
                  {/* Biography */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-[#00B089]" />
                      Biography
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      <p>
                        Dr. Rediet Feleke is a passionate medical student at Asela University with an unwavering
                        commitment to bridging mental health gaps for underserved communities across Ethiopia. Her
                        journey into mental health advocacy began during her early medical training when she witnessed
                        firsthand the profound impact of untreated mental health conditions on individuals and families.
                      </p>
                      <p>
                        As a highly honored student, Rediet has consistently demonstrated academic excellence while
                        maintaining a deep connection to community service. Her vision for AURA emerged from her belief
                        that mental health care should be accessible, culturally sensitive, and community-driven.
                      </p>
                      <p>
                        Beyond her medical studies, Rediet is recognized as an emerging leader in Ethiopia's healthcare
                        landscape, combining clinical knowledge with innovative approaches to mental health education
                        and support.
                      </p>
                    </div>
                  </div>

                  {/* Vision & Mission */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-2 text-[#3284FC]" />
                      Personal Mission
                    </h3>
                    <div className="bg-gradient-to-r from-[#00B089]/10 to-[#3284FC]/10 dark:from-[#00B089]/20 dark:to-[#3284FC]/20 rounded-2xl p-6">
                      <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
                        "I believe that every person deserves access to mental health support that honors their dignity,
                        respects their culture, and empowers their journey toward healing. Through AURA, we're not just
                        providing services – we're building a movement that transforms how Ethiopia approaches mental
                        wellness."
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-[#FFE066]" />
                      Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-[#00B089] rounded-full mr-2"></div>
                          <span className="font-semibold text-gray-900 dark:text-white">Academic Excellence</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Highly honored medical student at Asela University
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-[#3284FC] rounded-full mr-2"></div>
                          <span className="font-semibold text-gray-900 dark:text-white">Community Leadership</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Founded AURA to address mental health gaps
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-[#FFE066] rounded-full mr-2"></div>
                          <span className="font-semibold text-gray-900 dark:text-white">Advocacy Impact</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Recognized for mental health awareness initiatives
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-[#FF9500] rounded-full mr-2"></div>
                          <span className="font-semibold text-gray-900 dark:text-white">Innovation</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Pioneering culturally-sensitive mental health approaches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Co-Founders & Team */}
      <section className="py-20 bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF] dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Co-Founders & Core Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The dedicated individuals who help bring AURA's vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Simret G. Dessie */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white dark:bg-gray-800 hover-glow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white text-4xl font-bold">SD</div>
                </div>
                <CardTitle className="text-2xl">Simret G. Dessie</CardTitle>
                <CardDescription className="text-lg text-[#00B089] dark:text-[#4ADE80] font-semibold">
                  Community Outreach Coordinator
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Community Engagement</Badge>
                  <Badge variant="outline">Program Development</Badge>
                  <Badge variant="outline">Cultural Liaison</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Simret leads our community engagement initiatives, building bridges between AURA and Ethiopian
                  communities. Her deep understanding of local cultures and languages makes her instrumental in creating
                  culturally appropriate mental health programs.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-[#00B089]" />
                    <span>Based in Addis Ababa</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-[#3284FC]" />
                    <span>Community Networks Specialist</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  @lunashine12
                </Button>
              </CardContent>
            </Card>

            {/* Messeret Gossa */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white dark:bg-gray-800 hover-glow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#7E00E6] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white text-4xl font-bold">MG</div>
                </div>
                <CardTitle className="text-2xl">Messeret Gossa</CardTitle>
                <CardDescription className="text-lg text-[#7E00E6] dark:text-[#A855F7] font-semibold">
                  Program Development Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Program Design</Badge>
                  <Badge variant="outline">Research</Badge>
                  <Badge variant="outline">Innovation</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Messeret designs and implements innovative mental health programs tailored to Ethiopian contexts. Her
                  expertise in program development ensures that AURA's initiatives are both effective and culturally
                  relevant.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <BookOpen className="w-4 h-4 mr-2 text-[#7E00E6]" />
                    <span>Mental Health Program Designer</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                    <Target className="w-4 h-4 mr-2 text-[#3284FC]" />
                    <span>Evidence-Based Practice Advocate</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  @mesigosa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The AURA Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">How a vision became a movement</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#00B089]/10 to-[#3284FC]/10 dark:from-[#00B089]/20 dark:to-[#3284FC]/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-[#00B089] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Beginning (2024)</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    AURA was born from Dr. Rediet's observations during her medical training at Asela University. She
                    witnessed the profound gap between mental health needs and available resources in Ethiopian
                    communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#7E00E6]/10 to-[#3284FC]/10 dark:from-[#7E00E6]/20 dark:to-[#3284FC]/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-[#7E00E6] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Building the Team</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Recognizing that sustainable change requires diverse expertise, Dr. Rediet brought together
                    passionate individuals like Simret and Messeret, each contributing unique skills and perspectives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFE066]/20 to-[#FF9500]/20 dark:from-[#FFE066]/30 dark:to-[#FF9500]/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-[#FF9500] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Mission Evolves</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    What started as a local initiative has grown into a comprehensive approach to mental health,
                    combining clinical expertise with community wisdom and cultural sensitivity.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/images/aura-stationery.jpg"
                alt="AURA Founding Documents"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFE066] rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-12 h-12 text-[#00B089]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Connect */}
      <section className="py-20 bg-gradient-to-r from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Connect with Our Founders</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Have questions about AURA's mission? Want to collaborate? Our founders are always open to meaningful
            conversations about mental health advocacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-white/80">founders@aura-ethiopia.org</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-sm text-white/80">@aura_ethiopia</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-white/80">Bole, Addis Ababa</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#00B089] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/join-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00B089] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
