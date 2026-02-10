'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something Amazing
          </h2>
          <div className="h-1 w-20 bg-[hsl(207,100%,50%)] rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about it. I'm always excited to collaborate on new ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(207,100%,50%)]/10 to-[hsl(280,100%,50%)]/10 rounded-xl blur-2xl" />
            
            <form
              onSubmit={handleSubmit}
              className="relative p-8 md:p-12 rounded-xl border border-secondary bg-background/50 backdrop-blur-sm space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary bg-secondary/30 focus:bg-secondary/50 focus:border-[hsl(207,100%,50%)] focus:outline-none focus:ring-2 focus:ring-[hsl(207,100%,50%)]/20 transition-smooth text-foreground placeholder-muted-foreground"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary bg-secondary/30 focus:bg-secondary/50 focus:border-[hsl(207,100%,50%)] focus:outline-none focus:ring-2 focus:ring-[hsl(207,100%,50%)]/20 transition-smooth text-foreground placeholder-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary bg-secondary/30 focus:bg-secondary/50 focus:border-[hsl(207,100%,50%)] focus:outline-none focus:ring-2 focus:ring-[hsl(207,100%,50%)]/20 transition-smooth text-foreground placeholder-muted-foreground"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-secondary bg-secondary/30 focus:bg-secondary/50 focus:border-[hsl(207,100%,50%)] focus:outline-none focus:ring-2 focus:ring-[hsl(207,100%,50%)]/20 transition-smooth text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full btn-neon-primary flex items-center justify-center gap-2 ${
                  submitted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            {/* Email */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(207,100%,50%)]/10 border border-[hsl(207,100%,50%)]/30 flex items-center justify-center">
                  <Mail size={24} className="text-[hsl(207,100%,50%)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-[hsl(207,100%,50%)] transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Follow Me</h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', url: 'https://github.com' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                ].map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-secondary hover:border-[hsl(207,100%,50%)] hover:bg-secondary/50 transition-smooth group"
                  >
                    <Icon
                      size={20}
                      className="text-muted-foreground group-hover:text-[hsl(207,100%,50%)] transition-colors"
                    />
                    <span className="group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-lg border border-[hsl(180,100%,50%)]/30 bg-[hsl(180,100%,50%)]/10">
              <h3 className="font-bold mb-2">Availability</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Currently available for new projects and collaborations.
              </p>
              <p className="text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-[hsl(180,100%,50%)] mr-2" />
                Open to remote and on-site opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground">
            I typically respond within 24 hours. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  )
}
