import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { createPortal, flushSync } from 'react-dom';
import { marble } from '../lib/marble';
import { COLOURS, FINISHES, categories, colorOf, colourOf2, slug, stones, type Category } from '../data/stones';
import { waLink } from '../data/site';

/* ───────── data + procedural textures ───────── */
const EASE = 'cubic-bezier(.2,.9,.25,1)';
const lum = (hex: string) => { const n = parseInt(hex.slice(1), 16); return (0.3 * (n >> 16) + 0.59 * ((n >> 8) & 255) + 0.11 * (n & 255)) / 255; };
const vein = (() => {
  const cache = new Map<string, string>();
  return (dark: boolean, seed: number, fx: number, fy: number) => {
    const k = `${dark}${seed}`;
    if (!cache.has(k)) cache.set(k, marble({ rgb: dark ? [0.82, 0.8, 0.72] : [0.3, 0.28, 0.25], seed: 20 + seed * 9, fx, fy, width: 2 }));
    return cache.get(k)!;
  };
})();

interface Item { name: string; cat: Category; colour: string; slug: string; tex: CSSProperties }
const ITEMS: Item[] = stones.map((s, i) => {
  const c = s.c ?? colorOf(s.name);
  const dark = lum(c[0]) < 0.45;
  const bp = `${(i * 37) % 100}% ${(i * 61) % 100}%`, bp2 = `${(i * 53 + 20) % 100}% ${(i * 29 + 40) % 100}%`;
  return {
    name: s.name, cat: s.cat, colour: colourOf2(s.name), slug: slug(s.name),
    tex: {
      backgroundImage: `${vein(dark, i % 3, 0.008, 0.02)}, ${vein(dark, (i % 3) + 3, 0.014, 0.03)}, linear-gradient(135deg,${c[0]},${c[1]})`,
      backgroundSize: '170% auto, 170% auto, 100% 100%',
      backgroundPosition: `${bp}, ${bp2}, 0 0`,
    },
  };
});

const reduceMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (a: Array<Animation | undefined>) => Promise.all(a.map((x) => x?.finished.catch(() => {})));
const chip = (on: boolean, sm = false) =>
  `border px-3.5 py-[7px] text-[11px] transition ${sm ? '!px-[11px] !py-[5px] !text-[10px]' : ''} ${on ? 'border-[#c9a24a] bg-[#c9a24a] text-[#1a1a1a]' : 'border-[#b8923c]/40 text-[#a8a294] hover:border-[#d4af5f] hover:text-[#e9dfc2]'}`;

/* ───────── one hoverable card ───────── */
function Card({ item, hidden, revealed, onOpen, reg }: {
  item: Item; hidden: boolean; revealed: boolean; onOpen: (el: HTMLElement) => void; reg: (el: HTMLElement | null) => void;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement | null>(null);
  return (
    <article
      ref={(el) => { root.current = el; reg(el); }}
      role="button" tabIndex={0} aria-label={`${item.name} — view slab`}
      style={{ display: hidden ? 'none' : undefined, opacity: revealed ? undefined : 0 }}
      className="relative aspect-[4/5] cursor-pointer outline-none [perspective:900px] focus-visible:ring-1 focus-visible:ring-[#d4af5f]"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        const el = inner.current!; el.style.transition = 'transform .12s';
        el.style.transform = `translateZ(30px) rotateX(${-(y - 0.5) * 16}deg) rotateY(${(x - 0.5) * 18}deg)`;
        el.style.setProperty('--mx', `${x * 100}%`); el.style.setProperty('--my', `${y * 100}%`); el.style.setProperty('--o', '1');
      }}
      onPointerLeave={() => { const el = inner.current!; el.style.transition = ''; el.style.transform = ''; el.style.setProperty('--o', '0'); }}
      onClick={(e) => onOpen(e.currentTarget)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(e.currentTarget); } }}
    >
      <div ref={inner} className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-[600ms] ease-[cubic-bezier(.3,.9,.3,1)]">
        <div className="absolute inset-0 overflow-hidden border border-[#b8923c]/45" style={item.tex}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/10 to-transparent [background-image:linear-gradient(to_top,rgba(10,10,10,.93),rgba(10,10,10,.1)_58%,transparent)]" />
          <i className="pointer-events-none absolute inset-0 z-[3] opacity-[var(--o,0)] mix-blend-screen transition-opacity duration-300 [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,240,190,.38),transparent_58%)]" />
          <div className="absolute inset-x-2.5 bottom-2.5 z-[2]">
            <h4 className="font-serif text-[clamp(14px,1.25vw,17px)] font-semibold leading-tight text-[#f6f1e4]">{item.name}</h4>
            <span className="mt-1 block text-[9px] text-[#c9a24a]">{item.cat}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ───────── the catalogue ───────── */
export default function StoneCatalogue({ initial, onPick }: { initial?: string; onPick: (s: string) => void }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<Category | ''>(categories.some((c) => c.title === initial) ? (initial as Category) : '');
  const [colour, setColour] = useState('');
  const target = useMemo(() => {
    const k = q.trim().toLowerCase();
    return ITEMS.map((_, i) => i).filter((i) => {
      const s = ITEMS[i];
      return (!cat || s.cat === cat) && (!colour || s.colour === colour) && (!k || `${s.name} ${s.cat} ${s.colour} ${FINISHES.join(' ')}`.toLowerCase().includes(k));
    });
  }, [q, cat, colour]);

  const [shown, setShown] = useState<number[]>(target);
  const shownRef = useRef(shown);
  const tok = useRef(0);
  const [revealed, setRevealed] = useState(false);
  const rootEl = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const cards = useRef<Array<HTMLElement | null>>([]);
  const reg = useCallback((i: number) => (el: HTMLElement | null) => { cards.current[i] = el; }, []);
  const regFns = useMemo(() => ITEMS.map((_, i) => reg(i)), [reg]);

  const cols = () => (grid.current ? getComputedStyle(grid.current).gridTemplateColumns.split(' ').length : 4);
  const enter = (el: HTMLElement, k: number) => {
    if (reduceMotion()) return undefined;
    const c = cols();
    return el.animate(
      [{ transformOrigin: '50% 0', transform: 'translateY(-80px) rotateX(-60deg)', opacity: 0 }, { transformOrigin: '50% 0', transform: 'none', opacity: 1 }],
      { duration: 900, delay: ((k % c) + Math.floor(k / c)) * 80, easing: EASE, fill: 'backwards' },
    );
  };

  /* first reveal when scrolled into view */
  useEffect(() => {
    let shown = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= 0.1 && !shown) {
        shown = true;
        flushSync(() => setRevealed(true));
        shownRef.current.forEach((i, k) => { const el = cards.current[i]; if (el) enter(el, k); });
      } else if (!e.isIntersecting && shown) { shown = false; setRevealed(false); } // cards drop in again on the next visit
    }, { threshold: [0, 0.1] });
    io.observe(rootEl.current!);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* filter change: leave → reflow (FLIP) → enter */
  const key = target.join(',');
  useEffect(() => {
    if (key === shownRef.current.join(',')) return;
    const my = ++tok.current;
    (async () => {
      const prev = shownRef.current, next = target;
      cards.current.forEach((el) => el?.getAnimations().forEach((a) => a.cancel()));
      const leaving = prev.filter((i) => !next.includes(i)), staying = prev.filter((i) => next.includes(i)), entering = next.filter((i) => !prev.includes(i));
      const rm = reduceMotion();
      if (!rm && leaving.length) {
        await wait(leaving.map((i, k) => cards.current[i]?.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateZ(-160px) scale(.9)' }], { duration: 350, delay: k * 14, fill: 'forwards' })));
      }
      if (my !== tok.current) return;
      const first = new Map(staying.map((i) => [i, cards.current[i]!.getBoundingClientRect()]));
      leaving.forEach((i) => cards.current[i]?.getAnimations().forEach((a) => a.cancel()));
      shownRef.current = next;
      flushSync(() => setShown(next));
      if (rm) return;
      const run: Array<Animation | undefined> = [];
      staying.forEach((i) => {
        const el = cards.current[i]!, f = first.get(i)!, l = el.getBoundingClientRect(), dx = f.left - l.left, dy = f.top - l.top;
        if (Math.abs(dx) + Math.abs(dy) > 1) {
          run.push(el.animate([{ transform: `translate3d(${dx}px,${dy}px,0)` }, { transform: `translate3d(${dx * 0.5}px,${dy * 0.5}px,50px)`, offset: 0.5 }, { transform: 'none' }], { duration: 750, easing: 'cubic-bezier(.3,.8,.3,1)' }));
        }
      });
      entering.forEach((i) => { const el = cards.current[i]; if (el) run.push(enter(el, next.indexOf(i))); });
      await wait(run);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  /* ───── 3D slab viewer ───── */
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const isOpen = useRef(false);
  const fly = useRef<HTMLElement | null>(null);
  const closeT = useRef(0);
  const scaler = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const slab = useRef<HTMLDivElement>(null);
  const info = useRef<HTMLDivElement>(null);
  const px = useRef(0);

  const openView = (i: number, card: HTMLElement | null) => {
    clearTimeout(closeT.current);
    fly.current = card; isOpen.current = true;
    setIdx(i); setShow(true); setTick((t) => t + 1);
  };
  const closeView = () => {
    if (!isOpen.current) return;
    isOpen.current = false;
    setOpen(false);
    closeT.current = window.setTimeout(() => { if (!isOpen.current) setShow(false); }, 450);
  };

  // run the fly-in once the overlay has mounted
  useEffect(() => {
    if (!show || !tick) return;
    const raf = requestAnimationFrame(() => {
      setOpen(true);
      if (reduceMotion() || !wrap.current || !info.current || !scaler.current) return;
      const w = wrap.current, card = fly.current;
      if (card) {
        const sr = scaler.current.getBoundingClientRect(), s = sr.width / scaler.current.offsetWidth || 1;
        const a = card.getBoundingClientRect(), b = w.getBoundingClientRect();
        const dx = (a.left + a.width / 2 - b.left) / s, dy = (a.top + a.height / 2 - b.top) / s, sc = a.width / s / 250;
        w.animate([{ transform: `translate(${dx}px,${dy}px) scale(${sc}) rotateY(-20deg)`, opacity: 0.4 }, { transform: 'none', opacity: 1 }], { duration: 1000, easing: EASE });
        info.current.animate([{ opacity: 0, transform: 'translateX(40px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: 250, easing: EASE, fill: 'backwards' });
      } else {
        w.animate([{ opacity: 0.2, transform: 'rotateY(80deg)' }, { opacity: 1, transform: 'none' }], { duration: 700, easing: EASE });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [show, tick]);

  // slab auto-sway + mouse steer
  useEffect(() => {
    if (!show) return;
    let raf = 0, cx = 0;
    const rm = reduceMotion();
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      cx += (px.current - cx) * 0.06;
      if (slab.current) slab.current.style.transform = `rotateX(-6deg) rotateY(${(rm ? cx * 70 : Math.sin(t / 1700) * 24 + cx * 70).toFixed(2)}deg)`;
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [show]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeView(); };
    addEventListener('keydown', onKey);
    return () => { removeEventListener('keydown', onKey); clearTimeout(closeT.current); };
  }, []);
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [show]);

  const cur = ITEMS[idx];
  const related = ITEMS.map((_, j) => j).filter((j) => j !== idx && cur.colour && ITEMS[j].colour === cur.colour).slice(0, 3);
  const colours = COLOURS.filter((c) => ITEMS.some((s) => s.colour === c));
  const emptyCat = cat === 'Quartz' || cat === 'Kadapa Stones';
  const cats: Array<Category | ''> = ['', ...categories.map((c) => c.title)];
  const face = (extra: CSSProperties): CSSProperties => ({ ...cur.tex, position: 'absolute', border: '1px solid rgba(212,175,95,.7)', ...extra });

  const overlay = show && (
    <div
      role="dialog" aria-modal="true" aria-label={cur.name}
      className={`fixed inset-0 z-[90] flex items-center justify-center gap-[50px] overflow-auto bg-[#080808]/90 p-[30px] backdrop-blur-[8px] transition-opacity duration-[450ms] max-[760px]:flex-col max-[760px]:justify-start max-[760px]:gap-2.5 max-[760px]:px-5 max-[760px]:pb-8 max-[760px]:pt-16 ${open ? 'opacity-100' : 'opacity-0'}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeView(); }}
      onPointerMove={(e) => { px.current = e.clientX / window.innerWidth - 0.5; }}
    >
      <button type="button" aria-label="Close" onClick={closeView} className="absolute right-5 top-3.5 z-[2] h-10 w-10 border border-[#a9812f] text-[22px] text-[#d2ad5a] hover:bg-[#d4af5f]/10">×</button>

      <div className="relative h-[480px] w-[min(400px,44%)] shrink-0 [perspective:1500px] max-[760px]:h-[320px] max-[760px]:w-full" onClick={(e) => { if (e.target === e.currentTarget) closeView(); }}>
        <div ref={scaler} className="absolute inset-0 [transform-style:preserve-3d] max-[760px]:scale-[.78] max-[420px]:scale-[.66]">
          <div ref={wrap} className="absolute left-1/2 top-[48%] h-0 w-0 [transform-style:preserve-3d]">
            <div ref={slab} className="absolute -left-[125px] -top-[156px] h-[312px] w-[250px] [transform-style:preserve-3d]">
              <i style={face({ inset: 0, transform: 'translateZ(19px)' })} />
              <i style={face({ inset: 0, transform: 'rotateY(180deg) translateZ(19px)' })} />
              <i style={face({ left: 'calc(50% - 19px)', width: 38, top: 0, height: '100%', transform: 'rotateY(-90deg) translateZ(125px)', filter: 'brightness(.55)' })} />
              <i style={face({ left: 'calc(50% - 19px)', width: 38, top: 0, height: '100%', transform: 'rotateY(90deg) translateZ(125px)', filter: 'brightness(.55)' })} />
              <i style={face({ top: 'calc(50% - 19px)', height: 38, left: 0, width: '100%', transform: 'rotateX(90deg) translateZ(156px)', filter: 'brightness(.8)' })} />
              <i style={face({ top: 'calc(50% - 19px)', height: 38, left: 0, width: '100%', transform: 'rotateX(-90deg) translateZ(156px)', filter: 'brightness(.4)' })} />
            </div>
          </div>
          <div className="absolute left-1/2 top-[calc(48%+170px)] -ml-[150px] h-10 w-[300px] [background:radial-gradient(ellipse,rgba(0,0,0,.75),transparent_70%)]" />
        </div>
      </div>

      <div ref={info} className="w-[min(380px,46%)] max-[760px]:w-full">
        <div className="text-[11px] uppercase tracking-[.3em] text-[#d2ad5a]">{cur.cat}</div>
        <h3 className="mb-3.5 mt-2 font-serif text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.15] text-[#f6f1e4]">{cur.name}</h3>
        <dl className="mb-5 grid grid-cols-[100px_1fr] gap-x-2.5 gap-y-1.5 text-[13px]">
          <dt className="text-[#7d786c]">Category</dt><dd className="text-[#d3cdbd]">{cur.cat}</dd>
          <dt className="text-[#7d786c]">Colour</dt><dd className="text-[#d3cdbd]">{cur.colour || 'Natural'}</dd>
          <dt className="text-[#7d786c]">Finish</dt><dd className="text-[#d3cdbd]">{FINISHES.join(' · ')}</dd>
          <dt className="text-[#7d786c]">Thickness</dt><dd className="text-[#d3cdbd]">Custom thickness available</dd>
          <dt className="text-[#7d786c]">Dimensions</dt><dd className="text-[#d3cdbd]">Custom sizes available</dd>
        </dl>
        <a href="#contact" onClick={() => { onPick(cur.name); closeView(); }} className="mb-2.5 block w-full bg-gradient-to-br from-[#f3dc9b] via-[#d2ad5a] to-[#a9812f] p-[13px] text-center text-[11px] font-medium uppercase tracking-[.16em] text-[#171717]">Request pricing for this stone</a>
        <a href={waLink(cur.name)} target="_blank" rel="noopener noreferrer" className="mb-2 block w-full border border-[#a9812f] p-3 text-center text-[11px] uppercase tracking-[.16em] text-[#d2ad5a] hover:bg-[#d4af5f]/10">Enquire on WhatsApp</a>
        <a href={`#stone/${cur.slug}`} onClick={closeView} className="block text-center text-[11px] uppercase tracking-[.16em] text-[#8a8478] underline hover:text-[#d2ad5a]">View full details</a>
        {related.length > 0 && (
          <div className="mt-[22px]">
            <span className="text-[10px] uppercase tracking-[.28em] text-[#7d786c]">Related stones</span>
            <div className="mt-2 flex gap-2">
              {related.map((j) => (
                <button key={j} type="button" title={ITEMS[j].name} aria-label={ITEMS[j].name} onClick={() => openView(j, null)} style={ITEMS[j].tex}
                  className="h-20 w-16 border border-[#b8923c]/50 p-0 transition-transform duration-300 hover:-translate-y-1.5" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section ref={rootEl} id="catalogue" aria-label="Stone catalogue" className="relative overflow-hidden border border-[#d4af5f]/20 bg-[#1b1b1b] font-light text-[#8a8478]">
      <div className={`mx-auto max-w-[1280px] px-4 pb-9 pt-[22px] transition-[transform,filter] duration-[800ms] ease-[cubic-bezier(.3,.9,.3,1)] sm:px-[30px] sm:pb-11 sm:pt-[30px] ${open ? '[filter:blur(2px)_brightness(.5)] [transform:perspective(1400px)_translateZ(-120px)_rotateX(5deg)]' : ''}`}>
        <label className="sr-only" htmlFor="stone-search">Search stones</label>
        <input id="stone-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by stone name, category or colour"
          className="block w-[min(430px,100%)] border border-[#b8923c]/30 bg-[#2a2a2a] px-3.5 py-[11px] text-[13px] text-[#d9d4c7] outline-none placeholder:text-[#7d786c] focus:border-[#d4af5f]" />
        <div className="mt-3.5 flex flex-wrap gap-2" role="group" aria-label="Category">
          {cats.map((c) => <button key={c || 'all'} type="button" onClick={() => setCat(c)} className={chip(cat === c)}>{c || 'All'}</button>)}
        </div>
        <div className="mt-3.5 flex flex-wrap gap-2" role="group" aria-label="Colour">
          <button type="button" onClick={() => setColour('')} className={chip(colour === '', true)}>Any colour</button>
          {colours.map((c) => <button key={c} type="button" onClick={() => setColour(colour === c ? '' : c)} className={chip(colour === c, true)}>{c}</button>)}
        </div>
        <p className="mb-3 mt-[18px] text-[11px]" aria-live="polite">{target.length} {target.length === 1 ? 'stone' : 'stones'}</p>

        <div ref={grid} className="grid grid-cols-2 gap-3 min-[561px]:grid-cols-3 min-[901px]:grid-cols-4 min-[1100px]:grid-cols-5 [perspective:1500px]">
          {ITEMS.map((s, i) => <Card key={s.slug} item={s} hidden={!shown.includes(i)} revealed={revealed} reg={regFns[i]} onOpen={(el) => openView(i, el)} />)}
        </div>

        {shown.length === 0 && (
          <div className="border border-dashed border-[#d4af5f]/40 p-8 text-center">
            <p className="font-serif text-2xl text-[#e9dfc2]">{emptyCat ? `${cat} options are shared on request.` : 'No stones match your search.'}</p>
            <p className="mt-2 text-[#a8a294]">{emptyCat ? 'Tell us your requirement and we will share suitable options and pricing.' : 'Try a different name, category or colour.'}</p>
            {emptyCat && <a href="#contact" className="btn-fill mt-5" onClick={() => onPick(cat)}>Request pricing</a>}
          </div>
        )}
      </div>
      {typeof document !== 'undefined' && overlay && createPortal(overlay, document.body)}
    </section>
  );
}
