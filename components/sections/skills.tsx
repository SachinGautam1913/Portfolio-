'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'hsl(207, 100%, 50%)',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    },
    {
      title: 'Backend',
      color: 'hsl(280, 100%, 50%)',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & Platforms',
      color: 'hsl(180, 100%, 50%)',
      skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Firebase', 'Figma'],
    },
    {
      title: 'Design',
      color: 'hsl(30, 100%, 50%)',
      skills: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'A/B Testing', 'Accessibility'],
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
            Skills & Tech Stack
          </h2>
          <div className="h-1 w-20 bg-[hsl(207,100%,50%)] rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            A comprehensive toolkit of technologies and expertise I've mastered to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-xl border border-secondary hover:border-[hsl(207,100%,50%)] bg-secondary/30 hover:bg-secondary/50 transition-smooth card-hover group"
              style={{
                borderColor: `${category.color}20`,
              }}
            >
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg border text-sm font-medium transition-smooth"
                    style={{
                      borderColor: `${category.color}40`,
                      color: category.color,
                      backgroundColor: `${category.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency levels */}
        <div className="bg-secondary/30 border border-secondary rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          
          <div className="space-y-8">
            {[
              { label: 'Advanced', value: 90, color: 'hsl(207, 100%, 50%)' },
              { label: 'Intermediate', value: 75, color: 'hsl(280, 100%, 50%)' },
              { label: 'Learning', value: 60, color: 'hsl(180, 100%, 50%)' },
            ].map((level) => (
              <div key={level.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{level.label}</span>
                  <span className="text-sm text-muted-foreground">{level.value}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${level.value}%`,
                      backgroundColor: level.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[hsl(207,100%,50%)]/10 to-[hsl(280,100%,50%)]/10 border border-[hsl(207,100%,50%)]/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, languages, and best practices to stay at the forefront of web development.
          </p>
          <button className="btn-neon-primary">
            Check My GitHub
          </button>
        </div>
      </div>
    </section>
  )
}
