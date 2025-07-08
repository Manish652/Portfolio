import React, { useEffect, useState } from 'react';
import ThemeToggele from '../components/ThemeToggele';
import StarBackground from '../components/StarBackground';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import LoadingScreen from '../components/LoadingScreen';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      <ThemeToggele />

      {/* Background effect */}
      <StarBackground />

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
