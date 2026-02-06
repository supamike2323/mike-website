'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Stats', href: '/stats' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/95 border-b-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
        : 'bg-transparent'
        }`}
    >
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: scrollProgress }}
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-[var(--ut-yellow)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with soul heart */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[var(--ut-red)] text-lg">❤</span>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: 'VT323, monospace' }}
              >
                MIKE
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`group relative px-4 py-3 text-xl transition-all duration-150 ${pathname === item.href
                    ? 'text-[var(--ut-yellow)]'
                    : 'text-white/80 hover:text-[var(--ut-yellow)]'
                    }`}
                  style={{ fontFamily: 'VT323, monospace' }}
                >
                  <span className="flex items-center gap-2">
                    {/* Soul cursor for active item */}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="nav-soul"
                        className="text-[var(--ut-red)] text-sm"
                      >
                        ❤
                      </motion.span>
                    )}
                    {item.name}
                  </span>

                  {/* Hover underline */}
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[var(--ut-yellow)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-white text-white transition-colors hover:border-[var(--ut-yellow)] hover:text-[var(--ut-yellow)]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t-2 border-white"
          >
            <div className="px-4 py-3 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-lg border-2 transition-all duration-150 ${pathname === item.href
                      ? 'border-[var(--ut-yellow)] text-[var(--ut-yellow)]'
                      : 'border-transparent text-white/70 hover:border-white hover:text-white'
                      }`}
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    {pathname === item.href && (
                      <span className="text-[var(--ut-red)]">❤</span>
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
