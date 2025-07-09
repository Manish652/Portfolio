import { Github, Linkedin, Mail, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-purple-900/30 to-transparent backdrop-blur-md shadow-inner border-t border-purple-900/30 text-white py-16 mt-24 overflow-hidden border-t border-white/10">
      {/* Unique Cosmic Blurred Background */}
   

      {/* Floating Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let’s build something cosmic together.
        </h3>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          Connect with me through the stars:
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          {[
            {
              icon: Mail,
              href: "mailto:manishbhunia96@gmail.com",
              title: "Email",
            },
            {
              icon: Github,
              href: "https://github.com/Manish652",
              title: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/manishbhunia",
              title: "LinkedIn",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/manishbhunia",
              title: "Instagram",
            },
          ].map(({ icon: Icon, href, title }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="p-3 bg-white/10 border border-white/10 rounded-full transition-all hover:scale-110 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Manish Bhunia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
