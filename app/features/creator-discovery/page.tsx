import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Search,
  Users,
  BarChart3,
  Download,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Target,
  Globe,
  CreditCard
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Creator Discovery - Find Verified Influencers | Truleado',
  description: 'Discover millions of verified influencers across Instagram, YouTube, and TikTok with our OnSocial-powered platform. Unlock contact details, audience insights, and engagement metrics.',
  keywords: 'influencer discovery, creator search, instagram influencers, youtube creators, tiktok influencers, influencer marketing, creator database',
  openGraph: {
    title: 'Creator Discovery - Find Verified Influencers | Truleado',
    description: 'Discover millions of verified influencers across Instagram, YouTube, and TikTok with our OnSocial-powered platform.',
    type: 'website',
  },
}

const benefits = [
  {
    title: 'Millions of Verified Creators',
    description: 'Access a comprehensive database of verified influencers across all major platforms.',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Advanced Search & Filters',
    description: 'Find creators by niche, follower count, engagement rate, location, and platform.',
    icon: Search,
    color: 'text-purple-600',
  },
  {
    title: 'Unlock Contact Details',
    description: 'Get email addresses and phone numbers for direct outreach and relationship building.',
    icon: Target,
    color: 'text-green-600',
  },
  {
    title: 'Audience Demographics',
    description: 'Understand creator audiences with detailed demographic and interest data.',
    icon: BarChart3,
    color: 'text-orange-600',
  },
  {
    title: 'Bulk Export Options',
    description: 'Export creator lists in multiple formats for your CRM or outreach campaigns.',
    icon: Download,
    color: 'text-indigo-600',
  },
  {
    title: 'Credit-Based Access',
    description: 'Pay only for what you need with our transparent credit system.',
    icon: CreditCard,
    color: 'text-emerald-600',
  },
]

const platforms = [
  { name: 'Instagram', icon: '📸', description: 'Reels, Stories, Posts, and Live content' },
  { name: 'YouTube', icon: '🎥', description: 'Videos, Shorts, and channel analytics' },
  { name: 'TikTok', icon: '🎵', description: 'Videos, Live streams, and trending content' },
]

const creditTiers = [
  {
    name: 'Basic Unlock',
    credits: 3,
    features: ['Profile metrics', 'Basic audience data', 'Platform links'],
  },
  {
    name: 'Full Unlock',
    credits: 5,
    features: ['Everything in Basic', 'Contact details', 'Detailed demographics', 'Engagement history'],
  },
  {
    name: 'Bulk Export',
    credits: '3-5 per profile',
    features: ['CSV/Excel export', 'CRM integration', 'Team sharing'],
  },
]

export default function CreatorDiscoveryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 blur-3xl opacity-50" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                <Search className="h-3.5 w-3.5" />
                Creator Discovery
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Find Perfect
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Influencer Matches
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
                Powered by OnSocial, our creator discovery tool gives you access to millions of verified influencers.
                Search, filter, unlock contact details, and build relationships with creators who match your brand.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="https://app.truleado.com/signup">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 min-w-[200px]">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#platforms">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all min-w-[200px]">
                    View Platforms
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Why Choose Our
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Discovery Platform</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Built specifically for agencies that need reliable creator data and efficient outreach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="group relative rounded-2xl bg-white p-7 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
                  >
                    <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ${benefit.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Supported
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Platforms</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Find creators wherever your audience is most active.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credit System Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Transparent
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Credit System</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Pay only for the data you need. Our credit system ensures cost-effective creator research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creditTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="text-3xl font-black text-indigo-600">
                      {tier.credits} credits
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 px-6 py-20 sm:px-16 sm:py-28">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Find Your Next
                  <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    Top Creator?
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Join agencies already discovering and connecting with millions of verified influencers.
                  Start your free trial and unlock the power of creator discovery.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="https://app.truleado.com/signup">
                    <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 min-w-[200px]">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-400" />
                    <span>Enterprise security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-400" />
                    <span>Setup in minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}