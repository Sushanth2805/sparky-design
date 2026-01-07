
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Missions from './components/Missions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black">
      <Navbar />
      <main className="relative bg-grid min-h-screen">
        <Hero />
        <Ticker />
        <Features />
        <Missions />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
