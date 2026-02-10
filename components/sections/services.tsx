'use client'

import { useState } from 'react'
import { ChevronDown, Globe, Smartphone, Palette, Zap, Code, Search } from 'lucide-react'

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  const services = [
    {
      id: 0,
      title: 'Web Development',
      icon: Globe,
      shortDesc: 'Modern, fast, and scalable web applications',
      fullDesc: 'I build high-performance web applications using the latest technologies. From single-page applications to full-stack solutions, I ensure your web presence is fast, secure, and user-friendly.',
      deliverables: [
        'Custom web applications',
        'Progressive web apps (PWA)',
        'API development and integration',
        'Database design and optimization',
        'Performance optimization',
      ],
    },
    {
      id: 1,
      title: 'Mobile App Development',
      icon: Smartphone,
      shortDesc: 'Native and cross-platform mobile solutions',
      fullDesc: 'Create engaging mobile experiences for iOS and Android. I develop robust native and cross-platform applications that users love.',
      deliverables: [
        'React Native applications',
        'Native iOS/Android apps',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
      ],
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: Palette,
      shortDesc: 'Beautiful and intuitive user interfaces',
      fullDesc: 'Design is at the heart of everything I do. I create stunning interfaces that are not just beautiful but also highly functional and accessible.',
      deliverables: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design systems',
        'Interaction design',
        'Accessibility compliance',
      ],
    },
    {
      id: 3,
      title: 'Performance Optimization',
      icon: Zap,
      shortDesc: 'Lightning-fast loading and smooth interactions',
      fullDesc: 'Every millisecond counts. I optimize your applications for maximum speed and efficiency across all devices and network conditions.',
      deliverables: [
        'Core Web Vitals optimization',
        'Image and code optimization',
        'Caching strategies',
        'CDN implementation',
        'Monitoring and analytics',
      ],
    },
    {
      id: 4,
      title: 'Backend Development',
      icon: Code,
      shortDesc: 'Robust server-side solutions and APIs',
      fullDesc: 'Build scalable backend systems that power your applications. I create RESTful APIs, microservices, and real-time solutions.',
      deliverables: [
        'RESTful API design',
        'Database architecture',
        'Authentication systems',
        'Real-time features',
        'Server deployment and DevOps',
      ],
    },
    {
      id: 5,
      title: 'SEO & Optimization',
      icon: Search,
      shortDesc: 'Increase visibility and drive organic traffic',
      fullDesc: 'I implement best practices in SEO, analytics, and conversion optimization to help your digital presence reach its full potential.',
      deliverables: [
        'Technical SEO audit',
        'On-page optimization',
        'Schema markup implementation',
        'Analytics setup',
        'Conversion rate optimization',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services
          </h2>
          <div className="h-1 w-20 bg-[hsl(207,100%,50%)] rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            Comprehensive solutions to bring your ideas to life, from concept to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 max-w-3xl">
          {services.map((service) => {
            const Icon = service.icon
            const isExpanded = expandedId === service.id

            return (
              <div
                key={service.id}
                className="rounded-xl border border-secondary overflow-hidden transition-smooth"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-6 md:p-8 hover:bg-secondary/30 transition-smooth text-left flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="mt-1">
                    <Icon
                      size={28}
                      className="text-[hsl(207,100%,50%)]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.shortDesc}</p>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`mt-2 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={24} className="text-[hsl(207,100%,50%)]" />
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-secondary bg-secondary/20">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: 'hsl(207, 100%, 50%)',
                              }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 btn-neon-secondary">
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t border-secondary">
          <h3 className="text-3xl font-bold mb-12">How I Work</h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, users, and requirements through consultation and research.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating wireframes, prototypes, and visual designs for approval and feedback.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building high-quality, tested code following best practices and standards.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploying to production, monitoring performance, and providing ongoing support.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative"
              >
                <div className="text-5xl font-bold text-[hsl(207,100%,50%)]/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Connector line */}
                {item.step !== '04' && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[hsl(207,100%,50%)] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
