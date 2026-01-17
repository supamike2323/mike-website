'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'preferred-font';
const DEFAULT_FONT = 'system';
const ALT_FONT = 'svthin';

type FontOption = typeof DEFAULT_FONT | typeof ALT_FONT;

const LABELS: Record<FontOption, string> = {
  system: 'Clear Font',
  svthin: 'Stylized Font',
};

export function FontToggle() {
  const [font, setFont] = useState<FontOption>(DEFAULT_FONT);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as FontOption | null;
    if (stored === ALT_FONT) {
      setFont(ALT_FONT);
      document.documentElement.dataset.font = ALT_FONT;
    } else {
      document.documentElement.removeAttribute('data-font');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (font === DEFAULT_FONT) {
      document.documentElement.removeAttribute('data-font');
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      document.documentElement.dataset.font = font;
      window.localStorage.setItem(STORAGE_KEY, font);
    }
  }, [font]);

  const toggleFont = () => {
    setFont((prev) => (prev === DEFAULT_FONT ? ALT_FONT : DEFAULT_FONT));
  };

  return (
    <button
      type="button"
      onClick={toggleFont}
      className="group fixed bottom-5 right-5 z-[60] relative inline-flex items-center gap-2 px-4 py-2 rounded-full border-[2px] border-[var(--chip-border)] bg-[rgba(11,44,52,0.85)] text-[var(--foreground)] shadow-[0_12px_24px_rgba(1,12,15,0.4)] hover:translate-y-[-2px] transition-transform duration-200 overflow-hidden"
      aria-label="Toggle font preference"
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(130,240,255,0.12)] via-transparent to-[rgba(146,118,255,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
      <span className="text-xs uppercase tracking-[0.2em]">Font</span>
      <span className="text-sm font-semibold pixel-text">{LABELS[font]}</span>
    </button>
  );
}
