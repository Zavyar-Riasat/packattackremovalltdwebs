// components/BoroughLayout.tsx
import React from 'react';

// Define what data this component needs to work
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
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            🚚 Pack Attack Removals
          </span>
          <nav className="space-x-6">
            <a href="/" className="text-sm hover:text-blue-600 transition-colors">Home</a>
            <a href="/services" className="text-sm hover:text-blue-600 transition-colors">Services</a>
            <a href="/contact" className="text-sm hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Data Source Indicator */}
        {dataSource === 'openstreetmap' && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">
            ℹ️ This page was automatically generated for {data.boroughName}.
          </div>
        )}

        {/* Region Badge */}
        <div className="mb-4">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            {data.region} • Reliable Removals
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mt-2">
          {data.heroHeading}
        </h1>
        
        {/* Hero Subheading */}
        <p className="mt-4 text-xl text-slate-600 font-medium">
          {data.heroSubheading}
        </p>

        {/* Local Text Content */}
        <div className="mt-8 prose prose-slate max-w-none">
          <div 
            className="text-slate-700 leading-relaxed bg-white p-6 rounded-xl border border-slate-100"
            dangerouslySetInnerHTML={{ __html: data.localText }} 
          />
        </div>

        {/* Pricing Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-slate-100 hover:border-blue-600 transition-colors">
            <h3 className="text-lg font-semibold text-slate-800">Man & Van Service</h3>
            <p className="text-3xl font-black text-blue-600 mt-2">
              £{data.prices.manVan}
              <span className="text-sm font-medium text-slate-500 ml-1">/ hour</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">Ideal for small moves and single items</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-slate-100 hover:border-blue-600 transition-colors">
            <h3 className="text-lg font-semibold text-slate-800">Full House Move</h3>
            <p className="text-3xl font-black text-blue-600 mt-2">
              From £{data.prices.houseMove}
            </p>
            <p className="text-sm text-slate-500 mt-2">Complete home or office relocation</p>
          </div>
        </div>

        {/* Areas Covered */}
        {data.postcodes && data.postcodes.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Areas We Cover in {data.boroughName}
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.postcodes.map((postcode) => (
                <span 
                  key={postcode}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                >
                  {postcode}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Trust Signals */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-slate-200 pt-10">
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

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Move in {data.boroughName}?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our team is ready to help you move.
          </p>
          <a
            href="/quote"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Pack Attack Removals</h4>
              <p className="text-sm text-slate-500">
                Professional removal services across the UK
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Contact</h4>
              <p className="text-sm text-slate-500">📞 020 7946 0192</p>
              <p className="text-sm text-slate-500">✉️ info@packattackremovals.co.uk</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Areas</h4>
              <p className="text-sm text-slate-500">
                Serving {data.boroughName} and surrounding areas
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-400 text-center">
            <p>© 2024 Pack Attack Removals Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}