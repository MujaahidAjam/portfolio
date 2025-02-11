import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Solutions',
    quote: `The AI chatbot has transformed our customer service. We've seen a 60% reduction in response times and improved customer satisfaction.`,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    company: 'Global Retail Inc.',
    quote: `Their automation solutions helped us streamline our inventory management process. Highly recommended for any e-commerce business.`,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emma Williams',
    company: 'FinTech Innovations',
    quote: `The FAQ assistant they built for us handles thousands of queries daily with remarkable accuracy. It's like having a 24/7 support team.`,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-white -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000957]/5 to-[#344CB7]/5" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000957]">
          What Our Clients Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg md:-left-12 hover:bg-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg md:-right-12 hover:bg-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#000957] to-[#344CB7] rounded-full blur opacity-20" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-20 h-20 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="font-bold text-[#000957]">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#344CB7]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;