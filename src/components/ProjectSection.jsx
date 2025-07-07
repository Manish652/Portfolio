import { ArrowRightSquare, ExternalLink, Github, Rocket, Star, Zap } from 'lucide-react';
import React from 'react'

const projects = [
    {
        id:1,
        title:'Chat App',
        Description: 'Real-time chat application with Socket.io integration for seamless communication.',
        Image:'/sc.png',
        tags:["react","tailwind","express js","node js","mongodb","socket io"],
        demoUrl:'https://chatapp-m65a.onrender.com/',
        githubUrl:'https://github.com/Manish652/chatapp',
        featured: true,
        category: 'fullstack'
    },
    
    {
        id:3,
        title:'E-commerce API',
        Description: 'Robust backend API for e-commerce platform with complete CRUD operations.',
        Image:'e-com.png',
        tags:["node js","express js","mongodb","mongoose"],
        demoUrl:'#',
        githubUrl:'https://github.com/Manish652/e-com-backend',
        featured: false,
        category: 'backend'
    },
    {
        id:4,
        title:'AnimeFanWeb (DemonSlayer)',
        Description: 'Interactive anime fan website with beautiful animations and responsive design.',
        Image:'/s5.png',
        tags:["React","Tailwind","AnimeFanWeb"],
        demoUrl:'https://demon-slayer-3hw8.vercel.app/',
        githubUrl:'https://github.com/Manish652/DemonSlayer',
        featured: true,
        category: 'frontend'
    },
     {
        id:5,
        title:'AI ChatBot',
        Description: 'Intelligent chatbot interface with API integration and modern UI design.',
        Image:'/s1.png',
        tags:["React","Tailwind","API"],
        demoUrl:'https://chat-bot-gold-nine.vercel.app/',
        githubUrl:'https://github.com/Manish652/ChatBot',
        featured: false,
        category: 'frontend'
    },
     {
        id:6,
        title:'Gaming Hub',
        Description: 'Interactive gaming platform with multiple games and leaderboard system.',
        Image:'/sr.png',
        tags:["react","tailwind","JS"],
        demoUrl:'https://manish652.github.io/react-App/',
        githubUrl:'https://github.com/Manish652/react-App',
        featured: false,
        category: 'frontend'
    },
    {
        id:2,
        title:'Glass UI',
        Description: 'Modern glassmorphism UI components with stunning visual effects.',
        Image:'/s8.png',
        tags:["react","tailwind","dazi UI","glass UI"],
        demoUrl:'https://creativeweb-sepia.vercel.app/',
        githubUrl:'https://github.com/Manish652/creativeweb',
        featured: true,
        category: 'frontend'
    },
]

function ProjectSection() {
  return (
   <section className="py-24 px-4 relative min-h-screen overflow-hidden" id="projects">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my cosmic collection of projects - each one crafted with passion and precision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, key) => (
            <div
              key={key}
              className={`group relative backdrop-blur-sm bg-slate-800/40 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                project.featured ? 'hover:shadow-purple-500/25' : 'hover:shadow-blue-500/25'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Background Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                project.featured ? 'bg-gradient-to-r from-purple-400/10 to-pink-400/10' : 'bg-gradient-to-r from-blue-400/10 to-cyan-400/10'
              } blur-3xl`} style={{ zIndex: -1 }} />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  project.featured ? 'text-purple-300 group-hover:text-purple-200' : 'text-blue-300 group-hover:text-blue-200'
                }`}>
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.Description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                        project.featured 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-pink-500/30' 
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-cyan-500/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex justify-end items-center gap-4">
                  <a
                    className="group/link p-3 rounded-full bg-slate-700/50 text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                  </a>
                  <a
                    className="group/link p-3 rounded-full bg-slate-700/50 text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repo"
                  >
                    <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> 

        {/* GitHub Button */}
        <div className='text-center'>
          <a 
            href="https://github.com/Manish652" 
            className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1' 
            target='_blank'
          >
            <span>Explore My GitHub</span>
            <ArrowRightSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            
            {/* Button glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ zIndex: -1 }} />
          </a>
        </div>
      </div>

      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
    </section>
  )
}

export default ProjectSection;