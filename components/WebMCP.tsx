'use client'

import { useEffect } from 'react'

declare global {
  interface Navigator {
    modelContext?: {
      provideContext: (context: {
        tools: Array<{
          name: string
          description: string
          inputSchema: Record<string, unknown>
          execute: (input: Record<string, unknown>) => unknown
        }>
      }) => void
    }
  }
}

export function WebMCP() {
  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.modelContext) return

    navigator.modelContext.provideContext({
      tools: [
        {
          name: 'book_demo',
          description:
            'Book a live demo of Truleado with the team to see the influencer marketing platform in action.',
          inputSchema: { type: 'object', properties: {} },
          execute: () => {
            window.open('https://cal.com/truleado-demo', '_blank')
            return { success: true, url: 'https://cal.com/truleado-demo' }
          },
        },
        {
          name: 'get_pricing',
          description:
            'Get pricing information for Truleado. The platform is free to get started with no credit card required.',
          inputSchema: { type: 'object', properties: {} },
          execute: () => ({
            pricing: 'Free to get started — no credit card required.',
            url: 'https://truleado.com/#pricing',
          }),
        },
        {
          name: 'get_features',
          description:
            'Get a list of Truleado features for influencer marketing agencies.',
          inputSchema: { type: 'object', properties: {} },
          execute: () => ({
            features: [
              'Creator Discovery across Instagram, TikTok, YouTube, and more',
              'End-to-end Campaign Management with approval workflows',
              'Role-based Team Collaboration',
              'Secure Client Portal for content approvals',
              'Analytics and ROI reporting',
              'Finance Management with multi-currency support',
              'Free Creator Portal',
            ],
            url: 'https://truleado.com/features',
          }),
        },
        {
          name: 'contact_support',
          description: 'Get contact information to reach Truleado support.',
          inputSchema: { type: 'object', properties: {} },
          execute: () => ({
            email: 'support@truleado.com',
            helpCenter: 'https://truleado.com/help',
          }),
        },
      ],
    })
  }, [])

  return null
}
