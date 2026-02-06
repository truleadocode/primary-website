'use client'

import { Building2, UserPlus, Rocket, TrendingUp, CheckCircle } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Set Up Your Workspace',
    description: 'Create your agency account in minutes. Invite team members, configure workflows, and set up client workspaces with custom branding.',
    icon: Building2,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    step: '02',
    title: 'Onboard Clients & Creators',
    description: 'Add client accounts with portal access. Build your creator network and give influencers credentials to submit deliverables.',
    icon: UserPlus,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Launch Campaigns',
    description: 'Create multi-stage campaigns with approval workflows. Assign team members, set budgets, and track deliverables in real-time.',
    icon: Rocket,
    color: 'from-amber-500 to-orange-500',
  },
  {
    step: '04',
    title: 'Report & Scale',
    description: 'Generate comprehensive reports for clients with one click. Track ROI, optimize budgets, and scale your operations.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/20 shadow-sm">
            How It Works
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get Started in
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Four Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No complex setup required. Get your agency running in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20px)] h-px bg-gradient-to-r from-slate-300 to-transparent" />
                )}

                <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Checkmarks */}
                  <div className="mt-6 space-y-2">
                    {['Quick setup', 'No coding needed'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500" />
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
