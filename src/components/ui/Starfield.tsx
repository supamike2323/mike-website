'use client';

import { useEffect, useState, useMemo } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    color: string;
}

export function Starfield() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate stars only once with useMemo
    const stars = useMemo(() => {
        const newStars: Star[] = [];
        const starCount = 60; // Reduced from 120

        for (let i = 0; i < starCount; i++) {
            const colorRand = Math.random();
            let color = 'rgba(255,255,255,0.8)';
            if (colorRand > 0.95) color = 'rgba(255,255,0,0.9)';
            else if (colorRand > 0.9) color = 'rgba(100,200,255,0.8)';
            else if (colorRand > 0.85) color = 'rgba(180,100,255,0.7)';

            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() > 0.9 ? 3 : Math.random() > 0.6 ? 2 : 1,
                opacity: 0.3 + Math.random() * 0.7,
                duration: 3 + Math.random() * 4,
                delay: Math.random() * 5,
                color,
            });
        }
        return newStars;
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {/* Deep space gradient background - pure CSS, no animation */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(20, 10, 40, 0.7) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(10, 30, 50, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 70%, rgba(40, 10, 30, 0.4) 0%, transparent 50%),
            #000
          `,
                }}
            />

            {/* Subtle grid pattern - pure CSS */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Stars using CSS animations instead of Framer Motion */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full animate-twinkle"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        backgroundColor: star.color,
                        boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}

            {/* Static floating shapes - no animation, just positioned */}
            <div className="absolute w-2 h-2 bg-white/5 rotate-45" style={{ left: '15%', top: '25%' }} />
            <div className="absolute w-2 h-2 bg-white/5 rotate-45" style={{ left: '75%', top: '15%' }} />
            <div className="absolute w-1 h-1 bg-purple-500/10 rounded-full" style={{ left: '85%', top: '60%' }} />
            <div className="absolute w-3 h-3 bg-white/3 rotate-45" style={{ left: '25%', top: '75%' }} />
            <div className="absolute w-1 h-1 bg-cyan-400/10 rounded-full" style={{ left: '60%', top: '80%' }} />

            {/* Vignette overlay - pure CSS */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
                }}
            />

            {/* CSS for twinkle animation */}
            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
