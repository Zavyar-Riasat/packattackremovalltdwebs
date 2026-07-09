// app/page.tsx
import React from 'react';
import PostcodeSearch from '@/components/PostcodeSearch';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-20 text-slate-900 antialiased font-sans">
      <div className="max-w-3xl text-center space-y-6 mb-10">
        <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
          Pack Attack Removals Ltd
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
          Professional Moving Servicessssss <br />
          <span className="text-blue-600">Across London</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          The capital's trusted local moving company. Reliable, fully insured, and affordable home and office removals.
        </p>
      </div>

      {/* Injecting our dynamic client-side search element */}
      <PostcodeSearch />

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
    </main>
  );
}