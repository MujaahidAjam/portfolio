import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    name: 'Customer Support Chatbot for E-commerce',
    description: 'Automated customer support for a leading online retailer.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    tech: ['GPT-4', 'React', 'Node.js'],
  },
  {
    name: 'Booking System Automation',
    description: 'Simplified appointment scheduling for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tech: ['Claude', 'Vue.js', 'Python'],
  },
  {
    name: 'FAQ Assistant for Financial Services',
    description: 'Provided instant answers to common financial queries.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['GPT-4', 'Next.js', 'TypeScript'],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#000957]">
          Featured Projects
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Check out some of the successful projects we've delivered for our clients.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="relative">
                      <img 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                          <p className="mb-4">{project.description}</p>
                          <div className="flex gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="bg-[#344CB7] px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
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

export default Projects;