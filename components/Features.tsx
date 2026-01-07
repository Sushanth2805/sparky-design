
import React from 'react';
import { Gamepad2, Trophy, Heart, Star, Smile } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
      {/* Interactive Games Card */}
      <div className="bg-white border-[3px] border-black p-8 rounded-[40px] neobrutal-shadow group">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#F472B6] p-2.5 border-[3px] border-black rounded-xl">
            <Gamepad2 className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-2xl font-black">Interactive Games</h3>
        </div>
        <p className="font-bold text-black/60 mb-8 leading-relaxed">
          Turn homework into quests. Defeat math monsters and solve science puzzles.
        </p>
        
        <div className="bg-[#E0F2FE] border-[3px] border-black rounded-2xl p-6 flex justify-center gap-4">
          <div className="w-12 h-12 bg-[#FFD600] border-2 border-black rounded-full flex items-center justify-center neobrutal-shadow-sm rotate-[-10deg]">
            <Smile className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 bg-[#F472B6] border-2 border-black rounded-full flex items-center justify-center neobrutal-shadow-sm">
            <Heart className="w-6 h-6 fill-black" />
          </div>
          <div className="w-12 h-12 bg-[#4ADE80] border-2 border-black rounded-full flex items-center justify-center neobrutal-shadow-sm rotate-[10deg]">
            <Star className="w-6 h-6 fill-black" />
          </div>
        </div>
      </div>

      {/* Level Up Card */}
      <div className="bg-white border-[3px] border-black p-8 rounded-[40px] neobrutal-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#4ADE80] p-2.5 border-[3px] border-black rounded-xl">
            <Trophy className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-2xl font-black">Level Up</h3>
        </div>
        <p className="font-bold text-black/60 mb-8 leading-relaxed">
          Earn badges, collect stickers, and watch your skills grow every day.
        </p>

        <div className="bg-white border-[3px] border-black rounded-2xl p-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-black uppercase tracking-widest text-black/40">Level 5</span>
            <span className="text-xs font-black text-[#4D88FF]">1,240 XP</span>
          </div>
          <div className="w-full h-4 bg-gray-100 border-2 border-black rounded-full overflow-hidden">
            <div className="h-full bg-[#4ADE80] border-r-2 border-black w-[75%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
