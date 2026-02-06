import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

export function CTA() {
  const content = {
    heading: 'Ready to Scale Your Agency?',
    description: 'Join forward-thinking agencies managing multiple clients, campaigns, and creators from one powerful platform.',
    primaryCTA: { text: 'Join Waitlist', href: 'https://tally.so/r/WOzzGP' },
    trustIndicators: [
      'Free during beta',
      'No credit card required',
      'Cancel anytime',
    ],
  }

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 px-6 py-20 sm:px-16 sm:py-28">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <Sparkles className="h-4 w-4 text-indigo-300" />
              Limited Beta Access
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              {content.heading}
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              {content.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={content.primaryCTA.href}>
                <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 min-w-[200px]">
                  {content.primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              {content.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
