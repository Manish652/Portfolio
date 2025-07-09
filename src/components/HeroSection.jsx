import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import CosmicScrollIndicator from "./CosmicScrollIndicator";
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



const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
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

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
      
      // Dynamic glow intensity based on mouse movement
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
      {/* Floating Cosmic Particles */}
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

      {/* Interactive Cosmic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            opacity: glowIntensity * 0.6,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse transition-all duration-1500"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            opacity: glowIntensity * 0.4,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse transition-all duration-2000"
          style={{
            left: `${50 + mousePosition.x * 0.02}%`,
            top: `${50 + mousePosition.y * 0.02}%`,
            opacity: glowIntensity * 0.3,
          }}
        />
      </div>

      {/* Professional Profile Image - Fixed Mobile Positioning */}
      <div className="
  absolute 
  top-[120px]                /* Mobile devices */
  sm:top-[130px]             /* Small tablets */
  md:top-[160px]             /* Medium tablets */
  left-1/2 
  transform -translate-x-1/2 
  md:translate-x-0 md:left-12 
  lg:top-1/2 lg:left-8 
  lg:-translate-y-1/2 
  xl:left-20 
  2xl:left-32 
  pointer-events-none
">
  <div className="relative">

    {/* Rotating Hexagonal Rings */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 rounded-full blur-sm" />
      </div>
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rotate-45 animate-spin-slow-reverse">
        <div className="w-full h-full border-2 border-purple-400/30 rounded-full" />
      </div>
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rotate-90 animate-spin-slow">
        <div className="w-full h-full border border-pink-400/20 rounded-full" />
      </div>
    </div>

    {/* Cosmic Aura */}
    <div className="absolute inset-0 -m-4 sm:-m-6">
      <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
    </div>

    {/* Floating Code Symbols */}
    {['<', '>', '{', '}', '(', ')'].map((symbol, i) => (
      <div
        key={i}
        className="absolute text-purple-400/60 text-xs sm:text-sm font-mono animate-float opacity-70"
        style={{
          left: `${20 + (i * 60) % 120}%`,
          top: `${20 + (i * 40) % 80}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      >
        {symbol}
      </div>
    ))}

    {/* Main Profile Image */}
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 mx-auto md:mx-0 mt-10 md:mt-0">
      <div className="w-full h-full relative overflow-hidden rounded-full border-2 sm:border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-2xl shadow-purple-500/50 animate-profile-glow">
        <img
          src="/icon.jpg"
          alt="Manish Bhunia - MERN Stack Developer"
          className="w-full h-full object-cover animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400/10 to-pink-400/10 animate-pulse" />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-ping opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>

    {/* Status Indicator */}
    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center space-x-1 sm:space-x-2 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-purple-400/30">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs text-purple-200">Available</span>
      </div>
    </div>

  </div>
</div>


      {/* Enhanced Astronaut with Cosmic Effects - Right Side (Hidden on mobile) */}
      <div className="absolute top-1/2 right-4 md:right-16 lg:right-24 xl:right-32 transform -translate-y-1/2 pointer-events-none hidden md:block">
        {/* Cosmic Aura around Astronaut */}
        <div className="absolute inset-0 -m-8">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Orbital Rings around Astronaut */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute w-52 h-52 border border-pink-400/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
          <div className="absolute w-64 h-64 border border-blue-400/15 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        </div>
        
        {/* Floating Particles around Astronaut */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        <img
          src="/lost.png"
          alt="Astronaut"
          className="relative z-10 w-28 md:w-32 lg:w-36 xl:w-40 opacity-80 animate-float filter drop-shadow-2xl"
        />
      </div>

      {/* Main Content with Enhanced Effects - Updated Mobile Top Margin */}
      <div className="container max-w-4xl mx-auto text-center z-10 relative mt-32 sm:mt-28 lg:mt-0">
        {/* Cosmic Dust Trail behind content */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="space-y-6 relative z-10">
          {/* Enhanced Title with Cosmic Effects */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight relative"
          >
            <div className="absolute inset-0 blur-2xl animate-pulse" />
            <div className="absolute inset-0 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <TypeAnimation
              sequence={[
                "Hi, I'm Manish Bhunia",
                2000,
                "I'm a MERN Stack Developer",
                2000,
                "Welcome to My Portfolio",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block relative z-10 bg-clip-text text-blue-200 drop-shadow-2xl"
            />
            
            {/* Floating sparkles around title */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-ping opacity-80"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              />
            ))}
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm sm:text-lg md:text-xl text-muted-foreground text-gray-300 max-w-2xl mx-auto relative px-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-xl animate-pulse opacity-50" />
            <span className="relative z-10 drop-shadow-lg">
              I specialize in MERN stack building full-stack apps, REST APIs, and dynamic UIs.
            </span>
          </motion.p>

          {/* Enhanced Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-4 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl animate-pulse" />
            </div>
            
            <a 
              href="#projects" 
              className="cosmic-button relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm border border-purple-400/30 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 group overflow-hidden text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating particles in button */}
              {[...Array(6)].map((_, i) => (
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
              
              <span className="relative z-10">View My Work</span>
            </a>
          </motion.div>
        </div>
      </div>

      <CosmicScrollIndicator/>

      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: '0.8s',
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="absolute w-16 h-0.5 bg-gradient-to-r from-white via-purple-400 to-transparent -translate-x-16 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
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
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(236, 72, 153, 0.3);
          }
          50% { 
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(236, 72, 153, 0.5);
          }
        }
        
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        
        .animate-profile-glow {
          animation: profile-glow 3s ease-in-out infinite;
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 8s ease-in-out infinite;
        }
        
        .cosmic-button {
          position: relative;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%);
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