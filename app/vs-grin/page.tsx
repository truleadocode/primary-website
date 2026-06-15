import type { Metadata } from 'next'
import { ComparisonPage } from '@/components/marketing/ComparisonPage'
import { comparisons } from '@/lib/comparisons'

const data = comparisons['grin']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: 'https://truleado.com/vs-grin',
    siteName: 'Truleado',
    type: 'article',
  },
  alternates: { canonical: 'https://truleado.com/vs-grin' },
}

export default function VsGrinPage() {
  return <ComparisonPage data={data} />
}
