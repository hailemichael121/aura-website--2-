import type { Metadata } from "next";
import Link from "next/link";
import { resourceArticles } from "@/lib/content/resources";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog & Mental Wellness Insights",
  description:
    "Reflections, educational articles, and recovery perspectives from the AURA mental health community in Ethiopia.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "AURA Blog — Mental Wellness Insights",
    description: "Educational articles and reflections on mental health and recovery.",
    url: "https://www.auramentalhealth.org/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background pt-24 text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Reflections, education, and recovery stories from AURA spaces.
        </p>
        <div className="mt-10 space-y-6">
          {resourceArticles.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="border-b border-border pb-6"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {article.category}
              </p>
              <h2 className="mt-2 text-xl font-medium">
                <Link
                  href={`/resources/articles/${article.id}`}
                  className="hover:text-primary"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted-foreground">{article.excerpt}</p>
            </article>
          ))}
        </div>
        <Button asChild className="mt-8">
          <Link href="/stories">Read community stories</Link>
        </Button>
      </section>
    </div>
  );
}
