'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '@/components/Navigation';

const contactMethods = [
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'miked232@seas.upenn.edu',
    href: 'mailto:miked232@seas.upenn.edu',
    color: 'text-[var(--stardew-gold)]',
  },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    value: '/in/jiaming-deng-mike',
    href: 'https://www.linkedin.com/in/jiaming-deng-mike/',
    color: 'text-[var(--stardew-gold)]',
  },
  {
    icon: faGithub,
    label: 'GitHub',
    value: '/supamike2323',
    href: 'https://github.com/supamike2323',
    color: 'text-[var(--stardew-gold)]',
  },
  {
    icon: faLocationDot,
    label: 'Location',
    value: 'Philadelphia, PA',
    href: null,
    color: 'text-[var(--stardew-gold)]',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-12 w-72 h-40 bg-[rgba(11,44,52,0.85)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[6deg]" />
        <div className="absolute bottom-32 left-14 w-72 h-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[8px_8px_0_rgba(2,17,20,0.7)] rotate-[-7deg]" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text pixel-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-[var(--foreground-soft)] max-w-2xl mx-auto">
              I'm always excited to chat about thoughtful projects, friendly collaborations, or farming tips for your next app idea.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-8 pixel-card rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    <ContactMethodContent method={method} />
                  </a>
                ) : (
                  <div className="p-8 pixel-card rounded-2xl">
                    <ContactMethodContent method={method} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pixel-card rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text pixel-text mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-[var(--foreground-soft)] mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, 
              or just feel like saying hi, I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:miked232@seas.upenn.edu"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="stardew-button"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-3" />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function ContactMethodContent({ method }: { method: any }) {
  return (
    <div className="flex items-center space-x-6">
      <div className={`flex-shrink-0 w-16 h-16 ${method.color} bg-current bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <FontAwesomeIcon 
          icon={method.icon} 
          className={`w-8 h-8 ${method.color}`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
          {method.label}
        </h3>
        <p className="text-[var(--foreground-soft)] truncate">
          {method.value}
        </p>
      </div>
      {method.href && (
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
