import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  { name: "Sarah L.", text: "Absolutely phenomenal service. The team was on time, polite, and handled everything with care.", rating: 5, source: "Trustpilot" },
  { name: "Mark D.", text: "Best movers in London! They moved our entire 4-bedroom house in under 6 hours.", rating: 5, source: "Google" },
  { name: "Emma T.", text: "Stress-free from start to finish. Highly recommend Pack & Attack to anyone.", rating: 5, source: "Trustpilot" },
  { name: "David J.", text: "Professional, fast, and no hidden fees. The team was fantastic.", rating: 5, source: "Google" },
  { name: "Chloe M.", text: "They packed all my fragile items perfectly. Nothing was broken. 10/10.", rating: 5, source: "Trustpilot" },
];

export default function SocialProof() {
  // Duplicate array for seamless infinite marquee effect
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">Don't Just Take Our Word For It</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
            <span className="text-emerald-400 font-bold">Excellent 4.9/5</span>
            <span className="flex text-emerald-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
            </span>
            <span className="text-slate-300">Trustpilot</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
            <span className="text-emerald-400 font-bold">5.0/5</span>
            <span className="flex text-emerald-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
            </span>
            <span className="text-slate-300">Google Reviews</span>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Left and Right Fade Gradients for smooth Marquee boundaries */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-6">
          {marqueeReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-slate-800 border border-slate-700 p-6 rounded-2xl cursor-pointer hover:bg-slate-750 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-emerald-400">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-400" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-1 rounded">
                  {review.source}
                </span>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{review.name}</p>
                  <p className="text-emerald-400 flex items-center gap-1 text-xs">
                    <CheckCircle2 className="w-3 h-3" /> Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
