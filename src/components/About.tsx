import { Code } from "lucide-react";
import EducationCard from "./EducationCard";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-slate-800/50 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
                <img
                  src="https://res.cloudinary.com/dittybzbt/image/upload/v1752871506/IMG_0099_m5fwff.jpg"
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
              I’m a fourth year Computer Science student with a unique
              background in Molecular Biology. My transition into tech was
              driven by the excitement of building things that make an impact,
              turning curiosity into a deep passion for software development.
              Since then I have completed a software development internship,
              strengthened my skills in system design, algorithms, and full
              stack development, and continuously pushed myself through personal
              projects. I love solving problems, learning new technologies, and
              turning ideas into working solutions.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Beyond academics, I enjoy working on personal projects, reading a
              good book, and staying updated with the latest technologies.
            </p>

            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
