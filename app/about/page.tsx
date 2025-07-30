import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, MessageCircle, Award, Heart, Users, Target, Shield, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AURA</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Alliance for Understanding Recovery & Awareness - Building bridges to mental wellness across Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                AURA was born from a simple yet powerful belief: mental wellness is a right, not a luxury. Founded in
                Bole, Addis Ababa, our organization emerged from the recognition that Ethiopia's mental health landscape
                needed a community-driven, culturally sensitive approach.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We started as a small group of passionate advocates and have grown into a nationwide network of mental
                health professionals, students, and community members united by a common mission: to break the silence
                around mental health and create accessible support systems for all Ethiopians.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-[#00B089] text-white">Est. 2024</Badge>
                <Badge
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  Bole, Addis Ababa
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  Community-Driven
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/community-support.png"
                alt="AURA Community Support"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Centers Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Help Centers Near You</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find mental health support centers across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Container */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6">
              <div className="w-full h-96 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simple Map Illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
                  {/* Map markers */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-3/4 left-2/3 w-4 h-4 bg-red-500 rounded-full animate-pulse delay-700"></div>

                  {/* Location labels */}
                  <div className="absolute top-1/4 left-1/3 transform translate-x-6 -translate-y-2">
                    <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium text-gray-900 dark:text-white shadow-lg">
                      Addis Ababa
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform translate-x-6 -translate-y-2">
                    <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium text-gray-900 dark:text-white shadow-lg">
                      Bahir Dar
                    </div>
                  </div>
                  <div className="absolute top-3/4 left-2/3 transform translate-x-6 -translate-y-2">
                    <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium text-gray-900 dark:text-white shadow-lg">
                      Hawassa
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#00B089] mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Centers List */}
            <div className="space-y-4">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#00B089] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">AURA Main Center</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Bole, Addis Ababa</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        24/7 Crisis Support • Individual Counseling • Group Therapy
                      </p>
                      <Button size="sm" className="mt-3 bg-[#00B089] hover:bg-[#00A078] text-white">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3284FC] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Youth Support Hub</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Piazza, Addis Ababa</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Youth Programs • Peer Support • Educational Workshops
                      </p>
                      <Button size="sm" className="mt-3 bg-[#3284FC] hover:bg-[#2A73E3] text-white">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#7E00E6] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        Family Wellness Center
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Kazanchis, Addis Ababa</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Family Therapy • Couples Counseling • Child Psychology
                      </p>
                      <Button size="sm" className="mt-3 bg-[#7E00E6] hover:bg-[#6B00C7] text-white">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Visionary leadership driving change in mental health advocacy
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mb-6">
                    <div className="text-white text-6xl font-bold">RF</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                      <a href="https://www.instagram.com/red8_fe" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent"
                        >
                          <Instagram className="w-4 h-4 mr-2" />
                          @red8_fe
                        </Button>
                      </a>
                      <a href="https://t.me/red8_fe" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          @red8_fe
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dr. Rediet Feleke</h3>
                  <p className="text-lg text-[#00B089] font-semibold mb-4">Founder & Medical Director</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-[#00B089] text-white">Medical Student</Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                      Asela University
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                      Mental Health Advocate
                    </Badge>
                    <Badge className="bg-[#FFE066] text-black">Highly Honored</Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Dr. Rediet Feleke is a passionate medical student at Asela University with a deep commitment to
                    bridging mental health gaps for underserved communities. Her vision for AURA stems from her
                    firsthand experience witnessing the mental health challenges faced by Ethiopian youth and families.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    As a highly honored student and emerging leader in the medical field, Rediet combines clinical
                    knowledge with community-centered approaches to create sustainable mental health solutions. Her
                    leadership has been instrumental in establishing AURA as a trusted voice in Ethiopia's mental health
                    landscape.
                  </p>

                  <div className="flex items-center space-x-4">
                    <Award className="w-5 h-5 text-[#FFE066]" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Recognized for outstanding contributions to community mental health
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Dedicated professionals working together for mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">SD</div>
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Simret G. Dessie</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Community Outreach Coordinator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Leading community engagement initiatives and building connections across Ethiopian communities.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  @lunashine12
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">MG</div>
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Messeret Gossa</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Program Development Specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designing and implementing innovative mental health programs tailored to Ethiopian contexts.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  @mesigosa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  A Ethiopia where mental wellness is accessible to all, stigma is eliminated, and every individual has
                  the support they need to thrive. We envision communities where mental health conversations are
                  normalized and integrated into everyday life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B089] to-[#3284FC] rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To foster understanding, recovery, and awareness around mental health through community-driven
                  initiatives, education, and advocacy. We create safe spaces for healing while building a network of
                  support that spans across Ethiopia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Space Pledge */}
      <section className="py-20 bg-gradient-to-r from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Safe Space Pledge</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-xl leading-relaxed mb-6">
              "We commit to creating and maintaining spaces where every individual feels safe, heard, and valued. AURA
              operates on principles of zero judgment, complete confidentiality, and unconditional support."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Inclusive</h4>
                <p className="text-sm text-white/80">All backgrounds, identities, and experiences welcome</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Confidential</h4>
                <p className="text-sm text-white/80">Your privacy and trust are our highest priorities</p>
              </div>
              <div>
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Supportive</h4>
                <p className="text-sm text-white/80">Compassionate care in every interaction</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-white/90">
            Your voice matters here. Your healing journey is valid. You are not alone.
          </p>
        </div>
      </section>

      {/* Logo Story */}
      <section className="py-20 bg-[#FFFFF8] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The Story Behind Our Logo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Symbolizing connection, growth, and community</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/aura-logo-variations.jpg"
                alt="AURA Logo Variations"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our logo represents the interconnected nature of mental wellness. The star-like design symbolizes
                individuals coming together, supporting each other, and creating a network of care that radiates outward
                into communities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The green and blue colors reflect growth, healing, trust, and hope - core values that guide everything
                we do at AURA. Each point of the star represents a different aspect of our mission: understanding,
                recovery, awareness, community, and support.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Created with intention and care, our visual identity reflects our commitment to being a beacon of hope
                in Ethiopia's mental health landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
