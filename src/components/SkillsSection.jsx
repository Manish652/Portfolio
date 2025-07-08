import { useState } from "react";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  GitBranch, 
  Terminal,
  Layers,
  Zap,
  Globe
} from "lucide-react";
import Reveal from "./Reveal";

const skills = [
  { name: "HTML/CSS", level: "expert", category: "frontend", icon: Code },
  { name: "JavaScript", level: "expert", category: "frontend", icon: Zap },
  { name: "React", level: "expert", category: "frontend", icon: Layers },
  { name: "Tailwind CSS", level: "expert", category: "frontend", icon: Palette },
  { name: "Node.js", level: "proficient", category: "backend", icon: Server },
  { name: "Express", level: "intermediate", category: "backend", icon: Globe },
  { name: "MongoDB", level: "intermediate", category: "backend", icon: Database },
  { name: "Git/GitHub", level: "expert", category: "tools", icon: GitBranch },
  { name: "VS Code", level: "expert", category: "tools", icon: Terminal },
];

const categories = ["all", "frontend", "backend", "tools"];

const levelColors = {
  expert: "from-purple-400 via-pink-400 to-red-400",
  proficient: "from-blue-400 via-cyan-400 to-teal-400", 
  intermediate: "from-green-400 via-emerald-400 to-lime-400",
  basic: "from-yellow-400 via-orange-400 to-red-400",
};

const levelGlow = {
  expert: "shadow-purple-500/50",
  proficient: "shadow-blue-500/50",
  intermediate: "shadow-green-500/50", 
  basic: "shadow-yellow-500/50",
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative min-h-screen overflow-hidden"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Skill <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Constellation</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Navigate through my cosmic arsenal of technologies and tools
            </p>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1}>
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 capitalize font-medium
                  ${activeCategory === cat
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400/50 shadow-lg shadow-purple-500/25"
                    : "text-gray-300 border-gray-500/30 hover:bg-white/10 hover:border-gray-400/50 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Reveal key={index} delay={0.2 + index * 0.05}>
                <div
                  className={`
                    group relative w-48 h-48 sm:w-52 sm:h-52 flex flex-col items-center justify-center
                    rounded-full border-2 border-gray-600/30 backdrop-blur-sm
                    transition-all duration-500 transform hover:scale-110 hover:-translate-y-2
                    cursor-pointer overflow-hidden
                    ${levelGlow[skill.level]}
                  `}
                  style={{
                    background: `conic-gradient(from 0deg, ${levelColors[skill.level].split(' ').join(', ')}, transparent 70%)`,
                    boxShadow: `0 0 30px ${levelGlow[skill.level].split('/')[0].split('-')[1]}/20`,
                  }}
                >
                  <div className="absolute inset-2 rounded-full bg-slate-900/90 backdrop-blur-sm border border-gray-700/50" />
                  <div className="absolute inset-0 rounded-full border border-gray-500/20 animate-spin" style={{ animationDuration: '10s' }} />
                  <div className="relative z-10 text-center">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-white group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-purple-200 transition-colors">
                      {skill.name}
                    </h3>
                    <span className={`
                      text-xs px-2 py-1 rounded-full font-medium capitalize
                      bg-gradient-to-r ${levelColors[skill.level]} text-slate-900
                    `}>
                      {skill.level}
                    </span>
                  </div>
                  <div className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-r ${levelColors[skill.level]} blur-xl
                  `} style={{ zIndex: -1 }} />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
