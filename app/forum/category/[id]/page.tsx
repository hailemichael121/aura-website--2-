"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, MessageSquare, Heart, Loader2 } from "lucide-react"

const mockPosts = [
  {
    id: 1,
    title: "Dealing with anxiety during exams",
    content: "I've been struggling with severe anxiety during my university exams. The pressure feels overwhelming and I can't seem to focus. Has anyone else experienced this?",
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
    content: "After months of feeling lost, I'm finally starting to see light at the end of the tunnel. Here's what helped me...",
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
    content: "My best friend has been going through a really tough time lately. I want to help but I'm not sure what to say or do. Any advice?",
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
    content: "I've tried many meditation apps and techniques. Here are the ones that have genuinely helped me manage stress and anxiety...",
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
    content: "Working in a high-stress environment while managing my mental health has been challenging. Looking for strategies that work...",
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
    content: "It's hard when the people closest to you don't understand what you're going through. How do you cope with lack of family support?",
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
    content: "Today I managed to get out of bed, take a shower, and make breakfast. It might seem small but it's huge for me right now.",
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
    content: "Compiled a list of emergency mental health resources in Ethiopia. Please save this post and share with others who might need it.",
    author: "ResourceHelper",
    authorInitials: "RH",
    createdAt: "1 week ago",
    replies: 7,
    likes: 156,
    category: "resources",
  },
]

const categories: Record<string, { name: string; color: string }> = {
  anxiety: { name: "Anxiety Support", color: "bg-destructive/10 text-destructive" },
  depression: { name: "Depression Support", color: "bg-primary/10 text-primary" },
  support: { name: "General Support", color: "bg-primary/10 text-primary" },
  wellness: { name: "Wellness Tips", color: "bg-muted text-muted-foreground" },
  workplace: { name: "Workplace Mental Health", color: "bg-muted text-muted-foreground" },
  family: { name: "Family & Relationships", color: "bg-muted text-muted-foreground" },
  recovery: { name: "Recovery Stories", color: "bg-primary/10 text-primary" },
  resources: { name: "Resources & Information", color: "bg-primary/10 text-primary" },
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [posts, setPosts] = useState(mockPosts.slice(0, 4))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const categoryId = params.id
  const category = categories[categoryId] || { name: "Unknown Category", color: "bg-muted text-muted-foreground" }

  const loadMorePosts = async () => {
    if (loading || !hasMore) return
    setLoading(true)

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
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/forum">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Forum
            </Button>
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-3xl font-semibold">{category.name}</h1>
            <Badge variant="outline">{posts.length} posts</Badge>
          </div>

          <p className="text-muted-foreground">
            Connect with others who share similar experiences and find support in our community.
          </p>
        </div>

        <div className="mb-8">
          <Link href="/forum/new-post">
            <Button>Start New Discussion</Button>
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-9 h-9">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {post.authorInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{post.author}</span>
                        <Badge variant="outline" className="text-xs">
                          {post.createdAt}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Badge className={categories[post.category]?.color || "bg-muted text-muted-foreground"}>
                    {categories[post.category]?.name || "General"}
                  </Badge>
                </div>

                <CardTitle className="text-lg">
                  <Link href={`/forum/posts/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5" />
                      <span>{post.likes} likes</span>
                    </div>
                  </div>

                  <Link href={`/forum/posts/${post.id}`}>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <Button onClick={loadMorePosts} disabled={loading} variant="outline">
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
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              You&apos;ve reached the end of the posts in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
