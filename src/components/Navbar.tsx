import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Programs', href: '#programs' },
  { label: 'Transparency', href: '#transparency' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-cream-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-maroon flex items-center justify-center">
              <span className="text-white font-bold text-sm font-heading">CS</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-maroon font-heading leading-tight">Cultural Seva Sanstha</p>
              <p className="text-xs text-saffron-dark tracking-widest uppercase">Bhiwandi</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon transition-colors rounded-lg hover:bg-cream-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="ml-3 px-5 py-2 bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all"
            >
              Donate
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-maroon"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-dark">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-maroon hover:bg-cream-dark rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-5 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold rounded-full text-center"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
