'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SaaS Platform Dashboard',
      description: 'A comprehensive analytics dashboard for monitoring business metrics in real-time with advanced visualizations and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Node.js'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'Native mobile app built with React Native, featuring seamless shopping experience, payment integration, and push notifications.',
      image: 'https://images.unsplash.com/photo-1512941691920-25bdb3b06329?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Design System Library',
      description: 'A comprehensive design system with reusable React components, comprehensive documentation, and accessibility guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tech: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI capabilities, message history, and intelligent response generation using GPT API.',
      image: 'https://images.unsplash.com/photo-1533750726282-7acf06cf91c5?w=600&h=400&fit=crop',
      tech: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Socket.io', 'Prisma'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Content Management System',
      description: 'Headless CMS with powerful content editing, versioning, and multi-language support for modern web applications.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tech: ['Next.js', 'GraphQL', 'MongoDB', 'Node.js', 'Vercel'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website showcasing projects with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565e6b1?w=600&h=400&fit=crop',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Next.js'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Featured <span className="text-gradient-neon">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A curated collection of projects showcasing full-stack development, premium design, and innovative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden border border-secondary hover:border-[hsl(207,100%,50%)] transition-smooth card-hover"
              >
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-[hsl(207,100%,50%)] text-background rounded-lg hover:bg-[hsl(207,100%,55%)] transition-smooth"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 border border-foreground rounded-lg hover:bg-foreground/10 transition-smooth"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-[hsl(207,100%,50%)] border border-[hsl(207,100%,50%)]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] bg-secondary/20 hover:bg-secondary/40 transition-smooth card-hover flex flex-col"
                >
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-[hsl(207,100%,50%)]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-[hsl(207,100%,50%)]/10 border border-[hsl(207,100%,50%)]/30 rounded-lg hover:bg-[hsl(207,100%,50%)]/20 transition-smooth text-[hsl(207,100%,50%)]"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm border border-secondary rounded-lg hover:border-foreground/50 hover:bg-secondary/50 transition-smooth"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl border border-secondary bg-secondary/30">
          <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
          <p className="text-muted-foreground mb-6">Let's discuss your project and how I can help bring your vision to life.</p>
          <button className="btn-neon-primary">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  )
}
