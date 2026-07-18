"use client"

import * as React from "react"

type Tier = "budget" | "average" | "premium"
type PropertySize = "1-Bed" | "2-Bed" | "3-Bed" | "4-Bed" | "5-Bed"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

// Inline SVGs (0kb bundle, instant load)
const InlineCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const InlineInfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-slate-400 shrink-0">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

// STATIC DATABASE: Declared outside the component so React doesn't re-create it on every render cycle.
const PRICING_DATABASE: Record<PropertySize, Record<Tier, PricingTier>> = {
  "1-Bed": {
    budget: {
      name: "Budget Move",
      price: "170",
      description: "Perfect for students and minimalists loading pre-packed boxes.",
      features: ["1 Professional Mover", "Standard Transit Van", "Self-loading assistance", "Goods in Transit Insurance"],
    },
    average: {
      name: "Standard Move",
      price: "436",
      description: "Our most popular balanced option for standard apartments.",
      features: ["2 Professional Movers", "Large Luton Van", "Full loading & securing", "Disassembly of basic furniture", "Furniture protective wrapping"],
      isPopular: true,
    },
    premium: {
      name: "Premium Pack & Move",
      price: "520",
      description: "Zero stress. We wrap, pack, load, and place everything for you.",
      features: ["3 Elite Movers", "Large Luton Van + Tail Lift", "Full packing service & premium materials", "Complete disassembly & reassembly", "Priority timed delivery slot"],
    },
  },
  "2-Bed": {
    budget: {
      name: "Budget Move",
      price: "395",
      description: "Essential transportation for budget-conscious household moves.",
      features: ["2 Movers", "Large Luton Van", "Loading assistance", "Basic Transit Insurance"],
    },
    average: {
      name: "Standard Move",
      price: "804",
      description: "The standard complete moving solution for 2-bedroom homes.",
      features: ["2 Professional Movers", "Large Luton Van", "Full loading, wrapping & securing", "Basic disassembly & assembly", "Wardrobe boxes provided"],
      isPopular: true,
    },
    premium: {
      name: "Premium Pack & Move",
      price: "990",
      description: "All-inclusive relocation experience with premium packing.",
      features: ["3 Elite Movers", "2 Luton Vans", "Full professional packing & heavy padding", "Complete disassembly & reassembly", "Specialist item handling"],
    },
  },
  "3-Bed": {
    budget: {
      name: "Budget Move",
      price: "620",
      description: "Basic transit for 3-bed homes with pre-packed items.",
      features: ["2 Movers", "Large Luton Van", "Loading & securing help", "Transit Insurance"],
    },
    average: {
      name: "Standard Move",
      price: "1,220",
      description: "Comprehensive move designed for average-sized family homes.",
      features: ["3 Professional Movers", "2 Luton Vans", "Full packing/handling", "Disassembly & reassembly", "Protective floor & wall runners"],
      isPopular: true,
    },
    premium: {
      name: "Premium Pack & Move",
      price: "1,520",
      description: "White-glove service. Sit back while our team does 100% of the work.",
      features: ["4 Elite Movers", "2 Luton Vans", "Premium custom packing & crating", "Full disassembly, setup, & bed-making", "Post-move packing debris removal"],
    },
  },
  "4-Bed": {
    budget: {
      name: "Budget Move",
      price: "950",
      description: "Transport-focused package for large households ready to go.",
      features: ["3 Movers", "2 Luton Vans", "Basic loading & secure transport", "Full Transit Insurance"],
    },
    average: {
      name: "Standard Move",
      price: "1,770",
      description: "Complete hands-on relocation for large properties.",
      features: ["4 Professional Movers", "2 Large Vans + Support Vehicle", "Comprehensive wrapping & protection", "Full disassembly & reassembly", "Pre-delivery of packing materials"],
      isPopular: true,
    },
    premium: {
      name: "Premium Pack & Move",
      price: "2,210",
      description: "Maximum care package for large estates and fragile belongings.",
      features: ["5 Elite Movers", "3 Vans / 7.5t Truck", "White-glove wrapping & bespoke packing", "Full furniture placement & assembly", "Dedicated project manager"],
    },
  },
  "5-Bed": {
    budget: {
      name: "Budget Move",
      price: "1,370",
      description: "Heavy-duty transport plan for sorted 5-bed estates.",
      features: ["4 Movers", "3 Luton Vans", "Structured heavy transport", "Premium Transit Coverage"],
    },
    average: {
      name: "Standard Move",
      price: "2,630",
      description: "Our fully managed 5-bed solution for extensive moves.",
      features: ["5 Professional Movers", "7.5t Truck + Support Van", "Comprehensive protection & wrapping", "Disassembly & detailed room placement", "Wardrobe & TV packing setup"],
      isPopular: true,
    },
    premium: {
      name: "Premium Pack & Move",
      price: "3,170",
      description: "Ultimate relocations. Multiple days or rapid single-day deployment.",
      features: ["6+ Elite Movers", "Full Fleet Deployment", "Bespoke fine-art & luxury wrapping", "Complete unpacking & organizing service", "Post-move support line"],
    },
  },
}

const PROPERTY_SIZES: PropertySize[] = ["1-Bed", "2-Bed", "3-Bed", "4-Bed", "5-Bed"]

export default function PricingSection() {
  const [selectedSize, setSelectedSize] = React.useState<PropertySize>("1-Bed")

  const activeTiers = PRICING_DATABASE[selectedSize]

  return (
    <section className="py-16 px-4 bg-slate-50 text-slate-900 w-full contain-intrinsic-size">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
            Fair & Transparent Pricing
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Select your property size below to view custom-tailored packages. No hidden fees, guaranteed.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          {/* We set a fixed height container on mobile to prevent layout shift */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl max-w-full overflow-x-auto no-scrollbar scroll-smooth gap-1 h-[46px]">
            {PROPERTY_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ease-out whitespace-nowrap ${
                  selectedSize === size
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "text-slate-700 hover:text-emerald-800 hover:bg-slate-100/50"
                }`}
              >
                {size} Property
              </button>
            ))}
          </div>
        </div>

        {/* 
          Cards Grid 
          - On mobile, we use a single column.
          - We set min-height parameters on the flex layout to block out layout spaces early.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch min-h-[500px]">
          {(Object.keys(activeTiers) as Tier[]).map((key) => {
            const tier = activeTiers[key]

            return (
              <div
                key={key}
                className={`relative flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 ease-out transform-gpu will-change-transform ${
                  tier.isPopular
                    ? "border-emerald-600 shadow-lg scale-100 md:scale-105 z-10 hover:md:-translate-y-2 hover:md:shadow-xl"
                    : "border-slate-200 shadow-sm hover:md:-translate-y-2 hover:md:shadow-md"
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tier.name}</h3>
                  
                  {/* Fixed min-height avoids layout shifts when changing property sizes */}
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed min-h-[42px]">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-extrabold text-slate-900">£{tier.price}</span>
                    <span className="text-sm font-semibold text-slate-500 ml-1">/ avg total</span>
                  </div>

                  {/* Feature lists are bound to a strict min-height container */}
                  <ul className="space-y-3.5 border-t border-slate-100 pt-6 min-h-[170px]">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700">
                        <InlineCheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition-colors duration-150 ${
                      tier.isPopular
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-md"
                        : "bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200"
                    }`}
                  >
                    Select {tier.name}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Note */}
        <div className="mt-12 flex justify-center items-center gap-2 text-xs text-slate-500 text-center">
          <InlineInfoIcon />
          <span>
            Prices are illustrative of average relocations. Custom routes or specialty items may modify final quotes.
          </span>
        </div>

      </div>
    </section>
  )
}