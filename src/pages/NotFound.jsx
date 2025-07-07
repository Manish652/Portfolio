import { Rocket, Zap, Star, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

function NotFound() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      
      {/* Particle Field */}
      <div className="absolute w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-purple-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-cyan-500/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" />
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="absolute w-96 h-96 pointer-events-none z-0 opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
          transition: 'all 0.3s ease-out'
        }}
      />

      {/* Glitch Lines */}
      {glitchActive && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent top-1/4 animate-pulse" />
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent top-2/3 animate-pulse" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          {/* Glitch 404 */}
          <div className="relative mb-8">
            <h1 className={`text-[12rem] font-black tracking-wider leading-none select-none ${glitchActive ? 'animate-pulse' : ''}`}>
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-pulse">
                404
              </span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 drop-shadow-2xl">
                404
              </span>
              {glitchActive && (
                <span className="absolute inset-0 text-red-500 transform translate-x-1 translate-y-1 opacity-70">
                  404
                </span>
              )}
            </h1>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 text-[12rem] font-black tracking-wider leading-none text-purple-500/20 blur-3xl animate-pulse">
              404
            </div>
          </div>

          {/* Animated Title */}
          <div className="mb-6 overflow-hidden">
            <h2 className="text-4xl font-bold mb-3 animate-fade-in-up">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>Y</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>o</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>u</span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.4s' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>r</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>e</span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.7s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>o</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>s</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.0s' }}>t</span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '1.1s' }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.2s' }}>n</span>
              <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '1.3s' }}>s</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.4s' }}>p</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.5s' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.6s' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.7s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.8s' }}>!</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
            The page you're looking for has been 
            <span className="text-purple-400 font-semibold"> obliterated </span>
            by a cosmic anomaly. Time to navigate back to safety!
          </p>

          {/* Epic Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <ArrowLeft className="w-5 h-5 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Return to Base</span>
              <Rocket className="w-5 h-5 group-hover:animate-spin relative z-10" />
            </button>
            
            <button
              onClick={() => setGlitchActive(true)}
              className="group inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Glitch Effect
            </button>
          </div>
        </div>
      </div>

      {/* Floating Astronaut with Crazy Animation */}
      <div className="absolute bottom-10 right-10 w-32 opacity-90 animate-float">
        <div className="relative transform hover:rotate-12 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
         <img
  src="/lost.png"
  alt="Lost astronaut"
  className="absolute top-[-300px] left-[-200px] w-[300px] h-auto max-w-none
             drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.8)] 
             transition-all duration-300"
/>

        </div>
      </div>

      {/* Floating Stars with Icons */}
      <div className="absolute top-20 left-20 text-purple-400 opacity-60 animate-spin" style={{ animationDuration: '15s' }}>
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute top-40 right-32 text-cyan-400 opacity-60 animate-bounce">
        <Star className="w-4 h-4" />
      </div>
      <div className="absolute bottom-32 left-32 text-pink-400 opacity-60 animate-pulse">
        <Star className="w-5 h-5" />
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default NotFound;