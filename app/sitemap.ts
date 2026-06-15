import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { getAllComparisons } from '@/lib/comparisons'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truleado.com'
  const currentDate = new Date().toISOString()

  const staticPages = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/resources/blog`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/integrations`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const blogPages = getAllBlogPosts().map(post => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const comparisonPages = getAllComparisons().map(comparison => ({
    url: `${baseUrl}/vs-${comparison.competitorSlug}`,
    lastModified: new Date(comparison.publishDate).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...blogPages, ...comparisonPages]
}
