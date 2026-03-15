'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Features',
    href: '#features',
    dropdown: [
      { label: 'Creator Discovery', href: '/features/creator-discovery' },
      { label: 'Campaign Management', href: '/features/campaign-management' },
      { label: 'Analytics & Reporting', href: '/features/analytics' },
      { label: 'Finance Management', href: '/features/finance' },
    ]
  },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Resources', href: 'https://blog.truleado.com' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginDropdownOpen && !(event.target as Element).closest('.login-dropdown')) {
        setLoginDropdownOpen(false)
      }
      if (dropdownOpen && !(event.target as Element).closest('.nav-dropdown')) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [loginDropdownOpen, dropdownOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 sm:px-6 h-14 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-lg shadow-slate-900/5'
            : 'bg-white/60 backdrop-blur-xl border border-slate-200/50'
        }`}
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.svg" alt="Truleado" className="w-5 h-5" />
            </div>
            <span className="text-[15px] font-black text-slate-900 tracking-tight">
              Truleado
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <div
                  className="relative nav-dropdown"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    {link.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {dropdownOpen === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* Login Dropdown */}
          <div className="relative login-dropdown">
            <button
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Login
              <ChevronDown className="h-3 w-3" />
            </button>

            {loginDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                <Link
                  href="https://app.truleado.com/agency-login"
                  className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setLoginDropdownOpen(false)}
                >
                  Agency
                </Link>
                <Link
                  href="https://app.truleado.com/creator-login"
                  className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setLoginDropdownOpen(false)}
                >
                  Creator
                </Link>
              </div>
            )}
          </div>

          <Link href="https://app.truleado.com/signup" className="hidden sm:block">
            <button className="inline-flex items-center px-4 py-2 text-[13px] font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/25">
              Free Trial
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-4 py-3 text-sm font-medium text-slate-900 border-b border-slate-100">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="border-t border-slate-100 pt-2 mt-2">
              <div className="px-4 py-2 text-sm font-medium text-slate-900">Login</div>
              <Link
                href="https://app.truleado.com/agency-login"
                className="block px-6 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agency
              </Link>
              <Link
                href="https://app.truleado.com/creator-login"
                className="block px-6 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Creator
              </Link>
            </div>
            <Link
              href="https://app.truleado.com/signup"
              className="mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all">
                Free Trial
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
