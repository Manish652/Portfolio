import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Zap, Star, Code, Rocket } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero', icon: Rocket },
  { name: 'About', href: '#about', icon: Star },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Contact', href: '#contact', icon: Zap },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const manualSetRef = useRef(false);

  // Handle scroll + IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualSetRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll Listener for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const id = href.substring(1);
    const element = document.getElementById(id);

    if (element) {
      manualSetRef.current = true;
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);

      // Reset manual set after short delay
      setTimeout(() => {
        manualSetRef.current = false;
      }, 1500);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border-b border-purple-500/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2">
          <img src="/m.png" alt="Logo" className="w-8 h-8" />
          <span className="text-purple-400 font-semibold">^^</span>
          <span className="text-gray-400 text-sm">portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className={`group relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive
                      ? 'text-purple-400'
                      : 'group-hover:text-purple-400 group-hover:rotate-12'
                  }`}
                />
                <span className="font-medium">{name}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full bg-slate-800/50 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <div className="px-6 py-6 space-y-2">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <button
                  key={name}
                  onClick={() => handleNavClick(href)}
                  className={`group flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? 'text-purple-400'
                        : 'group-hover:text-purple-400 group-hover:rotate-12'
                    }`}
                  />
                  <span className="font-medium">{name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
