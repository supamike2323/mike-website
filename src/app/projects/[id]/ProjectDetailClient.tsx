'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Project } from '@/data/projects';

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-12 w-80 h-42 bg-[rgba(11,44,52,0.85)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[6deg]" />
        <div className="absolute bottom-36 left-12 w-72 h-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[-7deg]" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 stardew-button-secondary"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Project header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm text-[var(--foreground-muted)] pixel-text">
                {new Date(project.date).getFullYear()}
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text pixel-text mb-6">
              {project.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-[var(--foreground-soft)] mb-8">
              {project.subtitle}
            </h2>
          </motion.header>

          {/* Project visual header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative pixel-card overflow-hidden p-12 text-center">
              <div className="absolute inset-0 opacity-35" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(130,240,255,0.45), rgba(18,88,100,0))' }} />
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-[var(--stardew-gold)] flex items-center justify-center shadow-[6px_6px_0_rgba(2,17,20,0.7)] border-[3px] border-[var(--chip-border)] rounded-lg">
                  <svg className="w-12 h-12 text-[var(--accent-deep)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] pixel-text mb-2">{project.title}</h2>
                <p className="text-[var(--foreground-soft)] text-lg">{project.subtitle}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pixel-card p-8 mb-8"
              >
                <h3 className="text-2xl font-bold gradient-text pixel-text mb-6">
                  Project Overview
                </h3>
                <p className="text-lg text-[var(--foreground-soft)] leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[var(--foreground)] pixel-text mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="stardew-chip"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="stardew-button"
                    >
                      View Live Project
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="stardew-button-secondary"
                    >
                      View Code
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.aside
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pixel-card p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold gradient-text pixel-text mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider pixel-text">
                      Date
                    </h4>
                    <p className="text-[var(--foreground-soft)]">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider pixel-text">
                      Category
                    </h4>
                    <p className="text-[var(--foreground-soft)]">
                      {project.technologies?.[0] || 'Development'}
                    </p>
                  </div>
                  {project.technologies && (
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider pixel-text">
                        Tech Stack
                      </h4>
                      <p className="text-[var(--foreground-soft)] text-sm">
                        {project.technologies.join(', ')}
                      </p>
                    </div>
                  )}
                  {project.publication && (
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider pixel-text">
                        Publication
                      </h4>
                      <div className="space-y-2">
                        <p className="text-[var(--foreground)] text-sm font-medium">
                          {project.publication.title}
                        </p>
                        <p className="text-[var(--foreground-muted)] text-xs">
                          {project.publication.authors}
                        </p>
                        <p className="text-[var(--foreground-muted)] text-xs">
                          {project.publication.venue}
                        </p>
                        <a 
                          href={project.publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[var(--foreground)] hover:text-[var(--stardew-gold)] text-xs mt-2 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Publication
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
