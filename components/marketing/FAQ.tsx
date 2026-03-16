'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How does the creator discovery work?',
    answer: "Truleado's built-in discovery tool lets you search millions of verified influencers across all major platforms. Use credits to unlock contact details and audience insights—perfect for agencies that need to find creators fast.",
  },
  {
    question: 'Can I manage multiple clients and their campaigns?',
    answer: 'Absolutely. Truleado is designed for agencies managing multiple clients. Each Account Manager can own multiple clients, and you can run unlimited campaigns with role-based access control that keeps client data separated.',
  },
  {
    question: 'How do approvals and workflows work?',
    answer: 'Set up custom multi-stage approval workflows for each client. Internal agency approvals happen first, then client approvals. Everything is tracked with audit logs—you always know who approved what and when.',
  },
  {
    question: 'Do creators pay to use the platform?',
    answer: 'No. Truleado is completely free for creators. They get their own portal to view briefs, submit content, track payments, and monitor campaign performance—at zero cost.',
  },
  {
    question: 'How does the finance and budgeting system work?',
    answer: 'Track budgets at the campaign level with multi-currency support. Log expenses, manage creator payments, and generate financial reports. Ideal for agencies that need to maintain profitability across multiple clients.',
  },
  {
    question: 'Is my agency data secure?',
    answer: 'Security is a top priority. We use enterprise-grade encryption, SOC 2 compliant infrastructure, and comprehensive audit logging. Your client data, creator information, and financial details are fully protected.',
  },
  {
    question: 'Can I customize the platform for my workflow?',
    answer: 'Yes. Configure approval flows, customize fields, set up templates, and adapt the platform to match your exact processes. The Professional plan includes advanced customization options.',
  },
  {
    question: 'What about analytics and reporting?',
    answer: 'Get comprehensive analytics for both pre and post-campaign performance. Track engagement rates, audience demographics, ROI, and generate professional reports for clients with one click.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20 shadow-sm">
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors duration-150 overflow-hidden ${
                  isOpen ? 'bg-white border-blue-100 shadow-sm' : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold transition-colors duration-150 ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-colors duration-150 ${isOpen ? 'bg-blue-100' : 'bg-slate-100'}`}>
                    {isOpen
                      ? <Minus className="h-3.5 w-3.5 text-blue-600" />
                      : <Plus className="h-3.5 w-3.5 text-slate-500" />
                    }
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? 'max-h-80 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact link */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a href="mailto:support@truleado.com" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Chat with our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
