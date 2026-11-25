import { useEffect, useRef, useState } from 'react';

interface Props { open: boolean; onClose: () => void; links: Array<[string, string]>; active: string; sel: string }

/**
 * Mobile / tablet full-screen menu. The menu face swings in around a vertical axis like the
 * side of a room turning into view (the "room-turn" effect), then the links fly in from depth.
 * Hidden from `lg` up (desktop uses the normal navbar).
 */
export default function MobileMenu({ open, onClose, links, active }: Props) {
  const [depth, setDepth] = useState(() => innerWidth / 2); // half the width so the faces meet at the edges

  const root = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  // `inert` (not aria-hidden) keeps the closed menu out of reach for focus and screen readers.
  // React 18 has no `inert` prop, so it is toggled on the element directly.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (open) {
      opener.current = document.activeElement as HTMLElement | null;
      el.removeAttribute('inert');
      closeBtn.current?.focus({ preventScroll: true });
    } else {
      if (el.contains(document.activeElement)) opener.current?.focus({ preventScroll: true }); // hand focus back to the hamburger
      el.setAttribute('inert', '');
    }
  }, [open]);

  useEffect(() => {
    const fit = () => setDepth(innerWidth / 2);
    addEventListener('resize', fit);
    return () => removeEventListener('resize', fit);
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', key);
    addEventListener('hashchange', onClose);
    return () => { document.body.style.overflow = prev; removeEventListener('keydown', key); removeEventListener('hashchange', onClose); };
  }, [open, onClose]);

  // closed: the face stands edge-on at the right; open: it turns to face the viewer
  const face = open
    ? 'translateZ(0)'
    : `translateZ(${-depth}px) rotateY(90deg) translateZ(${depth}px)`;

  return (
    <div
      ref={root}
      className={`fixed inset-0 z-[60] overflow-hidden [perspective:1300px] lg:hidden ${open ? '' : 'pointer-events-none'}`}
    >
      {/* dim the page while the menu turns in */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${open ? 'opacity-70' : 'opacity-0'}`} onClick={onClose} />

      <section
        role="dialog" aria-modal="true" aria-label="Menu"
        className={`absolute inset-0 overflow-y-auto bg-[linear-gradient(160deg,#1b1912_0%,#0c0c0c_70%)] [backface-visibility:hidden] [transition:transform_1s_cubic-bezier(.65,0,.2,1),visibility_0s_linear_1s] motion-reduce:[transition:none] ${open ? 'visible [transition-delay:0s]' : 'invisible'}`}
        style={{ transform: face, paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* top bar */}
        <div className="flex h-[84px] items-center justify-between pl-7 pr-3">
          <span className="text-[13px] font-light uppercase tracking-[.24em] text-[#b99a4e]">Menu</span>
          <button
            ref={closeBtn} type="button" aria-label="Close menu" onClick={onClose} tabIndex={open ? 0 : -1}
            className="relative h-14 w-14 outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#e0c677]"
          >
            <i className="absolute left-[15px] top-[27px] h-[1.5px] w-[26px] rotate-45 bg-[#e0c677]" />
            <i className="absolute left-[15px] top-[27px] h-[1.5px] w-[26px] -rotate-45 bg-[#e0c677]" />
          </button>
        </div>

        {/* links fly in from depth, staggered, after the turn */}
        <nav aria-label="Main" className="mx-7 [perspective:800px]">
          {links.map(([k, label], i) => (
            <a
              key={k} href={`#${k}`} tabIndex={open ? 0 : -1} aria-current={active === k ? 'page' : undefined}
              className={`grid h-[72px] grid-cols-[44px_minmax(0,1fr)] items-center border-b border-[#e0c677]/30 outline-none transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(.2,.9,.3,1)] focus-visible:bg-[#e0c677]/10 motion-reduce:transition-none sm:h-[84px] ${open ? 'opacity-100 [transform:none]' : 'opacity-0 [transform:translate3d(60px,0,-160px)]'}`}
              style={{ transitionDelay: open ? `${0.5 + i * 0.07}s` : '0s' }}
            >
              <span className="text-[13px] tracking-[.2em] text-[#b99a4e]">{String(i + 1).padStart(2, '0')}</span>
              <span className={`font-serif text-[34px] font-medium leading-none sm:text-[38px] ${active === k ? 'text-[#f6e3a4]' : 'text-[#e0c677]'}`}>{label}</span>
            </a>
          ))}
        </nav>

        {/* actions that used to live in the old dropdown */}
        <div
          className={`mx-7 mt-8 mb-10 flex flex-col gap-3 transition-opacity duration-700 sm:flex-row ${open ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: open ? '1s' : '0s' }}
        >
          <a className="btn-fill flex-1 text-center" href="#contact" tabIndex={open ? 0 : -1}>REQUEST A QUOTE</a>
        </div>
      </section>
    </div>
  );
}
