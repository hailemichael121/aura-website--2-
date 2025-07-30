import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Home, MessageSquare, Heart } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const helpfulLinks = [
    { name: "Get Help", href: "/get-help", icon: Heart, description: "Find mental health support" },
    { name: "Resources", href: "/resources", icon: Search, description: "Browse articles and guides" },
    { name: "Community", href: "/forum", icon: MessageSquare, description: "Join our forum" },
    { name: "Contact Us", href: "/contact", icon: MessageSquare, description: "Reach out for support" },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            {/* AURA Logo */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <div className="text-white font-bold text-3xl">A</div>
            </div>

            {/* 404 Message */}
            <div className="mb-8">
              <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-200 mb-4">404</h1>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for doesn't exist, but that's okay. Sometimes we all need to find a new path.
              </p>
            </div>

            {/* Helpful Message */}
            <div className="bg-gradient-to-r from-[#31960F] to-[#3284FC] rounded-3xl p-6 mb-8 text-white">
              <h3 className="font-semibold text-lg mb-2">You're Not Lost</h3>
              <p className="text-white/90">
                Just like in life, sometimes we take wrong turns. What matters is finding your way back to support and
                healing.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {helpfulLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Card className="border-0 shadow-lg rounded-2xl hover-glow bg-white h-full">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-3">
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{link.name}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Main Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full px-8"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Button>
              </Link>

              <Link href="/get-help">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#31960F] text-[#31960F] hover:bg-[#31960F] hover:text-white rounded-full px-8 bg-transparent"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get Support
                </Button>
              </Link>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-red-800 text-sm">
                <strong>Need immediate help?</strong> Call our crisis line: <strong>+251-911-123-456</strong> or
                Ethiopian Mental Health Hotline: <strong>922</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
