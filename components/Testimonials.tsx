
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah M.",
      role: "Parent of two",
      text: "My kids finally look forward to math practice! Sparky transformed our evening routine.",
      color: "bg-white"
    },
    {
      name: "David K.",
      role: "Elementary Teacher",
      text: "The science labs are incredibly accurate and engaging. I recommend this to every classroom.",
      color: "bg-[#FFD600]"
    },
    {
      name: "Jessica L.",
      role: "Homeschool Mom",
      text: "The reading path is mystical and keeps my daughter motivated. Simply the best.",
      color: "bg-white"
    }
  ];

  return (
    <section className="px-6 py-24 bg-[#4D88FF] border-y-[3px] border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 italic">Parent Approved.</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#FFD600] text-[#FFD600]" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((rev, i) => (
            <div key={i} className={`${rev.color} border-[3px] border-black p-10 rounded-[40px] neobrutal-shadow relative`}>
              <div className="absolute -top-6 left-10 text-6xl font-black opacity-10">"</div>
              <p className="font-bold text-xl mb-8 relative z-10">{rev.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full border-2 border-black" />
                <div>
                  <div className="font-black">{rev.name}</div>
                  <div className="text-sm font-bold opacity-60">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
