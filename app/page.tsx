"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, MessageSquare, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import HeroIllustration from "@/components/hero-illustration"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Mental Wellness for All
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Together, we build understanding, support recovery, and raise awareness about mental wellness in our
                  communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="/get-help" className="flex items-center gap-2">
                    Get Help Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More <BookOpen className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">1000+ community members</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <HeroIllustration />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How We Support You</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive mental health support through community, resources, and professional guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Peer Support",
                description: "Connect with others who understand your journey",
                color: "text-red-500",
                bgColor: "bg-red-50 dark:bg-red-900/20",
              },
              {
                icon: Users,
                title: "Community",
                description: "Join a supportive network of individuals and families",
                color: "text-blue-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                icon: BookOpen,
                title: "Resources",
                description: "Access educational materials and self-help tools",
                color: "text-green-500",
                bgColor: "bg-green-50 dark:bg-green-900/20",
              },
              {
                icon: MessageSquare,
                title: "Professional Help",
                description: "Connect with qualified mental health professionals",
                color: "text-purple-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Community Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Together, we're making a difference in mental health awareness and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "1000+", label: "Community Members", icon: Users },
              { number: "500+", label: "Lives Supported", icon: Heart },
              { number: "50+", label: "Support Groups", icon: MessageSquare },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our community today and take the first step towards better mental wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="/join-us" className="flex items-center gap-2">
                  Join Our Community <Users className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <MessageSquare className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
