'use client'

import { Building2, Search, Rocket, TrendingUp } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    step: '01',
    title: 'Set Up Your Agency',
    description: 'Create your workspace in minutes. Configure team roles, set up client profiles, and customize your approval workflows to match your processes.',
    icon: Building2,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    highlights: ['Guided onboarding', 'Role-based access', 'Custom workflows'],
  },
  {
    step: '02',
    title: 'Discover & Onboard Creators',
    description: "Use Truleado's built-in discovery tool to find verified influencers. Unlock contact details, import profiles, and build lasting relationships.",
    icon: Search,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    badge: 'bg-indigo-100 text-indigo-700',
    highlights: ['Millions of profiles', 'Verified contacts', 'Audience insights'],
  },
  {
    step: '03',
    title: 'Launch Multi-Stage Campaigns',
    description: 'Create campaigns with detailed briefs, approval workflows, and budget tracking. Assign teams, invite creators, and manage execution in one dashboard.',
    icon: Rocket,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    highlights: ['Brief templates', 'Multi-stage approvals', 'Budget tracking'],
  },
  {
    step: '04',
    title: 'Track Performance & Scale',
    description: 'Monitor analytics, manage payments, generate client reports, and optimize processes. Use insights to win more clients and scale your operations.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    highlights: ['Real-time analytics', 'One-click reports', 'Payment tracking'],
  },
]

export function HowItWorks() {
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: stepsRef, inView: stepsInView } = useInView()

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-blue-50/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb05_1px,transparent_1px),linear-gradient(to_bottom,#2563eb05_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center mb-16 lg:mb-20 reveal ${headerInView ? 'is-visible' : ''}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
            How It Works
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get Running in
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            No complex setup required. Your agency runs on Truleado in minutes.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className={`relative group reveal ${stepsInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`relative h-full rounded-2xl bg-white border ${step.border} p-7 card-lift`}>
                  {/* Step number badge */}
                  <div className="absolute -top-3.5 left-6">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${step.badge}`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.bg}`}>
                    <Icon className={`h-6 w-6 ${step.color}`} />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Highlight tags */}
                  <div className="space-y-2">
                    {step.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className={`h-1.5 w-1.5 rounded-full ${step.bg.replace('bg-', 'bg-').replace('-50', '-400')} shrink-0`} style={{backgroundColor: step.color.includes('blue') ? '#3b82f6' : step.color.includes('indigo') ? '#6366f1' : '#10b981'}} />
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
