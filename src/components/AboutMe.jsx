import { BrickWall, Code, User, Rocket, Star, Zap } from "lucide-react";
import React from "react";
import Reveal from "./Reveal"; // 👈 Your scroll animation component

function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 px-4 relative min-h-screen overflow-hidden"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
              <span className="text-2xl align-super">✨</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Description */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      A MERN StacHi, I’m Manish Bhunia — a 2nd-year student with
                      a passion for Backend Development and Cybersecurity. I'm
                      constantly learning and building cool projects that blend
                      performance, scalability, and security.k Developer from
                      India
                    </h3>
                  </div>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-300 leading-relaxed">
                      I'm a self-taught developer focused on building meaningful
                      things — not chasing trends. I've skipped PHP in favor of
                      powerful stacks like Django and MERN, and I care about
                      crafting clean, real-world solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Languages: Python, JavaScript, C++, Java Communication:
                      Bengali, English, Hindi Focus: Backend Engineering, Web
                      Security, System Design, AI/ML, Open Source-screen, I'm a
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <a
                      href="#contact"
                      className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-center"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get In Touch
                        <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </span>
                    </a>
                    <a
                      href="/Manish-Bhunia-CV.pdf"
                      download
                      className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-full hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 font-semibold text-center backdrop-blur-sm"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Download CV
                        <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: 3 Feature Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Web Developer",
                desc: "I specialize in MERN stack with experience in Django, building full-stack apps, REST APIs, and dynamic UIs.",
                Icon: Code,
                gradient: "from-blue-400 to-cyan-400",
                glow: "shadow-blue-500/25",
              },
              {
                title: "Curious Thinker",
                desc: "I research topics most ignore — from unexplained nature to how intelligence evolved. Every 'why' leads me to the deeper 'how.'",
                Icon: User,
                gradient: "from-purple-400 to-pink-400",
                glow: "shadow-purple-500/25",
              },
              {
                title: "Resilient Learner",
                desc: "From web dev to cybersecurity and AI, I've explored multiple domains, and I keep pushing forward — even when it's tough.",
                Icon: BrickWall,
                gradient: "from-emerald-400 to-teal-400",
                glow: "shadow-emerald-500/25",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.2 + idx * 0.1}>
                <div
                  className={`group relative backdrop-blur-sm bg-slate-800/40 border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:${item.glow} hover:scale-105 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.gradient} blur-3xl`}
                    style={{ zIndex: -1 }}
                  />

                  {/* Content */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <item.Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" />
                    <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Floating Cosmic Elements */}
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
      </div>
    </section>
  );
}

export default AboutMe;
