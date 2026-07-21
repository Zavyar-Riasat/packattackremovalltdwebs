// app/components/home.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import CarouselSection from './carousel-section';

// Lazy load below-the-fold components
const PricingSection = dynamic(
  () => import('../sections/pricing-section'),
  { loading: () => <div className="h-96 w-full bg-slate-50 animate-pulse" /> }
);


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

const SocialProof = dynamic(() => import('../../components/social-proof'), {
  loading: () => <div className="h-64 w-full bg-slate-900 animate-pulse border-y border-slate-800" />
});

export default function Home() {
  return (
    <div className="h-full w-full">
      <CarouselSection />
      <Description />
      <SocialProof />
      <AnimatedTimeline />
      <PricingSection />
    </div>
  );
}