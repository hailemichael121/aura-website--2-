"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Heart, Clock, Search, Plus, Eye, MessageCircleIcon, ThumbsUp } from "lucide-react"

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // TODO: Replace with real data from Supabase
  const forumCategories = [
    {
      id: 1,
      name: "General Support",
      description: "Share your experiences and support each other",
      posts: 156,
      members: 89,
      color: "bg-green-500",
      icon: Heart,
    },
    {
      id: 2,
      name: "Youth Corner",
      description: "A space for young people to connect and share",
      posts: 78,
      members: 45,
      color: "bg-blue-500",
      icon: Users,
    },
    {
      id: 3,
      name: "Family & Relationships",
      description: "Navigating mental health within family dynamics",
      posts: 92,
      members: 67,
      color: "bg-purple-500",
      icon: MessageSquare,
    },
    {
      id: 4,
      name: "Recovery Stories",
      description: "Share your journey and inspire others",
      posts: 134,
      members: 112,
      color: "bg-orange-500",
      icon: ThumbsUp,
    },
  ]

  const recentPosts = [
    {
      id: 1,
      title: "How do I talk to my parents about therapy?",
      excerpt: "I've been struggling with anxiety and I know I need help, but I'm scared to tell my parents...",
      author: "Anonymous",
      category: "Youth Corner",
      replies: 12,
      likes: 8,
      views: 45,
      timeAgo: "2 hours ago",
      isAnonymous: true,
      status: "approved",
    },
    {
      id: 2,
      title: "Celebrating 6 months of recovery",
      excerpt: "I wanted to share this milestone with the community that has supported me through my darkest times...",
      author: "Sarah M.",
      category: "Recovery Stories",
      replies: 23,
      likes: 67,
      views: 156,
      timeAgo: "5 hours ago",
      isAnonymous: false,
      status: "approved",
    },
    {
      id: 3,
      title: "Supporting a friend with depression",
      excerpt: "My best friend has been going through a really tough time and I want to help but don't know how...",
      author: "Caring Friend",
      category: "General Support",
      replies: 15,
      likes: 34,
      views: 89,
      timeAgo: "1 day ago",
      isAnonymous: true,
      status: "approved",
    },
    {
      id: 4,
      title: "Dealing with family stigma around mental health",
      excerpt: "How do you cope when your own family doesn't understand or support your mental health journey?",
      author: "Anonymous",
      category: "Family & Relationships",
      replies: 28,
      likes: 45,
      views: 123,
      timeAgo: "2 days ago",
      isAnonymous: true,
      status: "approved",
    },
    {
      id: 5,
      title: "University stress and anxiety management",
      excerpt: "Final exams are approaching and my anxiety is through the roof. Any tips for managing stress?",
      author: "Student123",
      category: "Youth Corner",
      replies: 19,
      likes: 22,
      views: 67,
      timeAgo: "3 days ago",
      isAnonymous: false,
      status: "approved",
    },
  ]

  const trendingTopics = [
    { name: "Anxiety Management", posts: 45 },
    { name: "Family Support", posts: 32 },
    { name: "University Stress", posts: 28 },
    { name: "Recovery Journey", posts: 56 },
    { name: "Self Care", posts: 41 },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Community Forum</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            A safe space to share, connect, and support each other on our mental health journeys. Your voice matters
            here.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search discussions, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full backdrop-blur-sm"
              />
            </div>
          </div>

          <Link href="/forum/new-post">
            <Button
              size="lg"
              className="bg-[#FFE066] text-black hover:bg-[#FFD700] font-semibold px-8 py-4 rounded-full"
            >
              <Plus className="w-5 h-5 mr-2" />
              Start New Discussion
            </Button>
          </Link>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">Discussion Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find the right space for your conversation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {forumCategories.map((category) => (
              <Card
                key={category.id}
                className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1 text-[#31960F]" />
                        <span>{category.posts} posts</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-[#31960F]" />
                        <span>{category.members} members</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/forum/category/${category.id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                      Join Discussion
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Trending */}
      <section className="section-padding bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="recent" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="bg-white/50 backdrop-blur-sm rounded-full p-2">
                <TabsTrigger
                  value="recent"
                  className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
                >
                  Recent Discussions
                </TabsTrigger>
                <TabsTrigger
                  value="trending"
                  className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
                >
                  Trending Topics
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recent" className="space-y-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.isAnonymous && <Badge className="bg-gray-500 text-white text-xs">Anonymous</Badge>}
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.timeAgo}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-[#31960F] transition-colors mb-2">
                          <Link href={`/forum/post/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                            <div className="flex items-center">
                              <MessageCircleIcon className="w-4 h-4 mr-1" />
                              {post.replies}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center">
                <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                  Load More Discussions
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingTopics.map((topic, index) => (
                  <Card key={index} className="border-0 shadow-lg rounded-2xl hover-glow bg-white text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl mb-4">🔥</div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{topic.name}</h3>
                      <p className="text-gray-600 mb-4">{topic.posts} active discussions</p>
                      <Button className="bg-[#31960F] hover:bg-[#2A7F0C] text-white rounded-full">
                        Join Conversation
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="section-padding bg-[#FFFFF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#B8E6CC] to-[#A8D8EA]">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Be Respectful</h3>
                <p className="text-gray-700 text-sm">
                  Treat everyone with kindness and respect. We're all here to support each other.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFE8F5] to-[#F0E8FF]">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Maintain Privacy</h3>
                <p className="text-gray-700 text-sm">
                  Respect others' privacy and anonymity. Don't share personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[#E8F5FF] to-[#F0F8FF]">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Support Others</h3>
                <p className="text-gray-700 text-sm">
                  Offer encouragement and support. Share resources and experiences that might help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to Join the Conversation?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your experiences and insights could be exactly what someone else needs to hear today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-white text-[#31960F] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Create Account
              </Button>
            </Link>
            <Link href="/forum/new-post">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Start Discussion
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
