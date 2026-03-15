import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, BarChart3, Bell, CheckCircle, Star, Zap, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background: violet glow orbs + grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-60 right-1/4 w-[350px] h-[350px] bg-fuchsia-600/8 rounded-full blur-3xl" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Radial fade at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 sm:pt-44 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Trusted by 500+ influencer agencies
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
            {`The Complete`}
            <span className="block mt-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Influencer Agency OS
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
            Streamline your entire workflow—from creator discovery to campaign execution, approvals, and ROI reporting. Built for agencies managing multiple clients.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://app.truleado.com/signup">
              <button className="group inline-flex items-center justify-center cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-colors duration-150 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 min-w-[200px]">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="https://tally.so/r/WOzzGP">
              <button className="group inline-flex items-center justify-center cursor-pointer px-8 py-4 text-base font-semibold text-white bg-white/8 rounded-xl border border-white/15 hover:bg-white/12 hover:border-white/25 transition-colors duration-150 min-w-[200px] backdrop-blur-sm">
                Book a Demo
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Free trial — no credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-500 shrink-0" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Live in under 5 minutes</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="relative">
            {/* Glow effect behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/15 via-fuchsia-500/15 to-violet-500/15 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl bg-slate-900 p-1.5 shadow-2xl ring-1 ring-white/8">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-800/50 rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-7 rounded-lg bg-slate-700/50 max-w-sm mx-auto flex items-center justify-center px-3">
                    <span className="text-xs text-slate-400">app.truleado.com/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-4 sm:p-6 bg-slate-900/90 rounded-b-xl">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden sm:block space-y-1.5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600/20 border border-violet-500/20">
                      <BarChart3 className="h-4 w-4 text-violet-400" />
                      <span className="text-xs text-violet-300 font-semibold">Dashboard</span>
                    </div>
                    {[
                      { icon: Users, label: 'Campaigns' },
                      { icon: Bell, label: 'Creators' },
                      { icon: TrendingUp, label: 'Analytics' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg">
                        <Icon className="h-4 w-4 text-slate-600" />
                        <span className="text-xs text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="col-span-12 sm:col-span-10 space-y-4">
                    {/* Stat cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: 'Active Campaigns', value: '12', change: '+3', changeColor: 'text-violet-400' },
                        { label: 'Team Members', value: '8', change: '+2', changeColor: 'text-blue-400' },
                        { label: 'Creators', value: '156', change: '+24', changeColor: 'text-fuchsia-400' },
                        { label: 'Avg. ROI', value: '4.2x', change: '+0.8x', changeColor: 'text-emerald-400' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-slate-800/70 p-4 border border-white/5">
                          <div className="text-xs text-slate-500">{stat.label}</div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xl font-bold text-white">{stat.value}</span>
                            <span className={`text-xs font-semibold ${stat.changeColor}`}>{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="rounded-xl bg-slate-800/70 p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-white">Campaign Performance</span>
                        <div className="h-7 px-3 rounded-lg bg-slate-700/60 flex items-center">
                          <span className="text-xs text-slate-400">This Month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-fuchsia-500"
                            style={{ height: `${h}%`, opacity: 0.75 + (i / 12) * 0.25 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom 2 panels */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-800/70 p-4 border border-white/5">
                        <div className="text-sm font-semibold text-white mb-3">Recent Activity</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-1.5">
                            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shrink-0" />
                            <div className="flex-1 space-y-1">
                              <div className="h-2.5 rounded bg-slate-700 w-24" />
                              <div className="h-2 rounded bg-slate-800 w-16" />
                            </div>
                            <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl bg-slate-800/70 p-4 border border-white/5">
                        <div className="text-sm font-semibold text-white mb-3">Top Creators</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-1.5">
                            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shrink-0" />
                            <div className="flex-1">
                              <div className="h-2.5 rounded bg-slate-700 w-20" />
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                              <span className="text-xs text-slate-400">4.9</span>
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
