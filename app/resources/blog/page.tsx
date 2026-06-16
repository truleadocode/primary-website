import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getAllBlogPosts } from '@/lib/blog'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Influencer Marketing Insights for Agencies',
  description: 'Practical guides on influencer marketing strategy, agency operations, creator management, campaign execution, and ROI measurement. Written for agencies.',
  alternates: { canonical: 'https://truleado.com/resources/blog' },
  openGraph: {
    title: 'Blog — Influencer Marketing Insights for Agencies | Truleado',
    description: 'Practical guides on influencer marketing strategy, agency operations, creator management, and ROI measurement. Written for agencies.',
    url: 'https://truleado.com/resources/blog',
    type: 'website',
    images: [
      {
        url: 'https://truleado.com/Truleado%20Logo%20Blue.png',
        width: 1080,
        height: 1080,
        alt: 'Truleado Blog — Influencer Marketing for Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Influencer Marketing Insights for Agencies | Truleado',
    description: 'Practical guides on influencer marketing strategy, agency operations, creator management, and ROI measurement.',
  },
}

export default function BlogListPage() {
  const posts = getAllBlogPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Truleado Blog',
    description: 'Practical guides on influencer marketing strategy, agency operations, creator management, campaign execution, and ROI measurement.',
    url: 'https://truleado.com/resources/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Truleado',
      url: 'https://truleado.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://truleado.com/Truleado%20Logo%20Blue.png',
      },
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://truleado.com/resources/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
        jobTitle: post.authorRole,
      },
      image: post.coverImage
        ? `${post.coverImage}?w=1200&h=630&q=80&auto=format&fit=crop`
        : undefined,
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truleado.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://truleado.com/resources' },
      { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://truleado.com/resources/blog' },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 border-b border-slate-100">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/resources" className="hover:text-slate-600 transition-colors">Resources</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-600">Blog</span>
            </nav>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Influencer marketing insights</h1>
            <p className="text-xl text-slate-500">Practical guides for agencies running smarter influencer campaigns.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Categories">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-900 text-white">All</span>
              {categories.map(cat => (
                <span key={cat} role="listitem" className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">{cat}</span>
              ))}
            </div>

            <div className="divide-y divide-slate-100">
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group block py-8 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <span className="hidden sm:block text-3xl font-black text-slate-100 w-12 shrink-0 pt-1" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                          <Tag className="h-3 w-3" aria-hidden="true" />{post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" aria-hidden="true" />{post.readTime}
                        </span>
                        <time dateTime={post.date} className="text-xs text-slate-400">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{post.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    {post.coverImage && (
                      <div className="hidden lg:block relative w-40 h-28 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={`${post.coverImage}?w=320&h=224&q=75&auto=format&fit=crop`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="160px"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-slate-900">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black text-white mb-4">Ready to run better campaigns?</h2>
            <p className="text-slate-400 mb-8">Join agencies already using Truleado to manage creators, clients, and campaigns from one workspace.</p>
            <Link href="https://app.truleado.com/signup">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors">
                Start free trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
