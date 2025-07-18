import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl backdrop-blur-sm card-hover"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                {project.title}
              </h3>

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

              <div className="flex space-x-4">
                {project.githubUrl != "#" && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.liveUrl != "#" && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
