// app/services/page.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Pack Attack Removals',
  description: 'Professional removal services across London. Residential, commercial, and office moves.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Service cards */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold">Residential Moves</h2>
            <p className="text-slate-600 mt-2">Moving home? We make it stress-free.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold">Commercial Moves</h2>
            <p className="text-slate-600 mt-2">Relocate your business with minimal downtime.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold">Office Relocation</h2>
            <p className="text-slate-600 mt-2">Office moves handled professionally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}