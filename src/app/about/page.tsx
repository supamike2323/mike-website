'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { Navigation } from '@/components/Navigation';

export default function About() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/about.md')
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => {
        setMarkdown('Content not found');
        setLoading(false);
      });
  }, []);

  const wordCount = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-64 h-40 bg-[rgba(11,44,52,0.82)] border-[3px] border-[var(--chip-border)] shadow-[6px_6px_0_rgba(2,17,20,0.7)] rotate-[6deg]" />
        <div className="absolute bottom-36 left-12 w-52 h-32 bg-[rgba(11,44,52,0.78)] border-[3px] border-[var(--chip-border)] shadow-[6px_6px_0_rgba(2,17,20,0.65)] rotate-[-5deg]" />
      </div>

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text pixel-text mb-4">
                About Me
              </h1>
              {!loading && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[var(--foreground-muted)] pixel-text"
                >
                  (in about {wordCount} words)
                </motion.p>
              )}
            </motion.header>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-2 border-[var(--stardew-wood)] border-t-transparent rounded-full"
                  />
                </div>
              ) : (
                <Markdown
                  options={{
                    overrides: {
                      h1: {
                        props: {
                          className: 'text-3xl font-bold gradient-text pixel-text mb-6 mt-8',
                        },
                      },
                      h2: {
                        props: {
                          className: 'text-2xl font-semibold text-[var(--foreground)] pixel-text mb-4 mt-8',
                        },
                      },
                      h3: {
                        props: {
                          className: 'text-xl font-semibold text-[var(--foreground)] pixel-text mb-3 mt-6',
                        },
                      },
                      p: {
                        props: {
                          className: 'text-[var(--foreground-soft)] leading-relaxed mb-4',
                        },
                      },
                      a: {
                        props: {
                          className: 'text-[var(--stardew-gold)] underline decoration-[var(--stardew-gold)] decoration-2 underline-offset-4 hover:text-[var(--foreground)] transition-colors duration-200',
                        },
                      },
                      ul: {
                        props: {
                          className: 'space-y-2 mb-4 list-disc pl-6 text-[var(--foreground-soft)]',
                        },
                      },
                      li: {
                        props: {
                          className: 'text-[var(--foreground)]',
                        },
                      },
                      strong: {
                        props: {
                          className: 'text-[var(--foreground)] font-semibold',
                        },
                      },
                    },
                  }}
                >
                  {markdown}
                </Markdown>
              )}
            </motion.div>
          </motion.article>
        </div>
      </main>
    </div>
  );
}
