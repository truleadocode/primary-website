import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, BookOpen, FileText, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources — Influencer Marketing Guides, Blog & Insights',
  description: 'Guides, blog posts, and resources to help influencer marketing agencies run better campaigns, manage clients, and measure ROI.',
  alternates: { canonical: 'https://truleado.com/resources' },
}

const resources = [
  {
    icon: BookOpen,
    title: 'Blog',
    description: 'Practical articles on influencer marketing strategy, agency operations, creator management, and ROI measurement.',
    href: '/resources/blog',
    cta: 'Read the blog',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: HelpCircle,
    title: 'Help Center',
    description: 'Step-by-step guides for getting the most out of Truleado — from setup to advanced campaign workflows.',
    href: '/help',
    cta: 'Browse help articles',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: FileText,
    title: 'API Docs',
    description: 'Technical documentation for developers integrating with the Truleado API.',
    href: '/docs',
    cta: 'View API docs',
    color: 'bg-emerald-50 text-emerald-600',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Resources</p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Everything you need to run a better agency
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl">
              Guides, articles, and documentation for influencer marketing agencies.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link key={resource.title} href={resource.href} className="group block p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${resource.color} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h2>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{resource.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    {resource.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
