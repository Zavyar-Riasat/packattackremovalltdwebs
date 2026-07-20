'use client';

import React from 'react';
import Link from 'next/link';
import PricingSection from '../app/sections/pricing-section';
import { MapPin, ShieldCheck, Star, Clock, CreditCard, ChevronRight } from 'lucide-react';

interface BoroughLayoutProps {
  data: {
    boroughName: string;
    region: string;
    postcodes: string[];
    metaTitle?: string;
    metaDescription?: string;
    heroHeading: string;
    heroSubheading: string;
    localText: string;
    prices: { manVan: number; houseMove: number; };
  };
  dataSource?: 'database' | 'fallback' | 'openstreetmap';
}

export default function BoroughLayout({ data, dataSource }: BoroughLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans pt-16 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        {/* Header Area */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">

          {dataSource === 'openstreetmap' && (
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-100/80 border border-yellow-200 text-yellow-800 rounded-full text-sm font-semibold backdrop-blur-sm shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              {/* Auto-Generated Area Page for {data.boroughName} */}
            </div>
          )}

          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200 shadow-sm">
              <MapPin className="w-4 h-4" />
              {data.region} • Reliable Removals
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            {data.heroHeading.split(' ').map((word, i) => (
              word.toLowerCase() === data.boroughName.toLowerCase() ? (
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 px-2 inline-block relative">
                  {word}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                  </svg>
                </span>
              ) : (
                <span key={i} className="inline-block mr-3">{word}</span>
              )
            ))}
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {data.heroSubheading}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
            >
              Get a Free Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+447577441654"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm flex items-center justify-center gap-2 text-lg"
            >
              Call 07577 441 654
            </a>
          </div>
        </div>

        {/* Local Text Content & Map Details */}
        <div className="grid lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-emerald-400" />
              <h2 className="text-3xl font-black text-slate-900 mb-6">About Your Local Move</h2>
              <div
                className="prose prose-lg prose-slate prose-a:text-emerald-600 max-w-none text-slate-600 leading-relaxed marker:text-blue-500"
                dangerouslySetInnerHTML={{ __html: data.localText }}
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Trust Signals Stack */}
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400 w-6 h-6" />
                Why Choose Us?
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-blue-400" fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">4.9/5 Rating</h4>
                    <p className="text-sm text-slate-400">Top-rated on Google</p>
                  </div>
                </li>
                {/* <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">Fully Insured</h4>
                    <p className="text-sm text-slate-400">Up to £50,000 coverage</p>
                  </div>
                </li> */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CreditCard className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">No Hidden Fees</h4>
                    <p className="text-sm text-slate-400">Transparent pricing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">Always on Time</h4>
                    <p className="text-sm text-slate-400">Reliable scheduling</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Areas Covered */}
            {data.postcodes && data.postcodes.length > 0 && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="text-blue-500 w-5 h-5" />
                  Postcodes Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.postcodes.map((postcode) => (
                    <span
                      key={postcode}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 transition-colors cursor-default"
                    >
                      {postcode}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Global Transparent Pricing Component */}
        <div className="mt-20">
          <PricingSection />
        </div>

        {/* Dynamic CTA Section */}
        <div className="mt-20 relative rounded-[2.5rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 z-0 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0 mix-blend-overlay" />

          <div className="relative z-10 px-6 py-20 sm:p-24 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-wider uppercase mb-6">
              Let's get moving
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Ready to relocate from <br /><span className="text-emerald-400">{data.boroughName}</span>?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of happy customers. Get a free, instant quote today and let our expert team handle the heavy lifting safely and securely.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
              >
                Book Your Move Now
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}