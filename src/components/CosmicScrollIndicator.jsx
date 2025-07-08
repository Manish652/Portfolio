import { ArrowDown } from 'lucide-react';

const CosmicScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group">
      {/* Cosmic Glow Background */}
      <div className="absolute inset-0 -m-8 pointer-events-none">
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500/15 via-indigo-500/25 to-purple-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Orbital Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      {/* Enhanced Arrow with Multiple Effects */}
      <div className="relative z-10 p-3 rounded-full backdrop-blur-sm bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-110">
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Sparkles around Arrow */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-80 transition-opacity duration-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        ))}
        
        <ArrowDown className="h-6 w-6 text-cyan-400 animate-bounce drop-shadow-xl relative z-10 group-hover:text-cyan-300 transition-colors duration-300 filter group-hover:drop-shadow-2xl" />
      </div>

      {/* Enhanced Particle Trail */}
      <div className="relative mt-4 flex flex-col items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="relative"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          >
            {/* Particle Glow */}
            <div className="absolute inset-0 -m-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse opacity-60" />
            
            {/* Main Particle */}
            <div
              className="relative w-2 h-2 rounded-full animate-ping shadow-lg"
              style={{
                background: `linear-gradient(135deg, 
                  ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, 
                  ${i % 3 === 0 ? '#0891b2' : i % 3 === 1 ? '#7c3aed' : '#db2777'})`,
                opacity: 0.9 - (i * 0.15),
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s',
                transform: `scale(${1 - i * 0.1})`,
              }}
            />
            
            {/* Particle Trail */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse opacity-40"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s',
              }}
            />
          </div>
        ))}
      </div>

      {/* Cosmic Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Energy Pulse Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full animate-ping opacity-30" style={{ animationDuration: '3s' }} />
      </div>

      {/* Floating Text */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-cyan-300 font-medium drop-shadow-lg animate-pulse">Scroll Down</span>
      </div>
    </div>
  );
};

export default CosmicScrollIndicator;