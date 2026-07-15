'use client';

import { useMode } from '@/context/ModeContext';
import { motion, type PanInfo } from 'framer-motion';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'mode-toggle-position';

type Position = { x: number; y: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function loadPosition(): Position | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Position;
    if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
      return parsed;
    }
  } catch {
    // ignore corrupt storage
  }
  return null;
}

export function ModeToggle() {
  const { isSimpleMode, toggleMode } = useMode();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
  const [dragging, setDragging] = useState(false);
  const didDrag = useRef(false);

  const measureConstraints = useCallback(() => {
    const el = buttonRef.current;
    const width = el?.offsetWidth ?? 220;
    const height = el?.offsetHeight ?? 44;
    const right = Math.max(0, window.innerWidth - width);
    const bottom = Math.max(0, window.innerHeight - height);
    setConstraints({ left: 0, top: 0, right, bottom });
    return { right, bottom, width, height };
  }, []);

  useEffect(() => {
    const bounds = measureConstraints();
    const saved = loadPosition();
    if (saved) {
      setPosition({
        x: clamp(saved.x, 0, bounds.right),
        y: clamp(saved.y, 0, bounds.bottom),
      });
      return;
    }
    setPosition({ x: 24, y: Math.max(0, bounds.bottom - 8) });
  }, [measureConstraints]);

  useLayoutEffect(() => {
    if (!position) return;
    const bounds = measureConstraints();
    setPosition((prev) => {
      if (!prev) return prev;
      const next = {
        x: clamp(prev.x, 0, bounds.right),
        y: clamp(prev.y, 0, bounds.bottom),
      };
      if (next.x === prev.x && next.y === prev.y) return prev;
      return next;
    });
    // Re-measure when label text (and thus button width) changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSimpleMode, measureConstraints]);

  useEffect(() => {
    const onResize = () => {
      const bounds = measureConstraints();
      setPosition((prev) => {
        if (!prev) return prev;
        return {
          x: clamp(prev.x, 0, bounds.right),
          y: clamp(prev.y, 0, bounds.bottom),
        };
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measureConstraints]);

  const onDragStart = () => {
    didDrag.current = false;
    setDragging(true);
  };

  const onDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 4 || Math.abs(info.offset.y) > 4) {
      didDrag.current = true;
    }
  };

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragging(false);
    setPosition((prev) => {
      if (!prev) return prev;
      const bounds = measureConstraints();
      const next = {
        x: clamp(prev.x + info.offset.x, 0, bounds.right),
        y: clamp(prev.y + info.offset.y, 0, bounds.bottom),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const onTap = () => {
    if (didDrag.current) return;
    toggleMode();
  };

  if (!position) return null;

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraints}
      dragPropagation={false}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onTap={onTap}
      initial={false}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: position.x,
        y: position.y,
        zIndex: 100,
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      className={`px-4 py-2 rounded-full font-bold shadow-lg backdrop-blur-md transition-colors duration-300 ${
        isSimpleMode
          ? 'bg-blue-600/60 text-white hover:bg-blue-600/90 font-sans'
          : 'bg-[var(--ut-yellow)]/25 border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black font-["VT323"]'
      }`}
      title="Drag to move · Click to switch mode"
      aria-label={isSimpleMode ? 'Switch to Fancy Mode' : 'Switch to Simple Mode'}
    >
      {isSimpleMode ? '✨ Switch to Fancy Mode' : '📝 Switch to Simple Mode'}
    </motion.button>
  );
}
