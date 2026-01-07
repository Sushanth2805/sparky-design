
import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative px-6 pt-24 pb-16 md:pt-40 md:pb-24 text-center max-w-6xl mx-auto z-10">
      {/* Decorative Floating Elements */}
      <div className="absolute left-[5%] top-40 hidden lg:block animate-float" style={{ "--rot": "-12deg" } as any}>
        <div className="w-24 h-24 bg-[#F472B6] border-[3px] border-black rounded-full flex items-center justify-center neobrutal-shadow">
          <span className="text-4xl font-black text-white">A</span>
        </div>
      </div>
      
      <div className="absolute right-[5%] top-52 hidden lg:block animate-float" style={{ "--rot": "12deg", animationDelay: '1s' } as any}>
        <div className="w-24 h-24 bg-[#4ADE80] border-[3px] border-black rounded-[32px] flex items-center justify-center neobrutal-shadow">
          <span className="text-3xl font-black text-white">123</span>
        </div>
      </div>

      <div className="absolute left-[15%] bottom-20 hidden lg:block animate-float" style={{ "--rot": "45deg", animationDelay: '1.5s' } as any}>
        <div className="w-16 h-16 bg-[#FFD600] border-[3px] border-black rounded-2xl flex items-center justify-center neobrutal-shadow">
          <Sparkles className="w-8 h-8 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="inline-flex items-center gap-2 bg-white border-[3px] border-black rounded-full px-5 py-2 mb-10 neobrutal-shadow-sm animate-bounce hover:scale-105 transition-transform cursor-pointer">
        <span className="text-sm font-black uppercase tracking-wider text-[#FF5C5C]">🦖 New: Dinosaur Math Update!</span>
      </div>

      <h1 className="text-5xl md:text-[100px] font-black leading-[0.85] tracking-tighter mb-10">
        Learning that <br />
        <span className="text-[#4D88FF] italic">feels like play.</span>
      </h1>

      <p className="text-xl md:text-2xl font-bold text-black/80 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
        Math, reading, and science adventures that kids actually beg to do. 
        Join 2 million happy families today!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="w-full sm:w-auto bg-[#FF5C5C] text-white border-[3px] border-black px-12 py-5 rounded-2xl font-black text-2xl neobrutal-shadow hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all active:scale-95">
          Start for Free
        </button>
        <button className="w-full sm:w-auto bg-white border-[3px] border-black px-12 py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 neobrutal-shadow hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all group">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500">
            <Play className="w-4 h-4 text-white fill-white ml-1" />
          </div>
          Watch Trailer
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
        <div className="font-black text-2xl">PARENTAL CHOICE</div>
        <div className="font-black text-2xl underline decoration-4">KIDS SAFE</div>
        <div className="font-black text-2xl italic">EDU TRUST</div>
      </div>
    </section>
  );
};

export default Hero;
