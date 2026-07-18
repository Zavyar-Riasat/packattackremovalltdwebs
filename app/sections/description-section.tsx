import GoogleIcon from "@/components/shared/google-icon";
import React from "react";

export default function Description() {
  return (
    <section
      className="py-20 px-4 text-center text-white"
      style={{ backgroundColor: "#2E8B57" }} // Keeping your SeaGreen color
    >
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* 1. Brand Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide italic">
            Pack & Attack Removals London
          </h2>
          <p className="text-base md:text-lg text-emerald-50 leading-relaxed font-medium max-w-2xl mx-auto">
            Pack&Attack Removals London has a hard-earned enviable reputation.
            It comes from having high standards. For a start, we take time to
            listen and understand your needs, right down to every last detail.
            This allows us to plan more effectively and take all the hard work
            off your hands, guaranteeing you a reliable, flexible, and friendly
            service that exceeds expectations. It’s the Pack&Attack way.
          </p>
        </div>

        {/* 2. Value Proposition */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide italic">
            The "Can Do" Removals Company
          </h3>
          <p className="text-base md:text-lg text-emerald-50 leading-relaxed font-medium max-w-2xl mx-auto">
            We believe in offering an honest and fully transparent service with
            no hidden fees. What we quote is what you pay. No quibbles.
            Supervisor-led teams are briefed in advance and will treat your
            possessions like their own. Not only do we have the people, we have
            the equipment too – whatever the size of your move, we’ll handle it
            safely and efficiently, keeping you informed every step of the way.
            Pack&Attack, the removals company London loves most. The best
            removals or shifting company in London.
          </p>
        </div>

        {/* 3. SEO-Targeted Services (Cleaned Nesting) */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide italic">
            Pack & Attack the Finest of Removals London
          </h2>
          <p className="text-base font-bold md:text-lg text-emerald-50 leading-relaxed max-w-2xl mx-auto">
            Pack&Attack has earned a reputation as a premium{" "}
            <strong className="underline decoration-emerald-300">full service house moving company</strong>{" "}
            built entirely on high standards. We take the time to listen and tailor our process to your 
            exact timeline, leaving you with a smooth, flexible experience that leaves older{" "}
            <strong className="text-white">moving companies near me</strong> far behind.
          </p>
        </div>

        {/* 4. National Removals (Fixed "Nnational" Typo) */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide italic">
            The National Removals Service
          </h3>
          <p className="text-base font-bold md:text-lg text-emerald-50 leading-relaxed max-w-2xl mx-auto">
            We specialize in premium <strong className="text-white">packing services near me</strong>, 
            secure local transport, and dynamic <strong className="text-white">furniture removalists London</strong>{" "}
            workflows. Whether you need an urgent <strong className="text-white">last minute movers London</strong>{" "}
            deployment or a comprehensive <strong className="text-white">national house moving service</strong>, 
            we promise <strong className="underline decoration-emerald-300">removals with no hidden fees</strong>. 
            What we quote is exactly what you pay.
          </p>
        </div>

        {/* 5. Google Reviews Banner */}
        <div className="space-y-4 pt-6 border-t border-emerald-600/30">
          <h4 className="text-xl md:text-3xl font-black uppercase tracking-wide italic">
            Removals Reviews
          </h4>
          <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="bg-white p-1.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <GoogleIcon className="w-5 h-5" />
            </div>
            <p className="text-base font-bold md:text-lg text-emerald-50 leading-relaxed uppercase tracking-wide italic">
              4.9 Excellent!
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}