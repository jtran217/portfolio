const Skills = () => {
  const skills = [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "C++",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "REST APIs",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-slate-950/50 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 gradient-text">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 text-center hover:border-indigo-500/50 hover:bg-slate-700/30 transition-all shadow-lg backdrop-blur-sm card-hover"
            >
              <span className="text-slate-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
