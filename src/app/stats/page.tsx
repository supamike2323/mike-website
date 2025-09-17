'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

const stats = [
  {
    label: 'Projects Completed',
    value: '5',
    icon: '🚜',
  },
  {
    label: 'Lines of Code',
    value: '50K+',
    icon: '💻',
  },
  {
    label: 'Research Papers',
    value: '1',
    icon: '📄',
  },
  {
    label: 'Coffee Cups',
    value: '∞',
    icon: '☕',
  },
];

const personalStats = [
  { label: 'Current Location', value: 'Philadelphia, PA' },
  { label: 'Hometown', value: 'Seattle, WA' },
  { label: 'Age', value: 22 },
  { label: 'Languages', value: 'English, Mandarin' },
  { label: 'Favorite Editor', value: 'VS Code' },
  { label: 'Preferred OS', value: 'macOS' },
  { label: 'Coding Since', value: '2018' },
  { label: 'Current Obsession', value: 'LLMs & AI' },
];

const technologies = [
  { name: 'Python', proficiency: 95, color: 'bg-[var(--stardew-wood)]' },
  { name: 'JavaScript/TypeScript', proficiency: 90, color: 'bg-[var(--stardew-gold)]' },
  { name: 'React/Next.js', proficiency: 88, color: 'bg-[var(--stardew-water)]' },
  { name: 'Machine Learning', proficiency: 85, color: 'bg-[var(--stardew-grass)]' },
  { name: 'AWS/Cloud', proficiency: 80, color: 'bg-[#90c3d8]' },
  { name: 'SQL/Databases', proficiency: 82, color: 'bg-[#d6a16c]' },
  { name: 'Django/FastAPI', proficiency: 78, color: 'bg-[#b5734f]' },
  { name: 'Docker/K8s', proficiency: 75, color: 'bg-[#7fa5c3]' },
];

export default function Stats() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-36 right-12 w-80 h-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[7deg]" />
        <div className="absolute bottom-40 left-14 w-72 h-40 bg-[rgba(11,44,52,0.8)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[-8deg]" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text pixel-text mb-6">
              Stats & Facts
            </h1>
            <p className="text-xl text-[var(--foreground-soft)] max-w-3xl mx-auto">
              A cozy ledger of the things I have built, learned, and enjoyed along the way.
            </p>
          </motion.header>

          {/* Achievement Stats */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="pixel-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-[var(--foreground)] pixel-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal Stats */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold gradient-text pixel-text mb-8">About Me</h2>
              <div className="pixel-card rounded-2xl p-6">
                <div className="space-y-4">
                  {personalStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                      className="flex justify-between items-center py-2 border-b border-[rgba(130,240,255,0.22)] last:border-b-0"
                    >
                      <span className="text-[var(--foreground-muted)]">
                        {stat.label}
                      </span>
                      <span className="font-semibold text-[var(--foreground)]">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Technology Proficiency */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold gradient-text pixel-text mb-8">Technology Proficiency</h2>
              <div className="pixel-card rounded-2xl p-6">
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--foreground)] font-medium">
                          {tech.name}
                        </span>
                        <span className="text-sm text-[var(--foreground-muted)]">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-[rgba(130,240,255,0.2)] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1.5, delay: 1.2 + index * 0.1, ease: 'easeOut' }}
                          className={`h-2 rounded-full ${tech.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Fun Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold gradient-text pixel-text mb-8 text-center">Fun Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎮',
                  title: 'Gamer',
                  description: 'Love strategy games and RPGs in my free time',
                },
                {
                  icon: '📚',
                  title: 'Continuous Learner',
                  description: 'Always reading about new technologies and research',
                },
                {
                  icon: '🌮',
                  title: 'Food Explorer',
                  description: 'Constantly searching for the best local food spots',
                },
                {
                  icon: '🏃‍♂️',
                  title: 'Runner',
                  description: 'Enjoy morning runs to clear my mind',
                },
                {
                  icon: '🎵',
                  title: 'Music Lover',
                  description: 'Code better with the right playlist',
                },
                {
                  icon: '🧠',
                  title: 'AI Enthusiast',
                  description: 'Fascinated by the potential of artificial intelligence',
                },
              ].map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="pixel-card rounded-2xl p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {fact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {fact.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
