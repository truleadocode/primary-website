import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://truleado.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/business/campaigns/',
          '/business/contracts/',
          '/business/messages/',
          '/business/payments/',
          '/business/reports/',
          '/business/search/',
          '/business/influencers/',
          '/business/settings/',
          '/business/billing/',
          '/influencers/dashboard/',
          '/influencers/contracts/',
          '/influencers/messages/',
          '/influencers/settings/',
          '/admin/',
          '/auth/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/pricing',
          '/blog/',
          '/case-studies',
          '/testimonials',
          '/business/signup',
          '/business/login',
          '/influencers/signup',
          '/influencers/login',
          '/solutions/',
        ],
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/influencers/dashboard/',
          '/admin/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/pricing',
          '/blog/',
          '/case-studies',
          '/testimonials',
          '/business/signup',
          '/business/login',
          '/influencers/signup',
          '/influencers/login',
          '/solutions/',
        ],
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/influencers/dashboard/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/pricing',
          '/blog/',
          '/case-studies',
          '/testimonials',
          '/solutions/',
        ],
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/influencers/dashboard/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: [
          '/',
          '/pricing',
          '/blog/',
          '/case-studies',
          '/testimonials',
          '/solutions/',
        ],
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/influencers/dashboard/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/',
          '/pricing',
          '/blog/',
          '/case-studies',
          '/testimonials',
          '/solutions/',
        ],
        disallow: [
          '/api/',
          '/business/dashboard/',
          '/influencers/dashboard/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}



