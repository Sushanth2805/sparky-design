
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[3px] border-black bg-white rounded-2xl mb-4 overflow-hidden neobrutal-shadow-sm transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-xl font-black">{question}</span>
        <div className="bg-[#FFD600] border-2 border-black p-1 rounded-lg">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 font-bold text-black/60 border-t-2 border-black/5 bg-[#FFFDF5]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Common Questions</h2>
        <p className="text-xl font-bold text-black/60">Everything you need to know about Sparky.</p>
      </div>

      <div>
        <FAQItem 
          question="Is Sparky safe for children?" 
          answer="Absolutely. Sparky is 100% ad-free and COPPA compliant. We never sell your data, and there is no open chat feature for children."
        />
        <FAQItem 
          question="Which devices can we play on?" 
          answer="Sparky works on any modern web browser. We also have dedicated apps for iPad, Android tablets, and iPhones."
        />
        <FAQItem 
          question="Can I track my child's progress?" 
          answer="Yes! Our Parent Dashboard provides detailed reports on skill mastery, time spent learning, and areas where they might need more support."
        />
        <FAQItem 
          question="Is there a family plan available?" 
          answer="Our Master Mind plan covers up to 5 child profiles under one account, so everyone can have their own adventure!"
        />
      </div>
    </section>
  );
};

export default FAQ;
