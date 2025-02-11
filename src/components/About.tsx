import React from 'react';
import { Bot, Brain, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-white -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,9,87,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(52,76,183,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#000957]">
          Who We Are
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              At AiiroBots, we specialize in AI-powered chatbots and automation services designed to help businesses like yours save time, reduce costs, and enhance customer experiences. Our team leverages advanced AI models from industry leaders such as OpenAI, Anthropic, Google, and Cohere to deliver tailored solutions for your unique needs.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Bot className="text-[#344CB7]" />
                <span>OpenAI</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Brain className="text-[#344CB7]" />
                <span>Anthropic</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Cpu className="text-[#344CB7]" />
                <span>Google AI</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#000957] to-[#344CB7] rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-[#000957] to-[#344CB7] p-1">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="AI Visualization"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;