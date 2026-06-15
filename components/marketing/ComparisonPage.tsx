import Link from 'next/link'
import { Check, X } from 'lucide-react'
import type { ComparisonData } from '@/lib/comparisons'

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="h-5 w-5 text-green-500" />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex justify-center">
        <X className="h-5 w-5 text-red-400" />
      </span>
    )
  }
  return <span className="flex justify-center text-xs font-medium text-amber-600">{value}</span>
}

export function ComparisonPage({ data }: { data: ComparisonData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: data.heroHeadline,
        description: data.metaDescription,
        datePublished: data.publishDate,
        author: { '@type': 'Organization', name: 'Truleado' },
        publisher: {
          '@type': 'Organization',
          name: 'Truleado',
          url: 'https://truleado.com',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white pt-28">
        {/* Hero */}
        <section className="px-4 py-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
            Platform Comparison · 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
            {data.heroHeadline}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {data.heroSubheadline}
          </p>
          <Link href="https://app.truleado.com/signup">
            <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
              Try Truleado Free — No Credit Card
            </button>
          </Link>
        </section>

        {/* TL;DR */}
        <section className="px-4 pb-12 max-w-3xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">TL;DR</p>
            <ul className="space-y-3">
              {data.tldr.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Feature Table */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Feature Comparison</h2>
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-5 py-4 font-semibold text-slate-600 w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 font-bold text-blue-600 bg-blue-50">
                    Truleado
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-600">
                    {data.competitorName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.features.map((feature, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 last:border-0 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                    }`}
                  >
                    <td className="px-5 py-3.5 text-slate-700">{feature.label}</td>
                    <td className="px-4 py-3.5 bg-blue-50/30">
                      <FeatureCell value={feature.truleado} />
                    </td>
                    <td className="px-4 py-3.5">
                      <FeatureCell value={feature.competitor} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Where Truleado Wins */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Where Truleado Wins</h2>
          <div className="space-y-4">
            {data.truleadoStrengths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-blue-600" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where Competitor Wins */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Where {data.competitorName} Wins
          </h2>
          <div className="space-y-4">
            {data.competitorStrengths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Choose */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Who Should Choose Which?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-5">
              <p className="font-bold text-blue-700 mb-3">Choose Truleado if...</p>
              <ul className="space-y-2">
                {data.chooseTruleado.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-5">
              <p className="font-bold text-slate-600 mb-3">Choose {data.competitorName} if...</p>
              <ul className="space-y-2">
                {data.chooseCompetitor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Our Verdict</p>
            <p className="text-white leading-relaxed text-[15px]">{data.verdict}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {data.faqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50 transition-colors select-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-slate-400 flex-shrink-0 text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 max-w-3xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-2">Start with Truleado for Free</h2>
            <p className="text-blue-100 mb-6 text-sm">
              Purpose-built for influencer marketing agencies. No credit card required.
            </p>
            <Link href="https://app.truleado.com/signup">
              <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-all">
                Get Started Free
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
