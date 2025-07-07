import React from 'react'
import ThemeToggele from '../components/ThemeToggele'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>

        {/* theme toggle */}

        <ThemeToggele/>


        {/* backgroud effect */}

        <StarBackground/>


        {/* Nav bar */}
        <NavBar/>


        { /* main content */}

        <main>

            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>

        </main>


        {/* footer */}
        <Footer/>
        
    </div>
  )
}

export default Home
