
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Happy Students', value: '2.5M+', color: 'bg-[#4ADE80]' },
    { label: 'Learning Games', value: '500+', color: 'bg-[#FFD600]' },
    { label: 'Parent Rating', value: '4.9/5', color: 'bg-[#4D88FF]' },
    { label: 'Subject Missions', value: '12', color: 'bg-[#F472B6]' },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`${stat.color} border-[3px] border-black p-8 rounded-[32px] neobrutal-shadow flex flex-col items-center text-center group hover:-translate-y-2 transition-transform cursor-default`}
          >
            <span className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</span>
            <span className="font-bold text-sm uppercase tracking-widest opacity-80">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
