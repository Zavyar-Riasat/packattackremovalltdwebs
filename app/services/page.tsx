import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Home, Building2, Trash2, Truck, PackageCheck, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import bgImage from '../../public/images/carousel1.webp';

// Dynamically import Social Proof
const SocialProof = dynamic(() => import('@/components/social-proof'), {
  loading: () => <div className="h-64 w-full bg-slate-900 border-y border-slate-800 animate-pulse" />
});

// Dynamically import Pricing Section
const PricingSection = dynamic(() => import('../sections/pricing-section'), {
  loading: () => <div className="h-96 w-full bg-slate-50 animate-pulse" />
});

export const metadata: Metadata = {
  title: 'Our Services | Pack & Attack Removal Ltd',
  description: 'Comprehensive removal services in London. From residential and commercial moves to house clearances and man & van services. Fully insured and reliable.',
  alternates: {
    canonical: 'https://www.packattackremovalltd.com/services',
  },
  openGraph: {
    title: 'Removal Services | Pack & Attack Removal Ltd',
    description: 'Comprehensive removal services in London. Fully insured residential moves, commercial relocations, clearances, and packing.',
    url: 'https://www.packattackremovalltd.com/services',
    type: 'website'
  }
};

const services = [
  {
    icon: Home,
    title: 'Residential Moves',
    description: 'Stress-free home relocations of any size. From studio apartments to large family homes, our insured team handles your belongings with maximum care.',
    features: ['Fully Insured', 'Furniture Protection', 'Disassembly Available']
  },
  {
    icon: Building2,
    title: 'Commercial Moves',
    description: 'Efficient office relocations designed to minimize business downtime. We handle IT equipment, office furniture, and secure document transport.',
    features: ['Minimal Downtime', 'IT Equipment Handling', 'After-Hours Availability']
  },
  {
    icon: Trash2,
    title: 'House Clearances',
    description: 'Complete property, garage, loft, estate, probate, and bereavement clearances. Eco-friendly disposal and recycling of all items.',
    features: ['Eco-Friendly Disposal', 'Probate Clearances', 'Fast Turnaround']
  },
  {
    icon: Truck,
    title: 'Man and Van Services',
    description: 'Perfect for single-item transportation, furniture collections, pallet deliveries, and small, rapid moves across London.',
    features: ['Same-Day Options', 'Hourly Rates', 'Flexible Scheduling']
  },
  {
    icon: PackageCheck,
    title: 'Packing & Unpacking',
    description: 'Complete end-to-end packing service using premium materials. We securely wrap and box everything, and can unpack at your destination.',
    features: ['Premium Materials', 'Fragile Item Care', 'Unpacking Service']
  },
  {
    icon: GraduationCap,
    title: 'Student Moves',
    description: 'Budget-friendly moving services tailored for students. Fast, reliable, and secure transport to and from university halls or accommodations.',
    features: ['Budget-Friendly', 'Single Room Focus', 'Shared Moves']
  }
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Moving and Relocation Services",
    "provider": {
      "@type": "MovingCompany",
      "name": "Pack & Attack Removal Ltd",
      "url": "https://www.packattackremovalltd.com/",
      "image": "https://www.packattackremovalltd.com/images/logo.png",
      "telephone": ["+447577441654", "+447775144475"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Comprehensive Removal Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
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
        <section className="relative min-h-[50vh] md:min-h-[60vh] py-24 w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src={bgImage} 
              alt="Professional Removal Services London" 
              fill 
              priority 
              fetchPriority="high"
              quality={60}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-900/80 to-slate-900/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300 tracking-wide uppercase">Comprehensive Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
                Our Removal Services
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-medium leading-relaxed">
                Whether you are moving a single sofa or relocating a massive corporate office, our fully insured team delivers a premium, zero-stress experience every time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-lg">
                  Get a Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="tel:+447577441654" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-emerald-600/80 hover:bg-emerald-500/80 backdrop-blur-sm border border-emerald-500/50 rounded-xl transition-colors">
                  Call to Discuss
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 relative z-20 -mt-10 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Everything You Need to Move</h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                Select from our wide range of professional moving, packing, and clearance services tailored to your exact requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-6 border-t border-slate-100 mt-auto">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <PricingSection />

        {/* Call to Action Banner */}
        <section className="py-20 bg-emerald-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need a Specialized Service?</h2>
            <p className="text-emerald-100 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              We also handle single item moves, emergency removals, and dismantling/reassembling. Contact us today to discuss your unique moving needs.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-xl shadow-emerald-900/50">
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Dynamic Social Proof */}
        <SocialProof />

      </main>
    </>
  );
}