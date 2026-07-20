"use client"

import * as React from "react"

// Static Navigation Data (Declared outside component to optimize memory footprint)
const FOOTER_LINKS = {
  services: [
    { label: "House Removals", href: "#" },
    { label: "Office Relocation", href: "#" },
    { label: "Packing Services", href: "#" },
    { label: "Single Item Delivery", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#" },
    { label: "Pricing & Plans", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Insurance Coverage", href: "#" },
  ]
}

// Optimized Inline SVG Icons (0kb bundle size, instant render)
const PhoneIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.115-.44.05-1.21.387-1.213l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const GoogleGLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email")
    console.log("Subscribed email package target:", email)
  }

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900">

          {/* Brand & Trust Badges Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <span className="text-xl md:text-2xl font-black text-white tracking-tight italic uppercase block">
                Pack <span className="text-emerald-500">&</span> Attack
              </span>
              <p className="text-xs md:text-sm leading-relaxed text-slate-500 font-medium">
                Professional, reliable, and stress-free removals. We handle your belongings with maximum care from start to finish.
              </p>
            </div>

            {/* Custom Google Visual Trust Block */}
            <div className="space-y-3 bg-slate-900/40 border border-slate-900 p-4 rounded-xl max-w-sm">
              <div className="flex items-center gap-3">
                <GoogleGLogo />
                <div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    <span className="text-xs font-bold text-white ml-1.5">5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase">
                    Google Customer Rating
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Verified Business Profile</span>
                <span className="inline-flex items-center gap-1 text-emerald-500 font-bold">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  100% Secure
                </span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-1">
              <a href="tel:+441234567890" className="flex items-center gap-3 text-xs md:text-sm text-slate-300 hover:text-emerald-400 transition-colors duration-150 w-fit">
                <PhoneIcon />
                <span>+44 123 456 7890</span>
              </a>
              <a href="mailto:info@packattackremovalltd.com" className="flex items-center gap-3 text-xs md:text-sm text-slate-300 hover:text-emerald-400 transition-colors duration-150 w-fit">
                <EmailIcon />
                <span>info@packattackremovalltd.com</span>
              </a>
              <div className="flex items-center gap-3 text-xs md:text-sm text-slate-500">
                <MapPinIcon />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs md:text-sm font-medium hover:text-white transition-colors duration-150 block py-0.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs md:text-sm font-medium hover:text-white transition-colors duration-150 block py-0.5">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
              Subscribe to our newsletter for moving guidelines, updates, and seasonal pricing options.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
              <div className="relative flex items-center h-[46px]">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-full pl-4 pr-12 text-xs font-medium rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-600 transition-colors duration-150"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 h-8 w-8 flex items-center justify-center rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors duration-150 group"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] md:text-xs font-medium text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Pack & Attack Removals Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] md:text-xs font-semibold text-slate-600 hover:text-slate-400 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Structured SEO Injection: Google reads this instantly during server render */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pack & Attack Removals",
            "description": "Professional, reliable, and stress-free moving and removal services.",
            "url": "https://www.packattackremovalltd.com",
            "telephone": "+441234567890",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "48"
            }
          })
        }}
      />
    </footer>
  )
}