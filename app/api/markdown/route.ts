import { NextResponse } from 'next/server'

const HOMEPAGE_MARKDOWN = `# Truleado — Influencer Marketing Software for Agencies

> The complete influencer marketing platform built for agencies. Manage campaigns, discover creators, track ROI, and streamline client approvals — all from one workspace. Free to get started, no credit card required.

## What is Truleado?

Truleado is an all-in-one influencer marketing software built for agencies. It lets you manage campaigns, discover verified creators across every major social platform, handle client approvals, track ROI, and manage finances — all from one workspace.

## Key Features

- **Creator Discovery** — Search millions of verified influencers across Instagram, TikTok, YouTube, and more. Use credits to unlock contact details and audience insights.
- **Campaign Management** — End-to-end campaign management with multi-stage approval workflows and full audit logs.
- **Team Collaboration** — Smart collaboration with role-based access control. Each Account Manager can own multiple clients.
- **Client Portal** — Secure portal for content review and approvals. Clients approve content without needing a Truleado account.
- **Analytics & ROI** — Advanced analytics and one-click ROI reporting for every campaign.
- **Finance Management** — Complete finance management with multi-currency support.
- **Creator Portal** — Free for creators to view briefs, submit content, track payments, and monitor campaign performance.

## Who It's For

Truleado is purpose-built for **influencer marketing agencies** managing multiple clients, campaigns, and creator relationships simultaneously.

## Pricing

**Free to get started. No credit card required.** Full access to every feature your agency needs.

## Get Started

- **Website:** https://truleado.com
- **Book a Demo:** https://cal.com/truleado-demo
- **Documentation:** https://truleado.com/docs
- **Support:** support@truleado.com

## Navigation

- [Features](/features)
- [Integrations](/integrations)
- [Blog](/blog)
- [Docs](/docs)
- [Status](/status)
- [Privacy Policy](/privacy)
- [Terms of Service](/terms)
- [Cookie Policy](/cookies)

## Contact

- Email: support@truleado.com
- Twitter/X: [@truleado](https://twitter.com/truleado)
- LinkedIn: [linkedin.com/company/truleado](https://linkedin.com/company/truleado)
`

export async function GET() {
  const tokens = HOMEPAGE_MARKDOWN.trim().split(/\s+/).length

  return new NextResponse(HOMEPAGE_MARKDOWN, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
    },
  })
}
