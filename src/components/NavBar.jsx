import React, { useEffect, useState } from 'react';
import { Menu, X, Zap, Star, Code, Rocket } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#hero", icon: Rocket },
  { name: "About", href: "#about", icon: Star },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Zap }
];

function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ["hero", "about", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-500/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="relative group flex items-center"
        >
          <div className="relative group flex items-center">
  <span className="w-8 h-8 md:w-10 md:h-10">
    <img src="/m.png" alt="Logo" className="object-contain w-full h-full" />
  </span>

  <span className="text-lg md:text-xl text-purple-400 ml-1 font-semibold">^^</span>

  <span className="text-sm md:text-base text-gray-400 ml-2">portfolio</span>

  <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-300"></div>
</div>

          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1 -right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75" />
            <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse" />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item, key) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <a
                key={key}
                href={item.href}
                className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 shadow-lg shadow-purple-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-purple-400' : 'group-hover:text-purple-400 group-hover:rotate-12'
                }`} />
                <span className="font-medium">{item.name}</span>
                
                {isActive && (
                  <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse" />
                )}
                
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </a>
            );
          })}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden relative p-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          )}
          
          <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, key) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'text-purple-400' : 'group-hover:text-purple-400 group-hover:rotate-12'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                  
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  )}
                  
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
          
          <div className="absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute bottom-2 left-4 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse" />
        </div>
      )}
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse opacity-50"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </nav>
  );
}

export default NavBar;