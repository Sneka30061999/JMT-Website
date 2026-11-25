import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { stoneTextures } from '../lib/marbleTex';

const N = 22;
const rnd = (a: number) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const cl = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));

interface Slab { x: number; y: number; z: number; ph: number; rx: number; ry: number; sx: number; sy: number; tex: number; k: number }

/** Contact enquiry section: marble slabs float and spin behind a tilting form; typing warms them, submitting bursts gold dust. */
export default function ContactSlabs({ children, sentAt }: { children: ReactNode; sentAt: number }) {
  const box = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const els = useRef<Array<HTMLDivElement | null>>([]);
  const [tex, setTex] = useState<string[] | null>(null);
  const [u, setU] = useState(70);
  const live = useRef({ focus: 0, tf: 0, sent: 0 });
  const sentRef = useRef(sentAt);
  sentRef.current = sentAt;

  const slabs = useMemo<Slab[]>(() => {
    const r = rnd(11);
    return Array.from({ length: N }, (_, i) => {
      const side = i % 2 ? 1 : -1;
      return { x: 50 + side * (30 + r() * 20), y: 4 + r() * 92, z: -280 + r() * 380, ph: r() * 6, rx: r() * 360, ry: r() * 360, sx: 6 + r() * 14, sy: 9 + r() * 18, tex: i % 8, k: 0.7 + r() * 0.6 };
    });
  }, []);

  useEffect(() => { const t = setTimeout(() => setTex(stoneTextures()), 40); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const el = box.current!;
    const fit = () => setU(cl(el.clientWidth / 13, 38, 84));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = box.current!, pn = panel.current!, canvas = cv.current!, ctx = canvas.getContext('2d')!;
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let W = 0, H = 0, raf = 0, vis = false, mx = 0, my = 0, tx = 0, ty = 0, seenSent = sentRef.current, burstT = -1;
    const parts = Array.from({ length: 260 }, () => { const a = Math.random() * 6.283, s = 80 + Math.random() * 520; return { dx: Math.cos(a) * s, dy: Math.sin(a) * s * 0.7, r: 1 + Math.random() * 2.2 }; });
    const size = () => { W = el.clientWidth; H = el.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; };
    size();
    const ro = new ResizeObserver(size); ro.observe(el);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }, { rootMargin: '160px' }); io.observe(el);
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const b = el.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width - 0.5; ty = (e.clientY - b.top) / b.height - 0.5; };
    const onLeave = () => { tx = ty = 0; };
    const fin = () => { live.current.tf = 1; pn.classList.add('cs-live'); };
    const fout = () => { live.current.tf = 0; pn.classList.remove('cs-live'); };
    el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', onLeave);
    pn.addEventListener('focusin', fin); pn.addEventListener('focusout', fout);

    const t0 = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis) return;
      const t = rm ? 0 : (now - t0) / 1000;
      mx += (tx - mx) * 0.06; my += (ty - my) * 0.06;
      const L = live.current; L.focus += (L.tf - L.focus) * 0.08;
      if (sentRef.current !== seenSent) { seenSent = sentRef.current; burstT = t; }
      const b = burstT < 0 ? -1 : t - burstT;
      const p = b < 0 || b > 2.4 ? 0 : Math.sin(Math.PI * cl(b / 2.4));
      slabs.forEach((s, i) => {
        const d = els.current[i]; if (!d) return;
        const par = s.z / 100;
        d.style.transform = `translate3d(${mx * -60 * par}px,${Math.sin(t * 0.5 + s.ph) * 14 - my * 40 * par}px,${s.z}px) rotateX(${s.rx + t * s.sx}deg) rotateY(${s.ry + t * s.sy + p * 180}deg)`;
        d.style.setProperty('--g', String(0.18 + 0.4 * L.focus + 0.7 * p));
      });
      pn.style.transform = `perspective(1500px) rotateX(${-my * 3}deg) rotateY(${mx * 5}deg)`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      if (b >= 0 && b < 3.2) {
        ctx.globalCompositeOperation = 'lighter';
        const k = b * (1 - b / 7), a = cl(1 - b / 3.2), cx = W / 2, cy = pn.offsetTop + pn.offsetHeight / 2;
        ctx.fillStyle = `rgba(240,219,160,${a})`;
        for (const q of parts) { ctx.beginPath(); ctx.arc(cx + q.dx * k * 0.6, cy + q.dy * k * 0.6, q.r, 0, 6.283); ctx.fill(); }
        ctx.strokeStyle = `rgba(240,219,160,${cl(1 - b / 1.8) * 0.9})`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, 30 + b * 520, 0, 6.283); ctx.stroke();
        ctx.globalCompositeOperation = 'source-over';
      }
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); pn.removeEventListener('focusin', fin); pn.removeEventListener('focusout', fout); };
  }, [slabs]);

  const w = u, h = u * 1.55, dpt = u * 0.12;
  return (
    <div ref={box} className="relative isolate z-0 overflow-hidden [contain:paint] bg-[#101010] px-4 pb-20 pt-16 sm:px-6 sm:pt-20 min-[900px]:pb-24">
      <style>{'.cs-live{box-shadow:0 40px 90px -30px rgba(0,0,0,.9),0 0 60px rgba(214,178,94,.14)!important}'}</style>
      {/* floating slabs */}
      <div aria-hidden className={`pointer-events-none absolute inset-0 transition-opacity duration-[1200ms] [perspective:900px] ${tex ? 'opacity-100' : 'opacity-0'}`}>
        {slabs.map((s, i) => (
          <div
            key={i} ref={(e) => { els.current[i] = e; }}
            className={`absolute [transform-style:preserve-3d] ${i >= 12 ? 'max-[760px]:hidden' : i >= 6 ? 'max-[480px]:hidden' : ''}`}
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: w * s.k, height: h * s.k, marginLeft: -(w * s.k) / 2, marginTop: -(h * s.k) / 2, '--g': 0.2 } as CSSProperties}
          >
            {[0, 1].map((f) => (
              <i
                key={f} className="absolute inset-0 border-2 border-[#d6b25e]/70 bg-cover bg-center [backface-visibility:hidden]"
                style={{ backgroundImage: tex ? `url(${tex[(s.tex + f * 3) % 8]})` : undefined, backgroundColor: '#1a1a1a', transform: `rotateY(${f * 180}deg) translateZ(${dpt / 2}px)`, boxShadow: 'inset 0 0 0 1px rgba(255,235,170,calc(var(--g)*.9)), 0 0 calc(var(--g)*40px) rgba(214,178,94,calc(var(--g)*.6))' }}
              />
            ))}
          </div>
        ))}
      </div>
      <canvas ref={cv} aria-hidden className="pointer-events-none absolute inset-0 z-[2] h-full w-full" />
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(#101010,transparent_10%,transparent_90%,#101010)]" />

      <div className="relative z-[3] mx-auto text-center">
        <h2 className="font-serif text-[clamp(2rem,4.4vw,3.75rem)] font-semibold text-white [text-shadow:0_0_14px_#000,0_4px_30px_#000]">Get a quote / send an enquiry</h2>
        <p className="mx-auto mt-2.5 max-w-[520px] text-base leading-[1.65] text-[#d8d8d8] [text-shadow:0_0_10px_#000,0_2px_18px_#000]">
          Our team will get back to you quickly with the best options and pricing tailored to your needs.
        </p>
        <div ref={panel} className="mx-auto mt-6 w-full max-w-[640px] bg-[rgba(15,15,15,.88)] shadow-[0_40px_90px_-30px_rgba(0,0,0,.9)] backdrop-blur-[7px] transition-[box-shadow] duration-500 [will-change:transform] sm:mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
