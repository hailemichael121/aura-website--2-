"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, MessageSquare, Heart, Loader2 } from "lucide-react"

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    title: "Dealing with anxiety during exams",
    content:
      "I've been struggling with severe anxiety during my university exams. The pressure feels overwhelming and I can't seem to focus. Has anyone else experienced this?",
    author: "StudentInNeed",
    authorInitials: "SN",
    createdAt: "2 hours ago",
    replies: 12,
    likes: 8,
    category: "anxiety",
  },
  {
    id: 2,
    title: "Finding hope after depression",
    content:
      "After months of feeling lost, I'm finally starting to see light at the end of the tunnel. Here's what helped me...",
    author: "HopeSeeker",
    authorInitials: "HS",
    createdAt: "5 hours ago",
    replies: 24,
    likes: 45,
    category: "depression",
  },
  {
    id: 3,
    title: "Supporting a friend through difficult times",
    content:
      "My best friend has been going through a really tough time lately. I want to help but I'm not sure what to say or do. Any advice?",
    author: "CaringFriend",
    authorInitials: "CF",
    createdAt: "1 day ago",
    replies: 18,
    likes: 22,
    category: "support",
  },
  {
    id: 4,
    title: "Meditation techniques that actually work",
    content:
      "I've tried many meditation apps and techniques. Here are the ones that have genuinely helped me manage stress and anxiety...",
    author: "MindfulJourney",
    authorInitials: "MJ",
    createdAt: "2 days ago",
    replies: 31,
    likes: 67,
    category: "wellness",
  },
  {
    id: 5,
    title: "Balancing work and mental health",
    content:
      "Working in a high-stress environment while managing my mental health has been challenging. Looking for strategies that work...",
    author: "WorkLifeBalance",
    authorInitials: "WB",
    createdAt: "3 days ago",
    replies: 15,
    likes: 28,
    category: "workplace",
  },
  {
    id: 6,
    title: "Family doesn't understand my struggles",
    content:
      "It's hard when the people closest to you don't understand what you're going through. How do you cope with lack of family support?",
    author: "FamilyStruggles",
    authorInitials: "FS",
    createdAt: "4 days ago",
    replies: 42,
    likes: 56,
    category: "family",
  },
  {
    id: 7,
    title: "Celebrating small victories",
    content:
      "Today I managed to get out of bed, take a shower, and make breakfast. It might seem small but it's huge for me right now.",
    author: "SmallSteps",
    authorInitials: "SS",
    createdAt: "5 days ago",
    replies: 38,
    likes: 89,
    category: "recovery",
  },
  {
    id: 8,
    title: "Resources for crisis situations",
    content:
      "Compiled a list of emergency mental health resources in Ethiopia. Please save this post and share with others who might need it.",
    author: "ResourceHelper",
    authorInitials: "RH",
    createdAt: "1 week ago",
    replies: 7,
    likes: 156,
    category: "resources",
  },
]

const categories = {
  anxiety: { name: "Anxiety Support", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
  depression: { name: "Depression Support", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  support: { name: "General Support", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  wellness: { name: "Wellness Tips", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  workplace: {
    name: "Workplace Mental Health",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  family: { name: "Family & Relationships", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
  recovery: {
    name: "Recovery Stories",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  },
  resources: {
    name: "Resources & Information",
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  },
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [posts, setPosts] = useState(mockPosts.slice(0, 4))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const categoryId = params.id
  const category = categories[categoryId as keyof typeof categories] || {
    name: "Unknown Category",
    color: "bg-gray-100 text-gray-800",
  }

  const loadMorePosts = async () => {
    if (loading || !hasMore) return

    setLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const nextPage = currentPage + 1
    const startIndex = (nextPage - 1) * 4
    const endIndex = startIndex + 4
    const newPosts = mockPosts.slice(startIndex, endIndex)

    if (newPosts.length === 0) {
      setHasMore(false)
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setCurrentPage(nextPage)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/forum">
            <Button
              variant="ghost"
              className="mb-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Forum
            </Button>
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{category.name}</h1>
            <Badge className={category.color}>{posts.length} posts</Badge>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            Connect with others who share similar experiences and find support in our community.
          </p>
        </div>

        {/* New Post Button */}
        <div className="mb-8">
          <Link href="/forum/new-post">
            <Button className="bg-[#00B089] hover:bg-[#00A078] text-white">Start New Discussion</Button>
          </Link>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-[#00B089] text-white text-sm">{post.authorInitials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                        >
                          {post.createdAt}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Badge
                    className={
                      categories[post.category as keyof typeof categories]?.color || "bg-gray-100 text-gray-800"
                    }
                  >
                    {categories[post.category as keyof typeof categories]?.name || "General"}
                  </Badge>
                </div>

                <CardTitle className="text-xl text-gray-900 dark:text-white hover:text-[#00B089] dark:hover:text-[#4ADE80] transition-colors duration-200">
                  <Link href={`/forum/posts/${post.id}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes} likes</span>
                    </div>
                  </div>

                  <Link href={`/forum/posts/${post.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-[#00B089] hover:text-white hover:border-[#00B089] bg-transparent"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={loadMorePosts}
              disabled={loading}
              className="bg-[#3284FC] hover:bg-[#2A73E3] text-white px-8 py-3 font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More Posts"
              )}
            </Button>
          </div>
        )}

        {!hasMore && posts.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">You've reached the end of the posts in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
