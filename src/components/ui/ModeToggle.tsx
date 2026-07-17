'use client';

import { useMode } from '@/context/ModeContext';
import { useCallback, useEffect, useRef, useState } from 'react';

const POSITION_KEY = 'mode-toggle-pos-v2';
const DRAG_THRESHOLD = 6;

type Position = { x: number; y: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function loadPosition(): Position | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Position;
    if (typeof parsed.x === 'number' && typeof parsed.y === 'number') return parsed;
  } catch {
    // ignore
  }
  return null;
}

export function ModeToggle() {
  const { isSimpleMode, toggleMode } = useMode();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ x: 16, y: 16 });
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);

  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const getBounds = useCallback(() => {
    const el = buttonRef.current;
    const width = el?.offsetWidth ?? 200;
    const height = el?.offsetHeight ?? 44;
    return {
      width,
      height,
      maxX: Math.max(0, window.innerWidth - width),
      maxY: Math.max(0, window.innerHeight - height),
    };
  }, []);

  // Default: bottom-left corner
  useEffect(() => {
    const { maxX, maxY } = getBounds();
    const saved = loadPosition();
    if (saved) {
      setPosition({
        x: clamp(saved.x, 0, maxX),
        y: clamp(saved.y, 0, maxY),
      });
    } else {
      setPosition({ x: 16, y: maxY - 8 });
    }
    setReady(true);
  }, [getBounds]);

  useEffect(() => {
    if (!ready) return;
    const { maxX, maxY } = getBounds();
    setPosition((prev) => ({
      x: clamp(prev.x, 0, maxX),
      y: clamp(prev.y, 0, maxY),
    }));
  }, [isSimpleMode, ready, getBounds]);

  useEffect(() => {
    const onResize = () => {
      const { maxX, maxY } = getBounds();
      setPosition((prev) => ({
        x: clamp(prev.x, 0, maxX),
        y: clamp(prev.y, 0, maxY),
      }));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getBounds]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d.active) return;

      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        d.moved = true;
        setDragging(true);
      }

      const { maxX, maxY } = getBounds();
      setPosition({
        x: clamp(d.originX + dx, 0, maxX),
        y: clamp(d.originY + dy, 0, maxY),
      });
    };

    const onPointerUp = () => {
      const d = dragRef.current;
      if (!d.active) return;
      d.active = false;
      setDragging(false);
      setPosition((prev) => {
        localStorage.setItem(POSITION_KEY, JSON.stringify(prev));
        return prev;
      });
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [getBounds]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Only primary button / touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      originX: position.x,
      originY: position.y,
    };
  };

  const onClick = (e: React.MouseEvent) => {
    // After a drag, ignore the synthetic click
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
      return;
    }
    toggleMode();
  };

  if (!ready) return null;

  return (
    <button
      ref={buttonRef}
      type="button"
      onPointerDown={onPointerDown}
      onClick={onClick}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 100,
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: dragging ? 'grabbing' : 'grab',
        // Light enough to read text behind; no heavy backdrop blur
        backgroundColor: isSimpleMode
          ? 'rgba(37, 99, 235, 0.28)'
          : 'rgba(255, 255, 0, 0.18)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }}
      className={`px-4 py-2 rounded-full font-bold border transition-colors duration-200 ${
        isSimpleMode
          ? 'border-blue-500/40 text-blue-900 hover:bg-blue-600/50 font-sans'
          : 'border-[var(--ut-yellow)]/70 text-[var(--ut-yellow)] hover:bg-yellow-300/40 font-["VT323"]'
      }`}
      title="Drag to move · Click to switch mode"
      aria-label={isSimpleMode ? 'Switch to Fancy Mode' : 'Switch to Simple Mode'}
    >
      {isSimpleMode ? '✨ Fancy Mode' : '📝 Simple Mode'}
    </button>
  );
}
