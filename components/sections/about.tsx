'use client'

import { Lightbulb, Code, Zap, Rocket } from 'lucide-react'

export default function About() {

  const resumeLink = "https://drive.google.com/file/d/1Jzk9Gp9NQpPvi7AmQZrmQhhIidbCjpVd/view?usp=drive_link"

  // 🔥 Replace with your startup website link
  const startupLink = "https://yourstartupwebsite.com"

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            About <span className="text-gradient-neon">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building robust digital ecosystems where design meets engineering — delivering scalable, secure, and performance-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a Full-Stack Developer and UI/UX Designer, I craft user-centric digital solutions that combine clean architecture, intuitive design, and measurable impact.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With expertise in modern web technologies and a design-first mindset, I bridge the gap between beautiful interfaces and robust backend systems.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Beyond writing code, I stay immersed in emerging technologies, collaborate on open-source projects, and contribute to the community.
            </p>

            <div className="flex gap-4">
              
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-primary inline-flex items-center justify-center"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn-neon-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="grid grid-cols-1 gap-6">

            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Lightbulb className="text-[hsl(207,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Problem-First Mindset</h3>
              <p className="text-muted-foreground">
                I start by understanding the problem deeply before jumping into solutions.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(280,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Code className="text-[hsl(280,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Clean Code Philosophy</h3>
              <p className="text-muted-foreground">
                I write maintainable, scalable solutions with attention to performance.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(180,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Zap className="text-[hsl(180,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Performance Obsessed</h3>
              <p className="text-muted-foreground">
                I obsess over loading times and user experience to deliver fast applications.
              </p>
            </div>

          </div>
        </div>

        {/* 🔥 Founder Section */}
        <div className="mt-20 p-10 rounded-2xl border border-secondary bg-secondary/20 backdrop-blur-sm hover:border-[hsl(45,100%,60%)] transition-smooth">

          <div className="flex items-center gap-4 mb-4">
            <Rocket className="text-[hsl(45,100%,60%)]" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">
              Founder of <span className="text-gradient-neon">GautamTechnical</span>
            </h3>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            I founded GautamTechnical with a vision to deliver cutting-edge web solutions,
            scalable SaaS platforms, and high-performance digital experiences for modern businesses.
            The mission is simple — build technology that drives growth.
          </p>

          <a
            href={startupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-primary inline-flex items-center justify-center"
          >
            Visit GautamTechnical
          </a>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-secondary">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(207,100%,50%)] mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(280,100%,50%)] mb-2">2.5+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(180,100%,50%)] mb-2">100%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">∞</div>
            <p className="text-muted-foreground">Passion for Code</p>
          </div>
        </div>

      </div>
    </section>
  )
}
