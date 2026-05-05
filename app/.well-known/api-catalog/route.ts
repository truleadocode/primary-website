import { NextResponse } from 'next/server'

// RFC 9727 API Catalog — application/linkset+json
export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: 'https://truleado.com',
        'service-doc': [
          { href: 'https://truleado.com/docs', type: 'text/html' },
        ],
        describedby: [
          {
            href: 'https://truleado.com/.well-known/agent-skills/index.json',
            type: 'application/json',
          },
        ],
        status: [
          { href: 'https://truleado.com/status', type: 'text/html' },
        ],
      },
    ],
  }

  return NextResponse.json(catalog, {
    headers: {
      'Content-Type': 'application/linkset+json',
    },
  })
}
