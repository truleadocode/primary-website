import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-16 sm:px-16 sm:py-28">

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Now Available
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Ready to Transform
              <span className="block text-blue-100">
                Your Agency?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-lg mx-auto">
              Join hundreds of influencer marketing agencies using Truleado to streamline client work, discover creators faster, and scale their operations.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link href="https://app.truleado.com/signup">
                <button className="group inline-flex items-center cursor-pointer justify-center px-8 py-4 text-base font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-colors duration-150 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/20 min-w-[220px]">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-blue-100">
              {['30-day free trial', 'No credit card required', 'Cancel anytime'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-white shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
