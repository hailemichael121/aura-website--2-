import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Share2, User } from "lucide-react"
import { resourceArticles } from "@/lib/content/resources"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Props = {
  params: Promise<{ id: string }>
}

export default async function ResourceArticlePage({ params }: Props) {
  const { id } = await params
  const article = resourceArticles.find((item) => item.id === Number(id))

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <article className="lg:col-span-8">
          <Link href="/resources" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 size-4" />Back to resources
          </Link>
          <div className="mb-8 space-y-4">
            <Badge>{article.category}</Badge>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">{article.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center"><User className="mr-1 size-4" />{article.author}</span>
              <span className="flex items-center"><Clock className="mr-1 size-4" />{article.readTime}</span>
              <span>{article.publishedAt}</span>
            </div>
          </div>

          <Card className="border-border">
            <CardContent className="space-y-5 p-6 text-base leading-7 text-muted-foreground md:p-8">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </article>

        <aside className="space-y-5 lg:col-span-4">
          <Card className="border-border">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-lg font-semibold">Article tags</h2>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 size-4" />Share article
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-lg font-semibold">Need direct support?</h2>
              <p className="text-sm text-muted-foreground">If this topic feels personal right now, reach out and get guided support from our team.</p>
              <Button asChild className="w-full">
                <Link href="/get-help">Get Help</Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
