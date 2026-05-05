import { NextResponse } from 'next/server'

// Agent Skills Discovery index — RFC v0.2.0
// https://github.com/cloudflare/agent-skills-discovery-rfc
export async function GET() {
  const index = {
    $schema: 'https://agentskills.io/schema/v0.2.0/index.json',
    name: 'Truleado',
    url: 'https://truleado.com',
    description:
      'Influencer marketing software for agencies. Discover creators, manage campaigns, and track ROI.',
    skills: [
      {
        name: 'book-demo',
        type: 'action',
        description: 'Book a live demo of Truleado with the team',
        url: 'https://cal.com/truleado-demo',
      },
      {
        name: 'get-pricing',
        type: 'information',
        description: 'Get pricing information for Truleado',
        url: 'https://truleado.com/#pricing',
      },
      {
        name: 'view-docs',
        type: 'information',
        description: 'Browse Truleado product documentation',
        url: 'https://truleado.com/docs',
      },
      {
        name: 'contact-support',
        type: 'action',
        description: 'Contact Truleado support',
        url: 'https://truleado.com/help',
      },
    ],
  }

  return NextResponse.json(index, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
