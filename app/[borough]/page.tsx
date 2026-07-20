// app/[borough]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BoroughLayout from '@/components/BoroughLayout';
import PostcodeSearch from '@/components/PostcodeSearch';
import { getCachedLocationBySlug, getCachedOsmLocation } from '../lib/location-cache';

interface Props {
  params: Promise<{ borough: string }>;
}

// Fallback data for boroughs that don't exist in the database
const fallbackBoroughData: { [key: string]: any } = {
  'westminster': {
    boroughName: 'Westminster',
    region: 'Central London',
    postcodes: ['SW1', 'W1', 'WC1', 'WC2'],
    metaTitle: 'Westminster Removals | Professional Moving Services in Westminster',
    metaDescription: 'Expert removals in Westminster. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Westminster',
    heroSubheading: 'Trusted by Westminster residents and businesses',
    localText: '<p>Moving in Westminster? We specialize in navigating central London\'s busy streets. Our team knows the area inside out.</p>',
    prices: { manVan: 85, houseMove: 380 }
  },
  'camden': {
    boroughName: 'Camden',
    region: 'North London',
    postcodes: ['NW1', 'NW3', 'NW5', 'NW6'],
    metaTitle: 'Camden Removals | Professional Moving Services in Camden',
    metaDescription: 'Expert removals in Camden. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Camden',
    heroSubheading: 'Trusted by Camden residents for over 10 years',
    localText: '<p>Moving in Camden? We specialize in navigating Camden\'s busy streets and narrow roads.</p>',
    prices: { manVan: 80, houseMove: 350 }
  },
  'chelsea': {
    boroughName: 'Chelsea',
    region: 'West London',
    postcodes: ['SW3', 'SW10'],
    metaTitle: 'Chelsea Removals | Professional Moving Services in Chelsea',
    metaDescription: 'Expert removals in Chelsea. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Chelsea',
    heroSubheading: 'Trusted by Chelsea residents',
    localText: '<p>Moving in Chelsea? We provide premium removal services in this prestigious area.</p>',
    prices: { manVan: 90, houseMove: 400 }
  },
  'islington': {
    boroughName: 'Islington',
    region: 'North London',
    postcodes: ['N1', 'N5', 'N7'],
    metaTitle: 'Islington Removals | Professional Moving Services in Islington',
    metaDescription: 'Expert removals in Islington. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Islington',
    heroSubheading: 'Trusted by Islington residents',
    localText: '<p>Moving in Islington? We provide reliable removal services in this vibrant area.</p>',
    prices: { manVan: 85, houseMove: 370 }
  },
  'greenwich': {
    boroughName: 'Greenwich',
    region: 'South East London',
    postcodes: ['SE10', 'SE3', 'SE7', 'SE8', 'SE9'],
    metaTitle: 'Greenwich Removals | Professional Moving Services in Greenwich',
    metaDescription: 'Expert removals in Greenwich. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Greenwich',
    heroSubheading: 'Trusted by Greenwich residents',
    localText: '<p>Moving in Greenwich? We provide expert removal services in this historic area.</p>',
    prices: { manVan: 85, houseMove: 370 }
  },
  'kensington': {
    boroughName: 'Kensington',
    region: 'West London',
    postcodes: ['SW5', 'SW7', 'W8', 'W14'],
    metaTitle: 'Kensington Removals | Professional Moving Services in Kensington',
    metaDescription: 'Expert removals in Kensington. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Kensington',
    heroSubheading: 'Trusted by Kensington residents',
    localText: '<p>Moving in Kensington? We provide premium removal services in this prestigious area.</p>',
    prices: { manVan: 90, houseMove: 400 }
  },
  'hackney': {
    boroughName: 'Hackney',
    region: 'East London',
    postcodes: ['E5', 'E8', 'E9', 'N16'],
    metaTitle: 'Hackney Removals | Professional Moving Services in Hackney',
    metaDescription: 'Expert removals in Hackney. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Hackney',
    heroSubheading: 'Trusted by Hackney residents',
    localText: '<p>Moving in Hackney? We provide reliable removal services in this vibrant area.</p>',
    prices: { manVan: 80, houseMove: 350 }
  },
  'wandsworth': {
    boroughName: 'Wandsworth',
    region: 'South West London',
    postcodes: ['SW11', 'SW12', 'SW15', 'SW18'],
    metaTitle: 'Wandsworth Removals | Professional Moving Services in Wandsworth',
    metaDescription: 'Expert removals in Wandsworth. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Wandsworth',
    heroSubheading: 'Trusted by Wandsworth residents',
    localText: '<p>Moving in Wandsworth? We provide expert removal services in this popular area.</p>',
    prices: { manVan: 85, houseMove: 370 }
  },
  'lambeth': {
    boroughName: 'Lambeth',
    region: 'South London',
    postcodes: ['SE1', 'SW2', 'SW4', 'SW8', 'SW9'],
    metaTitle: 'Lambeth Removals | Professional Moving Services in Lambeth',
    metaDescription: 'Expert removals in Lambeth. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Lambeth',
    heroSubheading: 'Trusted by Lambeth residents',
    localText: '<p>Moving in Lambeth? We provide reliable removal services in this diverse area.</p>',
    prices: { manVan: 85, houseMove: 370 }
  },
  'southwark': {
    boroughName: 'Southwark',
    region: 'South East London',
    postcodes: ['SE1', 'SE5', 'SE15', 'SE16', 'SE17'],
    metaTitle: 'Southwark Removals | Professional Moving Services in Southwark',
    metaDescription: 'Expert removals in Southwark. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Southwark',
    heroSubheading: 'Trusted by Southwark residents',
    localText: '<p>Moving in Southwark? We provide expert removal services in this historic area.</p>',
    prices: { manVan: 85, houseMove: 370 }
  },
  'tower-hamlets': {
    boroughName: 'Tower Hamlets',
    region: 'East London',
    postcodes: ['E1', 'E2', 'E3', 'E14', 'E16'],
    metaTitle: 'Tower Hamlets Removals | Professional Moving Services in Tower Hamlets',
    metaDescription: 'Expert removals in Tower Hamlets. Reliable, insured, and affordable moving services.',
    heroHeading: 'Professional Removals in Tower Hamlets',
    heroSubheading: 'Trusted by Tower Hamlets residents',
    localText: '<p>Moving in Tower Hamlets? We provide reliable removal services in this diverse area.</p>',
    prices: { manVan: 80, houseMove: 350 }
  }
};

// Fallback helper to fetch geographical data if the route isn't in MongoDB
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { borough } = await params;
    const targetSlug = borough.toLowerCase();

    let locationData = await getCachedLocationBySlug(targetSlug);

    if (!locationData && fallbackBoroughData[targetSlug]) {
      locationData = fallbackBoroughData[targetSlug];
    }

    if (!locationData) {
      const osmLocation = await getCachedOsmLocation(targetSlug);
      if (osmLocation) {
        locationData = {
          boroughName: osmLocation.boroughName,
          region: osmLocation.region,
          postcodes: [osmLocation.postcode],
          metaTitle: `${osmLocation.boroughName} Removals | Professional Moving Services in ${osmLocation.boroughName}`,
          metaDescription: `Expert removals in ${osmLocation.boroughName}. Reliable, insured, and affordable moving services in ${osmLocation.region}.`,
          heroHeading: `Professional Removals in ${osmLocation.boroughName}`,
          heroSubheading: `Your trusted, fully insured moving team serving ${osmLocation.boroughName} and surrounding areas.`,
          localText: `<p>Planning a relocation in or around ${osmLocation.boroughName}? Our professional removal teams handle everything from narrow street access to packing fragile items safely. We provide reliable, fully insured moving services across ${osmLocation.region}.</p><p>Whether you're moving a studio flat or a family home, our experienced team is here to make your move stress-free. Contact us today for a free, no-obligation quote.</p>`,
          prices: { manVan: 45, houseMove: 249 }
        };
      }
    }

    if (!locationData) {
      return {
        title: "Removals Services UK | Professional Moving Company"
      };
    }

    return {
      title: locationData.metaTitle || `${locationData.boroughName} Removals | Professional Moving Services`,
      description: locationData.metaDescription || `Professional removals in ${locationData.boroughName}. Reliable and affordable moving services.`,
      alternates: {
        canonical: `https://www.yourdomain.co.uk/${borough}`,
      },
      openGraph: {
        title: locationData.metaTitle || `${locationData.boroughName} Removals`,
        description: locationData.metaDescription || `Professional removals in ${locationData.boroughName}`,
        url: `https://www.yourdomain.co.uk/${borough}`,
        type: 'website'
      }
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: "Removals Services UK | Professional Moving Company"
    };
  }
}

export default async function DynamicBoroughPage({ params }: Props) {
  try {
    const { borough } = await params;
    const targetSlug = borough.toLowerCase();

    if (targetSlug.includes('.')) {
      notFound();
    }

    // Strategy A: Check database
    let locationData = await getCachedLocationBySlug(targetSlug);

    // ✅ FIX: Explicitly type dataSource with the correct literal types
    let dataSource: 'database' | 'fallback' | 'openstreetmap' = 'database';

    // Strategy B: Check fallback data
    if (!locationData && fallbackBoroughData[targetSlug]) {
      locationData = fallbackBoroughData[targetSlug];
      dataSource = 'fallback';
    }

    // Strategy C: Fetch from OSM
    if (!locationData) {
      const osmLocation = await getCachedOsmLocation(targetSlug);
      if (osmLocation) {
        locationData = {
          boroughName: osmLocation.boroughName,
          region: osmLocation.region,
          postcodes: [osmLocation.postcode],
          metaTitle: `${osmLocation.boroughName} Removals | Professional Moving Services in ${osmLocation.boroughName}`,
          metaDescription: `Expert removals in ${osmLocation.boroughName}. Reliable, insured, and affordable moving services in ${osmLocation.region}.`,
          heroHeading: `Professional Removals in ${osmLocation.boroughName}`,
          heroSubheading: `Your trusted, fully insured moving team serving ${osmLocation.boroughName} and surrounding areas.`,
          localText: `<p>Planning a relocation in or around ${osmLocation.boroughName}? Our professional removal teams handle everything from narrow street access to packing fragile items safely. We provide reliable, fully insured moving services across ${osmLocation.region}.</p><p>Whether you're moving a studio flat or a family home, our experienced team is here to make your move stress-free. Contact us today for a free, no-obligation quote.</p>`,
          prices: { manVan: 45, houseMove: 249 }
        };
        dataSource = 'openstreetmap';
      }
    }

    if (!locationData) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">
          <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md">
            <h1 className="text-2xl font-bold mb-2 text-slate-900">Location Not Found</h1>
            <p className="text-slate-500">We couldn't verify this destination area. Please check the spelling or try a different location.</p>
            <a href="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Return Home
            </a>
          </div>
        </main>
      );
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": `Pack Attack Removals - ${locationData.boroughName}`,
      "description": locationData.metaDescription || `Professional removals in ${locationData.boroughName}`,
      "telephone": "+442079460192",
      "url": `https://www.yourdomain.co.uk/${targetSlug}`,
      "areaServed": (locationData.postcodes || ['London']).map((postcode: string) => ({
        "@type": "AdministrativeArea",
        "name": postcode
      }))
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <BoroughLayout data={locationData} dataSource={dataSource} />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">
              Find Your Local Removal Service
            </h2>
            <PostcodeSearch />
          </div>
        </div>
      </>
    );
  } catch (error: any) {
    if (error?.digest === 'NEXT_HTTP_ERROR_FALLBACK;404') {
      throw error;
    }

    console.error('Error in DynamicBoroughPage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-slate-800">Service Temporarily Unavailable</h1>
          <p className="text-slate-600 mt-2">Please try again later.</p>
        </div>
      </div>
    );
  }
}