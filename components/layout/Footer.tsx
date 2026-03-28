import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  )
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" aria-hidden="true">
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.951 61.7375 112.424 64.1378 116.675 68.8585C119.739 72.2816 121.799 76.9622 122.863 82.8552C114.408 81.4899 105.275 81.2434 95.5427 82.1073C71.7794 84.1515 57.4682 98.2437 58.4419 117.963C58.9388 128 63.2034 136.424 70.525 141.886C76.7651 146.551 84.8617 148.927 93.9676 148.927C94.012 148.927 94.0338 148.927 94.0338 148.927C107.085 148.927 117.74 144.842 125.748 136.779C131.415 131.059 135.196 123.534 136.963 114.405C141.857 117.368 145.576 121.29 147.838 126.01C151.869 134.336 152.095 148.131 141.098 159.131C131.497 168.734 120.029 172.947 101.876 173.08C81.7041 172.931 66.2061 166.674 55.8574 154.477C46.2576 143.168 41.2946 126.726 41.1193 105.556C41.2946 84.3864 46.2576 67.9439 55.8574 56.6346C66.2061 44.4375 81.7041 38.1806 101.876 38.0322C122.199 38.1806 137.783 44.4673 148.248 56.7333C153.376 62.7525 157.271 70.3832 159.787 79.0684L176.437 74.4949C173.349 63.7115 168.489 54.3684 161.907 46.6318C148.672 31.5502 130.243 23.8048 101.932 23.6066C73.5775 23.8041 55.0052 31.5696 41.7283 46.6985C29.9418 60.0922 23.8833 79.0946 23.6863 105.516C23.8833 131.937 29.9418 150.939 41.7283 164.333C55.0052 179.462 73.5775 187.227 101.932 187.424C122.09 187.294 136.718 182.702 148.072 171.347C163.322 156.094 162.864 137.399 157.292 125.95C153.226 117.567 145.838 110.715 136.327 106.483C135.952 100.43 134.905 94.8418 133.177 89.795C136.079 89.4997 138.882 89.1911 141.537 88.9883ZM95.7585 132C82.0195 132 72.1086 124.818 71.605 114.016C71.0877 102.833 80.3673 95.7406 95.0045 94.497C101.956 93.9141 108.563 93.7396 114.795 94.0024C114.178 113.316 106.105 132 95.7585 132Z"/>
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

const social = [
  { name: 'Twitter', href: 'https://twitter.com/truleado', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/truleado', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/truleado', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@truleado', icon: Youtube },
  { name: 'Threads', href: 'https://www.threads.com/@truleado', icon: ThreadsIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/truleado/', icon: FacebookIcon },
  { name: 'TikTok', href: 'https://www.tiktok.com/@truleado', icon: TikTokIcon },
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
                <img src="/Truleado Logo Blue.png" alt="Truleado" className="h-12 sm:h-16 w-auto" />
                <span className="text-lg font-black text-slate-900 tracking-tight">Truleado</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-xs">
                The complete influencer marketing software built for agencies. Manage campaigns, teams, clients, and creators from one workspace.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center flex-wrap gap-3">
                {social.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-all"
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
