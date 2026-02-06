'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface StarProps {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

const STAR_COUNT = 70;
const ORBS = [
  { left: '12%', top: '18%', size: 260, delay: 0 },
  { left: '72%', top: '26%', size: 220, delay: 4 },
  { left: '30%', top: '70%', size: 180, delay: 8 },
];

export function AnimatedBackground() {
  const stars = useMemo<StarProps[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    return Array.from({ length: STAR_COUNT }).map((_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 10,
      scale: 0.4 + Math.random() * 1.1,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aurora-layer" />
      <div className="aurora-layer" />
      <div className="aurora-layer" />

      {ORBS.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className="floating-orb"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: ['-6%', '8%', '-4%'],
            y: ['4%', '-8%', '6%'],
          }}
          transition={{
            duration: 28 - index * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="twinkle-point"
          style={{ left: `${star.x}%`, top: `${star.y}%`, scale: star.scale }}
          animate={{ opacity: [0.1, 0.9, 0.2], scale: [star.scale * 0.6, star.scale * 1.4, star.scale * 0.8] }}
          transition={{ duration: star.duration, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 20% 120%, rgba(255,255,255,0.04) 0%, transparent 60%)' }}
        animate={{ opacity: [0.2, 0.6, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
