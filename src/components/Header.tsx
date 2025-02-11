import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#000957]/95 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Bot size={32} className="text-[#FFEB00]" />
            <span className="text-xl font-bold">AiiroBots</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#FFEB00] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#FFEB00] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#FFEB00] transition-colors">Projects</a>
            <a href="#about" className="hover:text-[#FFEB00] transition-colors">About Us</a>
            <a href="#contact" className="hover:text-[#FFEB00] transition-colors">Contact</a>
          </nav>

          <button className="hidden md:block bg-[#FFEB00] text-[#000957] px-6 py-2 rounded-full font-semibold hover:bg-[#FFEB00]/90 transition-colors">
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-[#FFEB00] transition-colors">Home</a>
              <a href="#services" className="hover:text-[#FFEB00] transition-colors">Services</a>
              <a href="#projects" className="hover:text-[#FFEB00] transition-colors">Projects</a>
              <a href="#about" className="hover:text-[#FFEB00] transition-colors">About Us</a>
              <a href="#contact" className="hover:text-[#FFEB00] transition-colors">Contact</a>
              <button className="bg-[#FFEB00] text-[#000957] px-6 py-2 rounded-full font-semibold hover:bg-[#FFEB00]/90 transition-colors w-full">
                Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;