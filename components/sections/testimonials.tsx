'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc',
      company: 'TechStartup Inc',
      content:
        'Working with this developer was a game-changer for our project. They understood our vision, communicated clearly, and delivered exceptional results ahead of schedule.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, Digital Agency',
      company: 'Creative Digital',
      content:
        'The attention to detail and focus on user experience was evident in every aspect of the work. Their design thinking combined with technical prowess is rare to find.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Founder, E-Commerce Platform',
      company: 'ShopHub',
      content:
        'Delivered a beautiful, performant e-commerce platform that exceeded our expectations. Highly recommend for any project requiring excellence.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'CTO, FinTech Solutions',
      company: 'FinTech Solutions',
      content:
        'Their backend architecture and API design are solid. They don\'t just write code, they engineer solutions. Great to work with.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Marketing Director, SaaS Company',
      company: 'GrowthTools',
      content:
        'Built our marketing website and dashboard. The results speak for themselves - increased conversions by 40% within the first month.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'James Thompson',
      role: 'Founder, Mobile App Startup',
      company: 'AppFlow',
      content:
        'The mobile app they developed is absolutely polished. User feedback has been overwhelmingly positive, and the codebase is maintainable and scalable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="h-1 w-20 bg-[hsl(207,100%,50%)] rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            What clients say about working with me. Real feedback from real projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl border border-secondary hover:border-[hsl(207,100%,50%)] bg-secondary/20 hover:bg-secondary/40 transition-smooth card-hover flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[hsl(30,100%,50%)] text-[hsl(30,100%,50%)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-secondary">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[hsl(207,100%,50%)]/10 to-[hsl(280,100%,50%)]/10 border border-[hsl(207,100%,50%)]/20 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[hsl(207,100%,50%)] mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(280,100%,50%)] mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(180,100%,50%)] mb-2">
                30+
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">
                8+
              </div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
