import { NextResponse } from 'next/server'

const ROBOTS_TXT = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /

# Content usage preferences (https://contentsignals.org/)
Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: https://truleado.com/sitemap.xml
`

export async function GET() {
  return new NextResponse(ROBOTS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
