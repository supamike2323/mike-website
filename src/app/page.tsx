'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ContactIcons } from '@/components/ContactIcons';
import { Starfield } from '@/components/Starfield';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative">
        <Hero />

        {/* Quick Navigation Section - Undertale Battle Menu Style */}
        <motion.section
          className="py-20 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="text-[var(--ut-yellow)] text-xl"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              * What will you do?
            </span>
          </motion.div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { href: '/about', title: 'CHECK', desc: 'Learn about my stats', icon: '📊' },
              { href: '/projects', title: 'ITEMS', desc: 'View my collection', icon: '🎒' },
              { href: '/resume', title: 'STATS', desc: 'See my experience', icon: '⚔️' },
              { href: '/contact', title: 'TALK', desc: 'Say hello!', icon: '💬' },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="undertale-box p-6 transition-all duration-200 hover:border-[var(--ut-yellow)] hover:shadow-[0_0_25px_rgba(255,255,0,0.2)] cursor-pointer">
                    <div className="flex items-start gap-4">
                      {/* Soul cursor on hover */}
                      <motion.span
                        className="text-[var(--ut-red)] opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        ❤
                      </motion.span>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <h3
                            className="text-xl text-white group-hover:text-[var(--ut-yellow)] transition-colors"
                            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className="text-white/70 group-hover:text-white/90 transition-colors"
                          style={{ fontFamily: 'VT323, monospace', fontSize: '18px' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ContactIcons />
      </main>
    </div>
  );
}
