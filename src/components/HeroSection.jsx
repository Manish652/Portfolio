import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import CosmicScrollIndicator from "./CosmicScrollIndicator";
import ArcReactorProfile from "./ArcReactorProfile";

// Mock TypeAnimation
const TypeAnimation = ({ sequence, wrapper: Wrapper = "span", speed = 50, repeat = Infinity, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const filtered = sequence.filter((_, i) => i % 2 === 0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % filtered.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sequence]);

  useEffect(() => {
    const filtered = sequence.filter((_, i) => i % 2 === 0);
    const text = filtered[index] || "";
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);
    return () => clearInterval(typeInterval);
  }, [index, sequence, speed]);

  return <Wrapper className={className}>{displayText}</Wrapper>;
};

// Mock motion
const motion = {
  h1: ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
    return (
      <h1 className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        {children}
      </h1>
    );
  },
  p: ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);
    return (
      <p className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {children}
      </p>
    );
  },
  div: ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }, []);
    return (
      <div className={`${className} transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {children}
      </div>
    );
  }
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 20 + 10,
          color: ['purple', 'pink', 'blue', 'cyan'][Math.floor(Math.random() * 4)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });

      const intensity = Math.min(1, Math.sqrt(
        Math.pow(e.clientX - window.innerWidth / 2, 2) + 
        Math.pow(e.clientY - window.innerHeight / 2, 2)
      ) / 300);
      setGlowIntensity(0.5 + intensity * 0.5);
    };

    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden text-white"
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-pulse bg-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"
          style={{ left: `${mousePosition.x * 0.1}%`, top: `${mousePosition.y * 0.1}%`, opacity: glowIntensity * 0.6 }} />
        <div className="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse transition-all duration-1500"
          style={{ right: `${mousePosition.x * 0.05}%`, bottom: `${mousePosition.y * 0.05}%`, opacity: glowIntensity * 0.4 }} />
        <div className="absolute w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse transition-all duration-2000"
          style={{ left: `${50 + mousePosition.x * 0.02}%`, top: `${50 + mousePosition.y * 0.02}%`, opacity: glowIntensity * 0.3 }} />
      </div>

      {/* Astronaut image (desktop only, moved right) */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 md:top-[100px] md:right-[80px] md:left-auto md:translate-x-0 pointer-events-none hidden md:block z-10">
        <img
          src="/lost.png"
          alt="Astronaut"
          className="relative z-10 w-28 md:w-[15rem] opacity-80 animate-float filter drop-shadow-2xl"
        />
      </div>

      {/* Arc Reactor (move left on desktop only) */}
      <div className="
        absolute 
        top-[250px]
        sm:top-[300px]
        md:top-[300px]
        lg:top-[300px]
        left-1/2 
        transform -translate-x-1/2 
        md:left-[100px] 
        md:translate-x-0
        z-20
      ">
        <ArcReactorProfile />
      </div>

      {/* Text & Button */}
      <div className="container max-w-4xl mx-auto text-center z-10 relative mt-50 md:mt-50">
        <div className="space-y-6 relative z-10">
          <motion.h1 className="text-4xl md:text-6xl font-bold tracking-tight relative">
            <TypeAnimation
              sequence={[
                "Hi, I'm Manish Bhunia", 2000,
                "I'm a MERN Stack Developer", 2000,
                "Welcome to My Portfolio", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block relative z-10 bg-clip-text text-blue-200 drop-shadow-2xl"
            />
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-muted-foreground text-gray-300 max-w-2xl mx-auto relative">
            <span className="relative z-10 drop-shadow-lg">
              I specialize in MERN stack building full-stack apps, REST APIs, and dynamic UIs.
            </span>
          </motion.p>

          <motion.div className="pt-4 relative">
            <a 
              href="#projects" 
              className="cosmic-button relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm border border-purple-400/30 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
            </a>
          </motion.div>
        </div>
      </div>

      <CosmicScrollIndicator />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .cosmic-button {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.8));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          box-shadow: 0 8px 32px rgba(147, 51, 234, 0.3);
        }

        .cosmic-button:hover {
          box-shadow: 0 12px 40px rgba(147, 51, 234, 0.5);
          transform: translateY(-2px) scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
