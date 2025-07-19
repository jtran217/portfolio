import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, ImageIcon, Play } from "lucide-react";

interface ProjectDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === parseInt(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 backdrop-blur-sm">
      <div className="bg-slate-950/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6">
          <Link
            href="/#projects"
            className="flex items-center space-x-2 text-slate-400 hover:text-indigo-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>

          <h1 className="text-4xl text-white md:text-5xl font-bold gradient-text mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            {project.description}
          </p>

          <div className="flex space-x-4 mt-6">
            {project.githubUrl != "#" && (
              <a
                href={project.githubUrl}
                className="flex items-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-indigo-500/50 transition-all backdrop-blur-sm"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            )}
            {project.liveUrl != "#" && (
              <a
                href={project.liveUrl}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="  container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl text-white font-bold mb-6">
                Project Overview
              </h2>
              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 shadow-xl backdrop-blur-sm">
                <p className="text-slate-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 shadow-xl backdrop-blur-sm">
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {project.images.length > 0 && (
              <section>
                <h2 className="text-2xl text-white font-bold mb-6 flex items-center">
                  <ImageIcon className="w-6 h-6 mr-3 text-indigo-400" />
                  Screenshots
                </h2>
                <div className="grid gap-8">
                  {project.images.map((image, index) => (
                    <a
                      key={index}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl backdrop-blur-sm cursor-pointer block"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto max-h-[600px] object-contain hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {project.videoUrl != "" && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Play className="w-6 h-6 mr-3 text-indigo-400" />
                  Demo Video
                </h2>
                <div className="bg-slate-800/30 rounded-lg overflow-hidden border border-slate-700/50 shadow-xl backdrop-blur-sm">
                  <video
                    controls
                    className="w-full h-64 md:h-80 object-cover"
                    poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl text-white font-bold mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4">
                Key Features
              </h3>
              <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 shadow-xl backdrop-blur-sm">
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
