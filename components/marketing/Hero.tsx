import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Bell, TrendingUp, Users, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle blue tint background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-100/70 rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb06_1px,transparent_1px),linear-gradient(to_bottom,#2563eb06_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-16 sm:pt-44 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            The Complete
            <span className="block mt-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Influencer Marketing Platform
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-500 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
            Streamline your entire workflow—from creator discovery to campaign execution, approvals, and ROI reporting. Built for agencies managing multiple clients.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://app.truleado.com/signup">
              <button className="group inline-flex items-center justify-center cursor-pointer px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-150 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25 min-w-[200px]">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="https://tally.so/r/WOzzGP">
              <button className="group inline-flex items-center justify-center cursor-pointer px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors duration-150 min-w-[200px]">
                Book a Demo
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Free trial — no credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Live in under 5 minutes</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-14 mx-auto max-w-5xl">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 via-indigo-100/50 to-blue-200/50 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl bg-white p-1.5 shadow-2xl shadow-blue-900/10 ring-1 ring-slate-200">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <div className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-7 rounded-lg bg-white border border-slate-200 max-w-sm mx-auto flex items-center justify-center px-3">
                    <span className="text-xs text-slate-400">app.truleado.com/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-4 sm:p-6 bg-slate-50 rounded-b-xl">
                <div className="grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden sm:block space-y-1.5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600">
                      <BarChart3 className="h-4 w-4 text-white" />
                      <span className="text-xs text-white font-semibold">Dashboard</span>
                    </div>
                    {[
                      { icon: Users, label: 'Campaigns' },
                      { icon: Bell, label: 'Creators' },
                      { icon: TrendingUp, label: 'Analytics' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg">
                        <Icon className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-400">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="col-span-12 sm:col-span-10 space-y-4">
                    {/* Stat cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: 'Active Campaigns', value: '12', change: '+3', changeColor: 'text-blue-600' },
                        { label: 'Team Members', value: '8', change: '+2', changeColor: 'text-indigo-600' },
                        { label: 'Creators', value: '156', change: '+24', changeColor: 'text-blue-600' },
                        { label: 'Avg. ROI', value: '4.2x', change: '+0.8x', changeColor: 'text-emerald-600' },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-white p-4 border border-slate-200 shadow-sm">
                          <div className="text-xs text-slate-400">{stat.label}</div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-xl font-bold text-slate-900">{stat.value}</span>
                            <span className={`text-xs font-semibold ${stat.changeColor}`}>{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-slate-900">Campaign Performance</span>
                        <div className="h-7 px-3 rounded-lg bg-slate-100 flex items-center">
                          <span className="text-xs text-slate-500">This Month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400"
                            style={{ height: `${h}%`, opacity: 0.55 + (i / 12) * 0.45 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom 2 panels */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-sm">
                        <div className="text-sm font-semibold text-slate-900 mb-3">Recent Activity</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-1.5">
                            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shrink-0" />
                            <div className="flex-1 space-y-1">
                              <div className="h-2.5 rounded bg-slate-200 w-24" />
                              <div className="h-2 rounded bg-slate-100 w-16" />
                            </div>
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl bg-white p-4 border border-slate-200 shadow-sm">
                        <div className="text-sm font-semibold text-slate-900 mb-3">Top Creators</div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 py-1.5">
                            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shrink-0" />
                            <div className="flex-1">
                              <div className="h-2.5 rounded bg-slate-200 w-20" />
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
