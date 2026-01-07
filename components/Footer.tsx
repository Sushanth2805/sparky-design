
import React from 'react';
import { Zap, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-[3px] border-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#4D88FF] p-2 border-2 border-black rounded-lg">
                <Zap className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-3xl font-black tracking-tight italic">Sparky</span>
            </div>
            <p className="font-bold text-black/60 leading-relaxed mb-6">
              Empowering the next generation of thinkers, creators, and adventurers through play.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white border-2 border-black p-2 rounded-lg neobrutal-shadow-sm hover:translate-y-[-2px] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6">Product</h4>
            <ul className="space-y-4 font-bold text-black/60">
              <li><a href="#" className="hover:text-black">All Games</a></li>
              <li><a href="#" className="hover:text-black">Missions</a></li>
              <li><a href="#" className="hover:text-black">Gift Cards</a></li>
              <li><a href="#" className="hover:text-black">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-6">Support</h4>
            <ul className="space-y-4 font-bold text-black/60">
              <li><a href="#" className="hover:text-black">Parent Guide</a></li>
              <li><a href="#" className="hover:text-black">Help Center</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Security</a></li>
            </ul>
          </div>

          <div className="bg-[#FFD600] border-[3px] border-black p-6 rounded-3xl neobrutal-shadow-sm">
            <h4 className="font-black text-xl mb-4">Newsletter</h4>
            <p className="font-bold text-sm mb-4">Get weekly learning tips & dino updates!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white border-2 border-black p-3 rounded-xl font-bold placeholder:text-black/30 outline-none"
              />
              <button className="absolute right-2 top-1.5 bg-black text-white p-1.5 rounded-lg">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t-2 border-black/10 gap-6">
          <p className="text-sm font-bold opacity-40">© 2024 Sparky Learning Inc. Handcrafted with chaos.</p>
          <div className="flex gap-6 text-xs font-black uppercase tracking-widest opacity-60">
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
