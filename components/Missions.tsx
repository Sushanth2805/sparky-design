
import React from 'react';
import { Rocket, BookOpen, FlaskConical } from 'lucide-react';

const MissionCard = ({ title, desc, icon: Icon, color, image }: any) => (
  <div className={`bg-white border-[3px] border-black rounded-[40px] overflow-hidden neobrutal-shadow group hover:translate-y-[-8px] transition-transform duration-300`}>
    <div className={`h-48 ${color} border-b-[3px] border-black flex items-center justify-center p-8 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 p-4">
         <Icon className="w-12 h-12 text-black opacity-20 group-hover:scale-125 transition-transform" />
      </div>
      <div className="bg-white border-2 border-black p-4 rounded-2xl neobrutal-shadow-sm font-black text-xl italic group-hover:rotate-3 transition-transform">
        {title}
      </div>
    </div>
    <div className="p-8">
      <p className="font-bold text-black/70 mb-6 leading-relaxed">
        {desc}
      </p>
      <button className="w-full bg-white border-[3px] border-black py-3 rounded-xl font-black hover:bg-black hover:text-white transition-colors">
        EXPLORE MISSION
      </button>
    </div>
  </div>
);

const Missions: React.FC = () => {
  return (
    <section id="missions" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-xl">
          <span className="bg-[#4ADE80] border-2 border-black px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-4 inline-block">Daily Quests</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Choose Your <br/><span className="text-[#FF5C5C]">Adventure Path</span></h2>
        </div>
        <p className="text-xl font-bold text-black/60 max-w-xs md:text-right">
          Curated curriculum paths designed by leading neuroscientists.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <MissionCard 
          title="Logic Legends" 
          desc="Master basic mathematics through epic space battles and puzzle solving."
          icon={Rocket}
          color="bg-[#4D88FF]"
        />
        <MissionCard 
          title="Word Wizards" 
          desc="Unleash the power of reading with mystical creatures and interactive storytelling."
          icon={BookOpen}
          color="bg-[#FFD600]"
        />
        <MissionCard 
          title="Science Seekers" 
          desc="Discover the world around you with hands-on virtual lab experiments."
          icon={FlaskConical}
          color="bg-[#F472B6]"
        />
      </div>
    </section>
  );
};

export default Missions;
