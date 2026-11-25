import { useRef } from 'react';
import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { Reveal } from './ui';

/* ------------------------------------------------------------------ */
/*  "Explore our collections" — luxury 3D glass cards.                 */
/*  Pure React + TS + Tailwind. Slabs/veins/rocks are generated in     */
/*  CSS + SVG filters, so no image assets are needed.                  */
/*  lg: 2 + 3 card layout · md: 2 columns · mobile: 1 column.          */
/* ------------------------------------------------------------------ */

const GOLD = '#e2b254';

type IconName = 'layers' | 'stack' | 'column' | 'diamond' | 'grid';

interface Item {
  title: string;
  blurb: [string, string];
  icon: IconName;
  /** slab face gradient, slab edge colour */
  face: string;
  edge: string;
  /** vein colour (r,g,b 0-1), strength, noise freq, seed */
  vein: { rgb: [number, number, number]; a: number; f: string; seed: number };
}

const items: Item[] = [
  {
    title: 'Marbles',
    blurb: ['Timeless beauty,', 'natural elegance.'],
    icon: 'layers',
    face: 'linear-gradient(135deg,#faf8f4,#d9d4ca 55%,#a9a39a)',
    edge: '#cfc9be',
    vein: { rgb: [0.3, 0.3, 0.32], a: 0.75, f: '.010 .028', seed: 4 },
  },
  {
    title: 'Granites',
    blurb: ['Unmatched durability,', 'lasting brilliance.'],
    icon: 'stack',
    face: 'linear-gradient(135deg,#2a2a2e,#0c0c0e 55%,#050506)',
    edge: '#17171a',
    vein: { rgb: [0.88, 0.66, 0.25], a: 0.95, f: '.012 .03', seed: 11 },
  },
  {
    title: 'Kota Stones',
    blurb: ['Simple, sturdy,', 'forever reliable.'],
    icon: 'column',
    face: 'linear-gradient(135deg,#93a498,#5e7267 55%,#34443c)',
    edge: '#44564c',
    vein: { rgb: [0.82, 0.9, 0.84], a: 0.55, f: '.014 .04', seed: 7 },
  },
  {
    title: 'Quartz',
    blurb: ['Pure elegance,', 'modern appeal.'],
    icon: 'diamond',
    face: 'linear-gradient(135deg,#f4f1ea,#cfc8bb 55%,#9d968a)',
    edge: '#c2bbae',
    vein: { rgb: [1, 1, 1], a: 0.9, f: '.03 .05', seed: 2 },
  },
  {
    title: 'Kadapa Stones',
    blurb: ['Strength and style', 'in every surface.'],
    icon: 'grid',
    face: 'linear-gradient(135deg,#6a6a73,#33333a 55%,#14141a)',
    edge: '#26262c',
    vein: { rgb: [0.88, 0.66, 0.25], a: 0.6, f: '.012 .035', seed: 19 },
  },
];

/* ---------------- icons (line, gold) ---------------- */

function Icon({ name }: { name: IconName }) {
  const p = { fill: 'none', stroke: GOLD, strokeWidth: 1.6, strokeLinejoin: 'round', strokeLinecap: 'round' } as const;
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-11 sm:w-11" aria-hidden>
      {name === 'layers' && (
        <g {...p}>
          <path d="M24 6 42 15 24 24 6 15z" />
          <path d="M6 22l18 9 18-9" />
          <path d="M6 29l18 9 18-9" />
        </g>
      )}
      {name === 'stack' && (
        <g {...p}>
          <path d="M24 5 43 14 24 23 5 14z" />
          <path d="M14 19l10 5 10-5M5 24l19 9 19-9" />
          <path d="M5 33l19 9 19-9" />
        </g>
      )}
      {name === 'column' && (
        <g {...p}>
          <path d="M7 12h34M10 8h28v4M10 40h28M7 44h34" />
          <path d="M14 14v24M22 14v24M26 14v24M34 14v24" />
        </g>
      )}
      {name === 'diamond' && (
        <g {...p}>
          <path d="M14 8h20l9 11-19 23L5 19z" />
          <path d="M5 19h38M17 19l7 23 7-23M14 8l3 11M34 8l-3 11M24 8v11" />
        </g>
      )}
      {name === 'grid' && (
        <g {...p}>
          <rect x="7" y="7" width="34" height="34" />
          <path d="M7 24h34M24 7v34M16 7v17M33 24v17" />
        </g>
      )}
    </svg>
  );
}

/* ---------------- vein filters (one per stone) ---------------- */

function VeinFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      {items.map((s, i) => {
        const [r, g, b] = s.vein.rgb;
        return (
          <filter key={s.title} id={`cs-vein-${i}`} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency={s.vein.f} numOctaves="4" seed={s.vein.seed} result="n" />
            {/* copy noise R to alpha, tint with the vein colour */}
            <feColorMatrix in="n" values={`0 0 0 0 ${r}  0 0 0 0 ${g}  0 0 0 0 ${b}  1 0 0 0 0`} result="t" />
            {/* keep only a thin band of the noise → vein lines */}
            <feComponentTransfer in="t">
              <feFuncA type="table" tableValues={`0 0 0 0 0 ${s.vein.a} 0 0 0 0 0`} />
            </feComponentTransfer>
          </filter>
        );
      })}
    </svg>
  );
}

/* ---------------- rock base ---------------- */

function Rock({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} style={{ filter: `drop-shadow(0 0 7px ${GOLD}66)`, ...style }}>
      <div
        className="h-full w-full"
        style={{
          clipPath:
            'polygon(0 100%,4% 70%,12% 58%,20% 62%,30% 38%,40% 46%,50% 24%,60% 40%,70% 30%,80% 48%,90% 36%,100% 52%,100% 100%)',
          background:
            'linear-gradient(160deg,#3b3b40 0%,#121216 40%,#050507 100%), repeating-linear-gradient(115deg,rgba(226,178,84,.18) 0 1px,transparent 1px 14px)',
          backgroundBlendMode: 'screen',
        }}
      />
    </div>
  );
}

/* ---------------- one card ---------------- */

function Card({ item, index, children }: { item: Item; index: number; children?: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
    el.style.setProperty('--ry', `${(x - 0.5) * 14}deg`);
    el.style.setProperty('--px', `${(x - 0.5) * 18}px`);
    el.style.setProperty('--py', `${(y - 0.5) * 12}px`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    ['--rx', '--ry', '--px', '--py'].forEach((k) => el.style.setProperty(k, k.startsWith('--r') ? '0deg' : '0px'));
  };

  return (
    <a
      ref={ref}
      href={`#collection/${encodeURIComponent(item.title)}`}
      aria-label={`Explore ${item.title} collection`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="cs-card group relative block h-full min-h-[250px] outline-none sm:min-h-[270px] lg:min-h-[280px]"
    >
      <div className="cs-tilt absolute inset-0">
        {/* glass panel */}
        <div className="cs-glass absolute inset-0 overflow-hidden rounded-[22px]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            style={{ background: `radial-gradient(45% 70% at var(--mx,50%) var(--my,50%), ${GOLD}38, transparent 70%)` }}
          />
          {/* gold ring behind slab */}
          <span
            aria-hidden
            className="cs-ring absolute -right-[8%] bottom-[6%] h-[62%] w-[62%] rounded-[50%] border border-[#e2b254]/60"
            style={{ boxShadow: `0 0 18px ${GOLD}55, inset 0 0 18px ${GOLD}33` }}
          />
          <Rock className="-right-[4%] bottom-0 h-[34%] w-[66%]" />

          {/* the slab */}
          <div className="cs-slab absolute bottom-[12%] right-[6%] aspect-[4/5] w-[42%] sm:w-[40%]" style={{ '--edge': item.edge } as CSSProperties}>
            <div className="absolute inset-0 overflow-hidden rounded-[3px]" style={{ background: item.face }}>
              <div className="absolute inset-0" style={{ filter: `url(#cs-vein-${index})`, background: '#fff', opacity: 1 }} />
              <div
                aria-hidden
                className="cs-sheen absolute inset-0"
                style={{ background: 'linear-gradient(110deg,transparent 35%,rgba(255,255,255,.35) 50%,transparent 65%)' }}
              />
              <div className="absolute inset-0" style={{ boxShadow: `inset 0 0 0 1px ${GOLD}66, inset 0 0 22px rgba(0,0,0,.35)` }} />
            </div>
          </div>
          <Rock className="-right-[2%] bottom-0 h-[20%] w-[46%]" style={{ transform: 'scaleX(-1)' }} />
        </div>

        {/* content */}
        <div className="cs-content relative z-10 flex h-full max-w-[58%] flex-col justify-center gap-1 p-5 sm:max-w-[54%] sm:p-7 lg:p-8">
          <Icon name={item.icon} />
          <h3 className="mt-2 text-[26px] font-medium leading-none text-white sm:text-[32px] lg:text-[34px]">{item.title}</h3>
          <p className="mt-1 text-[13.5px] leading-snug text-white/70 sm:text-[15px]">
            {item.blurb[0]}
            <br />
            {item.blurb[1]}
          </p>
          <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#e2b254]/70 bg-black/40 px-4 py-2 text-[12.5px] font-medium text-[#f1dca3] shadow-[0_0_14px_rgba(226,178,84,.25)] transition group-hover:bg-[#e2b254]/15 group-hover:shadow-[0_0_22px_rgba(226,178,84,.55)] sm:text-[13.5px]">
            Explore Collection
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
      {children}
    </a>
  );
}

/* ---------------- floating decoration ---------------- */

const sparks = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: 10 + ((i * 53) % 85),
  size: 2 + (i % 3),
  delay: (i * 0.41) % 6,
  dur: 5 + (i % 5),
}));

function Floaters() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(55% 35% at 50% 0%,rgba(226,178,84,.10),transparent 70%), radial-gradient(40% 40% at 90% 30%,rgba(47,227,143,.08),transparent 70%), radial-gradient(40% 40% at 8% 60%,rgba(47,227,143,.06),transparent 70%)' }} />
      {/* big gold rings */}
      <span className="cs-orbit absolute -left-24 top-[14%] hidden h-[340px] w-[340px] rounded-[50%] border border-[#e2b254]/40 md:block" style={{ boxShadow: `0 0 30px ${GOLD}33` }} />
      <span className="cs-orbit-r absolute -right-28 top-[40%] hidden h-[300px] w-[420px] rounded-[50%] border border-[#e2b254]/35 md:block" style={{ boxShadow: `0 0 30px ${GOLD}2a` }} />
      {/* drifting rocks */}
      <div className="cs-drift-a absolute right-[6%] top-[4%] h-14 w-14 sm:h-20 sm:w-20" style={{ filter: `drop-shadow(0 0 8px ${GOLD}77)` }}>
        <div className="h-full w-full bg-gradient-to-br from-[#4a4a50] to-[#08080a]" style={{ clipPath: 'polygon(10% 30%,45% 0,90% 20%,100% 60%,70% 100%,20% 90%,0 60%)' }} />
      </div>
      <div className="cs-drift-b absolute left-[3%] top-[40%] h-10 w-10 sm:h-14 sm:w-14" style={{ filter: `drop-shadow(0 0 8px ${GOLD}77)` }}>
        <div className="h-full w-full bg-gradient-to-br from-[#3f3f45] to-[#050507]" style={{ clipPath: 'polygon(20% 0,80% 15%,100% 55%,60% 100%,10% 85%,0 40%)' }} />
      </div>
      {sparks.map((p, i) => (
        <span
          key={i}
          className="cs-spark absolute rounded-full bg-amber-300 shadow-[0_0_8px_#e2b254]"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }}
        />
      ))}
      {/* reflective floor */}
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(to top,rgba(226,178,84,.12),transparent)' }} />
      <div className="absolute inset-x-[8%] bottom-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
    </div>
  );
}

/* ---------------- section ---------------- */

export default function CollectionsShowcase() {
  return (
    <section aria-labelledby="cs-title" className="relative isolate overflow-hidden bg-black px-[5vw] py-16 sm:py-20 lg:py-28">
      <style>{`
        .cs-card { perspective: 1100px; }
        .cs-tilt { transform-style: preserve-3d; transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .25s ease-out; }
        .cs-glass {
          background: linear-gradient(135deg, rgba(40,40,44,.55), rgba(8,8,10,.92) 55%, rgba(0,0,0,.96));
          border: 1px solid rgba(226,178,84,.55);
          box-shadow: 0 0 0 1px rgba(226,178,84,.12) inset, 0 0 26px rgba(226,178,84,.22), 0 22px 40px rgba(0,0,0,.6);
          backdrop-filter: blur(4px);
          transition: box-shadow .4s, border-color .4s;
        }
        .cs-card:hover .cs-glass, .cs-card:focus-visible .cs-glass {
          border-color: rgba(241,220,163,.95);
          box-shadow: 0 0 0 1px rgba(241,220,163,.25) inset, 0 0 44px rgba(226,178,84,.5), 0 28px 50px rgba(0,0,0,.7);
        }
        .cs-glass::before { content:''; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
          background: linear-gradient(120deg, rgba(255,255,255,.10), transparent 28%); }
        .cs-slab { transform-style: preserve-3d;
          transform: perspective(800px) translate3d(var(--px,0px), var(--py,0px), 0) rotateY(-26deg) rotateX(5deg) rotateZ(-5deg);
          transition: transform .5s cubic-bezier(.2,.8,.2,1);
          filter: drop-shadow(0 16px 18px rgba(0,0,0,.65)); }
        .cs-slab::after { content:''; position:absolute; top:2px; bottom:-2px; right:-9px; width:9px; background: var(--edge); transform: skewY(-38deg); transform-origin: left top; border-radius: 0 2px 2px 0; opacity:.95; }
        .cs-card:hover .cs-slab { transform: perspective(800px) translate3d(var(--px,0px), calc(var(--py,0px) - 10px), 36px) rotateY(-20deg) rotateX(3deg) rotateZ(-4deg) scale(1.04); }
        .cs-content { transform: translateZ(30px); }
        .cs-sheen { transform: translateX(-120%); animation: cs-sheen 6s ease-in-out infinite; }
        .cs-ring { animation: cs-ring 7s ease-in-out infinite; }
        .cs-orbit { animation: cs-spin 26s linear infinite; }
        .cs-orbit-r { animation: cs-spin 34s linear infinite reverse; }
        .cs-drift-a { animation: cs-float 9s ease-in-out infinite; }
        .cs-drift-b { animation: cs-float 11s ease-in-out -3s infinite; }
        .cs-spark { opacity: 0; animation: cs-spark 6s ease-in infinite; }
        .cs-title-sheen { background: linear-gradient(110deg,#a6823a,#e2b254 30%,#fff1c4 50%,#e2b254 70%,#a6823a); background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: cs-shine 6s linear infinite; }
        @keyframes cs-sheen { 0%,55% { transform: translateX(-120%) } 100% { transform: translateX(120%) } }
        @keyframes cs-ring  { 0%,100% { transform: rotate(-6deg) scale(1); opacity:.85 } 50% { transform: rotate(4deg) scale(1.05); opacity:1 } }
        @keyframes cs-spin  { to { transform: rotate(360deg) } }
        @keyframes cs-float { 0%,100% { transform: translateY(0) rotate(0) } 50% { transform: translateY(-12px) rotate(6deg) } }
        @keyframes cs-spark { 0% { transform: translateY(0) scale(.6); opacity:0 } 30% { opacity:1 } 100% { transform: translateY(-70px) scale(1.1); opacity:0 } }
        @keyframes cs-shine { to { background-position: -220% 0 } }
        @media (prefers-reduced-motion: reduce) {
          .cs-sheen,.cs-ring,.cs-orbit,.cs-orbit-r,.cs-drift-a,.cs-drift-b,.cs-spark,.cs-title-sheen { animation: none !important; }
          .cs-tilt { transform: none !important; }
        }
      `}</style>

      <VeinFilters />
      <Floaters />

      <div className="relative mx-auto max-w-[1180px]">
        <Reveal>
          <div className="mx-auto mb-10 text-center sm:mb-14">
            <div className="mx-auto mb-4 flex items-center justify-center gap-3" aria-hidden>
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#e2b254] sm:w-28" />
              <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke={GOLD} strokeWidth="2" strokeLinejoin="round">
                <path d="M14 8h20l9 11-19 23L5 19z" />
                <path d="M5 19h38M17 19l7 23 7-23" />
              </svg>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#e2b254] sm:w-28" />
            </div>
            <h2 id="cs-title" className="text-[clamp(34px,6vw,64px)] font-medium leading-[1.05] text-white">
              Explore our <span className="cs-title-sheen">collections</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/65 sm:text-[17px]">
              From luxurious marbles to timeless granites, we provide stones that define elegance and strength.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              from="zoom"
              delay={i * 120}
              className={`${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} ${i === 4 ? 'md:col-span-2 md:mx-auto md:w-1/2 lg:mx-0 lg:w-auto' : ''}`}
            >
              <Card item={it} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
