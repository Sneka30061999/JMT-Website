import { useEffect, useRef, useState } from 'react';
import type { TouchEvent } from 'react';

interface Props { links: Array<[string, string]>; active: string }

const GEMS = ['g1', 'g2', 'g3', 'g4', 'g1', 'g2'];
const STEP = 50; // degrees between tabs

/** Shared gold gem symbols (gradient ids are prefixed so they never clash with other SVGs). */
function GemDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="dn-gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f8eab0" /><stop offset="1" stopColor="#d4af55" /></linearGradient>
        <linearGradient id="dn-gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e6c96c" /><stop offset="1" stopColor="#a07a28" /></linearGradient>
        <linearGradient id="dn-gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b8903a" /><stop offset="1" stopColor="#6e5216" /></linearGradient>
        <symbol id="g1" viewBox="0 0 120 120"><polygon points="60,6 18,58 60,70" fill="url(#dn-gl)" /><polygon points="60,6 102,58 60,70" fill="url(#dn-gm)" /><polygon points="18,58 60,114 60,70" fill="url(#dn-gd)" /><polygon points="102,58 60,114 60,70" fill="url(#dn-gm)" /></symbol>
        <symbol id="g2" viewBox="0 0 120 120"><polygon points="60,8 108,43 90,100 30,100 12,43" fill="url(#dn-gm)" /><polygon points="60,36 83,53 74,82 46,82 37,53" fill="url(#dn-gl)" /><polygon points="12,43 60,8 60,36 37,53" fill="url(#dn-gl)" /><polygon points="60,8 108,43 83,53 60,36" fill="url(#dn-gm)" /><polygon points="108,43 90,100 74,82 83,53" fill="url(#dn-gd)" /><polygon points="30,100 90,100 74,82 46,82" fill="url(#dn-gd)" /></symbol>
        <symbol id="g3" viewBox="0 0 120 120"><polygon points="32,34 88,34 108,58 12,58" fill="url(#dn-gl)" /><polygon points="32,34 60,58 12,58" fill="#f8eab0" /><polygon points="88,34 108,58 60,58" fill="url(#dn-gm)" /><polygon points="12,58 60,58 60,112" fill="url(#dn-gm)" /><polygon points="60,58 108,58 60,112" fill="url(#dn-gd)" /></symbol>
        <symbol id="g4" viewBox="0 0 120 120">
          <g fill="none" strokeLinecap="round">
            <g stroke="url(#dn-gm)" strokeWidth="12">
              <ellipse cx="60" cy="60" rx="40" ry="22" transform="rotate(30 60 60)" /><ellipse cx="60" cy="60" rx="40" ry="22" transform="rotate(90 60 60)" /><ellipse cx="60" cy="60" rx="40" ry="22" transform="rotate(150 60 60)" />
            </g>
            <g stroke="#fbf0c0" strokeWidth="2" opacity=".8">
              <ellipse cx="60" cy="56" rx="40" ry="22" transform="rotate(30 60 60)" /><ellipse cx="60" cy="56" rx="40" ry="22" transform="rotate(90 60 60)" /><ellipse cx="60" cy="56" rx="40" ry="22" transform="rotate(150 60 60)" />
            </g>
          </g>
        </symbol>
      </defs>
    </svg>
  );
}

/** Mobile / tablet bottom navigation: a rotating 3D drum of gem tabs. Hidden from `lg` up. */
export default function DrumNav({ links, active }: Props) {
  const n = links.length;
  const found = links.findIndex(([k]) => k === active);
  const [idx, setIdx] = useState(found < 0 ? 0 : found);
  const [radius, setRadius] = useState(150);
  const startX = useRef<number | null>(null);

  // follow the current route; keep the last position on pages that are not in the nav (FAQ, legal…)
  useEffect(() => { if (found >= 0) setIdx(found); }, [found]);

  useEffect(() => {
    const fit = () => setRadius(innerWidth >= 640 ? 230 : 150);
    fit();
    addEventListener('resize', fit);
    return () => removeEventListener('resize', fit);
  }, []);

  const go = (i: number) => { location.hash = `#${links[(i + n) % n][0]}`; };
  const onEnd = (e: TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 30) go(idx + (dx < 0 ? 1 : -1));
  };

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-50 h-[150px] lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)', height: 'calc(150px + env(safe-area-inset-bottom, 0px))' }}
    >
      <GemDefs />
      {/* fade + gold baseline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bk/90 to-bk" />
      <div
        aria-hidden className="pointer-events-none absolute inset-x-6 h-px bg-gradient-to-r from-transparent via-[#e0c677]/50 to-transparent"
        style={{ bottom: 'calc(30px + env(safe-area-inset-bottom, 0px))' }}
      />

      <div
        className="absolute inset-x-0 h-[112px] [perspective:760px]"
        style={{ bottom: 'calc(40px + env(safe-area-inset-bottom, 0px))' }}
        onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
        onTouchEnd={onEnd}
      >
        <div className="relative h-[112px] w-full [transform-style:preserve-3d]">
          {links.map(([k, label], i) => {
            let d = (((i - idx) % n) + n) % n; // shortest signed distance, wrapped around the drum
            if (d > n / 2) d -= n;
            const ad = Math.abs(d);
            const on = ad === 0;
            return (
              <a
                key={k} href={`#${k}`} aria-current={on ? 'page' : undefined}
                className="absolute left-1/2 top-2 -ml-[42px] flex h-24 w-[84px] flex-col items-center justify-center gap-2 outline-none transition-[transform,opacity] duration-700 ease-[cubic-bezier(.3,1.2,.4,1)] [-webkit-tap-highlight-color:transparent] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#e0c677] motion-reduce:transition-none"
                style={{
                  transform: `rotateY(${d * STEP}deg) translateZ(${radius}px) scale(${on ? 1.12 : 0.9})`,
                  opacity: on ? 1 : ad === 1 ? 0.62 : ad === 2 ? 0.18 : 0,
                  pointerEvents: ad > 2 ? 'none' : 'auto',
                }}
              >
                <svg viewBox="0 0 120 120" className="h-[46px] w-[46px]" aria-hidden><use href={`#${GEMS[i % GEMS.length]}`} /></svg>
                <span className={`whitespace-nowrap font-sans text-[10px] uppercase tracking-[.14em] transition-colors duration-500 ${on ? 'text-[#f0d98a]' : 'text-[#a39e92]'}`}>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
