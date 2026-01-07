
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-[#4ADE80] border-y-[3px] border-black py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Simple Pricing <br/>For Big Brains</h2>
        <p className="text-xl font-bold text-black/70 mb-16">Cancel anytime. No hidden fees. Just fun.</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Basic */}
          <div className="bg-white border-[3px] border-black rounded-[40px] p-10 neobrutal-shadow text-left">
            <h3 className="text-3xl font-black mb-2">Explorer</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black">$0</span>
              <span className="font-bold text-black/40">/ forever</span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                '3 Daily Adventures',
                'Basic Math Missions',
                'Global Leaderboard',
                'Ad-Free Forever'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <div className="bg-[#4ADE80] border-2 border-black rounded-full p-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full border-[3px] border-black py-4 rounded-2xl font-black text-xl hover:bg-black hover:text-white transition-all">
              GET STARTED
            </button>
          </div>

          {/* Pro */}
          <div className="bg-[#FFD600] border-[3px] border-black rounded-[40px] p-10 neobrutal-shadow-lg text-left relative overflow-hidden transform md:scale-105">
            <div className="absolute top-4 right-[-40px] bg-[#FF5C5C] border-2 border-black text-white px-12 py-1 rotate-45 font-black text-xs">
              BEST VALUE
            </div>
            <h3 className="text-3xl font-black mb-2 text-black">Master Mind</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black">$12</span>
              <span className="font-bold text-black/60">/ month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                'Unlimited Adventures',
                'All Science & Art Labs',
                'Parent Progress Portal',
                'Multi-Device Sync',
                'Offline Mode'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <div className="bg-white border-2 border-black rounded-full p-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-black text-white border-[3px] border-black py-4 rounded-2xl font-black text-xl hover:translate-y-[-4px] transition-all">
              GO PRO NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
