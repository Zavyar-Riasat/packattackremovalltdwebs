import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import bgImage from '../../public/images/carousel1.webp';

const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <div className="h-[600px] bg-slate-100 rounded-3xl animate-pulse" />
});

export const metadata: Metadata = {
  title: 'Contact Us | Pack & Attack Removal Ltd',
  description: 'Get in touch with London\'s most reliable moving company. We are available 24/7 for residential, commercial, and emergency removals.',
  alternates: {
    canonical: 'https://www.packattackremovalltd.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Pack & Attack Removal Ltd',
    description: 'Get in touch with London\'s most reliable moving company.',
    url: 'https://www.packattackremovalltd.com/contact',
    type: 'website'
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Pack & Attack Removals",
    "description": "Contact information and form for Pack & Attack Removals London.",
    "url": "https://www.packattackremovalltd.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Pack & Attack Removal Ltd",
      "image": "https://www.packattackremovalltd.com/images/logo.png",
      "telephone": ["+447577441654", "+447775144475"],
      "email": "info@packattackremovalltd.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
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
              alt="Contact Pack & Attack Removals" 
              fill 
              priority 
              fetchPriority="high"
              quality={60}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-slate-900/80 to-slate-50" />
          </div>
          
          <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-sm">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
              Whether you need an urgent quote, have a question about an upcoming move, or want to join our team, we are here for you 24/7.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-20 -mt-20 pb-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-black mb-6 relative z-10">Direct Contact</h3>
                
                <div className="space-y-6 relative z-10">
                  <a href="tel:+447577441654" className="flex items-start group/link">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover/link:bg-emerald-500 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-100" />
                    </div>
                    <div>
                      <p className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Main Line</p>
                      <p className="text-lg font-medium">07577 441 654</p>
                    </div>
                  </a>

                  <a href="tel:+447775144475" className="flex items-start group/link">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover/link:bg-emerald-500 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-100" />
                    </div>
                    <div>
                      <p className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Secondary Line</p>
                      <p className="text-lg font-medium">07775 144 475</p>
                    </div>
                  </a>

                  <a href="mailto:info@packattackremovalltd.com" className="flex items-start group/link">
                    <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center shrink-0 mr-4 group-hover/link:bg-emerald-500 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-100" />
                    </div>
                    <div>
                      <p className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Email</p>
                      <p className="text-base font-medium break-all">info@packattackremovalltd.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Operating Hours</h3>
                    <p className="text-slate-500 font-medium mt-1">Available exactly when you need us.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-700">Monday - Friday</span>
                    <span className="font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-700">Saturday</span>
                    <span className="font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold text-slate-700">Sunday</span>
                    <span className="font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">24 Hours</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>
    </>
  );
}