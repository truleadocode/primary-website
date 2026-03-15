import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

const social = [
  { name: 'Twitter', href: 'https://twitter.com/truleado', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/truleado', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/truleado', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@truleado', icon: Youtube },
]

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Integrations', href: '/integrations' },
  ],
  Company: [
    { label: 'About', href: 'mailto:hello@truleado.com?subject=About%20Truleado' },
    { label: 'Careers', href: 'mailto:hello@truleado.com?subject=Careers' },
    { label: 'Resources', href: 'https://blog.truleado.com' },
    { label: 'Contact', href: 'mailto:hello@truleado.com' },
  ],
  Resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'API Docs', href: '/docs' },
    { label: 'Community', href: '/community' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const aiPrompt = encodeURIComponent('What is Truleado.com, and how can it benefit my influencer marketing agency?')

  const aiTools = [
    {
      name: 'ChatGPT',
      href: `https://chatgpt.com/?q=${aiPrompt}`,
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10A37F"/>
        </svg>
      ),
    },
    {
      name: 'Claude',
      href: `https://claude.ai/new?q=${aiPrompt}`,
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
          <path d="M17.308 3.616L12.478 13.78l-1.618-3.744L15.69 3.616h1.618zM8.442 3.616l4.83 10.164 1.618-3.744L10.06 3.616H8.442zM4.052 20.384L9.612 8.22l1.618 3.744-5.56 8.42H4.052zm15.896 0l-5.56-12.164-1.618 3.744 5.56 8.42h1.618z" fill="#D97706"/>
        </svg>
      ),
    },
    {
      name: 'Perplexity',
      href: `https://www.perplexity.ai/search?q=${aiPrompt}`,
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
          <path d="M8.187 2v6.165L4 4.81v7.32h3.696v7.06L4 15.833V22l8.187-6.53V22l7.626-6.167v-7.06H16.5V2L12.187 5.86 8.187 2zm1.5 2.476l2.5 2.168-2.5 2.521V4.476zm6.313 0v4.689L13.5 6.644 16 4.476zM5.5 6.862l2.187 1.56v3.398H5.5V6.862zm13 0v4.958h-2.187V8.422L18.5 6.862zM9.687 9.838l2.5 1.9v4.17l-2.5 1.995V9.838zm5 0v8.065l-2.5-1.995v-4.17l2.5-1.9zM5.5 13.32h2.187v3.398l-2.187 1.56V13.32zm11.313 0H19v4.958l-2.187-1.56V13.32z" fill="#20B8CD"/>
        </svg>
      ),
    },
    {
      name: 'Gemini',
      href: `https://gemini.google.com/app?q=${aiPrompt}`,
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#gemini-grad)"/>
          <defs>
            <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#4285F4"/>
              <stop offset="25%" stopColor="#9B72CB"/>
              <stop offset="50%" stopColor="#D96570"/>
              <stop offset="75%" stopColor="#D96570"/>
              <stop offset="100%" stopColor="#9B72CB"/>
            </linearGradient>
          </defs>
          <path d="M12 4.5c0 4.14-3.36 7.5-7.5 7.5 4.14 0 7.5 3.36 7.5 7.5 0-4.14 3.36-7.5 7.5-7.5-4.14 0-7.5-3.36-7.5-7.5z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Grok',
      href: `https://grok.com/?q=${aiPrompt}`,
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
          <rect width="24" height="24" rx="5" fill="#000"/>
          <path d="M6.5 5L12 12.5 17.5 5h-2.3L12 9.3 8.8 5H6.5zm0 14L12 11.5 17.5 19h-2.3L12 14.7 8.8 19H6.5z" fill="#FF6600"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay in the loop</h3>
              <p className="mt-1 text-sm text-slate-400">Get the latest updates on features, tips, and agency insights.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button className="px-5 py-3 bg-indigo-500 text-white rounded-xl text-sm font-semibold hover:bg-indigo-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Truleado Home">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/logo.svg" alt="Truleado" className="w-6 h-6" />
                </div>
                <span className="text-lg font-black text-white tracking-tight">Truleado</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-xs">
                The complete influencer marketing platform built for agencies. Manage campaigns, teams, clients, and creators from one workspace.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                {social.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                      aria-label={`Follow us on ${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )
                })}
              </div>

              {/* AI Tools */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-white">Try it with AI</h3>
                <p className="mt-1 text-xs text-slate-400">Tap any tool to ask how Truleado helps your agency.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {aiTools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 hover:scale-110 transition-all"
                        aria-label={`Ask ${tool.name} about Truleado`}
                      >
                        {tool.icon}
                      </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Truleado. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with love for agencies that move fast.
          </p>
        </div>
      </div>
    </footer>
  )
}
