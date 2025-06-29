import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import AIDemo from '../components/AIDemo';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <AIDemo />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Elbara Mouaffak. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
