"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Eye, Heart, MessageCircleIcon, MessageSquare, Plus, Search, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const forumCategories = [
  { id: 1, name: "General Support", description: "Share experiences and receive kind peer support.", posts: 156, members: 89 },
  { id: 2, name: "Youth Corner", description: "Student and youth-focused stress and resilience topics.", posts: 78, members: 45 },
  { id: 3, name: "Family & Relationships", description: "Conversations about home, care, and communication.", posts: 92, members: 67 },
  { id: 4, name: "Recovery Stories", description: "Progress updates and lessons that inspire others.", posts: 134, members: 112 },
]

const recentPosts = [
  { id: 1, title: "How do I talk to my parents about therapy?", excerpt: "I've been struggling with anxiety and I need help, but I'm scared to tell my parents.", author: "Anonymous", category: "Youth Corner", replies: 12, likes: 8, views: 45, timeAgo: "2 hours ago", isAnonymous: true },
  { id: 2, title: "Celebrating 6 months of recovery", excerpt: "Sharing this milestone with the community that supported me.", author: "Sarah M.", category: "Recovery Stories", replies: 23, likes: 67, views: 156, timeAgo: "5 hours ago", isAnonymous: false },
  { id: 3, title: "Supporting a friend with depression", excerpt: "My friend is having a difficult time and I want to help better.", author: "Caring Friend", category: "General Support", replies: 15, likes: 34, views: 89, timeAgo: "1 day ago", isAnonymous: true },
]

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = useMemo(
    () => recentPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm],
  )

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="border-b border-border/60 bg-card/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <Badge variant="outline" className="w-fit border-primary/40 text-primary">Community Forum</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">A safe space to share, connect, and support each other.</h1>
              <p className="text-lg text-muted-foreground">Your voice matters here. Keep discussions respectful, practical, and supportive.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/resources">View resource library</Link>
              </Button>
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/forum/new-post"><Plus className="mr-2 size-4" />Start New Discussion</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search discussions, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 rounded-full border-border pl-12"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
            {forumCategories.map((category) => (
              <Card key={category.id} className="border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><MessageSquare className="mr-1 size-4" />{category.posts} posts</span>
                    <span className="flex items-center"><Users className="mr-1 size-4" />{category.members} members</span>
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={`/forum/category/${category.id}`}>Join Discussion</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <Card className="border-border bg-card shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Resources</CardTitle>
                <CardDescription>Practical tools for stress regulation, grounding, emotional communication, and family conversations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/resources">View resource library</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border bg-card shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start"><Shield className="mr-2 mt-0.5 size-4 text-primary" />Respect privacy and avoid sharing personal details.</p>
                <p className="flex items-start"><Shield className="mr-2 mt-0.5 size-4 text-primary" />Stay kind and avoid harmful or discriminatory language.</p>
                <p className="flex items-start"><Shield className="mr-2 mt-0.5 size-4 text-primary" />Use the report feature if you see unsafe content.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-semibold text-foreground">Recent discussions</h2>
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{post.category}</Badge>
                    {post.isAnonymous && <Badge className="bg-muted text-muted-foreground">Anonymous</Badge>}
                    <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground"><Link href={`/forum/posts/${post.id}`} className="hover:text-primary">{post.title}</Link></h3>
                  <p className="mb-3 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center"><Eye className="mr-1 size-4" />{post.views}</span>
                    <span className="flex items-center"><MessageCircleIcon className="mr-1 size-4" />{post.replies}</span>
                    <span className="flex items-center"><Heart className="mr-1 size-4" />{post.likes}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
