import React from 'react';
import { MessageSquare, Cog, Database } from 'lucide-react';

const services = [
  {
    title: 'Custom Chatbots',
    description: 'Build intelligent chatbots that handle inquiries, bookings, FAQs, and more.',
    icon: MessageSquare,
  },
  {
    title: 'Process Automation',
    description: 'Automate repetitive tasks to boost efficiency and productivity.',
    icon: Cog,
  },
  {
    title: 'Data Integration',
    description: 'Seamlessly integrate chatbots with your existing platforms and systems.',
    icon: Database,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Gradient background with pattern */}
      <div className="absolute inset-0 bg-gray-50 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1637417494521-201e7b8d4352?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000957]">Our Services</h2>
          <p className="text-xl text-gray-600">
            Explore how our AI chatbots and automation tools can transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#000957] to-[#344CB7] rounded-xl flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#000957]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;