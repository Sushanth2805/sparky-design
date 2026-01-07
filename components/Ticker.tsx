
import React from 'react';

const Ticker: React.FC = () => {
  const items = [
    "DINO.MATH", "WORD.WIZ", "ART.VENTURE", "GEO.QUEST", "BRAIN.LAB", "SPARK.X",
    "ROBO.CODE", "NATURE.RUN", "SPACE.SHOT", "DINO.MATH", "WORD.WIZ", "ART.VENTURE"
  ];

  return (
    <div className="w-full bg-[#FFD600] border-y-[3px] border-black overflow-hidden whitespace-nowrap py-6 md:py-8 select-none">
      <div className="flex animate-marquee">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center mx-8 md:mx-16"
          >
            <span className="text-4xl md:text-6xl font-black tracking-tighter italic"
              style={{
                WebkitTextStroke: '2.5px black',
                color: 'transparent'
              }}
            >
              {item}
            </span>
            <div className="ml-8 md:ml-16 w-3 h-3 bg-black rounded-full" />
          </div>
        ))}
      </div>
      {/* Repeated set for seamless loop handled by CSS transform */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
