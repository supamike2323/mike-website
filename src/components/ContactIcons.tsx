'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
  { icon: faGithub, href: 'https://github.com/supamike2323', label: 'GitHub' },
  { icon: faLinkedin, href: 'https://linkedin.com/in/mikedeng', label: 'LinkedIn' },
  { icon: faTwitter, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: faEnvelope as typeof faGithub, href: 'mailto:contact@mikedeng.com', label: 'Email' },
] as const;

export function ContactIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <div className="undertale-box px-6 py-3">
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="w-5 h-5 text-white/70 group-hover:text-[var(--ut-yellow)] transition-colors duration-150"
              />

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-[var(--ut-yellow)] text-[var(--ut-yellow)] text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                style={{ fontFamily: 'VT323, monospace' }}
              >
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
