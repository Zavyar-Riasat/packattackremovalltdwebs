// app/components/carousel-section.tsx
'use client';

import dynamic from "next/dynamic";

const CarouselDemo = dynamic(
  () => import("../../app/sections/herosection").then((mod) => mod.CarouselDemo),
  { 
    ssr: true, // Keep SSR for better performance
    loading: () => (
      <div className="h-[55vh] sm:h-[70vh] md:h-[calc(100vh-4rem)] bg-slate-200 animate-pulse" />
    )
  }
);

export default function CarouselSection() {
  return <CarouselDemo />;
}