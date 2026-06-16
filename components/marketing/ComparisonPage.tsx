import Link from 'next/link'
import { Check, X, ArrowRight, ChevronDown } from 'lucide-react'
import type { ComparisonData } from '@/lib/comparisons'
import { getAllBlogPosts } from '@/lib/blog'

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="inline-flex items-center justify-center"><Check className="h-5 w-5 text-emerald-500" aria-label="Yes" /></span>
  if (value === false) return <span className="inline-flex items-center justify-center"><X className="h-5 w-5 text-red-400" aria-label="No" /></span>
  return <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full">{value}</span>
}

export function ComparisonPage({ data }: { data: ComparisonData }) {
  const allPosts = getAllBlogPosts()
  // Show 3 relevant posts as further reading
  const relatedPosts = allPosts.slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.metaTitle,
    description: data.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Truleado',
      url: 'https://truleado.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Truleado',
      logo: { '@type': 'ImageObject', url: 'https://truleado.com/Truleado%20Logo%20Blue.png' },
    },
    datePublished: data.publishDate,
    dateModified: data.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://truleado.com/vs-${data.competitorSlug}`,
    },
    inLanguage: 'en-US',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://truleado.com' },
      { '@type': 'ListItem', position: 2, name: `Truleado vs ${data.competitorName}`, item: `https://truleado.com/vs-${data.competitorSlug}` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Truleado',
    description: 'Influencer marketing software built for agencies. Manage campaigns, creators, clients, analytics, and payments from one workspace.',
    url: 'https://truleado.com',
    brand: { '@type': 'Brand', name: 'Truleado' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Free to start. No credit card required.',
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-600">Truleado vs {data.competitorName}</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-6">
            Honest comparison — updated {new Date(data.publishDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">{data.heroHeadline}</h1>
          <p className="text-xl text-slate-500 max-w-2xl">{data.heroSubheadline}</p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-2xl p-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">TL;DR — Quick summary</p>
            <ol className="space-y-3">
              {data.tldr.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 font-black text-lg w-6 shrink-0">{i + 1}</span>
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Feature table */}
      <section className="py-12 px-4 bg-slate-50 border-y border-slate-100" aria-label="Feature comparison table">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8">Feature-by-feature comparison</h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-6 py-4 text-sm font-bold text-slate-700 w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 text-sm font-bold text-blue-700">Truleado</th>
                  <th className="text-center px-4 py-4 text-sm font-bold text-slate-500">{data.competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.features.map((row, i) => (
                  <tr key={i} className="bg-white even:bg-slate-50/50">
                    <td className="px-6 py-4 text-sm text-slate-700 font-medium">{row.label}</td>
                    <td className="px-4 py-4 text-center"><FeatureCell value={row.truleado} /></td>
                    <td className="px-4 py-4 text-center"><FeatureCell value={row.competitor} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-black text-slate-900 mb-6">Where Truleado wins</h2>
            <ul className="space-y-3">
              {data.truleadoStrengths.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-600 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 mb-6">Where {data.competitorName} wins</h2>
            <ul className="space-y-3">
              {data.competitorStrengths.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-600 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who should choose */}
      <section className="py-12 px-4 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8">Who should choose which?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-600 rounded-2xl p-7">
              <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-4">Choose Truleado if…</p>
              <ul className="space-y-3">
                {data.chooseTruleado.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-blue-200 shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-white text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Choose {data.competitorName} if…</p>
              <ul className="space-y-3">
                {data.chooseCompetitor.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-slate-400 shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-slate-600 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-2xl p-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Our verdict</p>
            <p className="text-white leading-relaxed">{data.verdict}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related blog posts */}
      <section className="py-12 px-4 border-t border-slate-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-black text-slate-900 mb-6">Further reading</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedPosts.map(post => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group block bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-200 p-5 transition-all"
              >
                <span className="text-xs font-semibold text-blue-600">{post.category}</span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 mt-1 leading-snug">{post.title}</h3>
                <span className="flex items-center gap-1 text-xs text-blue-600 mt-3 font-semibold">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-4">See for yourself why agencies choose Truleado</h2>
          <p className="text-slate-400 mb-8">Free to start. No credit card required. Set up in minutes.</p>
          <Link href="https://app.truleado.com/signup">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors">
              Start free trial <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
