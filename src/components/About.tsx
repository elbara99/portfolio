import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm an AI engineering student with strong capabilities in building full-stack applications and developing AI agents using both code and no-code platforms. I'm passionate about combining intelligent automation with beautiful interfaces to solve real-world problems.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <p className="text-lg text-gray-300">4th-year AI Engineering Student</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
                <p className="text-gray-400">Combining cutting-edge AI technologies with practical applications</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                <p className="text-gray-400">Building complete web solutions from frontend to backend</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
                <p className="text-gray-400">Creating intelligent workflows that streamline business processes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
