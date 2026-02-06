'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Is Truleado really free during beta?',
    answer: 'Yes! During our beta period, you get full access to all features completely free. No credit card required. We want early adopters to help us shape the product.',
  },
  {
    question: 'How many team members can I add?',
    answer: 'On the Starter plan, you can add up to 5 team members. Professional and Enterprise plans offer unlimited team members with custom roles and permissions.',
  },
  {
    question: 'Can clients access the platform?',
    answer: 'Absolutely! You can give clients secure portal access to review campaigns, approve deliverables, and track performance—all without overwhelming them with agency-level features.',
  },
  {
    question: 'Do creators/influencers need to pay?',
    answer: 'No, Truleado is completely free for creators. They can create profiles, receive campaign invites, submit deliverables, and track their performance at no cost.',
  },
  {
    question: 'Can I customize workflows for different clients?',
    answer: 'Yes! You can create custom approval workflows, templates, and processes for each client. The Professional plan includes advanced customization options.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use enterprise-grade encryption, SOC 2 compliant infrastructure, and regular security audits to keep your data safe.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/20 shadow-sm">
            <MessageCircle className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-base font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'pb-5 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Still have questions?{' '}
            <a href="mailto:hello@truleado.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
