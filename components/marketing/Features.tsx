'use client'

import {
  Search,
  Briefcase,
  Users,
  Eye,
  Star,
  BarChart3,
  DollarSign,
  Shield,
  CheckCircle,
  SlidersHorizontal,
  Globe,
  TrendingUp,
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const features = [
  {
    title: 'Smart Team Collaboration',
    description: 'Role-based access ensures the right people see the right information—Account Managers, Operators, and clients each in their lane.',
    icon: Users,
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    title: 'Client Portal with Boundaries',
    description: 'Give clients secure access to review and approve content without exposing your internal operations. No more email chains.',
    icon: Eye,
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    title: 'Creator Management Hub',
    description: 'Centralize influencer relationships with detailed profiles, rate cards, and performance history. Creators get their own portal.',
    icon: Star,
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    title: 'Advanced Analytics & Reporting',
    description: 'Track campaign performance with pre and post-launch analytics. Monitor ROI across all clients and generate reports in one click.',
    icon: BarChart3,
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    title: 'Complete Finance Management',
    description: 'Budget allocation, expense tracking, creator payments, and reports—all in one place. Multi-currency with auto FX conversion.',
    icon: DollarSign,
    accent: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant infrastructure with role-based permissions, full audit logs, and secure client portals.',
    icon: Shield,
    accent: 'text-slate-600',
    bg: 'bg-slate-100',
    border: 'border-slate-200',
  },
]

export function Features() {
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: bentoRef, inView: bentoInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center mb-16 sm:mb-20 reveal ${headerInView ? 'is-visible' : ''}`}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20">
            Platform Features
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything Your Agency
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Needs to Scale
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            From campaign kickoff to performance reporting, our influencer marketing software manages it all from one powerful platform.
          </p>
        </div>

        {/* Bento-style featured cards */}
        <div ref={bentoRef} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Card 1: Creator Discovery */}
          <div
            className={`group relative rounded-2xl bg-blue-600 p-8 sm:p-10 overflow-hidden card-lift reveal ${bentoInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Creator Discovery
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                Access millions of verified influencers across all major platforms. Unlock contact details, audience insights, and engagement metrics.
              </p>

              {/* Mini search UI mockup */}
              <div className="mt-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 space-y-3 transition-transform duration-300 group-hover:scale-[1.02]" style={{ transformOrigin: 'bottom center' }}>
                <div className="flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2">
                  <Search className="h-3.5 w-3.5 text-blue-200 shrink-0" />
                  <span className="text-xs text-blue-100 truncate min-w-0">fashion beauty lifestyle 100k-500k</span>
                  <div className="ml-auto shrink-0">
                    <SlidersHorizontal className="h-3 w-3 text-blue-200" />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { label: 'All Platforms', icon: Globe },
                    { label: 'Top Creators', icon: Star },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-1 rounded-full bg-white/20 border border-white/30 px-2.5 py-1">
                      <Icon className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">{label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-2.5 py-1">
                    <span className="text-xs text-blue-100">Eng. Rate &gt; 3%</span>
                  </div>
                </div>
                {[
                  { followers: '312K', eng: '4.8%', niche: 'Beauty & Lifestyle' },
                  { followers: '228K', eng: '5.1%', niche: 'Fashion & Style' },
                ].map((creator, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white/30 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <div className="h-2.5 rounded-full bg-white/40 w-16 shrink-0" />
                        <span className="text-xs text-blue-200">{creator.followers}</span>
                        <span className="text-xs text-emerald-300">{creator.eng}</span>
                      </div>
                      <div className="mt-1 text-xs text-blue-200 truncate">{creator.niche}</div>
                    </div>
                    <button className="shrink-0 text-xs font-medium text-blue-700 bg-white rounded-lg px-2.5 py-1">
                      Unlock
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Campaign Execution */}
          <div
            className={`group relative rounded-2xl bg-indigo-600 p-8 sm:p-10 overflow-hidden card-lift reveal ${bentoInView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '80ms' }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                End-to-End Campaign Execution
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-sm">
                Manage multi-stage campaigns with built-in approval workflows. From briefing to content delivery—everything in one streamlined system.
              </p>

              {/* Mini campaign pipeline mockup */}
              <div className="mt-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4 space-y-3 transition-transform duration-300 group-hover:scale-[1.02]" style={{ transformOrigin: 'bottom center' }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Nike x Summer Launch</span>
                  <span className="text-xs text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-2 py-0.5">Active</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'Brief', count: 8, color: 'bg-white/15 border-white/25 text-white' },
                    { label: 'Content', count: 5, color: 'bg-white/15 border-white/25 text-white' },
                    { label: 'Review', count: 3, color: 'bg-white/15 border-white/25 text-white' },
                    { label: 'Live', count: 4, color: 'bg-emerald-500/25 border-emerald-400/35 text-emerald-200' },
                  ].map((stage) => (
                    <div key={stage.label} className={`rounded-lg border px-2 py-1.5 text-center ${stage.color}`}>
                      <div className="text-base font-bold">{stage.count}</div>
                      <div className="text-[10px] mt-0.5 opacity-80">{stage.label}</div>
                    </div>
                  ))}
                </div>
                {[
                  { status: 'Awaiting approval', statusColor: 'text-amber-300', check: false },
                  { status: 'Content approved', statusColor: 'text-emerald-300', check: true },
                  { status: 'Posted & live', statusColor: 'text-blue-200', check: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-white/30 shrink-0" />
                    <div className="flex-1">
                      <div className="h-2.5 rounded bg-white/30 w-20" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs ${item.statusColor}`}>{item.status}</span>
                      {item.check && <CheckCircle className="h-3.5 w-3.5 text-emerald-300" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular feature cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group rounded-2xl bg-white p-7 border ${feature.border} card-lift reveal ${gridInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.bg}`}>
                  <Icon className={`h-5 w-5 ${feature.accent}`} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
