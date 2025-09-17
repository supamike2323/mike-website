'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const contactData = [
  {
    label: 'Email',
    link: 'mailto:miked232@seas.upenn.edu',
    icon: faEnvelope,
  },
  {
    label: 'Github',
    link: 'https://github.com/supamike2323',
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jiaming-deng-mike/',
    icon: faLinkedin,
  },
  {
    label: 'Twitter',
    link: 'https://x.com/Dhdhdu32091968',
    icon: faTwitter,
  },
];

export function ContactIcons() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-8 pixel-text gradient-text"
        >
          Let's Connect
        </motion.h2>
        
        <div className="flex justify-center space-x-6">
          {contactData.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 pixel-card transition-transform duration-300 hover:-translate-y-2 group"
            >
              <FontAwesomeIcon
                icon={contact.icon}
                className="w-6 h-6 text-[var(--foreground)] group-hover:text-[var(--stardew-gold)] transition-colors duration-300"
              />
              <span className="sr-only">{contact.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
