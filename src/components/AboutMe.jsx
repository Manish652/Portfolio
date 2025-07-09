import { BrickWall, Code, User, Rocket, Star, Zap, GraduationCap, BookOpen, Award, MapPin, Calendar, Heart, Briefcase, Trophy, Target } from "lucide-react";
import React, { useState } from "react";

// Mock Reveal component for demonstration
const Reveal = ({ children, delay = 0 }) => (
  <div 
    className="animate-fadeIn"
    style={{ 
      animationDelay: `${delay}s`,
      animationFillMode: 'both'
    }}
  >
    {children}
  </div>
);

function AboutMe() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "personal", label: "Personal Info", icon: User },
    { id: "professional", label: "Professional Info", icon: Briefcase }
  ];

  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Science & Engineering",
      institution: "Contai College of Learning & Management Science",
      location: "West Bengal, India",
      duration: "2023 - 2026",
      status: "Currently 3nd Year",
      achievements: ["Dean's List", "Coding Club President"]
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science",
      institution: "Kishorenagar Sachindra Siksha Sadan",
      location: "Contai, West Bengal",
      duration: "2015 - 2023",
      status: "Completed",
      achievements: ["85.2% Marks", "SOY"]
    }
  ];

  const personalData = {
    basic: {
      name: "Manish Bhunia",
      age: "20 years",
      location: "Conati, West Bengal, India",
      languages: ["Bengali (Native)", "English (Fluent)", "Hindi (Fluent)"],
      interests: ["Web Developement","Cybersecurity Research", "Open Source", "AI/ML", "Space Science", "Philosophy"]
    },
    hobbies: [
      { name: "Coding", desc: "Building side projects and contributing to open source" },
      { name: "Reading", desc: "Tech blogs, research papers, and sci-fi novels" },
      { name: "Problem Solving", desc: "Competitive programming and algorithm challenges" },
      { name: "Music", desc: "Listening to electronic and ambient music while coding" }
    ]
  };

  const professionalData = {
    skills: {
      languages: ["Python", "JavaScript", "C++", "Java", "TypeScript"],
      frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      backend: ["Node.js", "Express.js", "Django", "REST APIs", "GraphQL"],
      database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git", "Docker", "AWS", "Linux", "VS Code"]
    },
    experience: [
      {
        title: "Freelance Web Developer",
        duration: "2024 - Present",
        description: "Building responsive web applications and REST APIs for local businesses"
      },
      {
        title: "Open Source Contributor",
        duration: "2024 - Present",
        description: "Contributing to various open source projects on GitHub"
      }
    ],
    achievements: [
      "Built 10+ full-stack web applications",
      "Contributed to 5+ open source projects",
      "Completed 3 major cybersecurity courses",
      "Solved 50+ coding problems on LeetCode"
    ]
  };

  return (
    <section
      id="about"
      className="py-24 px-4  relative min-h-screen overflow-hidden"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Me
              </span>
              <span className="text-xl md:text-2xl align-super">✨</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>
        </Reveal>

        {/* Tab Navigation */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-4 py-3 md:px-6 md:py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400 shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-slate-800/50 text-gray-300 border-gray-700/50 hover:border-purple-400/50 hover:text-purple-300 hover:scale-105"
                }`}
              >
                <span className="flex items-center gap-2">
                  <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab Content */}
        <div className="relative">
          {/* Education Tab */}
          {activeTab === "education" && (
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Educational Journey
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    My academic path in computer science and continuous learning
                  </p>
                </div>

                <div className="grid gap-6 md:gap-8">
                  {educationData.map((edu, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="p-3 md:p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                              <h4 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h4>
                              <span className="text-sm text-purple-400 font-medium">{edu.duration}</span>
                            </div>
                            <p className="text-purple-300 font-medium mb-2">{edu.field}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                              <span className="text-gray-400 text-sm md:text-base">{edu.institution}</span>
                              <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <MapPin className="w-3 h-3" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, idx) => (
                                <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Personal Info Tab */}
          {activeTab === "personal" && (
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Personal Information
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Get to know me beyond the code
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Basic Info */}
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                          <User className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-white">Basic Info</h4>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <span className="text-blue-400 font-medium">Name:</span>
                          <span className="text-gray-300 ml-2">{personalData.basic.name}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Age:</span>
                          <span className="text-gray-300 ml-2">{personalData.basic.age}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Location:</span>
                          <span className="text-gray-300 ml-2">{personalData.basic.location}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Languages:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {personalData.basic.languages.map((lang, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-blue-400 font-medium">Interests:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {personalData.basic.interests.map((interest, idx) => (
                              <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hobbies */}
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
                          <Heart className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-white">Hobbies & Interests</h4>
                      </div>
                      <div className="space-y-4">
                        {personalData.hobbies.map((hobby, idx) => (
                          <div key={idx} className="border-l-2 border-emerald-400/30 pl-4">
                            <h5 className="text-emerald-400 font-medium text-sm md:text-base">{hobby.name}</h5>
                            <p className="text-gray-400 text-xs md:text-sm mt-1">{hobby.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Professional Info Tab */}
          {activeTab === "professional" && (
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Professional Information
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    My technical skills and professional journey
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Skills */}
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                          <Code className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-white">Technical Skills</h4>
                      </div>
                      <div className="space-y-4">
                        {Object.entries(professionalData.skills).map(([category, skills]) => (
                          <div key={category}>
                            <h5 className="text-purple-400 font-medium capitalize mb-2 text-sm md:text-base">
                              {category}:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience & Achievements */}
                  <div className="space-y-6">
                    {/* Experience */}
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                          <h4 className="text-lg md:text-xl font-semibold text-white">Experience</h4>
                        </div>
                        <div className="space-y-4">
                          {professionalData.experience.map((exp, idx) => (
                            <div key={idx} className="border-l-2 border-blue-400/30 pl-4">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <h5 className="text-blue-400 font-medium text-sm md:text-base">{exp.title}</h5>
                                <span className="text-gray-500 text-xs">{exp.duration}</span>
                              </div>
                              <p className="text-gray-400 text-xs md:text-sm mt-1">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
                            <Trophy className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                          <h4 className="text-lg md:text-xl font-semibold text-white">Achievements</h4>
                        </div>
                        <div className="space-y-3">
                          {professionalData.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                              <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <a
                    href="#contact"
                    className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get In Touch
                      <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </span>
                  </a>
                  <a
                    href="/Manish-Bhunia-CV.pdf"
                    download
                    className="group px-6 py-3 md:px-8 md:py-4 border-2 border-purple-400/50 text-purple-300 rounded-full hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105 font-semibold text-center backdrop-blur-sm"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Download CV
                      <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          )}
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default AboutMe;