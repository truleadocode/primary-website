import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Target,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Download,
  Clock,
  DollarSign,
  PieChart,
  Activity
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analytics & Reporting - Performance Insights | Truleado',
  description: 'Track campaign performance with comprehensive analytics. Monitor engagement, ROI, audience demographics, and generate professional reports for your clients.',
  keywords: 'analytics, reporting, campaign performance, ROI tracking, influencer analytics, performance metrics, client reports',
  openGraph: {
    title: 'Analytics & Reporting - Performance Insights | Truleado',
    description: 'Track campaign performance with comprehensive analytics and generate professional reports for your clients.',
    type: 'website',
  },
}

const analyticsTypes = [
  {
    title: 'Pre-Campaign Analytics',
    description: 'Evaluate creator potential before campaign launch with detailed profile and audience insights.',
    icon: Users,
    metrics: ['Follower demographics', 'Engagement rates', 'Audience interests', 'Content performance'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Live Campaign Tracking',
    description: 'Monitor real-time performance as content goes live and engagement metrics roll in.',
    icon: Activity,
    metrics: ['Live engagement', 'Reach tracking', 'Conversion monitoring', 'Trend analysis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Post-Campaign Reports',
    description: 'Comprehensive ROI analysis and performance summaries for client presentations.',
    icon: BarChart3,
    metrics: ['Complete ROI analysis', 'Performance summaries', 'Client reports', 'Optimization insights'],
    color: 'from-purple-500 to-pink-500',
  },
]

const keyMetrics = [
  {
    title: 'Engagement Metrics',
    description: 'Track likes, comments, shares, saves, and overall engagement rates across all platforms.',
    icon: TrendingUp,
    items: ['Like rates', 'Comment volume', 'Share counts', 'Save rates', 'Engagement rate %'],
  },
  {
    title: 'Reach & Impressions',
    description: 'Monitor how many people see your content and understand audience growth patterns.',
    icon: Eye,
    items: ['Total reach', 'Impressions', 'Audience growth', 'Geographic spread', 'Demographic breakdown'],
  },
  {
    title: 'Conversion Tracking',
    description: 'Measure actual business impact with conversion rates, sales attribution, and ROI calculations.',
    icon: Target,
    items: ['Conversion rates', 'Sales attribution', 'Cost per acquisition', 'ROI percentage', 'Revenue impact'],
  },
  {
    title: 'Financial Performance',
    description: 'Track campaign profitability, budget utilization, and financial metrics for agency management.',
    icon: DollarSign,
    items: ['Budget vs. spend', 'Cost per engagement', 'Profit margins', 'Client profitability', 'Payment tracking'],
  },
]

const reportingFeatures = [
  {
    title: 'One-Click Report Generation',
    description: 'Generate professional client reports with one click. Customizable templates and automatic data population.',
    icon: Download,
  },
  {
    title: 'Real-Time Dashboard',
    description: 'Live dashboards showing campaign performance across all your clients and projects.',
    icon: BarChart3,
  },
  {
    title: 'Custom Date Ranges',
    description: 'Analyze performance over any time period with flexible date range selection and comparison.',
    icon: Clock,
  },
  {
    title: 'Export & Integration',
    description: 'Export data in multiple formats and integrate with your existing reporting tools.',
    icon: PieChart,
  },
]

const benefits = [
  'Make data-driven decisions for future campaigns',
  'Prove ROI to clients with comprehensive reports',
  'Optimize campaign strategies based on real performance',
  'Scale your agency with insights from past campaigns',
  'Win more business with data-backed case studies',
  'Reduce time spent on manual reporting',
]

export default function AnalyticsPage() {
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
                <BarChart3 className="h-3.5 w-3.5" />
                Analytics & Reporting
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Data-Driven
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Campaign Success
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl max-w-2xl mx-auto">
                Track every aspect of your influencer campaigns with comprehensive analytics. From creator performance to ROI analysis,
                make data-driven decisions that grow your agency and impress your clients.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="https://app.truleado.com/signup">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 min-w-[200px]">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#analytics-types">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all min-w-[200px]">
                    View Analytics
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section id="analytics-types" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Analytics for Every
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Campaign Stage</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                From planning to post-campaign analysis, get insights at every step of your influencer marketing process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {analyticsTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                  >
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${type.color} shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {type.description}
                    </p>

                    <ul className="space-y-2">
                      {type.metrics.map((metric, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Comprehensive
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Performance Metrics</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Track everything that matters for your influencer marketing campaigns and agency profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyMetrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <div
                    key={metric.title}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {metric.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {metric.description}
                        </p>

                        <ul className="space-y-1">
                          {metric.items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Reporting Features Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Professional
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Reporting Suite</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                Generate impressive client reports and internal dashboards that showcase your agency's expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportingFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 text-center"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4 mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
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

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Why Analytics Matter for
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
                  Ready to Turn Data into
                  <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    Agency Growth?
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Join agencies that use data-driven insights to win more clients and scale their operations.
                  Start your free trial and unlock the power of comprehensive analytics.
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
                    <span>Real-time insights</span>
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