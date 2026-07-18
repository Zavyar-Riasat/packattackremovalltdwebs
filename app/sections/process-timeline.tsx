"use client"

import * as React from "react"

const steps = [
  {
    title: "1. Get a Free Custom Quote",
    description: "Enter your postcodes and house size online or over the phone. Receive an exact price guarantee with absolutely no hidden fees.",
    icon: () => (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M9 12h6" /><path d="M9 16h6" />
      </svg>
    ),
    stepNum: "Step 01",
  },
  {
    title: "2. Secure Packing & Delivery",
    description: "Our supervisor-led teams arrive early with high-quality boxes, carefully wrapping fragile items and organizing your furniture.",
    icon: () => (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    stepNum: "Step 02",
  },
  {
    title: "3. Safe Transit & Transport",
    description: "Your belongings are securely loaded into clean, premium vehicles and transported safely with Goods in Transit coverage.",
    icon: () => (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    stepNum: "Step 03",
  },
  {
    title: "4. Settling into Your New Home",
    description: "We carefully unload and place every box into its designated room, making sure your new transition is entirely stress-free.",
    icon: () => (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    stepNum: "Step 04",
  },
]

export default function AnimatedTimeline() {
  return (
    <section className="py-20 bg-slate-100 px-4 md:px-8 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight italic">
            Our Moving Process
          </h2>
          <p className="inline-block text-slate-600 font-bold uppercase tracking-wide text-xs bg-white py-2 px-4 rounded-full shadow-sm border border-slate-200">
            How Pack & Attack Works
          </p>
        </div>

        {/* 
          Timeline Vertical Line:
          - Keeps left-5 alignment on mobile devices.
          - Perfectly centers to left-1/2 on desktop viewports.
        */}
        <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-40 bottom-10 w-1 bg-white shadow-sm" />

        {/* Steps Container */}
        <div className="space-y-12 md:space-y-24 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0

            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-stretch md:items-center justify-between w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* 
                  Timeline Node Icon Container:
                  - Stably positioned at left-0 on mobile so it never causes layout shifts.
                  - Perfectly centered on desktop.
                */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-2 md:top-auto flex items-center justify-center z-20">
                  <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-cyan-400 border-4 border-white text-white flex items-center justify-center shadow-md shadow-cyan-400/20">
                    <IconComponent />
                  </div>
                </div>

                {/* 
                  Content Card Wrapper:
                  - Added precise padding-left (pl-14) directly on mobile to ensure content card 
                    never overlaps or runs off the screen edge.
                */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0 z-10">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-200/60 relative hover:shadow-xl transition-all duration-300 transform-gpu hover:md:-translate-y-1">
                    
                    {/* Responsive Arrow indicator (Desktop only) */}
                    <div className={`hidden md:block absolute top-7 w-0 h-0 border-y-[10px] border-y-transparent ${
                      isEven 
                        ? "-left-2.5 border-r-[10px] border-r-white" 
                        : "-right-2.5 border-l-[10px] border-l-white"
                    }`} />
                    
                    <span className="text-xs font-black text-emerald-600 tracking-wider uppercase block mb-1">
                      {step.stepNum}
                    </span>
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs md:text-sm font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout spacer block */}
                <div className="w-full md:w-[45%] hidden md:block" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}