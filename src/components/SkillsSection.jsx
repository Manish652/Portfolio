import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: "expert", category: "frontend" },
  { name: "JavaScript", level: "expert", category: "frontend" },
  { name: "React", level: "expert", category: "frontend" },
  { name: "Tailwind CSS", level: "expert", category: "frontend" },
  { name: "Node.js", level: "proficient", category: "backend" },
  { name: "Express", level: "intermediate", category: "backend" },
  { name: "MongoDB", level: "intermediate", category: "backend" },
  { name: "Git/GitHub", level: "expert", category: "tools" },
  { name: "VS Code", level: "expert", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const levelGlow = {
  expert: "glow-expert",
  proficient: "glow-proficient",
  intermediate: "glow-intermediate",
  basic: "glow-basic",
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative "
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">
          My <span className="text-primary">Galaxy of Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 text-sm rounded-full border border-white/20 backdrop-blur-sm transition capitalize",
                activeCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cosmic Skill Orbs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={cn(
                "planet relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center text-center text-xs sm:text-sm font-semibold uppercase text-white border-2 rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 hover:animate-float",
                levelGlow[skill.level]
              )}
            >
              <span className="z-10">{skill.name}</span>
              <div className="absolute inset-0 rounded-full border border-white/10 blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
