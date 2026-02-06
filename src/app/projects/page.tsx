'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Starfield } from '@/components/ui/Starfield';
import projects from '@/data/projects';
import { useMode } from '@/context/ModeContext';
import { SimpleProjects } from '@/components/simple/SimpleProjects';

export default function Projects() {
  const { isSimpleMode } = useMode();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // If in Simple Mode, show the professional view
  if (isSimpleMode) {
    return <SimpleProjects />;
  }

  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const selected = sortedProjects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative pt-24 pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '24px' }}
            >
              INVENTORY
            </h1>
            <p
              className="text-2xl text-[var(--ut-yellow)] max-w-3xl mx-auto"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              * You opened your inventory. Select an item to inspect.
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Grid - Inventory Style */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="undertale-box p-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {sortedProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      onClick={() => setSelectedProject(project.id)}
                      className={`group cursor-pointer p-4 border-[3px] transition-all duration-150 ${selectedProject === project.id
                        ? 'border-[var(--ut-yellow)] bg-[var(--ut-yellow)]/10'
                        : 'border-white/50 hover:border-white'
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Selection indicator */}
                        <span className={`text-[var(--ut-red)] text-sm mt-1 transition-opacity ${selectedProject === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                          }`}>
                          ❤
                        </span>

                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-sm font-bold mb-1 transition-colors line-clamp-2 ${selectedProject === project.id ? 'text-[var(--ut-yellow)]' : 'text-white group-hover:text-[var(--ut-yellow)]'
                              }`}
                            style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-white/70 text-sm"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            {new Date(project.date).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Project Details Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="undertale-box p-6 sticky top-24"
              >
                <AnimatePresence mode="wait">
                  {selected ? (
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Item Header */}
                      <div className="border-b border-white/30 pb-4 mb-4">
                        <h2
                          className="text-[var(--ut-yellow)] text-lg mb-2"
                          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '12px' }}
                        >
                          {selected.title}
                        </h2>
                        <p
                          className="text-white/70"
                          style={{ fontFamily: 'VT323, monospace' }}
                        >
                          {selected.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <p
                          className="text-white/90 leading-relaxed text-lg"
                          style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
                        >
                          <span className="text-[var(--ut-yellow)]">* </span>
                          {selected.desc}
                        </p>
                      </div>

                      {/* Technologies */}
                      {selected.technologies && (
                        <div className="mb-6">
                          <h4
                            className="text-white/50 text-xs mb-2"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            EQUIPPED SKILLS
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selected.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 border border-white/60 text-white text-sm"
                                style={{ fontFamily: 'VT323, monospace' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="space-y-2">
                        <Link href={`/projects/${selected.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 py-3 border-2 border-white text-white hover:border-[var(--ut-yellow)] hover:text-[var(--ut-yellow)] transition-all text-left flex items-center gap-2"
                            style={{ fontFamily: 'VT323, monospace' }}
                          >
                            <span className="text-[var(--ut-red)]">❤</span>
                            VIEW DETAILS
                          </motion.button>
                        </Link>

                        {selected.link && (
                          <a href={selected.link} target="_blank" rel="noopener noreferrer">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-4 py-3 border-2 border-white/50 text-white/70 hover:border-white hover:text-white transition-all text-left"
                              style={{ fontFamily: 'VT323, monospace' }}
                            >
                              LIVE DEMO
                            </motion.button>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12"
                    >
                      <p
                        className="text-white/50"
                        style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}
                      >
                        * Select an item from your inventory
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="undertale-box p-8 max-w-2xl mx-auto">
              <h2
                className="text-xl font-bold text-[var(--ut-yellow)] mb-4"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
              >
                WANT TO COLLABORATE?
              </h2>
              <p
                className="text-white/70 mb-6"
                style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
              >
                * I&apos;m always open to discussing new opportunities!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black transition-all"
                  style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
                >
                  ❤ GET IN TOUCH
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
