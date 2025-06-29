import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient px-2 sm:px-4 md:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-primary to-secondary opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-tr from-secondary to-primary opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-128 sm:h-128 bg-gradient-to-r from-primary/40 via-secondary/30 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Neural network animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00FFB3" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <circle cx="200" cy="150" r="4" fill="url(#neuralGrad)" className="animate-pulse" />
            <circle cx="400" cy="200" r="4" fill="url(#neuralGrad)" className="animate-pulse delay-300" />
            <circle cx="600" cy="180" r="4" fill="url(#neuralGrad)" className="animate-pulse delay-600" />
            <circle cx="800" cy="220" r="4" fill="url(#neuralGrad)" className="animate-pulse delay-900" />
            <line x1="200" y1="150" x2="400" y2="200" stroke="url(#neuralGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="400" y1="200" x2="600" y2="180" stroke="url(#neuralGrad)" strokeWidth="1" opacity="0.5" />
            <line x1="600" y1="180" x2="800" y2="220" stroke="url(#neuralGrad)" strokeWidth="1" opacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 text-center px-2 sm:px-4 max-w-2xl md:max-w-4xl w-full">
        {/* Profile picture */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-2xl shadow-primary/30">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img src="https://i.postimg.cc/C5YjvMgY/IMG-20241225-130430-2.jpg" alt="Elbara Mouaffak" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent animate-fade-in">
          Elbara Mouaffak
        </h1>
        <div className="flex justify-center mb-4 sm:mb-6">
          <span className="text-base xs:text-lg md:text-2xl text-primary font-semibold animate-pulse bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Building the future with AI & code
          </span>
        </div>
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6 animate-fade-in delay-300">AI Engineer Student | Full-Stack Developer | AI Agent Builder
      </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto animate-fade-in delay-500">
          Building intelligent systems and sleek web apps for tomorrow
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-700 w-full">
          <Button onClick={scrollToProjects} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto">
            View My Work
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            Let's Collaborate
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
      </div>
    </section>;
};
export default Hero;