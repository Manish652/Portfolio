import React, { useState, useEffect } from "react";
import { Sparkles, Rocket, Star } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const loadingMessages = [
      "Initializing...",
      "Connecting to satellites...",
      "Loading cosmic data...",
      "Preparing launch sequence...",
      "Almost ready for takeoff...",
      "Launching your experience..."
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        setLoadingText(loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]);
        return Math.min(newProgress, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-slate-900 to-black flex flex-col items-center justify-center overflow-hidden text-white">
      
      {/* Enhanced Aurora/blur glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full animate-pulse delay-1000" />
      
      {/* Floating stars with varied sizes and animations */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          <div 
            className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
          />
        </div>
      ))}

      {/* Floating cosmic elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-slow opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <Star className="w-4 h-4 text-purple-400 animate-spin-slow" />
        </div>
      ))}

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Enhanced spinning ring with multiple layers */}
        <div className="relative mb-12">
          {/* Outer ring */}
          <div className="w-40 h-40 border-[3px] border-purple-500/30 border-t-purple-400 border-r-pink-400 rounded-full animate-spin-slow blur-sm" />
          
          {/* Middle ring */}
          <div className="absolute inset-2 w-36 h-36 border-[2px] border-pink-500/20 border-b-pink-400 border-l-purple-400 rounded-full animate-spin-reverse blur-[1px]" />
          
          {/* Inner ring */}
          <div className="absolute inset-4 w-32 h-32 border-[2px] border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
          
          {/* Center astronaut/rocket */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <img
                src="/lost.png"
                alt="Loading..."
                className="w-20 h-20 md:w-24 md:h-24 animate-float drop-shadow-[0_0_20px_rgba(192,132,252,0.8)] hover:drop-shadow-[0_0_30px_rgba(192,132,252,1)] transition-all duration-300"
              />
              {/* Glow effect around astronaut */}
              <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse" />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-[90vw] mb-8">
          <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/20">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0%</span>
            <span className="text-purple-300 font-medium">{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Enhanced loading text */}
        <div className="relative flex items-center gap-3 text-lg md:text-xl font-semibold tracking-wide text-purple-300 animate-glow mb-4">
          <Sparkles className="text-purple-400 animate-bounce" />
          <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-clip-text text-transparent animate-pulse">
            {loadingText}
          </span>
          <Sparkles className="text-pink-400 animate-bounce delay-300" />
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base text-center max-w-md px-4">
          Preparing an out-of-this-world experience for you
        </p>

        {/* Floating action indicators */}
        <div className="flex gap-6 mt-8 opacity-60">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(192,132,252,0.5); }
          50% { text-shadow: 0 0 20px rgba(192,132,252,0.8), 0 0 30px rgba(192,132,252,0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;