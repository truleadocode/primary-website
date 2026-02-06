import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
          <span className="text-3xl">🔒</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-slate-600 mb-8">
          Coming Soon
        </p>
        <p className="text-slate-500 mb-8">
          We're working on our privacy policy. Check back soon for updates.
        </p>
        <Link href="/">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
