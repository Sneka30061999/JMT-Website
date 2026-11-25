import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { stoneTextures } from '../lib/marbleTex';

/* ───────── scene constants ───────── */
const N = 7, AUTO_FALL = 24, LAST_FALL = 74, DEPTH = 24;
const cl = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (x: number) => x * x * (3 - 2 * x);
const SHARDS: Array<[number, number, number, number]> = [[52, 8, 44, 5], [92, 7, 66, 2], [46, 80, 32, 3], [90, 64, 42, 4], [62, 90, 52, 6], [97, 36, 28, 2], [50, 38, 24, 5], [78, 12, 26, 3]];
const KEYFRAMES = '@keyframes hd-fl{from{transform:translate3d(0,0,0) rotate(var(--r0))}to{transform:translate3d(var(--dx),var(--dy),0) rotate(var(--r1))}}@media(prefers-reduced-motion:reduce){.hd-shard{animation:none!important}}';

const EDGE = 'absolute [backface-visibility:hidden] bg-gradient-to-r from-[#8a6d2c] via-[#e3c677] via-45% to-[#a98536]';
const FACE = 'absolute inset-0 overflow-hidden border border-[#d6b25e]/55 bg-cover bg-center bg-[#1a1a1a] [backface-visibility:hidden]';
const GLARE = 'absolute inset-0 mix-blend-soft-light [background:linear-gradient(115deg,rgba(255,255,255,.24)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0)_66%,rgba(255,255,255,.1)_100%)]';

/** Home page first section: copy on the left, a row of marble slabs toppling like dominoes on the right. */
export default function HeroDomino() {
  const hero = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const rig = useRef<HTMLDivElement>(null);
  const floor = useRef<HTMLDivElement>(null);
  const slabs = useRef<Array<HTMLDivElement | null>>([]);
  const [tex, setTex] = useState<string[] | null>(null);
  const [dim, setDim] = useState({ w: 0, h: 0, H: 0 });

  // build the stone textures once, just after first paint
  useEffect(() => {
    const t = setTimeout(() => setTex(stoneTextures()), 30);
    return () => clearTimeout(t);
  }, []);

  // slab size follows the stage (mobile / tablet / desktop)
  useEffect(() => {
    const st = stage.current!;
    const fit = () => {
      const H = st.clientHeight, W = st.clientWidth, h = Math.min(H * 0.5, W * 0.4, 290);
      setDim({ w: h * 0.72, h, H });
    };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(st);
    return () => ro.disconnect();
  }, []);

  const { w, h, H } = dim, s = h * 0.36;

  // loop: stand → topple one by one → rest → stand back up in reverse (12 s), with mouse parallax
  useEffect(() => {
    if (!h) return;
    const st = stage.current!;
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let px = 0, py = 0, tx = 0, ty = 0, raf = 0, vis = true;
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const b = st.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width - 0.5; ty = (e.clientY - b.top) / b.height - 0.5; };
    const onLeave = () => { tx = 0; ty = 0; };
    st.addEventListener('pointermove', onMove); st.addEventListener('pointerleave', onLeave);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; });
    io.observe(hero.current!);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis) return;
      const t = rm ? 0 : now / 1000;
      px += (tx - px) * 0.08; py += (ty - py) * 0.08;
      if (rig.current) rig.current.style.transform = `translateY(${H * 0.1}px) rotateX(${-16 + py * -8}deg) rotateY(${-40 + px * 26}deg)`;
      if (floor.current) floor.current.style.transform = `translateY(${h / 2}px) rotateX(90deg) translateY(${(-(N - 1) * s) / 2 + s}px)`;
      const u = t % 12, fall = u - 1, rise = u - 8;
      slabs.current.forEach((m, i) => {
        if (!m) return;
        const max = i === N - 1 ? LAST_FALL : AUTO_FALL;
        const a = max * (ease(cl((fall - i * 0.5) / 0.6)) - ease(cl((rise - (N - 1 - i) * 0.28) / 0.7)));
        m.style.transform = `translateZ(${-i * s + ((N - 1) * s) / 2}px) rotateX(${a}deg)`;
      });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); st.removeEventListener('pointermove', onMove); st.removeEventListener('pointerleave', onLeave); };
  }, [h, H, s]);

  const fl = N * s + 300;
  return (
    <header ref={hero} className="relative grid min-h-screen items-center gap-2.5 overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_72%_50%,#1d1912_0%,#0f0f0f_70%)] px-[6vw] pb-16 pt-24 min-[900px]:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] min-[900px]:gap-[1vw] min-[900px]:pb-[70px]" aria-labelledby="hd-title">
      <style>{KEYFRAMES}</style>
      <div className="pointer-events-none absolute inset-0 [background:repeating-linear-gradient(72deg,transparent_0_140px,rgba(255,255,255,.012)_140px_141px)]" />

      {/* copy */}
      <div className="relative z-[3] max-w-[600px]">
        <p className="hero-in mb-5 text-xs uppercase tracking-[.34em] text-[#b8924a] sm:mb-[26px] sm:text-[13px]" style={{ animationDelay: '.1s' }}>Natural stone since 1998 · Chennai</p>
        <h1 id="hd-title" className="hero-in gold font-serif font-medium text-[clamp(2.6rem,4.9vw,5rem)] leading-[1.05] tracking-[-.01em]" style={{ animationDelay: '.25s' }}>Elevating iconic architecture with premium stone.</h1>
        <p className="hero-in mt-6 max-w-[520px] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.65] text-[#cfcfcf] sm:mt-[30px]" style={{ animationDelay: '.5s' }}>Discover premium natural marbles, granites and architectural stones backed by decades of industry experience.</p>
        <p className="hero-in mt-4 hidden max-w-[500px] text-base leading-[1.75] text-[#8f8f8f] sm:block" style={{ animationDelay: '.65s' }}>Established in 1998, Joys Marbles &amp; Granites specialises in natural stone trading and supply, with materials sourced from across India for residential, commercial and large-scale projects.</p>
        <div className="hero-in mt-8 flex flex-wrap gap-3.5 sm:mt-[38px] sm:gap-[18px]" style={{ animationDelay: '.8s' }}>
          <a className="btn-fill" href="#collection">Explore our collection</a>
          <a className="btn" href="#contact">Request pricing</a>
        </div>
      </div>

      {/* 3D stage */}
      <div
        ref={stage} role="img" aria-label="Marble slabs toppling like dominoes"
        className={`relative h-[420px] select-none touch-pan-y transition-opacity duration-[1200ms] [perspective:1900px] min-[600px]:h-[480px] min-[900px]:h-[min(76vh,640px)] min-[900px]:min-h-[460px] ${tex ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 [background:radial-gradient(circle,rgba(214,178,94,.14),transparent_62%)]" />
        <div ref={rig} className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]">
          {h > 0 && (
            <>
              <div ref={floor} className="absolute border border-[#d6b25e]/20 [background:linear-gradient(rgba(214,178,94,.12),rgba(214,178,94,.02))]" style={{ width: w * 1.5, height: fl, left: -w * 0.75, top: -fl / 2 }} />
              {Array.from({ length: N }, (_, i) => {
                const front = tex ? `url(${tex[i % 8]})` : undefined, back = tex ? `url(${tex[(i + 3) % 8]})` : undefined;
                const sl: CSSProperties = { width: w, height: h, margin: `${-h / 2}px 0 0 ${-w / 2}px`, transformOrigin: '50% 100%' };
                return (
                  <div key={i} ref={(el) => { slabs.current[i] = el; }} className="absolute left-0 top-0 [transform-style:preserve-3d]" style={sl}>
                    <div className={FACE} style={{ backgroundImage: front, transform: `translateZ(${DEPTH / 2}px)` }}><i className={GLARE} /></div>
                    <div className={FACE} style={{ backgroundImage: back, transform: `rotateY(180deg) translateZ(${DEPTH / 2}px)` }}><i className={GLARE} /></div>
                    <i className={EDGE} style={{ width: DEPTH, height: '100%', left: `calc(50% - ${DEPTH / 2}px)`, top: 0, transform: `rotateY(-90deg) translateZ(${w / 2}px)`, filter: 'brightness(.55)' }} />
                    <i className={EDGE} style={{ width: DEPTH, height: '100%', left: `calc(50% - ${DEPTH / 2}px)`, top: 0, transform: `rotateY(90deg) translateZ(${w / 2}px)`, filter: 'brightness(.75)' }} />
                    <i className={EDGE} style={{ width: '100%', height: DEPTH, left: 0, top: `calc(50% - ${DEPTH / 2}px)`, transform: `rotateX(90deg) translateZ(${h / 2}px)` }} />
                    <i className={EDGE} style={{ width: '100%', height: DEPTH, left: 0, top: `calc(50% - ${DEPTH / 2}px)`, transform: `rotateX(-90deg) translateZ(${h / 2}px)`, filter: 'brightness(.4)' }} />
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-[90px] w-[72%] -translate-x-1/2 blur-[6px] [background:radial-gradient(ellipse_at_center,rgba(214,178,94,.26),rgba(214,178,94,.06)_45%,transparent_70%)]" />
      </div>

      {/* floating gold shards */}
      {SHARDS.map(([x, y, sz, k], i) => (
        <i
          key={i} aria-hidden className="hd-shard pointer-events-none absolute z-[1] bg-gradient-to-br from-[#d6b25e]/50 to-[#785c24]/25 [clip-path:polygon(50%_0,100%_40%,62%_100%,0_62%)] max-[600px]:hidden"
          style={{
            left: `${x}%`, top: `${y}%`, width: sz, height: sz * 1.35, opacity: 0.22 + (k % 3) * 0.1,
            animation: `hd-fl ${7 + k * 1.6}s ease-in-out infinite alternate`,
            ['--dx' as string]: `${(i % 2 ? 1 : -1) * (12 + k * 4)}px`, ['--dy' as string]: `${((i % 3) - 1) * (18 + k * 3)}px`,
            ['--r0' as string]: `${i * 29}deg`, ['--r1' as string]: `${i * 29 + 40}deg`,
          } as CSSProperties}
        />
      ))}

    </header>
  );
}
