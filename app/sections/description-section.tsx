import React from "react";
import GoogleIcon from "@/components/shared/google-icon";
import { ShieldCheck, Target, Map, Award } from "lucide-react";

export default function Description() {
  return (
    <section className="py-24 relative overflow-hidden bg-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
            Why Choose Us
          </h2>
          <p className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Pack & Attack Removals London
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Box 1: The Brand */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
              <Award className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Standard of Excellence</h3>
            <p className="text-emerald-100/80 leading-relaxed font-medium">
              Pack&Attack Removals London has a hard-earned enviable reputation.
              It comes from having high standards. We take time to
              listen and understand your needs, right down to every last detail.
              This allows us to plan more effectively and take all the hard work
              off your hands, guaranteeing you a reliable, flexible, and friendly
              service that exceeds expectations.
            </p>
          </div>

          {/* Box 2: Can Do Attitude */}
          <div className="bg-emerald-600/20 backdrop-blur-md border border-emerald-500/20 p-8 rounded-3xl hover:bg-emerald-600/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
              <Target className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The "Can Do" Company</h3>
            <p className="text-emerald-100/80 leading-relaxed font-medium">
              We believe in offering an honest and fully transparent service with
              no hidden fees. What we quote is what you pay. No quibbles.
              Supervisor-led teams are briefed in advance and will treat your
              possessions like their own. Whatever the size of your move, we’ll handle it
              safely and efficiently.
            </p>
          </div>

          {/* Box 3: SEO Target 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
              <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">The Finest in London</h2>
            <p className="text-emerald-100/80 leading-relaxed font-medium">
              Pack&Attack has earned a reputation as a premium{" "}
              <strong className="text-emerald-300 font-bold">full service house moving company</strong>{" "}
              built entirely on high standards. We tailor our process to your 
              exact timeline, leaving you with a smooth, flexible experience that leaves older{" "}
              <strong className="text-white font-bold">moving companies near me</strong> far behind.
            </p>
          </div>

          {/* Box 4: SEO Target 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
              <Map className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">National Removals Service</h3>
            <p className="text-emerald-100/80 leading-relaxed font-medium">
              We specialize in premium <strong className="text-emerald-300 font-bold">packing services near me</strong>, 
              secure local transport, and dynamic <strong className="text-emerald-300 font-bold">furniture removalists London</strong>{" "}
              workflows. Whether you need an urgent <strong className="text-white font-bold">last minute movers London</strong>{" "}
              deployment or a comprehensive <strong className="text-emerald-300 font-bold">national house moving service</strong>, 
              we promise <strong className="text-white font-bold decoration-emerald-500">removals with no hidden fees</strong>.
            </p>
          </div>

        </div>

        {/* 5. Google Reviews Banner */}
        <div className="mt-16 pt-10 border-t border-emerald-800 text-center">
          <div className="inline-flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Removals Reviews
              </h4>
            </div>
            <div className="flex items-center gap-2 bg-emerald-900/50 px-6 py-2 rounded-full border border-emerald-800">
              <span className="text-emerald-400 font-black text-lg">4.9</span>
              <span className="text-emerald-100 font-bold tracking-wide uppercase text-sm">Excellent Rating</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}