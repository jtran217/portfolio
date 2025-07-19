"use client";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
const Projects = () => {
  const router = useRouter();
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="group bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 shadow-xl backdrop-blur-sm card-hover cursor-pointer hover:scale-[1.02] hover:bg-slate-800/40"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-slate-400 group-hover:text-indigo-400 transition-colors opacity-60 group-hover:opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-4">
                  {project.githubUrl != "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl != "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="text-sm text-indigo-400 group-hover:text-indigo-300 font-medium flex items-center space-x-1">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
