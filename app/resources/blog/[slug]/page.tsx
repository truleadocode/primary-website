import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const ogImage = post.coverImage
    ? `${post.coverImage}?w=1200&h=630&q=80&auto=format&fit=crop`
    : 'https://truleado.com/Truleado%20Logo%20Blue.png'

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author, url: 'https://truleado.com/resources/blog' }],
    alternates: { canonical: `https://truleado.com/resources/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Truleado Blog`,
      description: post.description,
      url: `https://truleado.com/resources/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: ['influencer marketing', 'agency', post.category.toLowerCase()],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Truleado Blog`,
      description: post.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug)
  const prevPost = allPosts[currentIndex + 1]
  const nextPost = allPosts[currentIndex - 1]

  const ogImage = post.coverImage
    ? `${post.coverImage}?w=1200&h=630&q=80&auto=format&fit=crop`
    : 'https://truleado.com/Truleado%20Logo%20Blue.png'

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        '@type': 'Organization',
        name: 'Truleado',
        url: 'https://truleado.com',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Truleado',
      logo: {
        '@type': 'ImageObject',
        url: 'https://truleado.com/Truleado%20Logo%20Blue.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://truleado.com/resources/blog/${post.slug}`,
    },
    articleSection: post.category,
    inLanguage: 'en-US',
    url: `https://truleado.com/resources/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truleado.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://truleado.com/resources/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://truleado.com/resources/blog/${post.slug}` },
    ],
  }

  const faqJsonLd = post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Header />
      <main className="flex-1">
        {/* Post header */}
        <section className="pt-32 pb-10 px-4 border-b border-slate-100">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/resources" className="hover:text-slate-600 transition-colors">Resources</Link>
              <span aria-hidden="true">/</span>
              <Link href="/resources/blog" className="hover:text-slate-600 transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-600 truncate max-w-xs">{post.title}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">{post.description}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">PH</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-400">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        {post.coverImage && (
          <section className="px-4 pt-10 pb-0">
            <div className="mx-auto max-w-3xl">
              <div className="relative w-full h-[260px] sm:h-[400px] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={`${post.coverImage}?w=1200&h=630&q=80&auto=format&fit=crop`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Article body */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-3xl">
            <div
              className="
                [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-4
                [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-slate-600 [&>ul>li]:pl-4 [&>ul>li]:border-l-2 [&>ul>li]:border-blue-100
                [&>ol]:mb-4 [&>ol]:space-y-2 [&>ol>li]:text-slate-600
                [&>p>strong]:text-slate-900 [&>p>strong]:font-semibold
                [&>ul>li>strong]:text-slate-900 [&>ul>li>strong]:font-semibold
                [&>figure]:my-10 [&>figure]:rounded-2xl [&>figure]:overflow-hidden [&>figure]:bg-slate-50 [&>figure]:border [&>figure]:border-slate-100
                [&>figure>img]:w-full [&>figure>img]:block [&>figure>img]:h-64 [&>figure>img]:sm:h-80 [&>figure>img]:object-cover
                [&>figure>figcaption]:text-xs [&>figure>figcaption]:text-slate-400 [&>figure>figcaption]:text-center [&>figure>figcaption]:py-3 [&>figure>figcaption]:px-4 [&>figure>figcaption]:italic
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <section className="py-12 px-4 bg-slate-50 border-t border-slate-100">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                      <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                    </summary>
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Prev / Next */}
        <nav aria-label="Post navigation" className="py-12 px-4 border-t border-slate-100">
          <div className="mx-auto max-w-3xl grid sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link href={`/resources/blog/${prevPost.slug}`} className="group flex flex-col gap-1 p-5 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors">
                <span className="flex items-center gap-1 text-xs text-slate-400"><ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous</span>
                <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{prevPost.title}</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={`/resources/blog/${nextPost.slug}`} className="group flex flex-col gap-1 p-5 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors sm:text-right">
                <span className="flex items-center gap-1 text-xs text-slate-400 sm:justify-end">Next <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{nextPost.title}</span>
              </Link>
            ) : <div />}
          </div>
        </nav>

        {/* CTA */}
        <section className="py-16 px-4 bg-slate-900">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black text-white mb-4">Run better influencer campaigns</h2>
            <p className="text-slate-400 mb-8">Truleado is free to start. No credit card required.</p>
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
