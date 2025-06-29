import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Bot, Workflow, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO-Friendly"]
    },
    {
      icon: Workflow,
      title: "AI Workflow Design",
      description: "Creating and automating custom AI workflows that streamline business processes and increase productivity.",
      features: ["Process Automation", "Custom Workflows", "Integration APIs", "Performance Analytics"]
    },
    {
      icon: Bot,
      title: "AI Agent Generation",
      description: "Building intelligent AI agents using both no-code platforms and custom code solutions tailored to your needs.",
      features: ["Custom AI Agents", "No-Code Solutions", "Natural Language Processing", "Machine Learning Models"]
    },
    {
      icon: Settings,
      title: "Custom Tools",
      description: "Excel systems and internal productivity tools designed to optimize workflows and enhance business operations.",
      features: ["Excel Automation", "Data Analysis", "Business Intelligence", "Custom Dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Comprehensive solutions combining AI intelligence with modern web development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
