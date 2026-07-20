import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { ShieldCheck, Truck, Clock, Leaf, Users, MapPin, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import bgImage from '../../public/images/carousel2.png';

// Dynamically import Social Proof
const SocialProof = dynamic(() => import('@/components/social-proof'), {
  loading: () => <div className="h-64 w-full bg-slate-900 border-y border-slate-800 animate-pulse" />
});

export const metadata: Metadata = {
  title: 'About Us | Pack & Attack Removal Ltd',
  description: 'Stress-Free Removals in London & Beyond. A family-run removals company providing residential and commercial moving services with transparent pricing.',
  alternates: {
    canonical: 'https://www.packattackremovalltd.com/about',
  },
  openGraph: {
    title: 'About Us | Pack & Attack Removal Ltd',
    description: 'Stress-Free Removals in London & Beyond. A family-run removals company providing residential and commercial moving services.',
    url: 'https://www.packattackremovalltd.com/about',
    type: 'website'
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MovingCompany"],
    "name": "Pack & Attack Removal Ltd",
    "slogan": "Stress-Free Removals in London & Beyond",
    "url": "https://www.packattackremovalltd.com/",
    "logo": "https://www.packattackremovalltd.com/images/logo.png",
    "email": "info@packattackremovalltd.com",
    "telephone": ["+447577441654", "+447775144475"],
    "description": "A family-run removals company providing residential and commercial moving services with transparent pricing, insured operations, and nationwide coverage.",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Removal Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Residential Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Moves" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Clearances" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Clearance Services" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Commercial Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Moves" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Clearances" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Moving Packages",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basic Package" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Package" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Package" } }
          ]
        }
      ]
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
              alt="Pack & Attack Removal Team" 
              fill 
              priority 
              fetchPriority="high"
              quality={60}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300 tracking-wide uppercase">Fully Insured & Trusted</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Stress-Free Removals in London & Beyond
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
                We are a family-run removals company providing residential and commercial moving services with transparent pricing, insured operations, and nationwide coverage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg hover:shadow-emerald-500/25">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="tel:+447577441654" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700 rounded-xl transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative z-20 -mt-10 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Why Choose Us</h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                We combine local knowledge with nationwide reach to deliver an unparalleled moving experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'Experienced Team' },
                { icon: ShieldCheck, title: 'Fully Insured' },
                { icon: Truck, title: 'Fast & Reliable' },
                { icon: Leaf, title: 'Eco-Friendly' },
                { icon: Box, title: 'Flexible Services' },
                { icon: CheckCircle2, title: 'Customer Focused' },
                { icon: Clock, title: 'Convenient Scheduling' },
                { icon: MapPin, title: 'Nationwide Reach' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Moving Packages */}
        <section className="py-24 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Our Moving Packages</h2>
              <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
                Transparent pricing tailored to your specific moving requirements.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Basic */}
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
                <p className="text-slate-400 mb-6 font-medium">Essential assistance for your move.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['2 Removal Specialists', 'Furniture, Sofa & Mattress Protection', 'Insurance Coverage', 'No Hidden Costs'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard */}
              <div className="bg-emerald-900 border border-emerald-500/50 rounded-3xl p-8 flex flex-col relative transform lg:-translate-y-4 shadow-2xl shadow-emerald-900/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                <p className="text-emerald-200 mb-6 font-medium">The perfect balance of service.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Includes Basic Package Features', 'Basic Packing Service', 'Free Dismantling & Reassembly', 'Priority Support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                      <span className="text-emerald-50 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium */}
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
                <p className="text-slate-400 mb-6 font-medium">Complete end-to-end relocation.</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {['Includes Standard Features', 'Full Packing Service', 'All Packing Materials Included', 'Dedicated Move Manager'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Timeline */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Our Process</h2>
              <p className="text-lg text-slate-600 font-medium">8 simple steps to a stress-free relocation.</p>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-emerald-100">
              {[
                { title: 'Get in Touch', desc: 'Contact us via phone or form.' },
                { title: 'Free Quote', desc: 'Receive a transparent, no-obligation estimate.' },
                { title: 'Schedule Move', desc: 'Book a date and time that suits you.' },
                { title: 'Packing & Preparation', desc: 'Optional full or basic packing service.' },
                { title: 'Moving Day', desc: 'Our insured team handles everything.' },
                { title: 'Delivery & Unloading', desc: 'Safe transport to your new destination.' },
                { title: 'Disposal & Clean-Up', desc: 'We handle clearances and packaging waste.' },
                { title: 'Satisfaction Check', desc: 'Ensuring you are 100% happy with the service.' }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                    <p className="text-slate-600 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Social Proof */}
        <SocialProof />

      </main>
    </>
  );
}
