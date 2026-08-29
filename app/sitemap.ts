import type { MetadataRoute } from "next"
import { resourceArticles } from "@/lib/content/resources"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.auramentalhealth.org"
  const now = new Date()

  // Primary static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/get-help`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/founders`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/forum`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/confessions`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/get-involved`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/join-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ]

  // Dynamic program detail routes
  const programIds = ["1", "2", "3", "4", "5", "6"]
  const programRoutes: MetadataRoute.Sitemap = programIds.map((id) => ({
    url: `${baseUrl}/programs/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Dynamic article routes
  const articleRoutes: MetadataRoute.Sitemap = resourceArticles.map(
    (article) => ({
      url: `${baseUrl}/resources/articles/${article.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  // Dynamic forum category routes
  const categoryIds = ["1", "2", "3", "4"]
  const categoryRoutes: MetadataRoute.Sitemap = categoryIds.map((id) => ({
    url: `${baseUrl}/forum/category/${id}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.65,
  }))

  return [
    ...staticRoutes,
    ...programRoutes,
    ...articleRoutes,
    ...categoryRoutes,
  ]
}
