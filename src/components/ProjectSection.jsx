import {
  ExternalLink,
  Github,
  Star
} from 'lucide-react';
import React from 'react';
import Reveal from "../components/Reveal";

const projects = [
  {
    id: 1,
    title: 'Chat App',
    Description: 'Real-time chat application with Socket.io integration for seamless communication.',
    Image: '/sc.png',
    tags: ['react', 'tailwind', 'express js', 'node js', 'mongodb', 'socket io'],
    demoUrl: 'https://chatapp-m65a.onrender.com/',
    githubUrl: 'https://github.com/Manish652/chatapp',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'E-commerce API',
    Description: 'Robust backend API for e-commerce platform with complete CRUD operations.',
    Image: 'e-com.png',
    tags: ['node js', 'express js', 'mongodb', 'mongoose'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Manish652/e-com-backend',
    featured: false,
    category: 'backend',
  },
  {
    id: 4,
    title: 'AnimeFanWeb (DemonSlayer)',
    Description: 'Interactive anime fan website with beautiful animations and responsive design.',
    Image: '/s5.png',
    tags: ['React', 'Tailwind', 'AnimeFanWeb'],
    demoUrl: 'https://demon-slayer-3hw8.vercel.app/',
    githubUrl: 'https://github.com/Manish652/DemonSlayer',
    featured: true,
    category: 'frontend',
  },
  {
    id: 5,
    title: 'AI ChatBot',
    Description: 'Intelligent chatbot interface with API integration and modern UI design.',
    Image: '/s1.png',
    tags: ['React', 'Tailwind', 'API'],
    demoUrl: 'https://chat-bot-gold-nine.vercel.app/',
    githubUrl: 'https://github.com/Manish652/ChatBot',
    featured: false,
    category: 'frontend',
  },
  {
    id: 6,
    title: 'Gaming Hub',
    Description: 'Interactive gaming platform with multiple games and leaderboard system.',
    Image: '/sr.png',
    tags: ['react', 'tailwind', 'JS'],
    demoUrl: 'https://manish652.github.io/react-App/',
    githubUrl: 'https://github.com/Manish652/react-App',
    featured: false,
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Glass UI',
    Description: 'Modern glassmorphism UI components with stunning visual effects.',
    Image: '/s8.png',
    tags: ['react', 'tailwind', 'dazi UI', 'glass UI'],
    demoUrl: 'https://creativeweb-sepia.vercel.app/',
    githubUrl: 'https://github.com/Manish652/creativeweb',
    featured: true,
    category: 'frontend',
  },
];

function ProjectSection() {
  return (
    <section className="py-16 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my cosmic collection of projects - each one crafted with passion and precision
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full" />
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <div
                className="group bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                {/* Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.Image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-300 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.Description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-cyan-300 rounded-full border border-cyan-500/30 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-cyan-300 text-sm font-medium border border-cyan-500/30 hover:bg-slate-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA Button */}
        <Reveal>
          <div className="text-center">
            <a
              href="https://github.com/Manish652"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
              target="_blank"
            >
              <span>Explore My GitHub</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectSection;
