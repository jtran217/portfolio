import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-950/50 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl backdrop-blur-sm card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-indigo-400 mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end text-sm text-slate-400 mt-2 md:mt-0">
                  <div className="flex flex-col md:items-end text-sm text-slate-400 mt-2 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
