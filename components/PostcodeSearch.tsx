// components/PostcodeSearch.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Local routing dictionary for instant SEO redirects
const staticSEOBookings: { [key: string]: string } = {
  // Borough names
  'camden': 'camden',
  'chelsea': 'chelsea',
  'islington': 'islington',
  'greenwich': 'greenwich',
  'westminster': 'westminster',
  'kensington': 'kensington',
  'hackney': 'hackney',
  'tower hamlets': 'tower-hamlets',
  'wandsworth': 'wandsworth',
  'lambeth': 'lambeth',
  'southwark': 'southwark',
  'battersea': 'wandsworth',
  'clapham': 'wandsworth',
  'brixton': 'lambeth',
  'richmond': 'richmond',
  'wimbledon': 'merton',
  
  // Landmarks
  'buckingham palace': 'westminster',
  'big ben': 'westminster',
  'london eye': 'lambeth',
  'tower bridge': 'tower-hamlets',
  'hyde park': 'kensington',
  'trafalgar square': 'westminster',
  'covent garden': 'westminster',
  'soho': 'westminster',
  'notting hill': 'kensington',
  'shoreditch': 'hackney',
  'camden market': 'camden',
  'greenwich park': 'greenwich',
  
  // Postcodes (keep all your existing ones)
  'nw1': 'camden',
  'nw3': 'camden',
  'nw5': 'camden',
  'nw6': 'camden',
  'sw3': 'chelsea',
  'sw10': 'chelsea',
  'n1': 'islington',
  'n5': 'islington',
  'n7': 'islington',
  'se10': 'greenwich',
  'se3': 'greenwich',
  'se7': 'greenwich',
  'se8': 'greenwich',
  'se9': 'greenwich',
  'sw1': 'westminster',
  'w1': 'westminster',
  'wc1': 'westminster',
  'wc2': 'westminster',
  'sw5': 'kensington',
  'sw7': 'kensington',
  'w8': 'kensington',
  'w14': 'kensington',
  'e5': 'hackney',
  'e8': 'hackney',
  'e9': 'hackney',
  'n16': 'hackney',
  'sw11': 'wandsworth',
  'sw12': 'wandsworth',
  'sw15': 'wandsworth',
  'sw18': 'wandsworth',
};

export default function PostcodeSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(false);

    const cleanQuery = query.trim();
    if (!cleanQuery) {
      setError('Please enter a postcode, place name, or landmark.');
      return;
    }

    // 1. INSTANT CHECK: Local premium database page (SEO-optimized)
    const searchKey = cleanQuery.toLowerCase().trim();
    if (staticSEOBookings[searchKey]) {
      router.push(`/${staticSEOBookings[searchKey]}`);
      return;
    }

    // 2. API lookup for unfamiliar places
    setLoading(true);
    try {
      const res = await fetch(
        `/api/lookup?postcode=${encodeURIComponent(cleanQuery)}`
      );
      const data = await res.json();

      if (data.valid) {
        // Check if the borough has a dedicated page
        const boroughSlug = data.borough.toLowerCase().replace(/\s+/g, '');
        if (staticSEOBookings[boroughSlug] || staticSEOBookings[data.borough.toLowerCase()]) {
          // Redirect to the dedicated borough page
          const slug = staticSEOBookings[boroughSlug] || staticSEOBookings[data.borough.toLowerCase()];
          router.push(`/${slug}`);
        } else {
          // Redirect to quote page with the verified data
          router.push(
            `/quote?postcode=${encodeURIComponent(data.postcode)}&borough=${encodeURIComponent(data.borough)}`
          );
        }
      } else {
        setError(data.message || data.error || "We couldn't find that location. Please try again.");
      }
    } catch (err) {
      console.error('Search error:', err);
      setError("Network connection issue. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Enter any UK postcode, place, or landmark (e.g. SW11 1AA, Camden, Edinburgh)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-4 text-slate-800 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-600 font-medium transition-colors placeholder:text-slate-400"
            disabled={loading}
          />
          {loading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-blue-900 hover:bg-blue-950 disabled:bg-slate-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:shadow-none"
        >
          {loading ? 'Searching...' : 'Find My Area'}
        </button>
      </form>
      
      {error && (
        <p className="mt-3 text-sm font-semibold text-red-500 bg-red-50 px-4 py-2 rounded-lg border border-red-100">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}