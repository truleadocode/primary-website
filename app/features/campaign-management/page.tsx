import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Briefcase,
  Users,
  CheckCircle,
  Clock,
  FileText,
  ArrowRight,
  Target,
  TrendingUp,
  DollarSign,
  Bell,
  Shield,
  Zap,
  Eye,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Campaign Management - End-to-End Execution | Truleado',
  description: 'Manage complex influencer campaigns from start to finish. Multi-stage approvals, creator coordination, budget tracking, and performance monitoring—all in one platform.',
  keywords: 'campaign management, influencer campaigns, approval workflow, campaign execution, budget tracking, creator management',
  openGraph: {
    title: 'Campaign Management - End-to-End Execution | Truleado',
    description: 'Manage complex influencer campaigns from start to finish with our comprehensive campaign management platform.',
    type: 'website',
  },
}

const workflowSteps = [
  {
    step: '01',
    title: 'Campaign Setup',
    description: 'Create detailed campaign briefs with objectives, deliverables, timelines, and budget allocation.',
    icon: FileText,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    step: '02',
    title: 'Creator Selection',
    description: 'Invite creators from your roster or discover new ones. Send briefs and negotiate terms.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Content Creation',
    description: 'Creators submit deliverables through their portal. Track progress and manage revisions.',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
  },
  {
    step: '04',
    title: 'Approval Process',
    description: 'Multi-stage approvals: internal review, client approval, final sign-off with full audit trail.',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500',
  },
  {
    step: '05',
    title: 'Performance Tracking',
    description: 'Monitor live performance, track ROI, and generate comprehensive reports for clients.',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
  },
]

const features = [
  {
    title: 'Multi-Stage Approval Workflows',
    description: 'Configure custom approval processes for each client. Internal approvals first, then client sign-off. Everything tracked with timestamps and audit logs.',
    icon: CheckCircle,
    benefits: ['Custom workflows per client', 'Full audit trail', 'Automated notifications', 'Version control'],
  },
  {
    title: 'Creator Portal & Coordination',
    description: 'Give creators secure access to view briefs, submit content, track payments, and communicate with your team—all without sharing internal agency details.',
    icon: Users,
    benefits: ['Secure creator access', 'Real-time submissions', 'Payment tracking', 'Direct communication'],
  },
  {
    title: 'Budget & Expense Tracking',
    description: 'Set campaign budgets, track expenses, manage creator payments, and monitor profitability. Multi-currency support for global agencies.',
    icon: DollarSign,
    benefits: ['Budget allocation', 'Expense logging', 'Payment management', 'Profitability tracking'],
  },
  {
    title: 'Client Portal Access',
    description: 'Clients can review deliverables, approve content, and track campaign progress without seeing your internal operations or other clients.',
    icon: Eye,
    benefits: ['Secure client access', 'Approval workflows', 'Progress tracking', 'Clean interface'],
  },
  {
    title: 'Performance Analytics',
    description: 'Track campaign performance with pre and post-launch analytics. Monitor engagement, reach, conversions, and ROI across all deliverables.',
    icon: TrendingUp,
    benefits: ['Real-time metrics', 'ROI calculation', 'Performance reports', 'Trend analysis'],
  },
  {
    title: 'Team Collaboration Tools',
    description: 'Role-based access ensures the right team members see the right information. Account Managers own clients, Operators execute campaigns.',
    icon: Briefcase,
    benefits: ['Role-based access', 'Task assignment', 'Progress tracking', 'Team communication'],
  },
]

const campaignTypes = [
  {
    title: 'Influencer Campaigns',
    description: 'Full creator management with discovery, onboarding, content submission, and payment processing.',
    features: ['Creator discovery', 'Contract management', 'Content approvals', 'Payment processing'],
    icon: Star,
  },
  {
    title: 'Social Media Campaigns',
    description: 'Internal execution campaigns without external creators. Perfect for owned content and brand campaigns.',
    features: ['Internal workflows', 'Content planning', 'Approval processes', 'Performance tracking'],
    icon: Target,
  },
]

export default function CampaignManagementPage() {
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
                <Briefcase className="h-3.5 w-3.5" />
                Campaign Management
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Execute Campaigns
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Like a Pro
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
                From campaign planning to final delivery, manage every aspect of your influencer marketing campaigns.
                Multi-stage approvals, creator coordination, budget tracking, and performance analytics—all in one platform.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="https://app.truleado.com/signup">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 min-w-[200px]">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#workflow">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all min-w-[200px]">
                    View Workflow
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Complete Campaign
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Workflow</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Streamlined processes that scale with your agency, from small campaigns to enterprise programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.slice(0, 3).map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="relative">
                    <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full">
                      <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-lg">
                        {step.step}
                      </div>

                      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {workflowSteps.slice(3).map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="relative">
                    <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full">
                      <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-lg">
                        {step.step}
                      </div>

                      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Campaign Types Section */}
        <section className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Campaign Types for
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Every Need</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Whether you're working with external creators or managing internal content, we have you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campaignTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                  >
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {type.description}
                    </p>

                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Powerful Features for
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Agency Success</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Everything you need to run successful influencer marketing campaigns at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                  >
                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-indigo-600`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
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
                  Ready to Execute
                  <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    Better Campaigns?
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Join agencies that have transformed their campaign execution with our comprehensive management platform.
                  Start your free trial and see the difference.
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