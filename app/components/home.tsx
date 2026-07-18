// app/components/home.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import CarouselSection from './carousel-section';
import PricingSection from '../sections/pricing-section';


// Lazy load below-the-fold components
const Description = dynamic(
  () => import('../sections/description-section'),
  { 
    loading: () => <div className="h-96 bg-emerald-500/10 animate-pulse" />
  }
);

const AnimatedTimeline = dynamic(
  () => import('../sections/process-timeline'),
  { 
    loading: () => <div className="h-96 bg-slate-100 animate-pulse" />
  }
);

export default function Home() {
  return (
    <div className="h-full w-full">
      <CarouselSection />
      <Description />
      <AnimatedTimeline />
   <PricingSection/>
    </div>
  );
}