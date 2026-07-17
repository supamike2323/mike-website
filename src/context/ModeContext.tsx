'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ModeContextType {
  isSimpleMode: boolean;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// New key so old localStorage ('isSimpleMode=false') cannot force Fancy on load
const MODE_KEY = 'portfolio-mode-v2';

export function ModeProvider({ children }: { children: React.ReactNode }) {
  // Default + first paint: always Simple Mode
  const [isSimpleMode, setIsSimpleMode] = useState(true);

  useEffect(() => {
    // Drop legacy preference that was sticking visitors on Fancy
    try {
      localStorage.removeItem('isSimpleMode');
    } catch {
      // ignore
    }

    const saved = localStorage.getItem(MODE_KEY);
    // Only open Fancy if the user explicitly chose it after this reset
    if (saved === 'fancy') {
      setIsSimpleMode(false);
    } else {
      setIsSimpleMode(true);
      localStorage.setItem(MODE_KEY, 'simple');
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
      localStorage.setItem(MODE_KEY, next ? 'simple' : 'fancy');
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
