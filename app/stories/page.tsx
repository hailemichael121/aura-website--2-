import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, User, Calendar, Tag, Share2, MessageCircle } from "lucide-react"

export default function StoriesPage() {
  // TODO: Replace with real data from Supabase
  const stories = [
    {
      id: 1,
      title: "Finding Light in the Darkness",
      excerpt: "My journey through depression taught me that healing isn't linear, but it's always possible.",
      content: "Three years ago, I thought my life was over. The weight of depression felt unbearable...",
      author: "Anonymous",
      authorType: "Community Member",
      publishedAt: "2024-04-20",
      category: "Depression",
      tags: ["Recovery", "Hope", "Community"],
      likes: 45,
      comments: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Breaking Free from Anxiety",
      excerpt: "Learning to manage anxiety while pursuing my education at university.",
      content: "As a university student, anxiety felt like a constant companion...",
      author: "Sarah M.",
      authorType: "Youth",
      publishedAt: "2024-04-18",
      category: "Anxiety",
      tags: ["Youth", "Education", "Coping"],
      likes: 32,
      comments: 8,
      featured: false,
    },
    {
      id: 3,
      title: "A Mother's Journey to Healing",
      excerpt: "How I learned to take care of my mental health while caring for my family.",
      content: "Being a mother in Ethiopia comes with unique challenges...",
      author: "Almaz T.",
      authorType: "Parent",
      publishedAt: "2024-04-15",
      category: "Family",
      tags: ["Motherhood", "Self-Care", "Balance"],
      likes: 67,
      comments: 23,
      featured: true,
    },
    {
      id: 4,
      title: "Overcoming Addiction with Community Support",
      excerpt: "The role of AURA's community in my recovery from substance abuse.",
      content: "I never thought I'd be sharing my story publicly...",
      author: "Anonymous",
      authorType: "Recovery Advocate",
      publishedAt: "2024-04-12",
      category: "Addiction",
      tags: ["Addiction", "Recovery", "Support"],
      likes: 89,
      comments: 34,
      featured: false,
    },
    {
      id: 5,
      title: "From Trauma to Triumph",
      excerpt: "How therapy and community support helped me heal from childhood trauma.",
      content: "Trauma had defined my life for so long that I forgot who I was without it...",
      author: "Hanan K.",
      authorType: "Survivor",
      publishedAt: "2024-04-10",
      category: "Trauma",
      tags: ["Trauma", "Therapy", "Healing"],
      likes: 56,
      comments: 19,
      featured: true,
    },
  ]

  const teamMembers = [
    {
      name: "Hanna",
      role: "Peer Support Lead",
      avatar: "🧕",
      bio: "Supporting community members through their healing journeys",
    },
    {
      name: "Mimi",
      role: "Outreach Volunteer",
      avatar: "👩‍⚕️",
      bio: "Bringing mental health awareness to underserved communities",
    },
    {
      name: "Beti",
      role: "Communications Head",
      avatar: "👩🏽‍💻",
      bio: "Amplifying voices and stories that matter",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFF8]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Stories That Heal</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Healing happens when we share. These are real stories from real people in our community - stories of
            struggle, growth, and hope.
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful journeys of healing and recovery from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {stories
              .filter((story) => story.featured)
              .slice(0, 2)
              .map((story) => (
                <Card key={story.id} className="border-0 shadow-xl rounded-3xl hover-glow bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#31960F] text-white">{story.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {story.publishedAt}
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-[#31960F] transition-colors">
                      <Link href={`/stories/${story.id}`}>{story.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {story.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        <span>{story.author}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {story.authorType}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {story.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {story.comments}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {story.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/stories/${story.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full">
                          Read Full Story
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="section-padding bg-gradient-to-br from-[#E8F5E8] to-[#E8F0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">All Stories</h2>
            <p className="text-lg text-gray-600">Browse stories by category or search for specific topics</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Depression", "Anxiety", "Family", "Addiction", "Trauma", "Youth"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`rounded-full ${
                  category === "All"
                    ? "bg-[#31960F] hover:bg-[#2A7F0C] text-white"
                    : "hover:bg-[#31960F] hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="border-0 shadow-lg rounded-2xl hover-glow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{story.category}</Badge>
                    <span className="text-xs text-gray-500">{story.publishedAt}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-[#31960F] transition-colors">
                    <Link href={`/stories/${story.id}`}>{story.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-2">{story.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {story.author}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {story.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {story.comments}
                      </div>
                    </div>
                  </div>
                  <Link href={`/stories/${story.id}`}>
                    <Button size="sm" variant="outline" className="w-full rounded-full bg-transparent">
                      Read Story
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#FFFFF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Story Curators</h2>
            <p className="text-lg text-gray-600">Meet the team members who help amplify our community voices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-3xl hover-glow bg-white text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{member.name}</h3>
                  <Badge className="bg-[#31960F] text-white mb-4">{member.role}</Badge>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission Form */}
      <section className="section-padding bg-gradient-to-r from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Share Your Story</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your story could be the light someone else needs. Share your journey of healing and hope.
            </p>
          </div>

          <Card className="border-0 shadow-2xl rounded-3xl bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">
                      Story Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Give your story a meaningful title"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">
                      Category
                    </Label>
                    <select className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full">
                      <option value="">Select a category</option>
                      <option value="depression">Depression</option>
                      <option value="anxiety">Anxiety</option>
                      <option value="family">Family</option>
                      <option value="addiction">Addiction</option>
                      <option value="trauma">Trauma</option>
                      <option value="youth">Youth</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">
                    Your Story
                  </Label>
                  <Textarea
                    id="content"
                    placeholder="Share your journey, challenges, and what helped you heal..."
                    rows={8}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-2xl"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="author" className="text-white">
                      Your Name (Optional)
                    </Label>
                    <Input
                      id="author"
                      placeholder="Leave blank to remain anonymous"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email (For Updates)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" className="border-white/20" />
                  <Label htmlFor="anonymous" className="text-white text-sm">
                    I want to share this story anonymously
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" className="border-white/20" />
                  <Label htmlFor="consent" className="text-white text-sm">
                    I consent to AURA reviewing and potentially publishing my story to help others
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFE066] text-black hover:bg-[#FFD700] font-semibold py-4 rounded-full"
                >
                  Submit Your Story
                </Button>

                <p className="text-white/70 text-sm text-center">
                  All stories are reviewed by our team before publication to ensure safety and appropriateness.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
