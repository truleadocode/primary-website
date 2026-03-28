import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  DollarSign,
  TrendingUp,
  PieChart,
  Receipt,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Calculator,
  FileText,
  BarChart3,
  Globe,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Finance Management - Budget Tracking & ROI | Truleado',
  description: 'Complete financial oversight for your influencer campaigns. Budget allocation, expense tracking, creator payments, and profitability analysis—all in one platform.',
  keywords: 'finance management, budget tracking, expense management, creator payments, ROI analysis, campaign profitability, financial reporting',
  openGraph: {
    title: 'Finance Management - Budget Tracking & ROI | Truleado',
    description: 'Complete financial oversight for your influencer campaigns with budget tracking, expense management, and ROI analysis.',
    type: 'website',
  },
}

const financeFeatures = [
  {
    title: 'Campaign Budget Allocation',
    description: 'Set detailed budgets for each campaign with multi-currency support and automatic FX conversion.',
    icon: Calculator,
    benefits: ['Detailed budget breakdown', 'Multi-currency support', 'FX rate conversion', 'Budget controls'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Expense Tracking',
    description: 'Log and categorize all campaign expenses with receipt uploads and approval workflows.',
    icon: Receipt,
    benefits: ['Expense categorization', 'Receipt management', 'Approval workflows', 'Cost monitoring'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Creator Payment Management',
    description: 'Track creator agreements, payment status, and compensation across all your campaigns.',
    icon: CreditCard,
    benefits: ['Payment tracking', 'Agreement management', 'Milestone payments', 'GST/TDS handling'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Profitability Analysis',
    description: 'Monitor campaign profitability, client margins, and overall agency financial performance.',
    icon: TrendingUp,
    benefits: ['Profit margin tracking', 'Client profitability', 'ROI analysis', 'Financial reporting'],
    color: 'from-orange-500 to-red-500',
  },
]

const budgetComponents = [
  {
    component: 'Influencer Budget',
    description: 'Creator compensation and fees',
    example: '₹50,000 for micro-influencer campaign',
  },
  {
    component: 'Agency Fee',
    description: 'Your service fees and margins',
    example: '20% of total campaign value',
  },
  {
    component: 'Production Budget',
    description: 'Content creation and editing costs',
    example: '₹25,000 for video production',
  },
  {
    component: 'Boosting Budget',
    description: 'Paid amplification and ads',
    example: '₹30,000 for Instagram/TikTok boosts',
  },
  {
    component: 'Contingency',
    description: 'Buffer for unexpected costs',
    example: '10% of total budget',
  },
]

const financialReports = [
  {
    title: 'Campaign Finance Summary',
    description: 'Real-time overview of budget vs. actual spend, creator commitments, and profitability.',
    icon: BarChart3,
  },
  {
    title: 'Client Profitability Reports',
    description: 'Track which clients and campaigns are most profitable for your agency.',
    icon: PieChart,
  },
  {
    title: 'Expense Analysis',
    description: 'Categorize and analyze spending patterns across all campaigns.',
    icon: FileText,
  },
  {
    title: 'Payment Tracking',
    description: 'Monitor creator payments, due dates, and payment status across campaigns.',
    icon: CreditCard,
  },
]

const benefits = [
  'Maintain profitability across all client campaigns',
  'Make data-driven decisions about campaign investments',
  'Track creator payments and avoid payment disputes',
  'Generate accurate financial reports for clients',
  'Scale your agency with clear financial visibility',
  'Optimize pricing and margins based on real data',
]

export default function FinancePage() {
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
                <DollarSign className="h-3.5 w-3.5" />
                Finance Management
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Financial Control for
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Profitable Campaigns
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
                Take complete control of your campaign finances. From budget allocation to expense tracking, creator payments,
                and profitability analysis—ensure every campaign contributes to your agency's bottom line.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="https://app.truleado.com/signup">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 min-w-[200px]">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#budget-breakdown">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all min-w-[200px]">
                    View Budget Tools
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Features Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Complete Financial
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Oversight</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Every aspect of campaign finance managed in one integrated system designed for agency profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financeFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                  >
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
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

        {/* Budget Breakdown Section */}
        <section id="budget-breakdown" className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Detailed Budget
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Planning</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Structure your campaign budgets with our comprehensive 6-line breakdown for maximum profitability.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">Campaign Budget Components</h3>
                </div>

                <div className="divide-y divide-slate-100">
                  {budgetComponents.map((component, index) => (
                    <div key={index} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900">{component.component}</h4>
                          <p className="text-sm text-slate-500 mt-1">{component.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-600 italic">{component.example}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900">Total Campaign Budget</h4>
                      <p className="text-sm text-slate-500 mt-1">Sum of all components above</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600 italic">Auto-calculated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Professional
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Financial Reports</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Generate comprehensive financial reports that showcase your agency's financial expertise and campaign profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialReports.map((report) => {
                const Icon = report.icon
                return (
                  <div
                    key={report.title}
                    className="group relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 text-center"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4 mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Why Financial Management Matters for
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Agency</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{benefit}</span>
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
                  Ready to Take Control of
                  <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    Your Finances?
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Join agencies that maintain profitability and scale operations with complete financial visibility.
                  Start your free trial and transform your campaign finance management.
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
                    <span>Multi-currency support</span>
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