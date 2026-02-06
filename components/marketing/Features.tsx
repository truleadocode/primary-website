import {
  Briefcase,
  Users,
  Eye,
  Star,
  Bell,
  Settings,
  BarChart3,
  DollarSign,
  ArrowRight,
} from 'lucide-react'

const featured = [
  {
    title: 'End-to-End Campaign Management',
    description: 'Manage every aspect of client campaigns. Multiple approval workflows, deliverable tracking, task management, team tagging, performance monitoring, budget control—all in one dashboard.',
    icon: Briefcase,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Get bird\'s-eye visibility across all campaigns, clients, and creators. Detailed analytics, customizable reports, and real-time insights keep you informed at every level.',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
  },
]

const features = [
  {
    title: 'Team Collaboration',
    description: 'Invite unlimited team members with custom roles and granular permissions. Control who sees what and delegate tasks across client accounts.',
    icon: Users,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Client Portal Access',
    description: 'Give clients secure portal access to review and approve influencer deliverables in real-time. No more endless email threads.',
    icon: Eye,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Creator Management Hub',
    description: 'Centralize your creator roster. Manage relationships and give influencers login access to submit deliverables and track performance.',
    icon: Star,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Smart Notifications',
    description: 'Stay on top of every activity with email and in-app alerts. Customize notifications for approvals, deadlines, and team mentions.',
    icon: Bell,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: '100% Customizable',
    description: 'Tailor Truleado to your agency\'s exact workflow. Customize fields, templates, approval flows, and integrations.',
    icon: Settings,
    color: 'bg-slate-100 text-slate-600',
  },
  {
    title: 'Budget & Finance Tracking',
    description: 'Track budgets across clients and campaigns. Monitor spend, manage invoices, and generate financial reports effortlessly.',
    icon: DollarSign,
    color: 'bg-green-50 text-green-600',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
            Platform Features
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything Your Agency
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Needs to Scale</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            From campaign kickoff to performance reporting, manage it all from one powerful platform.
          </p>
        </div>

        {/* Featured Cards - Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300"
              >
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />

                <div className="relative">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Regular Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-white p-7 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
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
