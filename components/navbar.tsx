'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Services', href: 'services' },
    { label: 'Apps', href: 'apps' },
    { label: 'Blog', href: 'blog' },
    { label: 'Contact', href: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-secondary">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gradient-neon cursor-pointer transition-smooth hover:opacity-80"
          >
            Dev.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-smooth relative ${
                  activeSection === link.href
                    ? 'text-[hsl(207,100%,50%)]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[hsl(207,100%,50%)]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-neon-primary"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-smooth ${
                  activeSection === link.href
                    ? 'bg-secondary text-[hsl(207,100%,50%)]'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-neon-primary w-full"
            >
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
