import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import bgImage from '../public/images/carousel2.png';
import dynamic from 'next/dynamic';
const SocialProof = dynamic(() => import('./social-proof'), {
  loading: () => <div className="h-64 w-full bg-slate-900 animate-pulse border-y border-slate-800" />
});

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "MovingCompany"],
            "name": `Pack & Attack Removals ${data.boroughName}`,
            "description": data.metaDescription || `Professional removals in ${data.boroughName}, ${data.region}.`,
            "url": `https://www.packattackremovalltd.com/${data.boroughName.toLowerCase()}`,
            "telephone": "+441234567890",
            "image": "https://www.packattackremovalltd.com/images/logo.png",
            "priceRange": "££",
            "areaServed": {
              "@type": "City",
              "name": data.boroughName,
              "containedInPlace": {
                "@type": "City",
                "name": "London"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.boroughName,
              "addressRegion": "London",
              "addressCountry": "GB"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `Moving Services in ${data.boroughName}`,
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `House Removals ${data.boroughName}`,
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": data.prices.houseMove,
                      "priceCurrency": "GBP"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": `Man and Van ${data.boroughName}`,
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": data.prices.manVan,
                      "priceCurrency": "GBP"
                    }
                  }
                }
              ]
            }
          })
        }}
      />

      <main className="flex flex-col min-h-screen bg-slate-50 overflow-hidden pt-16">
        
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[60vh] py-24 w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src={bgImage} 
              alt={`Removals in ${data.boroughName}`} 
              fill 
              priority 
              fetchPriority="high"
              quality={50}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-left">
              {dataSource === 'openstreetmap' && (
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-yellow-300 tracking-wide">Auto-Generated Area Page</span>
                </div>
              )}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300 tracking-wide uppercase">{data.region} Removals</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                {data.heroHeading}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
                {data.heroSubheading}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg hover:shadow-emerald-500/25">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="tel:+441234567890" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700 rounded-xl transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Info & Pricing Section */}
        <section className="py-24 bg-slate-50 relative z-20 -mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Local Content */}
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Local Expertise in {data.boroughName}</h2>
                <div 
                  className="prose prose-lg prose-slate prose-a:text-emerald-600 mb-8"
                  dangerouslySetInnerHTML={{ __html: data.localText }} 
                />
                
                {data.postcodes && data.postcodes.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <MapPin className="text-emerald-500" />
                      Covering these {data.boroughName} postcodes:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.postcodes.map((postcode) => (
                        <span key={postcode} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold">
                          {postcode}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Cards */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Man & Van Service</h3>
                  <p className="text-slate-500 font-medium mt-2">Ideal for small moves, single items, or student relocations in {data.boroughName}.</p>
                  <p className="text-4xl font-black text-slate-900 mt-6">
                    £{data.prices.manVan}<span className="text-lg text-slate-500 font-medium">/hour</span>
                  </p>
                </div>

                <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl hover:-translate-y-1 transition-transform duration-300 text-white">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Full House Move</h3>
                  <p className="text-slate-400 font-medium mt-2">Complete residential or commercial relocation within or out of {data.boroughName}.</p>
                  <p className="text-4xl font-black mt-6">
                    <span className="text-lg text-slate-400 font-medium mr-2">From</span>£{data.prices.houseMove}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Trustpilot Social Proof */}
        <SocialProof />
        
      </main>
    </>
  );
}