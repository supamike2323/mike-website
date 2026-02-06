'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Markdown from 'markdown-to-jsx';
import { Navigation } from '@/components/layout/Navigation';
import { Starfield } from '@/components/ui/Starfield';

export default function About() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'production' ? '/mike-website' : '';
    fetch(`${basePath}/about.md`)
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

  // Fake stats for Undertale CHECK screen
  const stats = [
    { label: 'LV', value: '22', desc: 'Years of Learning' },
    { label: 'HP', value: '99/99', desc: 'Motivation' },
    { label: 'AT', value: '85', desc: 'Problem Solving' },
    { label: 'DF', value: '70', desc: 'Debugging Skills' },
  ];

  return (
    <div className="min-h-screen">
      <Starfield />
      <Navigation />

      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* CHECK Stats Header - Undertale Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="undertale-box p-6 mb-8"
          >
            <div className="text-center mb-6">
              <span
                className="text-[var(--ut-yellow)] text-xl"
                style={{ fontFamily: 'VT323, monospace' }}
              >
                * You checked MIKE DENG
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-[var(--ut-yellow)] text-sm mb-1"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-white text-2xl mb-1"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/50 text-xs"
                    style={{ fontFamily: 'VT323, monospace' }}
                  >
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Box */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="undertale-box p-8 md:p-12"
          >
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 text-center"
            >
              <h1
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '24px' }}
              >
                ABOUT ME
              </h1>
              {!loading && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-white/60"
                  style={{ fontFamily: 'VT323, monospace' }}
                >
                  (in about {wordCount} words)
                </motion.p>
              )}
            </motion.header>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 border-2 border-[var(--ut-yellow)] border-t-transparent rounded-full"
                  />
                </div>
              ) : (
                <Markdown
                  options={{
                    overrides: {
                      h1: {
                        props: {
                          className: 'text-2xl font-bold text-[var(--ut-yellow)] mb-6 mt-8',
                          style: { fontFamily: "'Press Start 2P', monospace", fontSize: '18px' },
                        },
                      },
                      h2: {
                        props: {
                          className: 'text-xl font-semibold text-white mb-4 mt-8',
                          style: { fontFamily: "'Press Start 2P', monospace", fontSize: '14px' },
                        },
                      },
                      h3: {
                        props: {
                          className: 'text-lg font-semibold text-white mb-3 mt-6',
                          style: { fontFamily: 'VT323, monospace', fontSize: '22px' },
                        },
                      },
                      p: {
                        props: {
                          className: 'text-white/85 leading-relaxed mb-4',
                          style: { fontFamily: 'VT323, monospace', fontSize: '20px' },
                        },
                      },
                      a: {
                        props: {
                          className: 'text-[var(--ut-yellow)] underline decoration-[var(--ut-yellow)] underline-offset-4 hover:text-white transition-colors duration-200',
                        },
                      },
                      ul: {
                        props: {
                          className: 'space-y-2 mb-4 list-none pl-4 text-white/85',
                        },
                      },
                      li: {
                        props: {
                          className: 'text-white relative pl-4 before:content-["*"] before:absolute before:left-0 before:text-[var(--ut-yellow)]',
                          style: { fontFamily: 'VT323, monospace', fontSize: '18px' },
                        },
                      },
                      strong: {
                        props: {
                          className: 'text-[var(--ut-yellow)] font-semibold',
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
