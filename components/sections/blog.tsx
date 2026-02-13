'use client'

import { ArrowRight, Calendar, Tag } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      title: 'Building Scalable Web Applications with Next.js 14',
      excerpt: 'Explore advanced patterns for building performant, scalable applications with the latest Next.js features and best practices.',
      date: 'Mar 15, 2024',
      category: 'Next.js',
      readTime: '5 min read',
      slug: '#',
      featured: true,
    },
    {
      title: 'The Future of Web Performance: Core Web Vitals Optimization',
      excerpt: 'Deep dive into optimizing Core Web Vitals and achieving excellent performance scores.',
      date: 'Mar 10, 2024',
      category: 'Performance',
      readTime: '6 min read with code examples',
      slug: '#',
    },
    {
      title: 'React Server Components: A Game Changer for Full-Stack Development',
      excerpt: 'Understanding RSC and how it transforms the way we build full-stack applications.',
      date: 'Feb 28, 2024',
      category: 'React',
      readTime: '7 min read',
      slug: '#',
    },
    {
      title: 'UI/UX Design Principles for Developer-Built Products',
      excerpt: 'Essential design principles every developer should know to create beautiful interfaces.',
      date: 'Feb 20, 2024',
      category: 'Design',
      readTime: '5 min read',
      slug: '#',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Latest <span className="text-gradient-neon">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Insights, tutorials, and thoughts on web development, design, and technology trends.
          </p>
        </div>

        {/* Featured post */}
        <div className="mb-12">
          <div className="group relative overflow-hidden rounded-xl border border-secondary bg-gradient-to-br from-secondary/20 via-background to-background hover:border-[hsl(207,100%,50%)] transition-smooth">
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(207,100%,50%)] to-[hsl(180,100%,50%)] opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />

            {/* Content */}
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(207,100%,50%)]/10 text-[hsl(207,100%,50%)] border border-[hsl(207,100%,50%)]/30">
                    <Tag size={14} />
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient-neon transition-all">
                  {posts[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {posts[0].excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {posts[0].date}
                  </span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>

              <a
                href={posts[0].slug}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[hsl(207,100%,50%)] text-background hover:bg-[hsl(207,100%,55%)] transition-colors font-semibold whitespace-nowrap"
              >
                Read Article
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, index) => (
            <a
              key={index}
              href={post.slug}
              className="group relative overflow-hidden rounded-xl border border-secondary bg-card/30 backdrop-blur-sm hover:border-[hsl(207,100%,50%)] transition-smooth hover:bg-card/50"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[hsl(207,100%,50%)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                
                {/* Category tag */}
                <div className="mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(180,100%,50%)]/10 text-[hsl(180,100%,50%)] border border-[hsl(180,100%,50%)]/30">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient-neon transition-all">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary/50 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[hsl(207,100%,50%)] hover:text-[hsl(207,100%,55%)] font-semibold transition-colors group"
          >
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
