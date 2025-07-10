import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import CosmicScrollIndicator from "./CosmicScrollIndicator";
import Lottie from "lottie-react";
import ani from "../assets/animation/ufo.json";
import ani2 from "../assets/animation/astrop.json"

// Mock TypeAnimation for demo
const TypeAnimation = ({ sequence, wrapper: Wrapper = "span", speed, repeat, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const textSequence = sequence.filter((_, i) => i % 2 === 0);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSequence.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [sequence]);
  
  useEffect(() => {
    const textSequence = sequence.filter((_, i) => i % 2 === 0);
    const text = textSequence[currentIndex] || "";
    let currentChar = 0;
    
    const typeInterval = setInterval(() => {
      if (currentChar <= text.length) {
        setCurrentText(text.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed || 100);
    
    return () => clearInterval(typeInterval);
  }, [currentIndex, sequence, speed]);
  
  return <Wrapper className={className}>{currentText}</Wrapper>;
};

// Mock motion for demo
const motion = {
  h1: ({ children, className, initial, animate, transition }) => {
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
  p: ({ children, className, initial, animate, transition }) => {
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
  div: ({ children, className, initial, animate, transition }) => {
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

// Mock Lottie component for demo - will be replaced with actual Lottie
const MockLottie = ({ animationData, className, width, height }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  return (
    <div 
      className={`${className} flex items-center justify-center bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-pulse`}
      style={{ width, height }}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <div className="text-white/60 text-center">
        <div className="text-2xl mb-2">🚀</div>
        <div className="text-xs">Lottie Animation</div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate cosmic particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 25 + 15,
          color: ['violet', 'purple', 'pink', 'blue', 'cyan', 'indigo'][Math.floor(Math.random() * 6)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    // Enhanced mouse tracking
   
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
    >
      {/* Dynamic Cosmic Background */}
      <div className="absolute inset-0" />
      
      {/* Animated Cosmic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/30 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_var(--tw-gradient-stops))] from-transparent via-purple-400/10 to-transparent animate-spin-slow" />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full animate-float-particle bg-${particle.color}-400`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed}s`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${particle.size * 2}px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Interactive Cosmic Orbs */}


      {/* Main Content Container */}
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Column - Profile & Main Content */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            
            {/* Enhanced Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Profile Image with Enhanced Effects */}
              <div className="relative mb-6 lg:mb-8">
                {/* Rotating Cosmic Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-2 border-purple-400/40 rounded-full animate-spin-slow" />
                  <div className="absolute w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 border border-pink-400/30 rounded-full animate-spin-slow-reverse" />
                  <div className="absolute w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 border border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDelay: '2s' }} />
                </div>

                {/* Dynamic Aura */}
                <div className="absolute inset-0 -m-8">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Floating Code Symbols */}
                {['React', 'Node', 'JS', 'CSS', 'API', 'DB'].map((tech, i) => (
                  <div
                    key={i}
                    className="absolute text-purple-400/70 text-xs font-mono animate-orbit opacity-60"
                    style={{
                      left: `${50 + 35 * Math.cos((i * Math.PI) / 3)}%`,
                      top: `${50 + 35 * Math.sin((i * Math.PI) / 3)}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: '8s',
                    }}
                  >
                    {tech}
                  </div>
                ))}

                {/* Main Profile Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto">
                  <div className="w-full h-full relative overflow-hidden rounded-full border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-2xl shadow-purple-500/60 animate-profile-glow">
                    <img
                      src="/go1.png"
                      alt="Manish Bhunia - MERN Stack Developer"
                      className="w-full h-full object-cover animate-subtle-zoom"
                      style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400/20 to-pink-400/20 animate-pulse" />
                  </div>

                  {/* Sparkle Effects */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${1.5 + Math.random() * 1.5}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced Status Indicator */}
           
              </div>
            </motion.div>

            {/* Enhanced Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight relative h-[1.2em] flex items-center justify-center lg:justify-start">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent blur-sm animate-pulse" />
                <TypeAnimation
                  sequence={[
                    "Hi, I'm Manish Bhunia",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Full-Stack Engineer",
                    2000,
                    "Welcome to My Universe",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl"
                />
              </h1>

              {/* Enhanced Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg animate-pulse" />
                  <span className="relative">
                    Crafting immersive digital experiences with{" "}
                    <span className="text-purple-400 font-semibold">React</span>,{" "}
                    <span className="text-pink-400 font-semibold">Node.js</span>, and{" "}
                    <span className="text-blue-400 font-semibold">MongoDB</span>
                  </span>
                </span>
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="pt-6"
              >
                <a 
                  href="#projects" 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10 text-white">Explore My Universe</span>
                  <ArrowDown className="relative z-10 w-5 h-5 text-white group-hover:animate-bounce" />
                  
                  {/* Button particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`,
                      }}
                    />
                  ))}
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Lottie Animations (Hidden on Mobile) */}
          <div className="order-1 lg:order-2 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative flex flex-col items-center space-y-1"
            >
              {/* Primary Lottie Animation */}
              <div className="relative">
                <div className="absolute inset-0 b rounded-full blur-2xl animate-pulse" />
                <Lottie
                  animationData={ani}
                  className="relative z-10 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  style={{ width: 350, height: 350 }}
                />
              </div>

              {/* Secondary Lottie Animation */}
              <div className="relative">
                <div className="absolute inset-0  rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                <Lottie
                  animationData={ani2}
                  className="relative z-10 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  style={{ width: 260, height: 260 }}
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-up opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <CosmicScrollIndicator />

      {/* Enhanced Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-meteor opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: '2s',
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
            <div className="absolute w-20 h-0.5 bg-gradient-to-r from-white via-purple-400 to-transparent -translate-x-20 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(10px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(270deg); opacity: 0.8; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes meteor {
          0% { transform: translateX(-100px) translateY(-100px) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100px) translateY(100px) rotate(45deg); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes profile-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(236, 72, 153, 0.4);
          }
          50% { 
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(236, 72, 153, 0.6);
          }
        }
        
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
        
        .animate-float-up {
          animation: float-up 5s ease-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 12s linear infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-meteor {
          animation: meteor 2s ease-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-profile-glow {
          animation: profile-glow 4s ease-in-out infinite;
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;