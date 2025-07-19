"use client";
import Profile from "./Profile";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-indigo-900/30"></div>

      <div className="text-center max-w-4xl">
        <Profile />

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text text-white">Johnny Tran</span>
        </h1>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Just a developer who enjoys figuring out tricky problems and making
          things work
        </p>

        <SocialLink />
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <button
            onClick={() => {
              console.log("Button clicked!");
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl glow-effect relative z-10"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
