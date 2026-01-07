
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'py-2 px-4' : 'py-3 px-4 md:px-8'
    }`}>
      <div className={`mx-auto max-w-7xl bg-[#4D88FF] border-[3px] border-black flex items-center justify-between p-3 rounded-2xl md:rounded-[24px] neobrutal-shadow-sm transition-all ${
        scrolled ? 'neobrutal-shadow' : ''
      }`}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1.5 border-2 border-black rounded-lg transition-transform group-hover:rotate-12">
            <Zap className="w-5 h-5 text-[#4D88FF] fill-[#4D88FF]" />
          </div>
          <span className="text-white text-2xl font-black tracking-tighter italic">Sparky</span>
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['Games', 'Missions', 'Parents', 'Pricing'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-white font-bold hover:underline decoration-[3px] underline-offset-4"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white font-bold text-sm hover:underline underline-offset-4">Log in</button>
          <button className="bg-[#FFD600] border-[3px] border-black px-6 py-2 rounded-xl font-black text-sm neobrutal-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all uppercase tracking-wide">
            Play Free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white border-2 border-black p-2 rounded-lg neobrutal-shadow-sm"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-white border-[3px] border-black rounded-3xl p-6 neobrutal-shadow-lg z-50 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 items-center">
            {['Games', 'Missions', 'Parents', 'Pricing'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-black hover:text-[#4D88FF]"
              >
                {link}
              </a>
            ))}
            <hr className="w-full border-black/10" />
            <div className="w-full flex flex-col gap-4">
              <button className="w-full bg-white border-[3px] border-black py-4 rounded-2xl font-black text-lg">Log in</button>
              <button className="w-full bg-[#FFD600] border-[3px] border-black py-4 rounded-2xl font-black text-lg neobrutal-shadow">Play Free</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
