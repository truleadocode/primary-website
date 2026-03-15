import Link from 'next/link'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

const features = [
  { category: 'Campaigns', items: ['Unlimited active campaigns', 'Multi-stage approval workflows', 'Campaign briefs & templates', 'Budget tracking & allocation'] },
  { category: 'Creator Discovery', items: ['OnSocial-powered search', 'Access to millions of verified creators', 'Unlock contact details & audience insights', 'Creator profile management'] },
  { category: 'Team & Clients', items: ['Unlimited team members', 'Role-based access control', 'Secure client portal', 'Multi-client management'] },
  { category: 'Analytics & Finance', items: ['Pre & post-launch analytics', 'One-click client reports', 'Creator payment tracking', 'Multi-currency support'] },
  { category: 'Platform', items: ['Creator portal (free for creators)', 'Enterprise-grade security', 'Full audit logs', 'Priority support'] },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
            <Sparkles className="h-3.5 w-3.5" />
            Free During Beta
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything included.
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Free while in beta.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            No credit card required. No feature limits. Full access to every tool your agency needs—at zero cost during our beta.
          </p>
        </div>

        {/* Single plan card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Card top */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 sm:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-blue-200 mb-1">Beta Plan</div>
                <div className="text-5xl font-black text-white">Free</div>
                <div className="mt-1 text-blue-100 text-sm">Full access · No credit card · Cancel anytime</div>
              </div>
              <Link href="https://app.truleado.com/signup">
                <button className="group inline-flex items-center justify-center cursor-pointer px-8 py-3.5 text-base font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap">
                  Start for Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Feature grid */}
          <div className="px-8 py-10 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {features.map((group) => (
                <div key={group.category}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{group.category}</div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Free for creators too.{' '}
          <a href="mailto:hello@truleado.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Questions? Chat with us.
          </a>
        </p>
      </div>
    </section>
  )
}
