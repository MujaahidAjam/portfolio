import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000957] to-[#344CB7] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,235,0,0.1)_0%,transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empower Your Business with AI Chatbots and Automation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Streamline communication, improve customer engagement, and automate repetitive tasks with our cutting-edge solutions.
          </p>
          <button className="bg-[#FFEB00] text-[#000957] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFEB00]/90 transition-colors">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;