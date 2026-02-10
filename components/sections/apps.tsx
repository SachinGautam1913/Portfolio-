'use client'

import { ExternalLink, Github, Zap } from 'lucide-react'

export default function Apps() {
  const apps = [
    {
      title: 'TaskFlow Pro',
      description: 'AI-powered task management with smart scheduling and team collaboration',
      badge: 'SaaS',
      tech: ['Next.js', 'AI/ML', 'PostgreSQL', 'Tailwind'],
      live: 'https://example.com',
      github: 'https://github.com',
      featured: true,
    },
    {
      title: 'DesignVault',
      description: 'Cloud-based design asset manager with real-time collaboration',
      badge: 'Product',
      tech: ['React', 'Firebase', 'Canvas API', 'WebRTC'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      title: 'CodeAnalyzer',
      description: 'Real-time code quality analysis with AI-powered suggestions',
      badge: 'Tool',
      tech: ['Node.js', 'ESLint', 'GPT', 'Express'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Apps & <span className="text-gradient-neon">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Innovative tools and products I've built to solve real-world problems and deliver premium user experiences.
          </p>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-secondary transition-smooth hover:border-[hsl(207,100%,50%)] ${
                app.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Gradient border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(207,100%,50%)] to-[hsl(280,100%,50%)] opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />

              {/* Card content */}
              <div className="relative bg-card/50 backdrop-blur-sm p-6 md:p-8 h-full flex flex-col hover:bg-card/80 transition-colors">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gradient-neon transition-all">
                      {app.title}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(207,100%,50%)]/10 text-[hsl(207,100%,50%)] border border-[hsl(207,100%,50%)]/30">
                      {app.badge}
                    </span>
                  </div>
                  <Zap size={24} className="text-[hsl(180,100%,50%)] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {app.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Built with</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-secondary/50 text-foreground/80 border border-secondary/50 hover:border-[hsl(207,100%,50%)]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-secondary/50">
                  <a
                    href={app.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[hsl(207,100%,50%)] text-background hover:bg-[hsl(207,100%,55%)] transition-colors font-semibold text-sm"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-secondary transition-colors font-semibold text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
