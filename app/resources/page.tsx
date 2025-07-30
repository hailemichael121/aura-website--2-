import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Headphones, Video, Download, Search, Clock, User, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  // TODO: Replace with real data from Supabase
  const articles = [
    {
      id: 1,
      title: "Understanding Depression in Ethiopian Context",
      excerpt: "A comprehensive guide to recognizing and addressing depression within our cultural framework.",
      category: "Awareness",
      readTime: "8 min read",
      author: "Dr. Rediet Feleke",
      publishedAt: "2024-04-20",
      tags: ["Depression", "Culture", "Awareness"],
      featured: true,
    },
    {
      id: 2,
      title: "Talking to Family About Mental Health",
      excerpt: "Practical strategies for opening conversations about mental wellness with loved ones.",
      category: "Coping Tools",
      readTime: "6 min read",
      author: "Simret G. Dessie",
      publishedAt: "2024-04-18",
      tags: ["Family", "Communication", "Support"],
      featured: false,
    },
    {
      id: 3,
      title: "Healing After Trauma: A Journey of Recovery",
      excerpt: "Understanding trauma responses and pathways to healing in our communities.",
      category: "Recovery",
      readTime: "12 min read",
      author: "Messeret Gossa",
      publishedAt: "2024-04-15",
      tags: ["Trauma", "Recovery", "Healing"],
      featured: true,
    },
    {
      id: 4,
      title: "Youth Mental Health: Breaking the Silence",
      excerpt: "Addressing the unique mental health challenges faced by Ethiopian youth today.",
      category: "Youth Wellness",
      readTime: "10 min read",
      author: "AURA Team",
      publishedAt: "2024-04-12",
      tags: ["Youth", "Stigma", "Education"],
      featured: false,
    },
    {
      id: 5,
      title: "Understanding Addiction and Recovery",
      excerpt: "A compassionate look at addiction as a mental health condition and paths to recovery.",
      category: "Addiction",
      readTime: "15 min read",
      author: "Dr. Rediet Feleke",
      publishedAt: "2024-04-10",
      tags: ["Addiction", "Recovery", "Support"],
      featured: false,
    },
  ]

  const podcasts = [
    {
      id: 1,
      title: "Voices of Recovery - Episode 12: Sarah's Journey",
      description: "A powerful story of overcoming anxiety and finding community support.",
      duration: "32 min",
      publishedAt: "2024-04-22",
      category: "Personal Stories",
    },
    {
      id: 2,
      title: "Mental Health Myths in Ethiopian Culture",
      description: "Dr. Rediet discusses common misconceptions and cultural barriers to mental health care.",
      duration: "28 min",
      publishedAt: "2024-04-15",
      category: "Education",
    },
    {
      id: 3,
      title: "Supporting a Friend in Crisis",
      description: "Practical advice for being there when someone you care about is struggling.",
      duration: "25 min",
      publishedAt: "2024-04-08",
      category: "Support",
    },
  ]

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

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Read. Watch. Grow.</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive mental health resources designed for our community, by our community.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, videos, podcasts..."
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full backdrop-blur-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFE066] text-black hover:bg-[#FFD700] rounded-full px-6">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/50 backdrop-blur-sm rounded-full p-2">
              <TabsTrigger
                value="articles"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Articles & Guides
              </TabsTrigger>
              <TabsTrigger
                value="podcasts"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Headphones className="w-4 h-4 mr-2" />
                Podcast
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Video className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="toolkits"
                className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Toolkits
              </TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Articles & Guides</h2>
                <p className="text-lg text-gray-600">
                  In-depth resources on mental health topics relevant to our community
                </p>
              </div>

              {/* Featured Articles */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Articles</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {articles
                    .filter((article) => article.featured)
                    .map((article) => (
                      <Card
                        key={article.id}
                        className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm"
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-[#31960F] text-white">{article.category}</Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-xl hover:text-[#31960F] transition-colors">
                            <Link href={`/resources/articles/${article.id}`}>{article.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-gray-600 leading-relaxed">{article.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <User className="w-4 h-4 mr-2" />
                              {article.author}
                            </div>
                            <span className="text-sm text-gray-500">{article.publishedAt}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link href={`/resources/articles/${article.id}`}>
                            <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* All Articles */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-lg hover:text-[#31960F] transition-colors">
                          <Link href={`/resources/articles/${article.id}`}>{article.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600 line-clamp-2">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>{article.author}</span>
                          <span>{article.publishedAt}</span>
                        </div>
                        <Link href={`/resources/articles/${article.id}`}>
                          <Button size="sm" variant="outline" className="w-full rounded-full bg-transparent">
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Voices of Recovery</h2>
                <p className="text-lg text-gray-600">Weekly stories from survivors, therapists, and activists</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {podcasts.map((podcast) => (
                  <Card key={podcast.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                    <CardHeader>
                      <div className="w-full h-32 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-xl mb-4 flex items-center justify-center">
                        <Headphones className="w-12 h-12 text-white" />
                      </div>
                      <Badge variant="outline" className="w-fit mb-2">
                        {podcast.category}
                      </Badge>
                      <CardTitle className="text-lg">{podcast.title}</CardTitle>
                      <CardDescription className="text-gray-600">{podcast.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{podcast.duration}</span>
                        <span>{podcast.publishedAt}</span>
                      </div>
                      <Button className="w-full bg-[#31960F] hover:bg-[#2A7F0C] text-white rounded-full">
                        <Headphones className="w-4 h-4 mr-2" />
                        Listen Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Educational Videos</h2>
                <p className="text-lg text-gray-600">Short animated explainers on stigma, self-care, and more</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                    <CardHeader>
                      <div className="w-full h-40 bg-gradient-to-br from-[#3284FC] to-[#7E00E6] rounded-xl mb-4 flex items-center justify-center relative">
                        <Video className="w-16 h-16 text-white" />
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit mb-2">
                        {video.category}
                      </Badge>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription className="text-gray-600">{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{video.views} views</span>
                        <span>{video.duration}</span>
                      </div>
                      <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white rounded-full">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Toolkits Tab */}
            <TabsContent value="toolkits" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Downloadable Toolkits</h2>
                <p className="text-lg text-gray-600">
                  Resources for schools, youth leaders, and spiritual institutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolkits.map((toolkit) => (
                  <Card key={toolkit.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                    <CardHeader>
                      <div className="w-full h-32 bg-gradient-to-br from-[#FFE066] to-[#FF9500] rounded-xl mb-4 flex items-center justify-center">
                        <Download className="w-12 h-12 text-white" />
                      </div>
                      <CardTitle className="text-lg">{toolkit.title}</CardTitle>
                      <CardDescription className="text-gray-600">{toolkit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex justify-between">
                          <span>Downloads:</span>
                          <span>{toolkit.downloads}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span>{toolkit.fileSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span>{toolkit.format}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#FFE066] hover:bg-[#FFD700] text-black rounded-full font-semibold">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out with your questions or suggest topics you'd like us to cover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#31960F] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
              >
                Contact Our Team
              </Button>
            </Link>
            <Link href="/stories">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent rounded-full"
              >
                Share Your Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
