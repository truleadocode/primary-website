import type { Metadata } from 'next'
import { ComparisonPage } from '@/components/marketing/ComparisonPage'
import { comparisons } from '@/lib/comparisons'

const data = comparisons['upfluence']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: 'https://truleado.com/vs-upfluence',
    siteName: 'Truleado',
    type: 'article',
  },
  alternates: { canonical: 'https://truleado.com/vs-upfluence' },
}

export default function VsUpfluencePage() {
  return <ComparisonPage data={data} />
}
