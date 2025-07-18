import { GraduationCap } from "lucide-react";

const EducationCard = () => {
  return (
    <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm card-hover">
      <div className="flex items-center mb-4">
        <GraduationCap className="w-6 h-6 text-indigo-400 mr-3" />
        <h3 className="text-lg font-semibold text-white">Education</h3>
      </div>
      <p className="text-slate-300">
        <strong className="text-white">Bachelor of Computer Science</strong>
        <br />
        University of Calgary
        <br />
        Expected Graduation: 2026
        <br />
      </p>
    </div>
  );
};

export default EducationCard;
