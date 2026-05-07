'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Users,
  Star,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Package,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const allFeatures = [
  { category: 'Campaigns', items: ['Unlimited active campaigns', 'Multi-stage approval workflows', 'Campaign briefs & templates', 'Budget tracking & allocation'] },
  { category: 'Creator Discovery', items: ['Truleado creator search', 'Access to millions of verified creators', 'Unlock contact details & audience insights', 'Creator profile management'] },
  { category: 'Team & Clients', items: ['Unlimited team members', 'Role-based access control', 'Secure client portal', 'Multi-client management'] },
  { category: 'Analytics & Finance', items: ['Pre & post-launch analytics', 'One-click client reports', 'Creator payment tracking', 'Multi-currency support'] },
  { category: 'Platform', items: ['Creator portal (free for creators)', 'Enterprise-grade security', 'Full audit logs', 'Priority support'] },
]

const creditPackages = [
  {
    name: 'Starter',
    credits: 100,
    pricePerCredit: 1.50,
    popular: false,
    description: 'Great for trying out creator discovery',
    color: 'slate',
  },
  {
    name: 'Growth',
    credits: 250,
    pricePerCredit: 1.25,
    popular: true,
    description: 'Most popular for growing agencies',
    color: 'blue',
  },
  {
    name: 'Scale',
    credits: 500,
    pricePerCredit: 1.00,
    popular: false,
    description: 'For high-volume creator campaigns',
    color: 'indigo',
  },
  {
    name: 'Enterprise',
    credits: 'Custom',
    pricePerCredit: 0.80,
    popular: false,
    description: 'Custom volume, best rate, dedicated support',
    color: 'slate',
    custom: true,
  },
]

const faqs = [
  {
    question: 'What are credits used for?',
    answer: 'Credits are used to unlock creator profiles — including contact details, audience demographics, and engagement data. Each unlock costs 1 credit. The Free plan includes 50 one-time credits on signup. The Pro plan includes 100 credits every month (or 1,200 credits upfront on an annual plan). Top up anytime with a credit package.',
  },
  {
    question: 'Do unused credits roll over?',
    answer: 'Free plan credits are a one-time bonus and never expire. Pro plan credits (100/month or 1,200/year) reset each billing period — unused monthly credits do not roll over. Credits purchased as add-on packages never expire and roll over indefinitely.',
  },
  {
    question: 'Can I switch between monthly and annual billing?',
    answer: 'Yes. You can switch at any time from your billing settings. Switching to annual will apply the 20% discount immediately on your next payment.',
  },
  {
    question: 'Is there a free trial for the paid plan?',
    answer: 'Yes — every new account starts with a free plan that includes 50 one-time credits and full platform access for 7 days. You can upgrade to the paid plan at any time.',
  },
  {
    question: 'What happens when I run out of credits?',
    answer: "You'll receive a low-credit notification and can purchase a top-up pack instantly. Your campaigns and platform access continue uninterrupted — credits only gate creator profile unlocks.",
  },
  {
    question: 'Can I buy credits without a subscription?',
    answer: 'Credit packages require an active subscription (free or paid). The Pro plan already includes 100 credits per month (or 1,200/year), and top-up packages give you the best per-credit rates for high-volume needs.',
  },
]

const testimonials = [
  {
    quote: "We went from 3 hours of creator research to 20 minutes. The credit system is transparent and fair — we know exactly what we're spending.",
    author: 'Sarah M.',
    role: 'Head of Influencer, Bloom Agency',
    stars: 5,
  },
  {
    quote: "The free plan had everything we needed to onboard our first client. Upgrading was a no-brainer once we saw the ROI.",
    author: 'James T.',
    role: 'Founder, Catalyst Social',
    stars: 5,
  },
  {
    quote: "Finally, an influencer platform that isn't trying to hide pricing. The credit packs give us budget flexibility our clients love.",
    author: 'Priya K.',
    role: 'Campaign Director, Vibe Media',
    stars: 5,
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const monthlyPrice = 299
  const annualMonthly = Math.round(monthlyPrice * 0.8)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="pt-36 pb-16 px-4 sm:px-6 text-center bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
              <Sparkles className="h-3.5 w-3.5" />
              Simple, transparent pricing
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Start free.
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Scale when ready.
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Every Truleado plan includes full platform access. Pay only for the creator profile credits you actually use — no hidden fees, no seat limits.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              {[
                { icon: Shield, label: 'No credit card required' },
                { icon: Users, label: 'Free for creators' },
                { icon: Zap, label: 'Cancel anytime' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-blue-500" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="pb-4 px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                annual ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                  annual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                Save 20%
              </span>
            </span>
          </div>
        </section>

        {/* Plans */}
        <section className="py-8 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Free Plan */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="px-5 sm:px-8 pt-8 pb-6 border-b border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Free Plan</div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-slate-900">$0</span>
                  <span className="text-slate-400 mb-2 text-sm">/ month</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">Full access for 7 days. No credit card needed.</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    <Sparkles className="h-3 w-3" /> 7-day trial
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <Package className="h-3 w-3" /> 50 credits (one-time)
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800 ring-1 ring-blue-200">
                    <Users className="h-3 w-3" /> Unlimited users
                  </span>
                </div>

                <Link href="https://app.truleado.com/signup" className="block mt-6">
                  <button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                    Get started free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>

              <div className="px-5 sm:px-8 py-6 flex-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">All features included</div>
                <div className="space-y-5">
                  {allFeatures.map((group) => (
                    <div key={group.category}>
                      <div className="text-xs font-semibold text-slate-500 mb-2">{group.category}</div>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          item === 'Unlimited team members' ? (
                            <li key={item} className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-100 px-2 py-1.5 -mx-2">
                              <Users className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                              <span className="text-xs font-bold text-blue-700">{item}</span>
                            </li>
                          ) : (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-600">{item}</span>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Paid Plan */}
            <div className="rounded-2xl overflow-hidden flex flex-col shadow-xl shadow-blue-900/10 border border-blue-200">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 sm:px-8 pt-8 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-blue-200 uppercase tracking-wider">Pro Plan</div>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-white">
                    ${annual ? annualMonthly : monthlyPrice}
                  </span>
                  <span className="text-blue-200 mb-2 text-sm">/ month</span>
                </div>
                {annual && (
                  <p className="text-blue-200 text-xs mt-1">
                    Billed as ${annualMonthly * 12}/year — you save ${(monthlyPrice - annualMonthly) * 12}/yr
                  </p>
                )}
                <p className="mt-2 text-sm text-blue-100">Full platform access, all features included.</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" /> All features
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/25 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/30">
                    <Users className="h-3 w-3" /> Unlimited users
                  </span>
                </div>

                {/* Free credits callout */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {annual ? '1,200 credits / year' : '100 credits / month'} — included free
                    </div>
                    <div className="text-xs text-blue-200 mt-0.5">
                      {annual ? 'Unlocked upfront, use anytime during the year' : 'Refreshes each billing cycle'}
                    </div>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full bg-emerald-400/20 border border-emerald-300/30 px-2 py-0.5 text-xs font-bold text-emerald-200">
                    Free
                  </span>
                </div>

                <Link href="https://app.truleado.com/signup" className="block mt-4">
                  <button className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-colors">
                    Start Pro Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>

              <div className="px-5 sm:px-8 py-6 flex-1 bg-white">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">All features included</div>
                <div className="space-y-5">
                  {allFeatures.map((group) => (
                    <div key={group.category}>
                      <div className="text-xs font-semibold text-slate-500 mb-2">{group.category}</div>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          item === 'Unlimited team members' ? (
                            <li key={item} className="flex items-center gap-2 rounded-lg bg-indigo-50 border border-indigo-100 px-2 py-1.5 -mx-2">
                              <Users className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                              <span className="text-xs font-bold text-indigo-700">{item}</span>
                            </li>
                          ) : (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-600">{item}</span>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Packages */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 shadow-sm">
                <Zap className="h-3.5 w-3.5" />
                Credit Top-up Packages
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Need more creator unlocks?
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Buy credits anytime.
                </span>
              </h2>
              <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                Top up whenever you need. Credits never expire and can be shared across your whole team. The more you buy, the better the per-credit rate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {creditPackages.map((pkg) => {
                const total = pkg.custom ? null : (pkg.credits as number) * pkg.pricePerCredit
                return (
                  <div
                    key={pkg.name}
                    className={`relative rounded-2xl border flex flex-col overflow-hidden transition-shadow hover:shadow-lg ${
                      pkg.popular
                        ? 'border-blue-300 bg-white shadow-md shadow-blue-900/10'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold text-center py-1.5 tracking-wide">
                        BEST VALUE
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm font-bold text-slate-900 mb-1">{pkg.name}</div>
                      <p className="text-xs text-slate-500 mb-4">{pkg.description}</p>

                      <div className="mb-4">
                        <div className="text-3xl font-black text-slate-900">
                          {pkg.custom ? 'Custom' : pkg.credits.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{pkg.custom ? 'volume' : 'credits'}</div>
                      </div>

                      {!pkg.custom && (
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className={`text-lg font-extrabold ${pkg.popular ? 'text-blue-600' : 'text-slate-800'}`}>
                            ${pkg.pricePerCredit.toFixed(2)}
                          </span>
                          <span className="text-xs text-slate-400">/ credit</span>
                        </div>
                      )}

                      {total !== null && (
                        <div className="text-xs text-slate-500 mb-6">
                          Total: <span className="font-semibold text-slate-700">${total.toLocaleString()}</span>
                        </div>
                      )}
                      {pkg.custom && (
                        <div className="text-xs text-slate-500 mb-6">Custom pricing · volume discount</div>
                      )}

                      <div className="mt-auto">
                        {pkg.custom ? (
                          <a href="mailto:support@truleado.com">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                              Contact Us
                            </button>
                          </a>
                        ) : (
                          <Link href="https://app.truleado.com/signup">
                            <button className={`w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                              pkg.popular
                                ? 'text-white bg-blue-600 hover:bg-blue-700'
                                : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                            }`}>
                              Buy Credits
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Credits explainer */}
            <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">How credits work</div>
                <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                  Each credit unlocks one creator profile — giving you verified contact details, audience demographics, engagement rates, and platform stats. Credits from packages never expire and are shared across your whole team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Trusted by agencies that move fast
              </h2>
              <p className="mt-2 text-sm text-slate-500">Real feedback from real agency teams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.author} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">"{t.quote}"</p>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Pricing questions,
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  answered.
                </span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border overflow-hidden transition-colors ${
                      isOpen ? 'bg-white border-blue-100 shadow-sm' : 'bg-white border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className={`text-sm font-semibold ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${isOpen ? 'bg-blue-100' : 'bg-slate-100'}`}>
                        {isOpen
                          ? <ChevronUp className="h-3.5 w-3.5 text-blue-600" />
                          : <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                        }
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                      <p className="px-6 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              More questions?{' '}
              <a href="mailto:support@truleado.com" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Talk to our team →
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Start free. Upgrade when you're ready.
                </h2>
                <p className="mt-4 text-blue-100 max-w-lg mx-auto text-sm leading-relaxed">
                  No credit card. No commitment. Full access to Truleado from day one — including 50 free credits to start discovering creators immediately.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="https://app.truleado.com/signup">
                    <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-colors">
                      Get started free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                  <a href="https://cal.com/truleado-demo">
                    <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                      Book a demo
                    </button>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-blue-200">
                  {['7-day free trial', 'No credit card required', 'Cancel anytime', 'Free for creators'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                      <span>{item}</span>
                    </div>
                  ))}
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
