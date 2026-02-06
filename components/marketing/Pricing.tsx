import Link from 'next/link'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small agencies getting started',
    price: 'Free',
    priceDetail: 'during beta',
    features: [
      'Up to 5 team members',
      '10 active campaigns',
      'Basic analytics',
      'Email support',
      'Client portal access',
    ],
    cta: 'Get Started Free',
    href: 'https://tally.so/r/WOzzGP',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing agencies with bigger needs',
    price: '$49',
    priceDetail: '/month',
    features: [
      'Unlimited team members',
      'Unlimited campaigns',
      'Advanced analytics & reports',
      'Priority support',
      'Custom workflows',
      'White-label options',
      'API access',
    ],
    cta: 'Join Waitlist',
    href: 'https://tally.so/r/WOzzGP',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large agencies',
    price: 'Custom',
    priceDetail: 'pricing',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    href: 'mailto:hello@truleado.com',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20">
            <Sparkles className="h-3.5 w-3.5" />
            Free During Beta
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-slate-900 text-white ring-2 ring-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {' '}{plan.priceDetail}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-indigo-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
