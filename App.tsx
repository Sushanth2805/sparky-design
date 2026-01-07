
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Stats from './components/Stats';
import Missions from './components/Missions';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black">
      <Navbar />
      <main className="relative bg-grid min-h-screen">
        <Hero />
        <Ticker />
        <Stats />
        <Features />
        <Missions />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
