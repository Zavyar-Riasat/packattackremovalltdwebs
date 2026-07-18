// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import logoIcon from '../app/favicon.ico'
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-slate-100 antialiased transform-gpu will-change-transform">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand - Use consistent text */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Pack&Attack Logo" 
                width={28} 
                height={28}
                className="w-7 h-7 object-contain"
                priority // Ensures the logo image loads instantly above the fold
              />
              <span>PACK & ATTACK REMOVAL LTD</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link 
              href="/quote" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-blue-600/10"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 font-semibold text-slate-600 bg-white border-b border-slate-100 shadow-inner">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all"
            >
              About Us
            </Link>
            <div className="pt-2 px-3">
              <Link 
                href="/quote" 
                onClick={() => setIsOpen(false)}
                className="block text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}