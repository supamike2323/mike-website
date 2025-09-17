'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import projects from '@/data/projects';

export default function Projects() {
  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-16 w-80 h-48 bg-[rgba(11,44,52,0.85)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[8deg]" />
        <div className="absolute bottom-32 left-16 w-72 h-44 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[-6deg]" />
      </div>

      <main className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text pixel-text mb-6">
              Project Timeline
            </h1>
            <p className="text-xl text-[var(--foreground-soft)] max-w-3xl mx-auto mb-8">
              Wander through my projects in machine learning, web experiences, and research—fresh harvests appear first.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--foreground-muted)] pixel-text">
              <span>Newest</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Oldest</span>
            </div>
          </motion.header>

          {/* Horizontal Timeline Container */}
          <div className="relative">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-[rgba(130,240,255,0.35)]"></div>
            
            {/* Scrollable Container */}
            <div className="overflow-x-auto pb-8">
              <div className="flex space-x-8 min-w-max px-4">
                {sortedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 w-20 h-20 mb-6">
                      <motion.div
                        className="absolute inset-0 rounded-lg border-[3px] border-[var(--chip-border)] bg-[var(--stardew-gold)] shadow-[4px_4px_0_rgba(2,17,20,0.7)]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-[6px] rounded-md bg-[rgba(7,31,37,0.8)] flex flex-col items-center justify-center pixel-text text-[var(--foreground)]">
                          <span className="text-sm leading-none">
                            {new Date(project.date).getFullYear()}
                          </span>
                          <span className="text-xs leading-none mt-1">
                            {new Date(project.date).toLocaleDateString('en-US', {
                              month: 'short'
                            }).toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Card */}
                    <motion.div 
                      className="w-80 group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={`/projects/${project.id}`}>
                        <div className="pixel-card p-6 transition-all duration-300 cursor-pointer h-full">
                          {/* Project Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <span className="text-sm text-[var(--foreground-muted)] pixel-text">
                                  {new Date(project.date).toLocaleDateString('en-US', { 
                                    month: 'long',
                                    year: 'numeric'
                                  })}
                                </span>
                                <h2 className="text-xl font-bold text-[var(--foreground)] pixel-text mt-1 mb-2 group-hover:text-[var(--stardew-gold)] transition-colors duration-300 line-clamp-2">
                                  {project.title}
                                </h2>
                                <h3 className="text-sm text-[var(--foreground-muted)] font-semibold mb-3 line-clamp-2">
                                  {project.subtitle}
                                </h3>
                              </motion.div>
                            </div>
                            
                            {/* Arrow Icon */}
                            <motion.div
                              className="flex-shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              <svg
                                className="w-5 h-5 text-[var(--foreground)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </motion.div>
                          </div>

                          {/* Project Description */}
                          <p className="text-[var(--foreground-soft)] leading-relaxed mb-4 text-sm line-clamp-4">
                            {project.desc}
                          </p>

                          {/* Technologies */}
                          {project.technologies && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                              className="flex flex-wrap gap-1.5 mb-4"
                            >
                              {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="stardew-chip"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 text-xs text-[var(--foreground)] font-semibold pixel-text">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </motion.div>
                          )}

                          {/* Project Links */}
                          <div className="flex flex-col gap-2 text-xs">
                            <span className="text-[var(--foreground)] font-semibold pixel-text">
                              Click to view details
                            </span>
                            <div className="flex items-center gap-3">
                              {project.link && (
                                <span className="text-[var(--foreground-muted)] flex items-center gap-1 font-semibold">
                                  <span className="w-1.5 h-1.5 bg-[var(--stardew-grass)] rounded-full"></span>
                                  Live Demo
                                </span>
                              )}
                              {project.github && (
                                <span className="text-[var(--foreground-muted)] flex items-center gap-1 font-semibold">
                                  <span className="w-1.5 h-1.5 bg-[var(--stardew-water)] rounded-full"></span>
                                  Source Code
                                </span>
                              )}
                              {project.publication && (
                                <span className="text-[var(--foreground-muted)] flex items-center gap-1 font-semibold">
                                  <span className="w-1.5 h-1.5 bg-[var(--stardew-gold)] rounded-full"></span>
                                  Published Research
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Scroll Hint */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] pixel-text">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Scroll horizontally to see more projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="pixel-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold gradient-text pixel-text mb-4">
                Interested in Collaborating?
              </h2>
              <p className="text-[var(--foreground-soft)] mb-6">
                I'm always open to discussing new opportunities and friendly collaborations.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="stardew-button"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
