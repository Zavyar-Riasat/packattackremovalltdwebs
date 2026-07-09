// app/page.tsx
import React from 'react';
import PostcodeSearch from '@/components/PostcodeSearch';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-20 text-slate-900 antialiased font-sans">
      <div className="max-w-3xl text-center space-y-6 mb-10">
        
        <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
          Pack Attack Removals Ltd
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          Professional Moving Services <br />
          <span className="text-blue-600">Across London</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          The capital's trusted local moving company. Reliable, fully insured, and affordable home and office removals.
        </p>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Contact Us: 07577 441 654 / 07775 144 475
        </p>
      </div>

      {/* Injecting our dynamic client-side search element */}
      {/* <PostcodeSearch /> */}

      {/* Service Cards Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full px-4">
        
        {/* Maintenance Card */}
        <Link 
          href="/maintenance"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300"
        >
          <div className="text-4xl mb-4"></div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Ongoing Maintenance
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Professional maintenance plans to keep your property in perfect condition year-round.
          </p>
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
            Learn More
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>

        {/* Services Card */}
        <Link 
          href="/services"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300"
        >
          <div className="text-4xl mb-4"></div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Our Services
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Comprehensive range of professional moving and removal services for your needs.
          </p>
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
            View Services
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>

        {/* Quote Card */}
        {/* <Link 
          href="/quote"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300"
        >
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Get a Quote
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Request a free, no-obligation quote for our moving and maintenance services.
          </p>
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
            Get Quote
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link> */}

        {/* Contact Card */}
        {/* <Link 
          href="/contact"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300"
        >
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
            Contact Us
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Get in touch with our team for any questions or inquiries about our services.
          </p>
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
            Contact
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link> */}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center border-t border-slate-200 pt-10 max-w-4xl w-full px-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">100%</h3>
          <p className="text-sm text-slate-500 font-medium mt-1">Fully Insured</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">4.9★</h3>
          <p className="text-sm text-slate-500 font-medium mt-1">Google Rated</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">No Hidden</h3>
          <p className="text-sm text-slate-500 font-medium mt-1">Extra Charges</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Fixed</h3>
          <p className="text-sm text-slate-500 font-medium mt-1">Hourly Options</p>
        </div>
      </div>

      {/* CTA Banner */}
      {/* <div className="mt-16 max-w-4xl w-full px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you're moving home or need ongoing maintenance, our team is here to help. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Get Free Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/maintenance"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Maintenance Plans
            </Link>
          </div>
        </div>
      </div> */}
      
    </main>
  );
}