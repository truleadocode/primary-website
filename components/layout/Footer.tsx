import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight, Mail } from 'lucide-react'

const social = [
  { name: 'Twitter', href: 'https://twitter.com/truleado', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/truleado', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/truleado', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@truleado', icon: Youtube },
]

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Integrations', href: '#' },
  ],
  Company: [
    { label: 'About', href: 'mailto:hello@truleado.com?subject=About%20Truleado' },
    { label: 'Careers', href: 'mailto:hello@truleado.com?subject=Careers' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: 'mailto:hello@truleado.com' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

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
