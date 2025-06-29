import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Active section highlight
      const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'services', label: 'Services' },
        { id: 'projects', label: 'Projects' },
        { id: 'ai-demo', label: 'AI Demo' },
        { id: 'contact', label: 'Contact' },
      ];
      let current = 'Home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = section.label;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Demo', href: '#ai-demo' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-none sm:rounded-full mx-auto max-w-full sm:max-w-5xl mt-0 sm:mt-4 px-0 sm:px-2
      ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-lg' : 'bg-slate-900/50 backdrop-blur-sm'}
    `}>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none">
            EM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-2 py-1 text-sm sm:text-base font-medium transition-colors duration-200 group
                  ${activeSection === item.label ? 'text-primary font-bold' : 'text-gray-300 hover:text-white'}`}
                aria-current={activeSection === item.label ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300
                  ${activeSection === item.label ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left
                  ${activeSection === item.label ? 'bg-gradient-to-r from-primary to-secondary text-white font-bold' : 'text-gray-300 hover:text-white hover:bg-slate-800'}`}
                aria-current={activeSection === item.label ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
