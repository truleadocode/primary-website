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
  Instagram,
  Youtube,
  TrendingUp,
} from 'lucide-react'

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
    accent: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
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
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-600 ring-1 ring-inset ring-violet-500/20">
            Platform Features
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything Your Agency
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Needs to Scale
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            From campaign kickoff to performance reporting, manage it all from one powerful platform.
          </p>
        </div>

        {/* Bento-style featured cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* Card 1: Creator Discovery */}
          <div className="group relative rounded-2xl bg-slate-900 p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-violet-500/25 to-fuchsia-500/25 rounded-full blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Creator Discovery Powered by OnSocial
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Access millions of verified influencers across Instagram, YouTube, and TikTok. Unlock contact details, audience insights, and engagement metrics.
              </p>

              {/* Mini search UI mockup */}
              <div className="mt-6 rounded-xl bg-slate-800/70 border border-white/8 p-4 space-y-3">
                {/* Search bar */}
                <div className="flex items-center gap-2 rounded-lg bg-slate-700/60 px-3 py-2">
                  <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-400">fashion beauty lifestyle 100k-500k followers</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <SlidersHorizontal className="h-3 w-3 text-slate-500" />
                  </div>
                </div>
                {/* Filter pills */}
                <div className="flex gap-2 flex-wrap">
                  {[
                    { label: 'Instagram', icon: Instagram },
                    { label: 'YouTube', icon: Youtube },
                  ].map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-1 rounded-full bg-violet-500/20 border border-violet-500/30 px-2.5 py-1">
                      <Icon className="h-3 w-3 text-violet-400" />
                      <span className="text-xs text-violet-300">{label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 rounded-full bg-slate-700/50 border border-white/8 px-2.5 py-1">
                    <span className="text-xs text-slate-400">Eng. Rate &gt; 3%</span>
                  </div>
                </div>
                {/* Creator result rows */}
                {[
                  { followers: '312K', eng: '4.8%', niche: 'Beauty & Lifestyle' },
                  { followers: '228K', eng: '5.1%', niche: 'Fashion & Style' },
                ].map((creator, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-600 shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 rounded-full bg-slate-600 w-20" />
                        <span className="text-xs text-slate-500">{creator.followers}</span>
                        <span className="text-xs text-emerald-400">{creator.eng}</span>
                      </div>
                      <div className="mt-1 text-xs text-slate-600">{creator.niche}</div>
                    </div>
                    <button className="text-xs font-medium text-violet-400 bg-violet-500/15 border border-violet-500/25 rounded-lg px-2.5 py-1">
                      Unlock
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Campaign Execution */}
          <div className="group relative rounded-2xl bg-slate-900 p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                End-to-End Campaign Execution
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Manage multi-stage campaigns with built-in approval workflows. From briefing to content delivery—everything in one streamlined system.
              </p>

              {/* Mini campaign pipeline mockup */}
              <div className="mt-6 rounded-xl bg-slate-800/70 border border-white/8 p-4 space-y-3">
                {/* Campaign header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Nike x Summer Launch</span>
                  <span className="text-xs text-emerald-400 bg-emerald-500/15 border border-emerald-500/20 rounded-full px-2 py-0.5">Active</span>
                </div>
                {/* Stage pipeline */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'Brief', count: 8, color: 'bg-violet-500/30 border-violet-500/40 text-violet-300' },
                    { label: 'Content', count: 5, color: 'bg-amber-500/25 border-amber-500/35 text-amber-300' },
                    { label: 'Review', count: 3, color: 'bg-blue-500/25 border-blue-500/35 text-blue-300' },
                    { label: 'Live', count: 4, color: 'bg-emerald-500/25 border-emerald-500/35 text-emerald-300' },
                  ].map((stage) => (
                    <div key={stage.label} className={`rounded-lg border px-2 py-1.5 text-center ${stage.color}`}>
                      <div className="text-base font-bold">{stage.count}</div>
                      <div className="text-[10px] mt-0.5 opacity-80">{stage.label}</div>
                    </div>
                  ))}
                </div>
                {/* Creator rows */}
                {[
                  { status: 'Awaiting approval', statusColor: 'text-amber-400', check: false },
                  { status: 'Content approved', statusColor: 'text-emerald-400', check: true },
                  { status: 'Posted & live', statusColor: 'text-blue-400', check: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shrink-0" />
                    <div className="flex-1">
                      <div className="h-2.5 rounded bg-slate-600 w-20" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs ${item.statusColor}`}>{item.status}</span>
                      {item.check && <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular feature cards — 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group rounded-2xl bg-white p-7 border ${feature.border} hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-200`}
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
