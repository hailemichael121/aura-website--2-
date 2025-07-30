"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Send, Shield, Eye, Clock, MessageCircle, Lock } from "lucide-react"

export default function ConfessionsPage() {
  const [confession, setConfession] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // TODO: Replace with real data from Supabase
  const recentConfessions = [
    {
      id: 1,
      content:
        "I've been struggling with anxiety for months but finally decided to seek help. Taking that first step felt impossible, but I'm glad I did. To anyone reading this - you're braver than you think.",
      timeAgo: "2 hours ago",
      hearts: 23,
      replies: 5,
      category: "Anxiety",
    },
    {
      id: 2,
      content:
        "Some days I feel like I'm drowning in my own thoughts. But today I realized that it's okay to not be okay. I'm learning to be gentle with myself and that's progress too.",
      timeAgo: "5 hours ago",
      hearts: 45,
      replies: 12,
      category: "Self-Care",
    },
    {
      id: 3,
      content:
        "I lost my job last month and it triggered my depression. But this community has shown me that setbacks don't define us. I'm slowly rebuilding, one day at a time.",
      timeAgo: "1 day ago",
      hearts: 67,
      replies: 18,
      category: "Depression",
    },
    {
      id: 4,
      content:
        "To my younger self: the pain you're feeling is valid, but it won't last forever. You will find people who understand you, and you will learn to love yourself.",
      timeAgo: "2 days ago",
      hearts: 89,
      replies: 24,
      category: "Recovery",
    },
    {
      id: 5,
      content:
        "I've been clean for 6 months now. Every day is still a choice, but I'm choosing myself and my future. If you're struggling with addiction, please know that recovery is possible.",
      timeAgo: "3 days ago",
      hearts: 156,
      replies: 34,
      category: "Addiction",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!confession.trim()) return

    setIsSubmitting(true)

    // TODO: Submit to Supabase
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
    setConfession("")

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7E00E6] via-[#3284FC] to-[#00B089] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Anonymous Confessions</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Share your story safely and anonymously. Sometimes the heaviest burdens become lighter when shared with
              understanding hearts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>Judgment-Free</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="share" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
                <TabsTrigger
                  value="share"
                  className="rounded-full data-[state=active]:bg-[#7E00E6] data-[state=active]:text-white"
                >
                  Share Your Story
                </TabsTrigger>
                <TabsTrigger
                  value="read"
                  className="rounded-full data-[state=active]:bg-[#7E00E6] data-[state=active]:text-white"
                >
                  Read & Support
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="share" className="space-y-8">
              <Card className="max-w-2xl mx-auto border-0 shadow-2xl rounded-3xl bg-white dark:bg-gray-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Share Anonymously</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Your identity is completely protected. Share what's on your heart.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Thank you for sharing 💙
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Your confession has been shared anonymously. You've taken a brave step.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          What's on your heart? (Optional)
                        </label>
                        <Input
                          placeholder="e.g., Anxiety, Recovery, Family, etc."
                          className="rounded-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Story *
                        </label>
                        <Textarea
                          value={confession}
                          onChange={(e) => setConfession(e.target.value)}
                          placeholder="Share your thoughts, feelings, struggles, victories, or anything you need to express. This is a safe space..."
                          className="min-h-[200px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-2xl resize-none"
                          required
                        />
                        <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {confession.length}/2000 characters
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
                        <div className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <div className="text-sm text-blue-800 dark:text-blue-300">
                            <p className="font-medium mb-1">Your Privacy is Protected</p>
                            <p>
                              No personal information is collected. Your confession will be completely anonymous and
                              cannot be traced back to you.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !confession.trim()}
                        className="w-full bg-gradient-to-r from-[#7E00E6] to-[#3284FC] hover:from-[#6B00C7] hover:to-[#2A73E3] text-white rounded-full py-4 font-semibold text-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sharing Anonymously...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-5 h-5 mr-2" />
                            Share Anonymously
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="read" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Anonymous Confessions</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Read, support, and find comfort in shared experiences
                </p>
              </div>

              <div className="grid gap-6 max-w-4xl mx-auto">
                {recentConfessions.map((item) => (
                  <Card key={item.id} className="border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800 hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.timeAgo}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{item.content}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Heart className="w-4 h-4 mr-1" />
                            {item.hearts}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {item.replies}
                          </Button>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Eye className="w-4 h-4 mr-1" />
                          Anonymous
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                  Load More Stories
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-gradient-to-r from-[#00B089] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">You Are Not Alone</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every story shared here represents courage, hope, and the human spirit's resilience. Thank you for being
            part of this healing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#00B089] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              Get Professional Help
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#00B089] font-semibold px-8 py-4 bg-transparent rounded-full"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
