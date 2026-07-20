import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import bgImage from '../../public/images/carousel2.png';

// Dynamically import the highly interactive wizard to preserve >90 Server Performance
const QuoteFormContent = dynamic(() => import('./QuoteFormContent'), {
  loading: () => (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-pulse bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
      <div className="h-2 bg-slate-200 rounded-full w-full mb-8"></div>
      <div className="h-10 bg-slate-200 rounded-xl w-3/4"></div>
      <div className="h-32 bg-slate-100 rounded-xl w-full"></div>
      <div className="flex justify-between pt-8">
        <div className="h-12 w-32 bg-slate-200 rounded-xl"></div>
        <div className="h-12 w-32 bg-emerald-200 rounded-xl"></div>
      </div>
    </div>
  )
});

// Dynamically import Social Proof
const SocialProof = dynamic(() => import('@/components/social-proof'), {
  loading: () => <div className="h-64 w-full bg-slate-900 border-y border-slate-800 animate-pulse" />
});

export const metadata: Metadata = {
  title: 'Get a Quote | Pack & Attack Removal Ltd',
  description: 'Request a free, no-obligation quote for your residential or commercial move in London. Fast, transparent pricing within 24 hours.',
  alternates: {
    canonical: 'https://www.packattackremovalltd.com/quote',
  },
  openGraph: {
    title: 'Get a Quote | Pack & Attack Removal Ltd',
    description: 'Request a free, transparent removals quote in London.',
    url: 'https://www.packattackremovalltd.com/quote',
    type: 'website'
  }
};

export default function QuotePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Pack & Attack Removals Quote Request",
    "description": "Form to request a custom moving quote.",
    "url": "https://www.packattackremovalltd.com/quote",
    "mainEntity": {
      "@type": "Service",
      "name": "Custom Removal Quote",
      "provider": {
        "@type": "MovingCompany",
        "name": "Pack & Attack Removal Ltd",
        "telephone": "+447577441654"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex flex-col min-h-screen bg-slate-50 overflow-hidden pt-16">
        
        {/* Premium Hero Section */}
        <section className="relative min-h-[40vh] py-20 w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src={bgImage} 
              alt="Get a Removal Quote" 
              fill 
              priority 
              fetchPriority="high"
              quality={60}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-50" />
          </div>
          
          <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 text-center mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-100 tracking-wide uppercase">No Hidden Fees</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-sm">
              Get Your Free Quote
            </h1>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
              Fill out the details below and our team will get back to you with a customized, fully transparent estimate.
            </p>
          </div>
        </section>

        {/* Wizard Container */}
        <section className="relative z-20 -mt-20 pb-24 w-full px-4 sm:px-6">
          <QuoteFormContent />
        </section>

        {/* Dynamic Social Proof */}
        <SocialProof />

      </main>
    </>
  );
}