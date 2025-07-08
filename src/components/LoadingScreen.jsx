import React from "react";
import { Sparkles } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Glowing ring */}
      <div className="relative mb-6">
        <div className="w-24 h-24 border-4 border-purple-500/30 border-t-purple-400 rounded-full animate-spin-slow shadow-xl blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/lost.png" // you can also use astronaut.svg
            alt="Loading Rocket"
            className="w-10 h-10 animate-bounce"
          />
        </div>
      </div>

      {/* Typing/pulsing text */}
      <div className="flex items-center gap-2 animate-pulse">
        <Sparkles className="text-purple-400 animate-flicker" />
        <span className="text-xl font-semibold tracking-widest text-purple-300">
          Launching Your Experience...
        </span>
        <Sparkles className="text-pink-400 animate-flicker delay-500" />
      </div>
    </div>
  );
};

export default LoadingScreen;
