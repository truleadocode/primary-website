import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  )
}

const social = [
  { name: 'Twitter', href: 'https://twitter.com/truleado', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/truleado', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/truleado', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@truleado', icon: Youtube },
  { name: 'Reddit', href: 'https://www.reddit.com/r/truleado/', icon: RedditIcon },
]

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Integrations', href: '/integrations' },
  ],
  Company: [
    { label: 'About', href: 'mailto:support@truleado.com?subject=About%20Truleado' },
    { label: 'Careers', href: 'mailto:support@truleado.com?subject=Careers' },
    { label: 'Resources', href: 'https://blog.truleado.com' },
    { label: 'Contact', href: 'mailto:support@truleado.com' },
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
        <img src="/claude-ai-icon.webp" alt="Claude" className="h-7 w-7 rounded-lg" />
      ),
    },
    {
      name: 'Perplexity',
      href: `https://www.perplexity.ai/search?q=${aiPrompt}`,
      icon: <img src="/perplexity-ai-icon.webp" alt="Perplexity" className="h-7 w-7 rounded-lg" />,
    },
    {
      name: 'Gemini',
      href: `https://gemini.google.com/app?q=${aiPrompt}`,
      icon: <img src="/gemini-color.png" alt="Gemini" className="h-7 w-7 rounded-lg" />,
    },
    {
      name: 'Grok',
      href: `https://grok.com/?q=${aiPrompt}`,
      icon: <img src="/grok.png" alt="Grok" className="h-7 w-7 rounded-lg" />,
    },
  ]

  return (
    <footer className="bg-slate-50 text-slate-500 border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Truleado — Influencer Marketing Software</h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Stay in the loop</h3>
              <p className="mt-1 text-sm text-slate-500">Get the latest updates on influencer marketing software features, tips, and agency insights.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="px-5 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Truleado Home">
                <img src="/Truleado Logo Blue.png" alt="Truleado" className="h-20 w-auto" />
                <span className="text-lg font-black text-slate-900 tracking-tight">Truleado</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-xs">
                The complete influencer marketing software built for agencies. Manage campaigns, teams, clients, and creators from one workspace.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                {social.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all"
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
                <h3 className="text-sm font-semibold text-slate-900">Try it with AI</h3>
                <p className="mt-1 text-xs text-slate-500">Tap any tool to ask how Truleado helps your agency.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {aiTools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:scale-110 transition-all shadow-sm"
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
                <h3 className="text-sm font-semibold text-slate-900">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
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
        <div className="border-t border-slate-200 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Truleado. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Influencer marketing software built for agencies that move fast.
          </p>
        </div>
      </div>
    </footer>
  )
}
