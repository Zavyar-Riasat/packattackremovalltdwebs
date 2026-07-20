// app/sections/herosection.tsx - Simplified version
'use client'

import * as React from "react"
import ReactDOM from "react-dom"
import { getImageProps } from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Import images with explicit width/height
import carousel1 from "../../public/images/carousel1.webp"
import carousel1Mobile from "../../public/images/carousel1-mobile.webp"
import carousel2 from "../../public/images/carousel2.png"
import carousel2Mobile from "../../public/images/carousel2-mobile.png"

export function CarouselDemo() {
  const carouselSlides = [
    {
      desktop: carousel1,
      mobile: carousel1Mobile,
      alt: "Pack & Attack Removals London Team in Action",
    },
    {
      desktop: carousel2,
      mobile: carousel2Mobile,
      alt: "Pack & Attack Removals Premium Relocation Services",
    },
  ]

  return (
    <div className="w-full relative">
      <Carousel className="relative h-full w-full max-w-none group overflow-hidden">
        <CarouselContent className="h-full">
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-full w-full p-0">
                <Card className="h-full w-full rounded-none border-0 shadow-none bg-transparent">
                  <CardContent className="relative flex h-[55vh] sm:h-[70vh] md:h-[calc(100vh-4rem)] w-full items-center justify-center p-0">
                    <div className="relative h-full w-full">
                      
                      {(() => {
                        const common = { 
                          alt: slide.alt, 
                          fill: true, 
                          priority: index === 0, 
                          quality: 50, 
                          sizes: "100vw",
                          className: "object-cover object-center text-transparent"
                        };
                        const { props: { srcSet: desktop, src: desktopSrc } } = getImageProps({
                          ...common,
                          src: slide.desktop,
                        });
                        const { props: { srcSet: mobile, src: mobileSrc, ...rest } } = getImageProps({
                          ...common,
                          src: slide.mobile,
                        });

                        return (
                          <>
                            {index === 0 && (
                              <link rel="preload" as="image" href={desktopSrc} imageSrcSet={desktop} media="(min-width: 768px)" fetchPriority="high" />
                            )}
                            {index === 0 && (
                              <link rel="preload" as="image" href={mobileSrc} imageSrcSet={mobile} media="(max-width: 767px)" fetchPriority="high" />
                            )}
                            <picture>
                              <source media="(min-width: 768px)" srcSet={desktop} />
                              <source media="(max-width: 767px)" srcSet={mobile} />
                              <img {...rest} fetchPriority={index === 0 ? "high" : "auto"} />
                            </picture>
                          </>
                        );
                      })()}

                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white text-slate-800 border-none shadow-md transition-all duration-200 md:opacity-0 md:group-hover:opacity-100 z-30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white text-slate-800 border-none shadow-md transition-all duration-200 md:opacity-0 md:group-hover:opacity-100 z-30" />
      </Carousel>
    </div>
  )
}