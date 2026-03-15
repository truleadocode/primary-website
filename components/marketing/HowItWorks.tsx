'use client'

import { Building2, Search, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Set Up Your Agency',
    description: 'Create your workspace in minutes. Configure team roles, set up client profiles, and customize your approval workflows to match your processes.',
    icon: Building2,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'from-violet-500/20 to-purple-500/20',
    highlights: ['Guided onboarding', 'Role-based access', 'Custom workflows'],
  },
  {
    step: '02',
    title: 'Discover & Onboard Creators',
    description: 'Use our OnSocial-powered discovery tool to find verified influencers. Unlock contact details, import profiles, and build lasting relationships.',
    icon: Search,
    gradient: 'from-fuchsia-500 to-pink-600',
    glow: 'from-fuchsia-500/20 to-pink-500/20',
    highlights: ['Millions of profiles', 'Verified contacts', 'Audience insights'],
  },
  {
    step: '03',
    title: 'Launch Multi-Stage Campaigns',
    description: 'Create campaigns with detailed briefs, approval workflows, and budget tracking. Assign teams, invite creators, and manage execution in one dashboard.',
    icon: Rocket,
    gradient: 'from-amber-500 to-orange-500',
    glow: 'from-amber-500/20 to-orange-500/20',
    highlights: ['Brief templates', 'Multi-stage approvals', 'Budget tracking'],
  },
  {
    step: '04',
    title: 'Track Performance & Scale',
    description: 'Monitor analytics, manage payments, generate client reports, and optimize processes. Use insights to win more clients and scale your operations.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'from-emerald-500/20 to-teal-500/20',
    highlights: ['Real-time analytics', 'One-click reports', 'Payment tracking'],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
            How It Works
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Running in
            <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            No complex setup required. Your agency runs on Truleado in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative group">
                <div className="relative h-full rounded-2xl bg-slate-900 border border-white/6 p-7 hover:border-white/12 transition-colors duration-200">
                  {/* Step number badge */}
                  <div className="absolute -top-3.5 left-6">
                    <span className="inline-flex items-center rounded-full bg-slate-800 border border-white/10 px-2.5 py-0.5 text-xs font-bold text-slate-400">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon with glow */}
                  <div className="relative mb-6 mt-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} rounded-xl blur-lg scale-110`} />
                    <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Highlight tags */}
                  <div className="space-y-2">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${step.gradient} shrink-0`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
