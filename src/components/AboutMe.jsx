import { BrickWall, Code, User } from 'lucide-react';
import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
          About <span className="text-primary underline underline-offset-4">Me^^</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT: Description */}
          <div className="space-y-6 text-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              A MERN Stack Developer from India 🚀
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m a self-taught developer focused on building meaningful things — not chasing trends. I’ve skipped PHP in favor of powerful stacks like Django and MERN, and I care about crafting clean, real-world solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Off-screen, I’m a deep thinker who dives into the unexplored — from mysterious creatures like the Stronsay Beast to the philosophical idea of the first "HOW" of existence. I also connect deeply with anime that blend story, philosophy, and soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
              >
                Get In Touch
              </a>
              <a
                href="/Manish-Bhunia-CV.pdf"
                download
                className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT: 3 Feature Cards */}
          <div className="space-y-6">
            {[ 
              {
                title: "Web Developer",
                desc: "I specialize in MERN stack with experience in Django, building full-stack apps, REST APIs, and dynamic UIs.",
                Icon: Code,
              },
              {
                title: "Curious Thinker",
                desc: "I research topics most ignore — from unexplained nature to how intelligence evolved. Every 'why' leads me to the deeper 'how.'",
                Icon: User,
              },
              {
                title: "Resilient Learner",
                desc: "From web dev to cybersecurity and AI, I’ve explored multiple domains, and I keep pushing forward — even when it’s tough.",
                Icon: BrickWall,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group backdrop-blur-sm bg-background/80 border border-border rounded-xl p-6 transition hover:shadow-2xl hover:scale-[1.02] duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 transition group-hover:rotate-6">
                    <item.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {/* background flare effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-transparent blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
