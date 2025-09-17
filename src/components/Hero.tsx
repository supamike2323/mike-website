'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-[3px] border-[var(--chip-border)]"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(130,240,255,0.85) 0%, rgba(61,180,196,0.7) 65%, rgba(18,88,100,0.9) 100%)',
            boxShadow: '0 0 96px rgba(82, 214, 228, 0.55)'
          }}
        />
        <div className="absolute top-10 left-[12%] w-24 h-12 bg-[rgba(130,240,255,0.28)] rounded-full blur-md" />
        <div className="absolute top-20 right-[10%] w-32 h-14 bg-[rgba(61,180,196,0.22)] rounded-full blur-lg" />
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pixel-card px-6 py-10 md:px-12 md:py-14 space-y-8"
        >
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[var(--foreground)] pixel-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi!, I'm
            <span className="gradient-text block mt-3">
              Mike Deng
            </span>
          </motion.h1>

          {/* Type animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-[var(--foreground)] pixel-text h-8 pixel-glow"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full-Stack Dev',
                2000,
                'Data Engineer',
                2000,
                'Machine Learning Dev',
                2000,
                'Problem Solver',
                2000,
                'Creative Thinker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-[var(--foreground-soft)] max-w-2xl mx-auto leading-relaxed"
          >
            I cultivate delightful digital experiences by blending thoughtful design, pixel artsy vibes, and dependable engineering.
            Let’s build something warm, welcoming, and a little whimsical.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="stardew-button"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="stardew-button-secondary"
            >
              Say Hello
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="px-4 py-3 rounded-full border-[3px] border-[var(--chip-border)] bg-[rgba(11,44,52,0.85)] shadow-[4px_4px_0_rgba(2,17,20,0.75)] pixel-text text-xs text-[var(--foreground-soft)]"
          >
            Scroll Down
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
