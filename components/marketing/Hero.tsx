import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, BarChart3, Bell, CheckCircle, Star, Zap, Shield } from 'lucide-react'

export function Hero() {
  const content = {
    badge: 'Now in Beta',
    heading: 'Scale Your',
    headingHighlight: 'Influencer Agency.',
    description: 'The complete platform for agencies to manage influencer partnerships. From discovery to analytics—everything you need in one powerful workspace.',
    primaryCTA: { text: 'Join Waitlist', href: 'https://tally.so/r/WOzzGP' },
    secondaryCTA: { text: 'Watch Demo', href: '#how-it-works' },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 blur-3xl opacity-40" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {content.badge}
            <ArrowRight className="h-3.5 w-3.5" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
            {content.heading}
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {content.headingHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
            {content.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={content.primaryCTA.href}>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 min-w-[200px]">
                {content.primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href={content.secondaryCTA.href}>
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all min-w-[200px]">
                {content.secondaryCTA.text}
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Free during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Setup in minutes</span>
            </div>
          </div>

        </div>

        {/* Dashboard Preview - Modern Light Mode */}
        <div className="mt-20 mx-auto max-w-5xl">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl bg-white p-1.5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50 rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-7 rounded-lg bg-slate-100 max-w-md mx-auto flex items-center justify-center px-3">
                    <span className="text-xs text-slate-400">app.truleado.com/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 sm:p-6 bg-slate-50 rounded-b-xl">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden sm:block space-y-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 border border-indigo-100">
                      <BarChart3 className="h-4 w-4 text-indigo-600" />
                      <span className="text-xs text-indigo-700 font-semibold">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span className="text-xs text-slate-500">Campaigns</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                      <Bell className="h-4 w-4 text-slate-400" />
                      <span className="text-xs text-slate-500">Creators</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                      <TrendingUp className="h-4 w-4 text-slate-400" />
                      <span className="text-xs text-slate-500">Analytics</span>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className="col-span-12 sm:col-span-10 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: 'Active Campaigns', value: '12', change: '+3', color: 'indigo' },
                        { label: 'Team Members', value: '8', change: '+2', color: 'blue' },
                        { label: 'Creators', value: '156', change: '+24', color: 'purple' },
                        { label: 'Avg. ROI', value: '4.2x', change: '+0.8', color: 'green' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                          <div className="text-xs text-slate-500">{stat.label}</div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xl font-bold text-slate-900">{stat.value}</span>
                            <span className="text-xs font-medium text-green-600">{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-slate-900">Campaign Performance</span>
                        <div className="flex gap-2">
                          <div className="h-7 px-3 rounded-lg bg-slate-100 flex items-center">
                            <span className="text-xs text-slate-500">This Month</span>
                          </div>
                        </div>
                      </div>
                      {/* Bar chart mockup */}
                      <div className="flex items-end gap-2 h-24">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500 to-indigo-400" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                        <div className="text-sm font-semibold text-slate-900 mb-3">Recent Activity</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                            <div className="flex-1">
                              <div className="h-3 w-24 rounded bg-slate-100" />
                              <div className="h-2 w-16 rounded bg-slate-50 mt-1" />
                            </div>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
                        <div className="text-sm font-semibold text-slate-900 mb-3">Top Creators</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                            <div className="flex-1">
                              <div className="h-3 w-20 rounded bg-slate-100" />
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                              <span className="text-xs text-slate-500">4.9</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
