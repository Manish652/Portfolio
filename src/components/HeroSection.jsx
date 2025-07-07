import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden text-white"
    >
      {/* Optional floating visuals */}

      <img
  src="/lost.png"
  alt="Astronaut"
  className="absolute w-28 md:w-[15rem] opacity-80 animate-float pointer-events-none 
             top-47 left-1/2 transform -translate-x-1/2 
             md:top-18 md:right-8 md:left-auto md:translate-x-0"
/>


   

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
            <TypeAnimation
              sequence={[
                "Hi, I'm Manish Bhunia",
                2000,
                "I'm a MERN Stack Developer",
                2000,
                "Welcome to My Portfolio",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-primary"
            />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-gray-300 max-w-2xl mx-auto animate-fade-in-delay-2">
            I specialize in MERN stack with experience in Django, building full-stack apps, REST APIs, and dynamic UIs.
          </p>

          <div className="pt-4 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
