'use client'

import { Lightbulb, Code, Zap } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            About <span className="text-gradient-neon">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a tech-driven developer and designer building the future, one pixel and one line of code at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer and UI/UX designer with a mission to create digital products that don't just work—they inspire.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With expertise in modern web technologies and a design-first mindset, I bridge the gap between beautiful interfaces and robust backend systems. Every project is an opportunity to solve real problems and push boundaries.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the community.
            </p>

            <div className="flex gap-4">
              <button className="btn-neon-primary">
                Download Resume
              </button>
              <button className="btn-neon-secondary">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right content - mindset & approach */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Lightbulb className="text-[hsl(207,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Problem-First Mindset</h3>
              <p className="text-muted-foreground">
                I start by understanding the problem deeply before jumping into solutions. Great design is driven by user needs, not trends.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(280,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Code className="text-[hsl(280,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Clean Code Philosophy</h3>
              <p className="text-muted-foreground">
                Code is for humans, not machines. I write maintainable, scalable solutions with attention to performance and best practices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl border border-secondary hover:border-[hsl(180,100%,50%)] hover:bg-secondary/50 transition-smooth card-hover">
              <Zap className="text-[hsl(180,100%,50%)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Performance Obsessed</h3>
              <p className="text-muted-foreground">
                Every millisecond counts. I obsess over loading times, animations, and user experience to deliver lightning-fast applications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-secondary">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(207,100%,50%)] mb-2">50+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[hsl(280,100%,50%)] mb-2">8+</div>
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
