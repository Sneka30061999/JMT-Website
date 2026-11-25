import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const CSS = `
.sf-fold-wrap{perspective:1800px}
.sf-fold{transform-style:preserve-3d;transform:rotateX(5deg)}
.sf-pn{position:absolute;top:0;left:100%;width:var(--W);height:var(--H);transform-origin:0 50%;transform-style:preserve-3d;
  transition:transform 1.5s cubic-bezier(.65,0,.2,1);transform:rotateY(var(--c))}
.sf-fold.sf-open .sf-pn{transform:rotateY(var(--o))}
.sf-fold>.sf-pn.sf-root{left:0;transform:none!important}
.sf-pf,.sf-pb{position:absolute;inset:0;backface-visibility:hidden}
.sf-pf{background:linear-gradient(150deg,#1f1e1a,#121211);border:1px solid rgba(212,175,95,.25);border-left:2px solid #d4af5f;
  padding:calc(24px*var(--fs)) calc(16px*var(--fs));display:flex;flex-direction:column;justify-content:center;gap:8px;box-shadow:0 20px 40px rgba(0,0,0,.5)}
.sf-pf h3{font:600 calc(24px*var(--fs))/1.15 'Cormorant Garamond',serif;color:#f0d894;overflow-wrap:anywhere}
.sf-pf p{font-size:calc(14.5px*var(--fs));line-height:1.5;color:#a7a193}
.sf-pn:not(.sf-root)::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:3;backface-visibility:hidden;background:linear-gradient(90deg,rgba(0,0,0,.35),transparent 30%)}
.sf-pb{transform:rotateY(180deg);background-size:cover;border:1px solid rgba(212,175,95,.25);box-shadow:inset 0 0 60px rgba(0,0,0,.6)}
.sf-fold:not(.sf-open)>.sf-pn.sf-root .sf-pf{border-color:rgba(212,175,95,.55);box-shadow:0 0 30px rgba(212,175,95,.15),0 20px 40px rgba(0,0,0,.5);cursor:pointer}
.sf-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#f3dc9b 0%,#d2ad5a 45%,#a9812f 100%);box-shadow:0 5px 0 #6f5116,0 14px 26px rgba(0,0,0,.55);transition:transform .25s,box-shadow .25s}
.sf-cta::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-120%)}
.sf-cta:hover{transform:translateY(-2px);box-shadow:0 7px 0 #6f5116,0 22px 34px rgba(0,0,0,.6),0 0 34px rgba(212,175,95,.25)}
.sf-cta:hover::after{transform:translateX(120%);transition:transform .8s}
.sf-cta:active{transform:translateY(5px);box-shadow:0 0 0 #6f5116,0 6px 12px rgba(0,0,0,.6)}
.sf-rise{opacity:0;transform:translateY(22px);transition:opacity .9s ease,transform 1s cubic-bezier(.2,.9,.25,1);transition-delay:calc(var(--i)*.12s)}
.sf-in .sf-rise{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.sf-pn,.sf-rise{transition:none!important}.sf-rise{opacity:1;transform:none}}
`;

/* ---------- generated stone textures (SVG turbulence) ---------- */
interface Layer { freq: string; oct: number; seed: number; c: number[]; table: string; op: number }
const STONES: { base: string; layers: Layer[] }[] = [
  { base: '#ece7dd', layers: [{ freq: '0.006 0.016', oct: 5, seed: 7, c: [.55, .5, .42], table: '0 0 0 0 .1 .55 .1 0 0 0 0', op: .9 }, { freq: '0.012 0.03', oct: 5, seed: 19, c: [.7, .64, .52], table: '0 0 0 0 0 .4 0 0 0 0', op: .55 }] },
  { base: '#4a4744', layers: [{ freq: '0.55', oct: 2, seed: 4, c: [.95, .93, .88], table: '0 0 0 0 0 .8 .8', op: .7 }, { freq: '0.9', oct: 1, seed: 11, c: [.1, .1, .1], table: '0 0 0 .9 .9 0', op: .8 }] },
  { base: '#5f6b5c', layers: [{ freq: '0.002 0.09', oct: 3, seed: 5, c: [.15, .2, .15], table: '0 .5 0 .5 0 .4 0', op: .6 }, { freq: '0.6', oct: 2, seed: 8, c: [.8, .85, .75], table: '0 0 0 0 .3 .3', op: .18 }] },
  { base: '#f3f1ec', layers: [{ freq: '0.7', oct: 1, seed: 9, c: [.6, .62, .66], table: '0 0 0 0 0 .9 .9', op: .55 }, { freq: '0.02', oct: 3, seed: 6, c: [.85, .83, .78], table: '0 .3 .6 .3 0', op: .5 }] },
  { base: '#2c3036', layers: [{ freq: '0.004 0.05', oct: 3, seed: 12, c: [.55, .6, .68], table: '0 0 .3 .4 .3 0 0', op: .35 }, { freq: '0.5', oct: 2, seed: 14, c: [.05, .05, .07], table: '0 0 .6 .6 0', op: .5 }] },
];
function tex(o: { base: string; layers: Layer[] }) {
  const W = 400, H = 560;
  const ls = o.layers.map((l, i) => `<filter id="f${i}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${l.freq}" numOctaves="${l.oct}" seed="${l.seed}"/><feColorMatrix type="matrix" values="0 0 0 0 ${l.c[0]}  0 0 0 0 ${l.c[1]}  0 0 0 0 ${l.c[2]}  1 0 0 0 0"/><feComponentTransfer><feFuncA type="table" tableValues="${l.table}"/></feComponentTransfer></filter><rect width="${W}" height="${H}" filter="url(#f${i})" opacity="${l.op}"/>`).join('');
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="${o.base}"/>${ls}</svg>`)}")`;
}

const ITEMS: [string, string][] = [
  ['Requirement-based sourcing', 'Tell us your preferred stone category, colour, finish, quantity and application.'],
  ['Multiple stone categories', 'We deal in marbles, granites, Kota stones, quartz and Kadapa stones.'],
  ['Project-specific assistance', 'We help you identify suitable material options for your requirements.'],
  ['Sourcing across India', 'Materials can be sourced from different parts of India depending on the stone and specification.'],
];
const CLOSED = [0, 176, -176, 176];
const OPEN = [0, -18, 36, -36];
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export default function SourcingFold() {
  const sec = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);
  const [W, setW] = useState(170);
  const closeT = useRef<number>(0);
  const [onScreen, setOnScreen] = useState(false);
  const [paused, setPaused] = useState(false);   // pointer / keyboard focus is on the brochure
  const [wide, setWide] = useState(false);       // brochure (>=900px) vs. list layout
  const [active, setActive] = useState(0);       // highlighted item in the list layout
  const holdUntil = useRef(0);                   // after a tap / key press, wait before auto-toggling again
  const reduce = useMemo(() => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const backs = useMemo(() => STONES.map(tex), []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= 0.3) setInView(true);
      else if (!e.isIntersecting) { setInView(false); setOpen(false); } // starts over on the next visit
    }, { threshold: [0, 0.3] });
    io.observe(sec.current!);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const fit = () => { const w = el.clientWidth; if (w) setW(Math.round(clamp(w / 3.95, 120, 185))); };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(closeT.current), []);

  // keep track of on-screen state (autoplay only runs while the section is visible)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.2 });
    io.observe(sec.current!);
    const mq = matchMedia('(min-width: 900px)');
    const upd = () => setWide(mq.matches);
    upd(); mq.addEventListener('change', upd);
    return () => { io.disconnect(); mq.removeEventListener('change', upd); };
  }, []);

  // AUTO: open and fold the brochure on a timer (hover / click / keyboard still work and pause it)
  useEffect(() => {
    if (!inView || !onScreen || paused || reduce || !wide) return;
    const base = open ? 4800 : inView && !holdUntil.current ? 1500 : 3000;
    const t = setTimeout(() => setOpen((o) => !o), base + Math.max(0, holdUntil.current - Date.now()));
    return () => clearTimeout(t);
  }, [inView, onScreen, paused, reduce, wide, open]);

  // AUTO (mobile / small tablet): walk a highlight down the list
  useEffect(() => {
    if (!inView || !onScreen || reduce || wide) return;
    const t = setInterval(() => setActive((a) => (a + 1) % ITEMS.length), 3000);
    return () => clearInterval(t);
  }, [inView, onScreen, reduce, wide]);

  const H = Math.round(W * 1.88);
  const fs = clamp(W / 170, 0.78, 1.08);

  const panel = (i: number): ReactNode => (
    <div key={i} className={'sf-pn' + (i ? '' : ' sf-root')} style={{ '--c': CLOSED[i] + 'deg', '--o': OPEN[i] + 'deg' } as CSSProperties}>
      <div className="sf-pf"><h3>{ITEMS[i][0]}</h3><p>{ITEMS[i][1]}</p></div>
      <div className="sf-pb" style={{ backgroundImage: backs[(i + 1) % 5] }} />
      {i < ITEMS.length - 1 && panel(i + 1)}
    </div>
  );

  return (
    <section ref={sec} className={'relative overflow-hidden bg-bk ' + (inView ? 'sf-in' : '')} aria-labelledby="sf-title">
      <style>{CSS}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(55% 80% at 62% 50%,rgba(212,175,95,.10),transparent 70%)' }} />
      <div className="relative z-[2] mx-auto max-w-[1585px] px-6 sm:px-10 min-[900px]:px-12 xl:px-24 py-16 sm:py-20 min-[900px]:py-24 grid min-[900px]:grid-cols-[.85fr_1.15fr] gap-10 min-[900px]:gap-12 items-center">
        <div>
          <p className="sf-rise text-gd tracking-[.34em] text-[11px] sm:text-[13px] uppercase mb-3" style={{ '--i': 0 } as CSSProperties}>Our sourcing capabilities</p>
          <h2 id="sf-title" className="sf-rise font-serif font-medium text-[clamp(38px,4.8vw,70px)] leading-[1.04] mb-6 bg-gradient-to-br from-[#f3dc9b] via-[#d2ad5a] to-[#a9812f] bg-clip-text text-transparent" style={{ '--i': 1 } as CSSProperties}>The right stone. Sourced for your requirements.</h2>
          <p className="sf-rise text-sg text-[17px] sm:text-[19px] leading-[1.75] max-w-[560px] mb-9" style={{ '--i': 2 } as CSSProperties}>We source natural stones from different parts of India based on customer and project requirements.</p>
          <div className="sf-rise" style={{ '--i': 3 } as CSSProperties}>
            <a href="#sourcing" className="sf-cta inline-block px-8 py-[19px] text-[15px] font-medium tracking-[.05em] text-[#1a1408]">Discuss your requirements</a>
          </div>
        </div>

        {/* fold-out brochure: tablet landscape + desktop */}
        <div className="hidden min-[900px]:block">
          <div
            ref={wrap}
            className="sf-fold-wrap flex items-center justify-start"
            style={{ height: H + 40, '--W': W + 'px', '--H': H + 'px', '--fs': fs } as CSSProperties}
            onPointerLeave={(e) => { if (e.pointerType !== 'touch') { closeT.current = window.setTimeout(() => setOpen(false), 250); holdUntil.current = Date.now() + 1200; setPaused(false); } }}
            onPointerEnter={(e) => { clearTimeout(closeT.current); if (e.pointerType !== 'touch') setPaused(true); }}
          >
            <div
              className={'sf-fold relative' + (open ? ' sf-open' : '')}
              style={{ width: W, height: H }}
              onPointerEnter={(e) => { if (e.pointerType === 'touch') return; clearTimeout(closeT.current); setOpen(true); }}
              onClick={() => { if (matchMedia('(hover:none)').matches) { holdUntil.current = Date.now() + 8000; setOpen((o) => !o); } }}
              onFocus={() => setPaused(true)}
              onBlur={() => { holdUntil.current = Date.now() + 1200; setPaused(false); }}
              role="button"
              tabIndex={0}
              aria-expanded={open}
              aria-label="Open sourcing capabilities brochure"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); holdUntil.current = Date.now() + 8000; setOpen((o) => !o); } }}
            >
              {panel(0)}
            </div>
          </div>
        </div>

        {/* mobile + small tablet: plain list */}
        <div className="min-[900px]:hidden">
          {ITEMS.map(([t, d], i) => (
            <div key={t} className="sf-rise mb-6" style={{ '--i': i + 2 } as CSSProperties}>
              <div className={`border-l-2 py-0.5 pl-5 transition-[transform,border-color,background-color] duration-700 ${active === i ? 'translate-x-1.5 border-[#f0d894] bg-gradient-to-r from-[#d4af5f]/10 to-transparent' : 'border-gd'}`}>
                <h3 className={`font-serif text-[26px] font-semibold leading-tight transition-colors duration-700 sm:text-[28px] ${active === i ? 'text-[#fff1c4]' : 'text-[#f0d894]'}`}>{t}</h3>
                <p className="text-sg text-[16px] sm:text-[17px] leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
