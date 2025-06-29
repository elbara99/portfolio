import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Comprehensive MERN stack application managing hospital operations including patient records, appointment scheduling, and staff management.",
      image: "https://i.postimg.cc/zvG5bLLB/computer-screen-showing-medical-records.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Invoice Management System",
      description: "Excel-based solution for small business billing with automated calculations, client management, and reporting features.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      technologies: ["Excel", "VBA", "Automation", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Business Tools"
    },
    {
      title: "AI Travel Agent",
      description: "Smart assistant for planning trips using AI workflows, providing personalized recommendations and automated itinerary generation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      technologies: ["AI Workflows", "API Integration", "NLP", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      category: "AI Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my work combining AI intelligence with modern development practices
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-slate-900/20 border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-slate-700/50 text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
