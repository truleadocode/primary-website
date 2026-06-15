import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getAllBlogPosts } from '@/lib/blog'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Influencer Marketing Insights for Agencies',
  description: 'Practical guides on influencer marketing strategy, agency operations, creator management, campaign execution, and ROI measurement.',
  alternates: { canonical: 'https://truleado.com/resources/blog' },
  openGraph: {
    title: 'Blog — Influencer Marketing Insights for Agencies | Truleado',
    description: 'Practical guides on influencer marketing strategy, agency operations, creator management, and ROI measurement.',
    url: 'https://truleado.com/resources/blog',
    type: 'website',
  },
}

export default function BlogListPage() {
  const posts = getAllBlogPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 border-b border-slate-100">
          <div className="mx-auto max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/resources" className="hover:text-slate-600 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-slate-600">Blog</span>
            </nav>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Influencer marketing insights</h1>
            <p className="text-xl text-slate-500">Practical guides for agencies running smarter influencer campaigns.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-900 text-white">All</span>
              {categories.map(cat => (
                <span key={cat} className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">{cat}</span>
              ))}
            </div>
            <div className="divide-y divide-slate-100">
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group block py-8 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <span className="hidden sm:block text-3xl font-black text-slate-100 w-12 shrink-0 pt-1">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full"><Tag className="h-3 w-3" />{post.category}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="h-3 w-3" />{post.readTime}</span>
                        <span className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{post.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">Read article <ArrowRight className="h-3.5 w-3.5" /></span>
                    </div>
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
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors">Start free trial <ArrowRight className="h-4 w-4" /></button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
