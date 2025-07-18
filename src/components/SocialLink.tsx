import { Github, Linkedin } from "lucide-react";

const SocialLink = () => {
  return (
    <div className="flex justify-center space-x-6 mb-12">
      <a
        href="https://github.com/jtran217"
        className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-700/30"
        target="_blank"
      >
        <Github className="w-6 h-6 text-slate-400 hover:text-indigo-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/johnny-k-tran/"
        className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-700/30"
        target="_blank"
      >
        <Linkedin className="w-6 h-6 text-slate-400 hover:text-indigo-400" />
      </a>
    </div>
  );
};

export default SocialLink;
