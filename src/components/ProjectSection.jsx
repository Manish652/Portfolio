import { ArrowRightSquare, ExternalLink, Github } from 'lucide-react';
import React from 'react'


const projects = [
    {
        id:1,
        title:'Chat App',
        Description: '',
        Image:'/sc.png',
        tages:["react","tailwind","express js","node js","mongodb","socket io"],
        demoUrl:'https://chatapp-m65a.onrender.com/',
        githubUrl:'https://github.com/Manish652/chatapp',

    },
    
    {
        id:3,
        title:'E-commerce(backend api only)',
        Description: '',
        Image:'e-com.png',
        tages:["node js","express js","mongodb","mongoose"],
        demoUrl:'#',
        githubUrl:'https://github.com/Manish652/e-com-backend',
    

    },
    {
        id:4,
        title:'animeFanWeb(DemonSlayer)',
        Description: '',
        Image:'/s5.png',
        tages:["React","Tailwind","AnimeFanWeb"],
        demoUrl:'https://demon-slayer-3hw8.vercel.app/',
        githubUrl:'https://github.com/Manish652/DemonSlayer',

    },
     {
        id:5,
        title:'ChatBot',
        Description: '',
        Image:'/s1.png',
        tages:["React","Tailwind","API"],
        demoUrl:'https://chat-bot-gold-nine.vercel.app/',
        githubUrl:'https://github.com/Manish652/ChatBot',

    },
     {
        id:6,
        title:'Gaming Hub',
        Description: '',
        Image:'/sr.png',
        tages:["react","tailwind","JS"],
        demoUrl:'https://manish652.github.io/react-App/',
        githubUrl:'https://github.com/Manish652/react-App',

    },
    {
        id:2,
        title:'Glass UI',
        Description: '',
        Image:'/s8.png',
        tages:["react","tailwind","dazi UI","glass UI"],
        demoUrl:'https://creativeweb-sepia.vercel.app/',
        githubUrl:'https://github.com/Manish652/creativeweb',
    },
   

]

function ProjectSection() {
  return (
   <section className="py-24 px-4 relative" id="projects">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below are some of my featured projects that I’ve worked on. You can find more on GitHub.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="w-full md:w-[45%] lg:w-[30%] bg-card rounded-xl shadow-lg flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.Description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tages.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[11px] font-semibold rounded-full bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-700 text-white shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex justify-end items-center gap-4">
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repo"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> 
        <div className='text-center mt-12'>
                  <a href="https://github.com/Manish652" className='cosmic-button w-fit flex items-center mx-auto gap-2 ' target='_blank'>My GitHub <ArrowRightSquare size={16}/></a>

        </div>
      </div>
    </section>
  )
}

export default ProjectSection;