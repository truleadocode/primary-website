import type { Metadata } from 'next'
import { ComparisonPage } from '@/components/marketing/ComparisonPage'
import { comparisons } from '@/lib/comparisons'

const data = comparisons['later']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: 'https://truleado.com/vs-later',
    siteName: 'Truleado',
    type: 'article',
  },
  alternates: { canonical: 'https://truleado.com/vs-later' },
}

export default function VsLaterPage() {
  return <ComparisonPage data={data} />
}
