'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ModeContextType {
  isSimpleMode: boolean;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);
const MODE_KEY = 'isSimpleMode';

export function ModeProvider({ children }: { children: React.ReactNode }) {
  // Always start in Simple Mode for first paint / SSR
  const [isSimpleMode, setIsSimpleMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(MODE_KEY);
    // Only restore Fancy if user explicitly saved it before
    if (saved === 'false') {
      setIsSimpleMode(false);
    } else {
      setIsSimpleMode(true);
    }
  }, []);

  useEffect(() => {
    if (isSimpleMode) {
      document.body.classList.remove('fancy-mode');
    } else {
      document.body.classList.add('fancy-mode');
    }
  }, [isSimpleMode]);

  const toggleMode = useCallback(() => {
    setIsSimpleMode((prev) => {
      const next = !prev;
      localStorage.setItem(MODE_KEY, String(next));
      return next;
    });
  }, []);

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
