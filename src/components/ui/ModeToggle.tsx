'use client';

import { useMode } from '@/context/ModeContext';
import { motion } from 'framer-motion';

export function ModeToggle() {
    const { isSimpleMode, toggleMode } = useMode();

    return (
        <motion.button
            onClick={toggleMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 ${isSimpleMode
                ? 'bg-blue-600 text-white hover:bg-blue-700 font-sans'
                : 'bg-black border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black font-["VT323"]'
                }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {isSimpleMode ? '✨ Switch to Fancy Mode' : '📝 Switch to Simple Mode'}
        </motion.button>
    );
}
