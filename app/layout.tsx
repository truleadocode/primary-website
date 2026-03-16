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
    default: "Truleado - Influencer Marketing Software for Agencies | Manage Campaigns & Creators",
    template: "%s | Truleado",
  },
  description: "Truleado is the complete influencer marketing software built for agencies. Discover creators, manage multi-client campaigns, track ROI, and streamline approvals—all from one workspace. Free to get started, no credit card required.",
  
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
    icon: '/Truleado Logo Blue.png',
    shortcut: '/Truleado Logo Blue.png',
    apple: '/Truleado Logo Blue.png',
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truleado.com",
    siteName: "Truleado",
    title: "Truleado - Influencer Marketing Software for Agencies",
    description: "The complete influencer marketing software for agencies. Manage campaigns, discover creators, track ROI, and streamline client approvals—all from one workspace. Free to get started.",
    images: [
      {
        url: "https://truleado.com/Truleado%20Logo%20Blue.png",
        width: 1080,
        height: 1080,
        alt: "Truleado - Influencer Marketing Software for Agencies",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Truleado - Influencer Marketing Software for Agencies",
    description: "The complete influencer marketing software for agencies. Manage campaigns, discover creators, and track ROI—all from one workspace.",
    images: ["https://truleado.com/Truleado%20Logo%20Blue.png"],
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
    "msapplication-TileColor": "#2563EB",
    "msapplication-tap-highlight": "no",
    "theme-color": "#2563EB",
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
        "url": "https://truleado.com/Truleado%20Logo%20Blue.png",
        "width": 1080,
        "height": 1080,
      },
      "description": "Truleado is the complete influencer marketing software built for agencies. Manage campaigns, teams, clients, and creators from one workspace.",
      "foundingDate": "2024",
      "sameAs": [
        "https://twitter.com/truleado",
        "https://linkedin.com/company/truleado",
        "https://instagram.com/truleado",
        "https://youtube.com/@truleado",
        "https://www.threads.com/@truleado",
        "https://www.facebook.com/truleado/",
        "https://www.tiktok.com/@truleado",
        "https://www.reddit.com/r/truleado/",
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
      "description": "Influencer Marketing Software for Agencies",
      "publisher": { "@id": "https://truleado.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://truleado.com/#software",
      "name": "Truleado",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://truleado.com",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Free to get started. No credit card required.",
      },
      "description": "All-in-one influencer marketing software for agencies. Discover creators, manage multi-client campaigns, track ROI, handle approvals, and manage finances from one workspace.",
      "featureList": [
        "Creator Discovery — search millions of verified influencers across all major platforms",
        "End-to-End Campaign Management with multi-stage approval workflows",
        "Smart Team Collaboration with role-based access control",
        "Secure Client Portal for content review and approvals",
        "Advanced Analytics and one-click ROI reporting",
        "Complete Finance Management with multi-currency support",
        "Creator Portal — free for creators",
        "Enterprise-grade security and full audit logs",
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
            "text": "Truleado is an all-in-one influencer marketing software built for agencies. It lets you manage campaigns, discover verified creators, handle client approvals, track ROI, and manage finances—all from one workspace.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does Truleado cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado is free to get started with no credit card required. Full access to every feature your agency needs at zero cost.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Truleado free for creators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Truleado is completely free for creators. They get their own portal to view briefs, submit content, track payments, and monitor campaign performance—at zero cost.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I manage multiple clients and campaigns on Truleado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. As an all-in-one influencer marketing software, Truleado is designed for agencies managing multiple clients. Each Account Manager can own multiple clients and run unlimited campaigns with role-based access control that keeps client data separated.",
          },
        },
        {
          "@type": "Question",
          "name": "How does creator discovery work on Truleado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Truleado's influencer marketing software includes a built-in discovery tool that lets you search millions of verified influencers across all major platforms. Use credits to unlock contact details and audience insights.",
          },
        },
        {
          "@type": "Question",
          "name": "How do campaign approvals and workflows work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Set up custom multi-stage approval workflows for each client. Internal agency approvals happen first, then client approvals. Everything is tracked with audit logs so you always know who approved what and when.",
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
