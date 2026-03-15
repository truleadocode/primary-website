import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

// Comprehensive SEO metadata for better discoverability
export const metadata: Metadata = {
  // Core metadata
  title: {
    default: "Truleado - #1 Influencer Marketing Platform | Connect Brands with Creators",
    template: "%s | Truleado",
  },
  description: "Truleado is the leading influencer marketing platform connecting brands with verified creators. Discover influencers, manage campaigns, track ROI, and streamline your influencer partnerships. Start your free 7-day trial today.",
  
  // Keywords for search engines and LLMs
  keywords: [
    "influencer marketing platform",
    "influencer discovery",
    "creator marketing",
    "brand partnerships",
    "influencer campaign management",
    "creator economy",
    "social media marketing",
    "influencer ROI tracking",
    "micro-influencer marketing",
    "brand ambassador program",
    "influencer analytics",
    "content creator platform",
    "Instagram influencers",
    "TikTok creators",
    "YouTube influencers",
    "influencer outreach",
    "campaign management software",
    "influencer relationship management",
    "creator collaboration tools",
    "influencer marketing software",
  ],

  // Authors and creator
  authors: [{ name: "Truleado", url: "https://truleado.com" }],
  creator: "Truleado",
  publisher: "Truleado",

  // Icons
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truleado.com",
    siteName: "Truleado",
    title: "Truleado - #1 Influencer Marketing Platform",
    description: "Connect with 50,000+ verified creators. Manage campaigns, track ROI, and scale your influencer marketing. Free 7-day trial, no credit card required.",
    images: [
      {
        url: "https://truleado.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Truleado - Influencer Marketing Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Truleado - #1 Influencer Marketing Platform",
    description: "Connect with 50,000+ verified creators. Manage campaigns, track ROI, and scale your influencer marketing.",
    images: ["https://truleado.com/og-image.png"],
    creator: "@truleado",
    site: "@truleado",
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://truleado.com",
    languages: {
      'en-US': 'https://truleado.com',
    },
  },

  // App-specific metadata
  applicationName: "Truleado",
  category: "Technology",
  classification: "Business Software",

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
  },

  // Other metadata
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Truleado",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#6366f1",
    "msapplication-tap-highlight": "no",
    "theme-color": "#6366f1",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

// JSON-LD Structured Data for LLM and search engine understanding
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://truleado.com/#organization",
      "name": "Truleado",
      "url": "https://truleado.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://truleado.com/logo.svg",
        "width": 200,
        "height": 60,
      },
      "description": "Truleado is the leading influencer marketing platform connecting brands with verified creators for successful campaign partnerships.",
      "foundingDate": "2024",
      "sameAs": [
        "https://twitter.com/truleado",
        "https://linkedin.com/company/truleado",
        "https://instagram.com/truleado",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@truleado.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://truleado.com/#website",
      "url": "https://truleado.com",
      "name": "Truleado",
      "description": "Influencer Marketing Platform for Brands and Creators",
      "publisher": { "@id": "https://truleado.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://truleado.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Truleado",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "49",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "500",
        "bestRating": "5",
        "worstRating": "1",
      },
      "description": "All-in-one influencer marketing platform for discovering creators, managing campaigns, and tracking ROI.",
      "featureList": [
        "Influencer Discovery with 50,000+ verified creators",
        "Campaign Management Dashboard",
        "Real-time Analytics and ROI Tracking",
        "Contract Management",
        "Direct Messaging with Creators",
        "Payment Tracking",
        "Performance Reports",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Truleado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado is an influencer marketing platform that connects brands with verified creators. It helps businesses discover influencers, manage campaigns, track performance, and measure ROI all in one place.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does Truleado cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado offers a 7-day free trial, followed by $49/month for brands. The platform is 100% free for creators and influencers.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Truleado free for creators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Truleado is completely free for creators and influencers. You can create a profile, get discovered by brands, manage contracts, and track payments at no cost.",
          },
        },
        {
          "@type": "Question",
          "name": "How many influencers are on Truleado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado has over 50,000 verified creators across various niches including fashion, beauty, fitness, tech, travel, food, and more.",
          },
        },
        {
          "@type": "Question",
          "name": "What features does Truleado offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado offers influencer discovery, campaign management, contract management, direct messaging, analytics & ROI tracking, payment tracking, and detailed performance reports.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M53L68M3');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* JSON-LD Structured Data for LLM and SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* RSS Feed for blog */}
        <link rel="alternate" type="application/rss+xml" title="Truleado Blog RSS" href="/blog/feed.xml" />
      </head>
      <body className={`antialiased ${inter.variable} ${plusJakarta.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M53L68M3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
