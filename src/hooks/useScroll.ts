import { useEffect, useRef, useState, type RefObject } from 'react';

const calm = (): boolean => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True while the element is in the viewport; resets when it fully leaves, so reveals replay on every visit. */
export function useInView<T extends Element>(threshold = 0.15): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (calm() || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= threshold || (e.isIntersecting && e.intersectionRatio >= 0.98)) setSeen(true);
      else if (!e.isIntersecting) setSeen(false);
    }, { threshold: [0, threshold, 1], rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/** Calls fn(scrollY) once per animation frame while scrolling. */
export function useScrollFrame(fn: (y: number) => void): void {
  const cb = useRef(fn);
  cb.current = fn;
  useEffect(() => {
    if (calm()) return;
    let raf = 0;
    const run = () => { raf = 0; cb.current(window.scrollY); };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf); };
  }, []);
}

/** Moves an element vertically relative to its position in the viewport (speed 0.1 = subtle). */
export function useParallax<T extends HTMLElement>(speed = 0.12): RefObject<T> {
  const ref = useRef<T>(null);
  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.parentElement?.getBoundingClientRect();
    if (!r) return;
    const mid = r.top + r.height / 2 - innerHeight / 2;
    el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`;
  });
  return ref;
}

/** Fades and lifts hero content as the page scrolls away from the top. */
export function useHeroFade<T extends HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null);
  useScrollFrame((y) => {
    const el = ref.current;
    if (!el) return;
    const p = Math.min(1, y / (innerHeight * 0.7));
    el.style.opacity = String(1 - p * 0.9);
    el.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0)`;
  });
  return ref;
}

/** 0..1 progress of an element passing through the viewport (for timelines). */
export function useProgress<T extends HTMLElement>(): [RefObject<T>, number] {
  const ref = useRef<T>(null);
  const [p, setP] = useState(calm() ? 1 : 0);
  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const v = (innerHeight * 0.7 - r.top) / r.height;
    setP(Math.max(0, Math.min(1, v)));
  });
  return [ref, p];
}

/**
 * Scroll-scrubbed progress written straight to a CSS variable (no re-render).
 * mode 'enter': --p goes 0..1 while the element rises into the viewport.
 * mode 'pass': --p goes 0..1 while the element travels across the whole viewport.
 */
export function useScrub<T extends HTMLElement>(mode: 'enter' | 'pass' = 'enter'): RefObject<T> {
  const ref = useRef<T>(null);
  useEffect(() => { if (calm()) ref.current?.style.setProperty('--p', '1'); }, []);
  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const v = mode === 'enter' ? (innerHeight * 0.95 - r.top) / (innerHeight * 0.55) : (innerHeight - r.top) / (innerHeight + r.height);
    el.style.setProperty('--p', Math.max(0, Math.min(1, v)).toFixed(3));
  });
  return ref;
}
