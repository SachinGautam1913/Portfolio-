'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background with grid and particles */}
      <div className="absolute inset-0">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-15" />
        
        {/* Animated gradient blobs */}
        <div className="absolute top-32 left-0 w-96 h-96 bg-[hsl(207,100%,50%)] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" 
             style={{
               animation: 'float 8s ease-in-out infinite',
             }} />
        <div className="absolute bottom-32 right-0 w-96 h-96 bg-[hsl(280,100%,50%)] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
             style={{
               animation: 'float 6s ease-in-out infinite reverse',
             }} />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[hsl(180,100%,50%)] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
             style={{
               animation: 'float 10s ease-in-out infinite',
             }} />

        {/* Animated particles */}
        {isLoaded && (
          <>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[hsl(207,100%,50%)] rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left column - Text */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Greeting badge */}
            <div className="mb-8 inline-block">
              <div className="flex items-center gap-2 text-sm font-mono text-[hsl(180,100%,50%)] bg-[hsl(180,100%,50%)]/5 px-4 py-2 rounded-full border border-[hsl(180,100%,50%)]/30">
                <Sparkles size={16} />
                Welcome to my digital space
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight text-balance">
              I <span className="text-gradient-neon">build</span> the future
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-[hsl(180,100%,50%)]/80 mb-6 font-semibold">
              Full-Stack Developer • UI/UX Designer • Tech Builder
            </h2>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg text-pretty">
              Crafting high-performance, visually stunning digital products. From concept to deployment, I create solutions that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-neon-primary group"
              >
                View My Work
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-neon-secondary"
              >
                Hire Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 border-t border-secondary">
              <p className="text-muted-foreground text-sm font-medium">Let's connect</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-[hsl(207,100%,50%)]/10 transition-smooth group"
                >
                  <Github size={20} className="group-hover:text-[hsl(207,100%,50%)] transition-colors" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-[hsl(207,100%,50%)]/10 transition-smooth group"
                >
                  <Linkedin size={20} className="group-hover:text-[hsl(207,100%,50%)] transition-colors" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="p-3 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-[hsl(207,100%,50%)]/10 transition-smooth group"
                >
                  <Mail size={20} className="group-hover:text-[hsl(207,100%,50%)] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className={`relative h-[600px] lg:h-[700px] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{
                 transitionDelay: '200ms',
               }}>
            
            {/* Glowing border frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(207,100%,50%)] via-transparent to-[hsl(280,100%,50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                 style={{
                   padding: '2px',
                   animation: 'glow-pulse 3s ease-in-out infinite',
                 }}>
              <div className="absolute inset-0 bg-background rounded-2xl" />
            </div>

            {/* Image with parallax effect */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-secondary/50 hover:border-[hsl(207,100%,50%)]/50 transition-all duration-500 group"
                 style={{
                   transform: `translateY(${mousePosition.y * 0.02}px) translateX(${mousePosition.x * 0.02}px)`,
                   transition: 'transform 0.1s ease-out, border-color 0.5s ease-out',
                 }}>
              
              <Image
                src="https://c4.wallpaperflare.com/wallpaper/835/254/325/gigabyte-aorus-logo-pc-gaming-wallpaper-preview.jpg"
                alt="Futuristic tech workspace with holographic UI and neon elements"
                fill
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Floating glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(207 100% 50% / 0.2), transparent 80%)',
                   }} />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-[hsl(207,100%,50%)] rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-[hsl(280,100%,50%)] rounded-bl-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Floating badge */}
            <div className="absolute -bottom-6 right-8 bg-card border border-secondary px-6 py-3 rounded-xl shadow-xl backdrop-blur-sm hover:shadow-2xl transition-shadow hover:border-[hsl(207,100%,50%)]"
                 style={{
                   animation: 'float 4s ease-in-out infinite',
                 }}>
              <p className="text-sm font-semibold text-foreground">
                <span className="text-[hsl(207,100%,50%)]">●</span> Open for opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-[hsl(207,100%,50%)] rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[hsl(207,100%,50%)] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
