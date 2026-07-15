'use client';

import { useMode } from '@/context/ModeContext';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'mode-toggle-position';
const DRAG_THRESHOLD = 5;

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
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const constrainToViewport = useCallback((x: number, y: number) => {
    const el = buttonRef.current;
    const width = el?.offsetWidth ?? 200;
    const height = el?.offsetHeight ?? 40;
    const maxX = Math.max(0, window.innerWidth - width);
    const maxY = Math.max(0, window.innerHeight - height);
    return {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  }, []);

  useEffect(() => {
    const saved = loadPosition();
    if (saved) {
      setPosition(constrainToViewport(saved.x, saved.y));
      return;
    }
    setPosition({ x: 24, y: window.innerHeight - 56 });
  }, [constrainToViewport]);

  useEffect(() => {
    const onResize = () => {
      setPosition((prev) => (prev ? constrainToViewport(prev.x, prev.y) : prev));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [constrainToViewport]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const state = dragState.current;
      if (!state.active) return;

      const dx = Math.abs(e.clientX - state.startX);
      const dy = Math.abs(e.clientY - state.startY);
      if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
        state.moved = true;
      }

      setPosition(
        constrainToViewport(e.clientX - state.offsetX, e.clientY - state.offsetY),
      );
    };

    const onPointerUp = () => {
      const state = dragState.current;
      if (!state.active) return;
      state.active = false;
      setDragging(false);
      setPosition((prev) => {
        if (prev) localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
        return prev;
      });
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [constrainToViewport]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!position) return;
    e.preventDefault();
    dragState.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      offsetX: e.clientX - position.x,
      offsetY: e.clientY - position.y,
    };
    setDragging(true);
  };

  const onClick = () => {
    if (dragState.current.moved) return;
    toggleMode();
  };

  if (!position) return null;

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      onPointerDown={onPointerDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        left: position.x,
        top: position.y,
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
      className={`fixed z-50 px-4 py-2 rounded-full font-bold shadow-lg backdrop-blur-md transition-all duration-300 ${
        isSimpleMode
          ? 'bg-blue-600/60 text-white hover:bg-blue-600/90 font-sans'
          : 'bg-[var(--ut-yellow)]/25 border-2 border-[var(--ut-yellow)] text-[var(--ut-yellow)] hover:bg-[var(--ut-yellow)] hover:text-black font-["VT323"]'
      }`}
      whileHover={dragging ? undefined : { scale: 1.05 }}
      whileTap={dragging ? undefined : { scale: 0.95 }}
      title="Drag to move · Click to switch mode"
    >
      {isSimpleMode ? '✨ Switch to Fancy Mode' : '📝 Switch to Simple Mode'}
    </motion.button>
  );
}
