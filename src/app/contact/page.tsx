'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '@/components/layout/Navigation';
import { Starfield } from '@/components/ui/Starfield';
import { useMode } from '@/context/ModeContext';
import { SimpleContact } from '@/components/simple/SimpleContact';

const contactMethods = [
  {
    icon: faEnvelope,
    label: 'EMAIL',
    value: 'mikedeng@uw.edu',
    href: 'mailto:mikedeng@uw.edu',
    description: 'Send a message'
  },
  {
    icon: faLinkedin,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/mikedeng',
    href: 'https://www.linkedin.com/in/mikedeng/',
    description: 'Connect professionally'
  },
  {
    icon: faGithub,
    label: 'GITHUB',
    value: 'github.com/supamike2323',
    href: 'https://github.com/supamike2323',
    description: 'View source codes'
  },
  {
    icon: faLocationDot,
    label: 'LOCATION',
    value: 'Seattle, WA',
    href: null,
    description: 'Current base'
  }
];

type ContactMethodType = typeof contactMethods[number];

export default function Contact() {
  const { isSimpleMode } = useMode();

  if (isSimpleMode) {
    return <SimpleContact />;
  }

  return (
    <div className="min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative pt-24 pb-16 px-4">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '24px' }}
            >
              TALK
            </h1>
            <p
              className="text-xl text-[var(--ut-yellow)]"
              style={{ fontFamily: 'VT323, monospace' }}
            >
              * You decided to say hello. How will you reach out?
            </p>
          </motion.div>

          {/* Contact Menu - Battle Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="undertale-box p-8 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <ContactOption method={method} />
                    </a>
                  ) : (
                    <ContactOption method={method} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="undertale-box p-8 md:p-12 text-center"
          >
            <h2
              className="text-xl font-bold text-[var(--ut-yellow)] mb-4"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '14px' }}
            >
              LET&apos;S BUILD TOGETHER
            </h2>
            <p
              className="text-white/70 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
            >
              * Whether you have a project in mind, want to discuss opportunities, or just feel like saying hi, I&apos;d love to hear from you!
            </p>
            <motion.a
              href="mailto:miked232@seas.upenn.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black transition-all"
              style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}
            >
              <span className="text-[var(--ut-red)]">❤</span>
              SEND AN EMAIL
            </motion.a>
          </motion.div>

          {/* Social Links - Simplified */}
          <div className="flex justify-center gap-8">
            {contactMethods.filter(m => m.href).map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href!}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-white/50 hover:text-[var(--ut-yellow)] transition-colors"
                title={method.label}
              >
                <span className="sr-only">{method.label}</span>
                <FontAwesomeIcon icon={method.icon as any} className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactOption({ method }: { method: ContactMethodType }) {
  return (
    <div className="p-4 border-2 border-white/30 group-hover:border-[var(--ut-yellow)] transition-all duration-150 cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Soul cursor */}
        <span className="text-[var(--ut-red)] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
          ❤
        </span>

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center border border-white/30 group-hover:border-[var(--ut-yellow)]">
          <FontAwesomeIcon
            icon={method.icon as any}
            className="w-5 h-5 text-white/70 group-hover:text-[var(--ut-yellow)] transition-colors"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-white group-hover:text-[var(--ut-yellow)] transition-colors mb-1"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}
          >
            {method.label}
          </h3>
          <p
            className="text-white/50 truncate"
            style={{ fontFamily: 'VT323, monospace' }}
          >
            {method.value}
          </p>
        </div>

        {/* Action */}
        {method.href && (
          <span
            className="text-white/30 group-hover:text-[var(--ut-yellow)] transition-colors"
            style={{ fontFamily: 'VT323, monospace', fontSize: '14px' }}
          >
            [{method.description}]
          </span>
        )}
      </div>
    </div>
  );
}
