import React from "react";
import { Sparkles } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-slate-900 to-black flex flex-col items-center justify-center overflow-hidden text-white">

      {/* Aurora/blur glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full animate-pulse delay-500" />

      {/* Floating stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Glowing spinning ring */}
      <div className="relative mb-10">
  {/* Larger glowing ring */}
  <div className="w-36 h-36 border-[6px] border-purple-500/20 border-t-purple-400 rounded-full animate-spin-slow blur-[2px] shadow-2xl" />

  {/* Bigger astronaut image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/lost.png"
      alt="Loading..."
      className="w-16 h-16 md:w-20 md:h-20 animate-float drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]"
    />
  </div>
</div>


      {/* Glowing text */}
      <div className="relative flex items-center gap-3 text-lg md:text-xl font-semibold tracking-wide text-purple-300 animate-glow">
        <Sparkles className="text-purple-400 animate-flicker" />
        <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-clip-text text-transparent">
          Launching Your Experience...
        </span>
        <Sparkles className="text-pink-400 animate-flicker delay-300" />
      </div>
    </div>
  );
};

export default LoadingScreen;
