import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Clock, Download, Headphones, Search, User, Video } from "lucide-react"
import { resourceArticles, resourcePodcasts } from "@/lib/content/resources"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Resource Hub | Articles, Podcasts, Videos & Toolkits",
  description:
    "Explore practical mental health resources: stress management guides, youth toolkits, grounding techniques, educational videos, and podcasts in English, Amharic, and Afan Oromo.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Mental Health Resource Hub | AURA Ethiopia",
    description:
      "Culturally attuned mental wellness guides, toolkits, articles, and audio resources.",
    url: "https://www.auramentalhealth.org/resources",
  },
}

const videos = [
  {
    id: 1,
    title: "Breaking Mental Health Stigma",
    description: "An animated explainer on how stigma affects mental health in our communities.",
    duration: "5:30",
    views: "2.1K",
    category: "Animation",
  },
  {
    id: 2,
    title: "Self-Care Practices for Daily Life",
    description: "Simple, culturally-appropriate self-care techniques you can practice anywhere.",
    duration: "8:15",
    views: "1.8K",
    category: "Self-Care",
  },
  {
    id: 3,
    title: "Recognizing Signs of Depression",
    description: "Learn to identify early warning signs in yourself and others.",
    duration: "6:45",
    views: "3.2K",
    category: "Education",
  },
]

const toolkits = [
  {
    id: 1,
    title: "School Mental Health Toolkit",
    description: "Resources for educators to support student mental wellness.",
    downloads: 456,
    fileSize: "2.3 MB",
    format: "PDF",
  },
  {
    id: 2,
    title: "Youth Leader's Guide to Mental Health",
    description: "Comprehensive guide for youth leaders and mentors.",
    downloads: 234,
    fileSize: "1.8 MB",
    format: "PDF",
  },
  {
    id: 3,
    title: "Faith Community Mental Health Resources",
    description: "Integrating mental health support within spiritual communities.",
    downloads: 189,
    fileSize: "3.1 MB",
    format: "PDF",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="border-b border-border bg-muted/50 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit">
            Resource Hub
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">Read. Watch. Grow.</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Explore practical tools for stress regulation, grounding, emotional communication, and family conversations.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search articles, videos, podcasts..." className="h-12 pl-12" />
            </div>
            <Button asChild className="whitespace-nowrap">
              <Link href="/auth/signin">Sign in for access</Link>
            </Button>
            <Button asChild variant="outline" className="whitespace-nowrap">
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="articles" className="w-full space-y-8">
            <TabsList className="grid w-full grid-cols-2 rounded-lg bg-muted p-1 md:grid-cols-4">
              <TabsTrigger value="articles" className="rounded-md"><BookOpen className="mr-2 size-4" />Articles</TabsTrigger>
              <TabsTrigger value="podcasts" className="rounded-md"><Headphones className="mr-2 size-4" />Podcast</TabsTrigger>
              <TabsTrigger value="videos" className="rounded-md"><Video className="mr-2 size-4" />Videos</TabsTrigger>
              <TabsTrigger value="toolkits" className="rounded-md"><Download className="mr-2 size-4" />Toolkits</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {resourceArticles.filter((article) => article.featured).map((article) => (
                  <Card key={article.id} className="border-border">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge>{article.category}</Badge>
                        <span className="flex items-center text-sm text-muted-foreground"><Clock className="mr-1 size-4" />{article.readTime}</span>
                      </div>
                      <CardTitle className="text-xl leading-snug">
                        <Link href={`/resources/articles/${article.id}`} className="hover:text-primary">{article.title}</Link>
                      </CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center"><User className="mr-1 size-4" />{article.author}</span>
                        <span>{article.publishedAt}</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/resources/articles/${article.id}`}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resourceArticles.map((article) => (
                  <Card key={article.id} className="border-border">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-lg"><Link href={`/resources/articles/${article.id}`} className="hover:text-primary">{article.title}</Link></CardTitle>
                      <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/resources/articles/${article.id}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="podcasts" className="space-y-8">
              <Card className="border-border">
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Voices of Recovery Podcast</h2>
                    <p className="text-muted-foreground">Listen to stories, education, and practical support episodes.</p>
                  </div>
                  <Button variant="outline">
                    Find episodes
                  </Button>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resourcePodcasts.map((podcast) => (
                  <Card key={podcast.id} className="border-border">
                    <CardHeader>
                      <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground"><Headphones className="size-5" /></div>
                      <Badge variant="outline" className="w-fit">{podcast.category}</Badge>
                      <CardTitle className="text-lg leading-snug">{podcast.title}</CardTitle>
                      <CardDescription>{podcast.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                        <span>{podcast.duration}</span>
                        <span>{podcast.publishedAt}</span>
                      </div>
                      <Button className="w-full">Listen Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <Card key={video.id} className="border-border">
                  <CardHeader>
                    <div className="mb-4 flex h-40 items-center justify-center rounded-md border border-border bg-muted"><Video className="size-12 text-muted-foreground" /></div>
                    <Badge variant="outline" className="w-fit">{video.category}</Badge>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground"><span>{video.views} views</span><span>{video.duration}</span></div>
                    <Button className="w-full">Watch Now</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="toolkits" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {toolkits.map((toolkit) => (
                <Card key={toolkit.id} className="border-border">
                  <CardHeader>
                    <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground"><Download className="size-5" /></div>
                    <CardTitle className="text-lg">{toolkit.title}</CardTitle>
                    <CardDescription>{toolkit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between"><span>Downloads</span><span>{toolkit.downloads}</span></div>
                      <div className="flex justify-between"><span>File Size</span><span>{toolkit.fileSize}</span></div>
                      <div className="flex justify-between"><span>Format</span><span>{toolkit.format}</span></div>
                    </div>
                    <Button className="w-full">Download Free</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="border-t border-border py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Card className="border-border lg:col-span-8">
            <CardContent className="p-7">
              <Badge variant="outline" className="mb-4">Get Involved</Badge>
              <h2 className="text-3xl font-semibold text-foreground">Be Part of the Movement</h2>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                Whether you&apos;re a volunteer, donor, mental health professional, or just a caring soul &mdash; there&apos;s space for you at AURA.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/get-involved">Explore ways to contribute</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border lg:col-span-4">
            <CardContent className="space-y-3 p-7">
              <h3 className="text-lg font-semibold text-foreground">Quick actions</h3>
              <Button asChild variant="outline" className="w-full">
                <Link href="/get-involved">Volunteer</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/get-involved">Donate</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/get-involved">Join Events</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
