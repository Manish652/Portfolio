import { Github, Linkedin, Mail, Instagram, MapPin, Heart, Code } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-purple-900/30 to-transparent backdrop-blur-md text-white py-12 mt-24 overflow-hidden border-t border-purple-500/20">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10" />
      
      {/* Floating Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left - Location & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-purple-300 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5" />
              Location
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium text-white">Contai, West Bengal</p>
              <p className="text-gray-400">India 721401</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:manishbhunia96@gmail.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                  manishbhunia96@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Center - Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">
              Connect with me
            </h3>
            <div className="flex justify-center gap-4 mb-4">
              {[
                {
                  icon: Mail,
                  href: "mailto:manishbhunia96@gmail.com",
                  title: "Email",
                  color: "hover:bg-red-500/20 hover:border-red-500/30"
                },
                {
                  icon: Github,
                  href: "https://github.com/Manish652",
                  title: "GitHub",
                  color: "hover:bg-gray-500/20 hover:border-gray-500/30"
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/manish-bhunia-99637a28b/",
                  title: "LinkedIn",
                  color: "hover:bg-blue-500/20 hover:border-blue-500/30"
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/manish",
                  title: "Instagram",
                  color: "hover:bg-pink-500/20 hover:border-pink-500/30"
                },
              ].map(({ icon: Icon, href, title, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  className={`p-3 bg-white/10 border border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${color}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Let's build something powerfull together
            </p>
          </div>

          {/* Right - Skills & Tech */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-purple-300 flex items-center justify-center md:justify-end gap-2">
              <Code className="w-5 h-5" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {['React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'AWS'].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-purple-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Manish Bhunia. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>By Manish</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;