'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ModeContextType {
    isSimpleMode: boolean;
    toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const [isSimpleMode, setIsSimpleMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check local storage for preference
        const savedMode = localStorage.getItem('isSimpleMode');
        if (savedMode !== null) {
            setIsSimpleMode(savedMode === 'true');
        }
        setMounted(true);
    }, []);

    // Toggle body class for global styles (cursor, etc.)
    useEffect(() => {
        if (isSimpleMode) {
            document.body.classList.remove('fancy-mode');
        } else {
            document.body.classList.add('fancy-mode');
        }
    }, [isSimpleMode]);

    const toggleMode = () => {
        setIsSimpleMode((prev) => {
            const newMode = !prev;
            localStorage.setItem('isSimpleMode', String(newMode));
            return newMode;
        });
    };

    // Avoid hydration mismatch by not rendering until mounted,
    // or just render default (simple) initially to match server if possible.
    // Ideally for this kind of toggle we want it available immediately.
    // But reading from localStorage is a side effect.
    // We'll trust the default state first then update if needed, but 'true' is our default.

    return (
        <ModeContext.Provider value={{ isSimpleMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export function useMode() {
    const context = useContext(ModeContext);
    if (context === undefined) {
        throw new Error('useMode must be used within a ModeProvider');
    }
    return context;
}
