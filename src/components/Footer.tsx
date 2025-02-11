import React from 'react';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000957] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot size={32} className="text-[#FFEB00]" />
              <span className="text-xl font-bold">AiiroBots</span>
            </div>
            <p className="text-gray-300">
              Empowering businesses with intelligent AI solutions and automation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin size={20} className="text-[#FFEB00]" />
                <span className="text-gray-300">123 AI Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-[#FFEB00]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="text-[#FFEB00]" />
                <span className="text-gray-300">contact@aiirobots.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFEB00] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#FFEB00] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#FFEB00] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} AiiroBots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;