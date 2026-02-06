'use client';

import { motion } from 'framer-motion';

export type SoulHeartProps = {
    size?: 'sm' | 'md' | 'lg';
    animate?: boolean;
    className?: string; // Allow custom classes for positioning/margins
};

export function SoulHeart({ size = 'md', animate = true, className = '' }: SoulHeartProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-10 h-10',
    };

    return (
        <motion.div
            className={`${sizeClasses[size]} relative ${className}`}
            animate={animate ? { scale: [1, 1.15, 1] } : undefined}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
            <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#ff0000"
                    className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                />
            </svg>
        </motion.div>
    );
}
