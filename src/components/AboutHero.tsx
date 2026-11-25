import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { stoneTextures } from '../lib/marbleTex';

/* cube faces: orientation of each face + which stone sits on it */
const BASES = ['', 'rotateY(180deg)', 'rotateY(90deg)', 'rotateY(-90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'];
const FACE_TEX = [0, 1, 2, 5, 3, 7];
const SHARDS: Array<[number, number, number, number]> = [[52, 8, 44, 5], [92, 7, 66, 2], [46, 80, 32, 3], [90, 64, 42, 4], [62, 90, 52, 6], [97, 36, 28, 2], [50, 38, 24, 5], [78, 12, 26, 3]];
const KEYFRAMES = '@keyframes ah-fl{from{transform:translate3d(0,0,0) rotate(var(--r0))}to{transform:translate3d(var(--dx),var(--dy),0) rotate(var(--r1))}}@media(prefers-reduced-motion:reduce){.ah-shard{animation:none!important}}';
const cl = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (x: number) => x * x * (3 - 2 * x);

const FACE = 'absolute overflow-hidden border border-[#d6b25e]/60 bg-cover bg-center bg-[#1a1a1a]';
const GLARE = 'absolute inset-0 mix-blend-soft-light [background:linear-gradient(115deg,rgba(255,255,255,.24)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0)_66%,rgba(255,255,255,.1)_100%)]';

/** About page first section: a marble cube that spins, bursts apart around a glowing gold core, then snaps back. */
export default function AboutHero() {
  const hero = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cube = useRef<HTMLDivElement>(null);
  const faces = useRef<Array<HTMLDivElement | null>>([]);
  const core = useRef<Array<HTMLDivElement | null>>([]);
  const [tex, setTex] = useState<string[] | null>(null);
  const [S, setS] = useState(0);

  // build the stone textures just after first paint
  useEffect(() => {
    const t = setTimeout(() => setTex(stoneTextures()), 30);
    return () => clearTimeout(t);
  }, []);

  // cube size follows the stage (mobile / tablet / desktop)
  useEffect(() => {
    const st = stage.current!;
    const fit = () => setS(Math.min(st.clientHeight * 0.4, st.clientWidth * 0.34, 230));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(st);
    return () => ro.disconnect();
  }, []);

  // 9-second loop: spin → faces burst out (core glows) → snap back, with mouse steering
  useEffect(() => {
    if (!S) return;
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
      const u = (t % 9) / 9, e = ease(cl((u - 0.12) / 0.2)) - ease(cl((u - 0.62) / 0.2)); // 0 = closed, 1 = burst
      if (cube.current) cube.current.style.transform = `rotateX(${-24 + py * -24}deg) rotateY(${t * 20 + px * 90}deg)`;
      faces.current.forEach((f, k) => { if (f) f.style.transform = `${BASES[k]} translateZ(${S / 2 + e * S * 0.7}px) rotateZ(${e * (k % 2 ? 9 : -9)}deg)`; });
      core.current.forEach((f) => { if (f) f.style.opacity = String(0.55 + e * 0.45); });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); st.removeEventListener('pointermove', onMove); st.removeEventListener('pointerleave', onLeave); };
  }, [S]);

  const c = S * 0.3;
  return (
    <header ref={hero} aria-labelledby="ah-title" className="relative grid min-h-screen items-center gap-2.5 overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_72%_50%,#1d1912_0%,#0f0f0f_70%)] px-[6vw] pb-16 pt-24 min-[900px]:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] min-[900px]:gap-[1vw] min-[900px]:pb-[70px]">
      <style>{KEYFRAMES}</style>
      <div className="pointer-events-none absolute inset-0 [background:repeating-linear-gradient(72deg,transparent_0_140px,rgba(255,255,255,.012)_140px_141px)]" />

      {/* copy */}
      <div className="relative z-[3] max-w-[600px]">
        <p className="hero-in mb-5 text-xs uppercase tracking-[.34em] text-[#b8924a] sm:mb-[26px] sm:text-[13px]" style={{ animationDelay: '.1s' }}>About us</p>
        <h1 id="ah-title" className="hero-in gold font-serif font-medium text-[clamp(2.6rem,4.9vw,5rem)] leading-[1.05] tracking-[-.01em]" style={{ animationDelay: '.25s' }}>A legacy built on stone.</h1>
        <p className="hero-in mt-6 max-w-[520px] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.65] text-[#cfcfcf] sm:mt-[30px]" style={{ animationDelay: '.5s' }}>
          Established in 1998, Joys Marbles and Granites has spent over two decades mastering natural stone distribution for builders, architects, interior designers and homeowners.
        </p>
        <div className="hero-in mt-8 flex flex-wrap gap-3.5 sm:mt-[38px] sm:gap-[18px]" style={{ animationDelay: '.8s' }}>
          <a className="btn-fill" href="#collection">Explore our collection</a>
          <a className="btn" href="#contact">Request pricing</a>
        </div>
      </div>

      {/* 3D stage */}
      <div
        ref={stage} role="img" aria-label="A marble cube bursting apart around a gold core"
        className={`relative h-[420px] select-none touch-pan-y transition-opacity duration-[1200ms] [perspective:1900px] min-[600px]:h-[480px] min-[900px]:h-[min(76vh,640px)] min-[900px]:min-h-[460px] ${tex ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 [background:radial-gradient(circle,rgba(214,178,94,.14),transparent_62%)]" />
        <div className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]">
          {S > 0 && (
            <div ref={cube} className="absolute left-0 top-0 [transform-style:preserve-3d]">
              {BASES.map((_, k) => (
                <div
                  key={`f${k}`} ref={(el) => { faces.current[k] = el; }} className={FACE}
                  style={{ width: S, height: S, left: -S / 2, top: -S / 2, backgroundImage: tex ? `url(${tex[FACE_TEX[k]]})` : undefined }}
                ><i className={GLARE} /></div>
              ))}
              {BASES.map((b, k) => (
                <div
                  key={`c${k}`} ref={(el) => { core.current[k] = el; }}
                  className="absolute bg-gradient-to-br from-[#f6e7bb] to-[#b8924a] shadow-[0_0_40px_rgba(214,178,94,.8)]"
                  style={{ width: c, height: c, left: -c / 2, top: -c / 2, transform: `${b} translateZ(${c / 2}px)` }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-[90px] w-[72%] -translate-x-1/2 blur-[6px] [background:radial-gradient(ellipse_at_center,rgba(214,178,94,.26),rgba(214,178,94,.06)_45%,transparent_70%)]" />
      </div>

      {/* floating gold shards */}
      {SHARDS.map(([x, y, sz, k], i) => (
        <i
          key={i} aria-hidden className="ah-shard pointer-events-none absolute z-[1] bg-gradient-to-br from-[#d6b25e]/50 to-[#785c24]/25 [clip-path:polygon(50%_0,100%_40%,62%_100%,0_62%)] max-[600px]:hidden"
          style={{
            left: `${x}%`, top: `${y}%`, width: sz, height: sz * 1.35, opacity: 0.22 + (k % 3) * 0.1,
            animation: `ah-fl ${7 + k * 1.6}s ease-in-out infinite alternate`,
            ['--dx' as string]: `${(i % 2 ? 1 : -1) * (12 + k * 4)}px`, ['--dy' as string]: `${((i % 3) - 1) * (18 + k * 3)}px`,
            ['--r0' as string]: `${i * 29}deg`, ['--r1' as string]: `${i * 29 + 40}deg`,
          } as CSSProperties}
        />
      ))}
    </header>
  );
}
