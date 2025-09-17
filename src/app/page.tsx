'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ContactIcons } from '@/components/ContactIcons';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navigation />

      <main className="relative">
        <Hero />
        
        {/* Quick Navigation Section */}
        <motion.section 
          className="py-20 px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden md:block absolute -top-10 left-10 h-16 w-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[4px_4px_0_rgba(2,17,20,0.7)] rotate-[-4deg]" />
            <div className="hidden md:block absolute -bottom-12 right-12 h-16 w-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[4px_4px_0_rgba(2,17,20,0.7)] rotate-[5deg]" />
          </div>
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/about', title: 'About', desc: 'Learn more about me', icon: '👨‍💻' },
              { href: '/projects', title: 'Projects', desc: 'See my work', icon: '🚀' },
              { href: '/resume', title: 'Resume', desc: 'My experience', icon: '📄' },
              { href: '/contact', title: 'Contact', desc: 'Get in touch', icon: '📧' },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="pixel-card p-6 transition-transform duration-300 hover:-translate-y-3">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 pixel-text text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-[var(--foreground-soft)] text-sm font-semibold">
                      {item.desc}
                    </p>
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
