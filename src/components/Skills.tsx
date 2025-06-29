import React from 'react';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "C", "Java"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Backend & Database",
      skills: ["PostgreSQL", "Oracle", "API Integration"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "AI & Tools",
      skills: ["Prompt Engineering", "AI Workflow Automation", "Model Generation", "Excel"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="bg-slate-900/20 border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.category[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-600/50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight special skills */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Unique Offerings</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-lg">
                AI Workflow Automation
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-lg">
                Model Generation
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
