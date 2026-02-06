'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Starfield } from '@/components/ui/Starfield';

const stats = [
  { label: 'Projects', value: '8', icon: '⚔️' },
  { label: 'Lines of Code', value: '50K+', icon: '💻' },
  { label: 'Research Papers', value: '1', icon: '📜' },
  { label: 'Coffee Cups', value: '∞', icon: '☕' },
];

const personalStats = [
  { label: 'Location', value: 'Philadelphia, PA' },
  { label: 'Hometown', value: 'Seattle, WA' },
  { label: 'Age', value: '22' },
  { label: 'Languages', value: 'English, Mandarin' },
  { label: 'Favorite Editor', value: 'VS Code' },
  { label: 'OS', value: 'macOS' },
  { label: 'Coding Since', value: '2018' },
  { label: 'Current Focus', value: 'LLMs & AI' },
];

const technologies = [
  { name: 'Python', proficiency: 95 },
  { name: 'JavaScript/TypeScript', proficiency: 90 },
  { name: 'React/Next.js', proficiency: 88 },
  { name: 'Machine Learning', proficiency: 85 },
  { name: 'AWS/Cloud', proficiency: 80 },
  { name: 'SQL/Databases', proficiency: 82 },
  { name: 'Django/FastAPI', proficiency: 78 },
  { name: 'Docker/K8s', proficiency: 75 },
];

const funFacts = [
  { icon: '🎮', title: 'Gamer', desc: 'Strategy games and RPGs' },
  { icon: '📚', title: 'Learner', desc: 'Always reading tech papers' },
  { icon: '🌮', title: 'Foodie', desc: 'Best local food spots' },
  { icon: '🏃‍♂️', title: 'Runner', desc: 'Morning runs daily' },
  { icon: '🎵', title: 'Music', desc: 'Code with playlists' },
  { icon: '🧠', title: 'AI Fan', desc: 'Fascinated by AI potential' },
];

export default function Stats() {
  return (
    <div className="min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative pt-24 pb-16 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
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
              STATS & FACTS
            </h1>
            <p
              className="text-xl text-[var(--ut-yellow)]"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              * You viewed your save file.
            </p>
          </motion.header>

          {/* Achievement Stats */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="undertale-box p-6 text-center group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div
                    className="text-2xl text-[var(--ut-yellow)] mb-1"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '16px' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/60 text-sm"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal Stats */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2
                className="text-xl font-bold text-[var(--ut-yellow)] mb-6"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
              >
                ABOUT ME
              </h2>
              <div className="undertale-box p-6">
                <div className="space-y-3">
                  {personalStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                    >
                      <span
                        className="text-white/50"
                        style={{ fontFamily: 'VT323, monospace' }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className="text-white"
                        style={{ fontFamily: 'VT323, monospace' }}
                      >
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Technology Proficiency */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2
                className="text-xl font-bold text-[var(--ut-yellow)] mb-6"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
              >
                TECH PROFICIENCY
              </h2>
              <div className="undertale-box p-6">
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className="text-white"
                          style={{ fontFamily: 'VT323, monospace' }}
                        >
                          {tech.name}
                        </span>
                        <span
                          className="text-white/50 text-sm"
                          style={{ fontFamily: 'VT323, monospace' }}
                        >
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="h-3 border border-white/30">
                        <motion.div
                          className="h-full bg-[var(--ut-yellow)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Fun Facts */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <h2
              className="text-xl font-bold text-[var(--ut-yellow)] mb-6 text-center"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
            >
              FUN FACTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="undertale-box p-4 text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {fact.icon}
                  </div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}
                  >
                    {fact.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    {fact.desc}
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
