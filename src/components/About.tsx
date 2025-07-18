import { Code } from "lucide-react";
import EducationCard from "./EducationCard";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-slate-800/50 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Working on projects"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-xl glow-effect">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <p className="text-slate-300 leading-relaxed">
              I'm currently in my 4th year of Computer Science, where I've
              developed a strong foundation in software development, algorithms,
              and system design. My journey in tech began with curiosity and has
              evolved into a passion for creating meaningful solutions.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Beyond academics, I enjoy working on personal projects, and
              staying updated with the latest technologies.
            </p>

            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
