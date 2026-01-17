'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Soul heart component
function SoulHeart({ size = 'md', animate = true }: { size?: 'sm' | 'md' | 'lg'; animate?: boolean }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      animate={animate ? { scale: [1, 1.15, 1] } : undefined}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#ff0000"
          className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative">
      {/* Battle encounter container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto w-full text-center relative"
      >
        {/* Main Undertale dialog box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="undertale-box px-8 py-12 md:px-16 md:py-16"
        >
          {/* Floating Soul Heart */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SoulHeart size="lg" />
          </motion.div>

          {/* Encounter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <span className="text-[var(--ut-yellow)] text-2xl md:text-3xl" style={{ fontFamily: 'VT323, monospace' }}>
              *
            </span>
            <span className="text-white text-2xl md:text-3xl ml-2" style={{ fontFamily: 'VT323, monospace' }}>
              Mike Deng appeared!
            </span>
          </motion.div>

          {/* Name with glow effect */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] tracking-wide">
              MIKE DENG
            </span>
          </motion.h1>

          {/* Typing animation for roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-2xl md:text-3xl text-[var(--ut-yellow)] mb-8 h-12"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            <TypeAnimation
              sequence={[
                '* Software Engineer',
                2000,
                '* Full-Stack Developer',
                2000,
                '* Machine Learning Dev',
                2000,
                '* Problem Solver',
                2000,
                '* Creative Builder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-xl md:text-2xl text-[var(--foreground-soft)] max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            I build delightful digital experiences with thoughtful design and dependable engineering.
            <br />
            <span className="text-[var(--ut-yellow)]">Let&apos;s create something awesome together.</span>
          </motion.p>

          {/* Battle Menu Style Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="border-t-2 border-white/30 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { href: '/projects', label: 'PROJECTS', icon: '⚔️' },
                { href: '/about', label: 'ABOUT', icon: '💬' },
                { href: '/resume', label: 'RESUME', icon: '📊' },
                { href: '/contact', label: 'CONTACT', icon: '💌' },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="border-[3px] border-white px-6 py-4 transition-all duration-150 group-hover:border-[var(--ut-yellow)] group-hover:bg-[var(--ut-yellow)]/10 group-hover:shadow-[0_0_15px_rgba(255,255,0,0.3)]">
                    <div className="flex items-center justify-center gap-3">
                      {/* Soul cursor on hover */}
                      <motion.span
                        className="text-[var(--ut-red)] opacity-0 group-hover:opacity-100 transition-opacity text-base"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        ❤
                      </motion.span>
                      <span
                        className="text-white group-hover:text-[var(--ut-yellow)] transition-colors text-lg md:text-xl font-bold tracking-widest"
                        style={{ fontFamily: 'VT323, monospace' }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              className="w-4 h-4 border-b-2 border-r-2 border-white/60 rotate-45"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
