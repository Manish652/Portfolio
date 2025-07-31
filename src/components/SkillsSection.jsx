import { useState, useEffect, useRef } from "react";
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { 
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPython,
  SiC,
  SiLinux
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const skills = [
  { name: "HTML", level: "expert", category: "frontend", icon: FaHtml5, x: 20, y: 25, color: "#E34F26" },
  { name: "CSS", level: "expert", category: "frontend", icon: FaCss3Alt, x: 35, y: 15, color: "#1572B6" },
  { name: "JavaScript", level: "expert", category: "frontend", icon: FaJs, x: 80, y: 15, color: "#F7DF1E" },
  { name: "React", level: "expert", category: "frontend", icon: FaReact, x: 65, y: 35, color: "#61DAFB" },
  { name: "Tailwind CSS", level: "expert", category: "frontend", icon: SiTailwindcss, x: 50, y: 25, color: "#06B6D4" },
  { name: "Node.js", level: "proficient", category: "backend", icon: FaNodeJs, x: 15, y: 65, color: "#339933" },
  { name: "Express", level: "intermediate", category: "backend", icon: SiExpress, x: 35, y: 75, color: "#000000" },
  { name: "MongoDB", level: "intermediate", category: "backend", icon: SiMongodb, x: 75, y: 70, color: "#47A248" },
  { name: "Git", level: "expert", category: "tools", icon: FaGitAlt, x: 85, y: 45, color: "#F05032" },
  { name: "GitHub", level: "expert", category: "tools", icon: FaGithub, x: 70, y: 55, color: "#181717" },
  { name: "Python", level: "intermediate", category: "tools", icon: SiPython, x: 10, y: 40, color: "#3776AB" },
{ name: "C", level: "intermediate", category: "tools", icon: SiC, x: 25, y: 50, color: "#A8B9CC" },
{ name: "Linux", level: "proficient", category: "tools", icon: SiLinux, x: 55, y: 70, color: "#FCC624" },
];

const categories = ["all", "frontend", "backend", "tools"];

const levelColors = {
  expert: { 
    primary: "#8B5CF6", 
    secondary: "#EC4899", 
    glow: "rgba(139, 92, 246, 0.4)",
    trail: "rgba(236, 72, 153, 0.6)"
  },
  proficient: { 
    primary: "#06B6D4", 
    secondary: "#10B981", 
    glow: "rgba(6, 182, 212, 0.4)",
    trail: "rgba(16, 185, 129, 0.6)"
  },
  intermediate: { 
    primary: "#10B981", 
    secondary: "#84CC16", 
    glow: "rgba(16, 185, 129, 0.4)",
    trail: "rgba(132, 204, 22, 0.6)"
  },
  basic: { 
    primary: "#F59E0B", 
    secondary: "#EF4444", 
    glow: "rgba(245, 158, 11, 0.4)",
    trail: "rgba(239, 68, 68, 0.6)"
  },
};

const categoryColors = {
  frontend: "#8B5CF6",
  backend: "#06B6D4", 
  tools: "#10B981",
  all: "#EC4899"
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Canvas constellation connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      filteredSkills.forEach((skill, i) => {
        filteredSkills.slice(i + 1).forEach((otherSkill) => {
          const distance = Math.sqrt(
            Math.pow(skill.x - otherSkill.x, 2) + Math.pow(skill.y - otherSkill.y, 2)
          );
          
          if (distance < 40) {
            const x1 = (skill.x / 100) * rect.width;
            const y1 = (skill.y / 100) * rect.height;
            const x2 = (otherSkill.x / 100) * rect.width;
            const y2 = (otherSkill.y / 100) * rect.height;
            
            const opacity = hoveredSkill ? 
              (hoveredSkill === skill.name || hoveredSkill === otherSkill.name ? 0.6 : 0.1) : 0.2;
            
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = hoveredSkill && (hoveredSkill === skill.name || hoveredSkill === otherSkill.name) ? 2 : 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });
    };

    drawConnections();
  }, [filteredSkills, hoveredSkill]);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 relative min-h-screen overflow-hidden"
      ref={containerRef}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Skill <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Constellation</span>
            </h2>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Navigate through my cosmic arsenal of technologies and tools
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 md:mb-16 flex-wrap px-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-sm transition-all duration-300 capitalize font-medium text-sm md:text-base
                ${activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400/50 shadow-lg shadow-purple-500/25 scale-105"
                  : "text-gray-300 border-gray-500/30 hover:bg-white/10 hover:border-gray-400/50 hover:text-white hover:scale-105"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Constellation Map */}
        <div className="relative w-full h-[60vh] md:h-[70vh] max-w-5xl mx-auto">
          {/* Connection Lines Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Skills Stars */}
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            const colors = levelColors[skill.level];
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group cursor-pointer"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  zIndex: isHovered ? 50 : 10
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Node */}
                <div
                  className={`
                    relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                    rounded-full border-2 backdrop-blur-sm
                    transition-all duration-500 transform
                    ${isHovered ? 'scale-150 md:scale-125' : 'scale-100 hover:scale-110'}
                  `}
                  style={{
                    background: `radial-gradient(circle, ${colors.primary}40, ${colors.secondary}20)`,
                    borderColor: colors.primary,
                    boxShadow: isHovered 
                      ? `0 0 30px ${colors.glow}, 0 0 60px ${colors.glow}` 
                      : `0 0 15px ${colors.glow}`
                  }}
                >
                  <IconComponent 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${isHovered ? 'text-white' : ''}`}
                    style={{ 
                      color: isHovered ? 'white' : skill.color,
                      filter: isHovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' : 'none'
                    }}
                  />
                  
                  {/* Pulsing Ring */}
                  <div 
                    className={`absolute inset-0 rounded-full border-2 animate-ping ${isHovered ? 'opacity-60' : 'opacity-30'}`}
                    style={{ borderColor: colors.primary }}
                  />
                </div>

                {/* Skill Info Popup */}
                <div
                  className={`
                    absolute top-full left-1/2 transform -translate-x-1/2 mt-2 md:mt-4
                    transition-all duration-300 pointer-events-none
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  `}
                >
                  <div 
                    className="bg-slate-800/95 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border shadow-xl whitespace-nowrap"
                    style={{ 
                      borderColor: colors.primary,
                      boxShadow: `0 0 20px ${colors.glow}`
                    }}
                  >
                    <h3 className="text-xs md:text-sm font-bold text-white mb-1">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-xs px-2 py-1 rounded-full font-medium capitalize text-slate-900"
                        style={{ 
                          background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
                        }}
                      >
                        {skill.level}
                      </span>
                      <span 
                        className="text-xs font-medium capitalize"
                        style={{ color: categoryColors[skill.category] }}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div 
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 border-l border-t"
                    style={{ 
                      backgroundColor: 'rgba(30, 41, 59, 0.95)',
                      borderColor: colors.primary
                    }}
                  />
                </div>

                {/* Orbiting Particles */}
                {isHovered && (
                  <>
                    <div 
                      className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 rounded-full animate-spin"
                      style={{ animationDuration: '3s' }}
                    >
                      <div 
                        className="absolute -top-1 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <div 
                      className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 rounded-full animate-spin"
                      style={{ animationDuration: '4s', animationDirection: 'reverse' }}
                    >
                      <div 
                        className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2"
                        style={{ backgroundColor: skill.color, opacity: 0.7 }}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}

        
        </div>

        {/* Skill Legend */}
 
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
    </section>
  );
};

export default SkillsSection;