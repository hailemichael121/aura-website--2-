import Link from "next/link"
import { Calendar, Heart, MessageCircle, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stories = [
  {
    id: 1,
    title: "Finding Light in the Darkness",
    excerpt: "My journey through depression taught me that healing isn't linear, but it's always possible.",
    author: "Anonymous",
    publishedAt: "2024-04-20",
    category: "Depression",
    likes: 45,
    comments: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Breaking Free from Anxiety",
    excerpt: "Learning to manage anxiety while pursuing my education at university.",
    author: "Sarah M.",
    publishedAt: "2024-04-18",
    category: "Anxiety",
    likes: 32,
    comments: 8,
    featured: false,
  },
  {
    id: 3,
    title: "A Mother's Journey to Healing",
    excerpt: "How I learned to take care of my mental health while caring for my family.",
    author: "Almaz T.",
    publishedAt: "2024-04-15",
    category: "Family",
    likes: 67,
    comments: 23,
    featured: true,
  },
  {
    id: 4,
    title: "Overcoming Addiction with Community Support",
    excerpt: "The role of AURA's community in my recovery from substance abuse.",
    author: "Anonymous",
    publishedAt: "2024-04-12",
    category: "Addiction",
    likes: 89,
    comments: 34,
    featured: false,
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="border-b border-border/60 bg-card/30 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit border-primary/30 text-primary">Community Stories</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Stories That Heal</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Real voices from our community sharing recovery journeys, setbacks, and practical hope.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Featured stories</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {stories.filter((story) => story.featured).map((story) => (
              <Card key={story.id} className="border-border bg-card shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className="bg-primary text-primary-foreground">{story.category}</Badge>
                    <span className="flex items-center text-sm text-muted-foreground"><Calendar className="mr-1 size-4" />{story.publishedAt}</span>
                  </div>
                  <CardTitle className="text-2xl leading-tight"><Link href={`/stories/${story.id}`} className="hover:text-primary">{story.title}</Link></CardTitle>
                  <CardDescription className="text-base">{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center"><User className="mr-1 size-4" />{story.author}</span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center"><Heart className="mr-1 size-4" />{story.likes}</span>
                    <span className="flex items-center"><MessageCircle className="mr-1 size-4" />{story.comments}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/20 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Depression", "Anxiety", "Family", "Addiction"].map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Card key={story.id} className="border-border bg-card shadow-sm">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline">{story.category}</Badge>
                    <span className="text-xs text-muted-foreground">{story.publishedAt}</span>
                  </div>
                  <CardTitle className="text-lg"><Link href={`/stories/${story.id}`} className="hover:text-primary">{story.title}</Link></CardTitle>
                  <CardDescription>{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{story.author}</span>
                    <div className="flex gap-3">
                      <span className="inline-flex items-center"><Heart className="mr-1 size-3" />{story.likes}</span>
                      <span className="inline-flex items-center"><MessageCircle className="mr-1 size-3" />{story.comments}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={`/stories/${story.id}`}>Read story</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Share your story</CardTitle>
              <CardDescription>Your experience may help someone take their next healthy step.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Submit a story safely</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
