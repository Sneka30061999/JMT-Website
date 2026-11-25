import { useEffect, useRef, useState } from 'react';

const PARAS = [
  'What differentiates us is deep-rooted industry knowledge combined with a customer-first approach.',
  'With over 25 years of experience, we understand material behaviour, architectural requirements and evolving design preferences, which lets us guide clients to the right stone for the right application.',
  'Every product undergoes careful inspection for uniformity, finish and strength. We work closely with trusted suppliers and quarries to maintain a consistent inventory of premium materials.',
  'Our focus on timely delivery, transparent dealings and long-term relationships has earned the trust of numerous clients. We don’t operate on one-time transactions. We build partnerships that grow over time.',
];

type V3 = [number, number, number];
interface Pt { x: number; y: number; z: number; e: boolean; sx: number; sy: number; sz: number; dl: number; du: number; ph: number }
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (k: number) => 1 - Math.pow(1 - k, 3);

/** Build the gem as a cloud of points: sparkling edges + faces. */
function buildGem(): Pt[] {
  const N = 8, pts: Pt[] = [], tbl: V3[] = [], gir: V3[] = [], cul: V3 = [0, 1.4, 0];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    tbl.push([Math.cos(a) * 0.56, -0.62, Math.sin(a) * 0.56]);
    gir.push([Math.cos(a + Math.PI / N), 0, Math.sin(a + Math.PI / N)]);
  }
  const add = (x: number, y: number, z: number, e: boolean) =>
    pts.push({ x, y, z, e, sx: rnd(-4, 4), sy: rnd(-4, 4), sz: rnd(-4, 4), dl: rnd(0, 1400), du: rnd(1600, 2400), ph: rnd(0, 6.28) });
  const edge = (p: V3, q: V3) => {
    const n = Math.round(Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) * 60);
    for (let i = 0; i <= n; i++) { const t = i / n; add(lerp(p[0], q[0], t), lerp(p[1], q[1], t), lerp(p[2], q[2], t), true); }
  };
  const tri = (p: V3, q: V3, r: V3, n: number) => {
    for (let i = 0; i < n; i++) {
      let u = Math.random(), v = Math.random();
      if (u + v > 1) { u = 1 - u; v = 1 - v; }
      add(p[0] + (q[0] - p[0]) * u + (r[0] - p[0]) * v, p[1] + (q[1] - p[1]) * u + (r[1] - p[1]) * v, p[2] + (q[2] - p[2]) * u + (r[2] - p[2]) * v, false);
    }
  };
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N, k = (i + N - 1) % N;
    edge(tbl[i], tbl[j]); edge(gir[i], gir[j]); edge(tbl[i], gir[i]); edge(tbl[j], gir[i]); edge(gir[i], cul);
    tri(tbl[i], tbl[j], gir[i], 24); tri(gir[k], gir[i], tbl[i], 24); tri(gir[i], gir[j], cul, 26); tri([0, -0.62, 0], tbl[i], tbl[j], 14);
  }
  return pts;
}

/** About page "What sets us apart": text rises in while a gold-dust gem assembles beside it. */
export default function GoldGem() {
  const section = useRef<HTMLElement>(null);
  const vis = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const t0 = useRef<number | null>(null);
  const timers = useRef<number[]>([]);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const sec = section.current!, box = vis.current!, canvas = cv.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const H = 470, F = 5.5, S = 150;
    let W = 420, px = 0, py = 0, cx = 0, cy = 0, rot = 0, raf = 0, onScreen = false;
    const pts = buildGem();

    const size = () => {
      W = box.clientWidth || 420;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    };
    size();
    const ro = new ResizeObserver(size); ro.observe(box);

    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const r = sec.getBoundingClientRect(); px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5; };
    const onLeave = () => { px = 0; py = 0; };
    sec.addEventListener('pointermove', onMove); sec.addEventListener('pointerleave', onLeave);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!onScreen) return;
      cx += (px - cx) * 0.06; cy += (py - cy) * 0.06;
      rot += (reduce ? 0 : 0.008) + cx * 0.03;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      if (t0.current === null) return;
      const t = now - t0.current, cr = Math.cos(rot), sr = Math.sin(rot);
      const tilt = -0.22 + cy * 0.5, ct = Math.cos(tilt), st = Math.sin(tilt);
      for (const p of pts) {
        const k = clamp((t - p.dl) / p.du, 0, 1); if (k <= 0) continue;
        const e = reduce ? 1 : ease(k);
        const x = lerp(p.sx, p.x, e), y = lerp(p.sy, p.y - 0.39, e), z = lerp(p.sz, p.z, e);
        const x1 = x * cr + z * sr, z1 = -x * sr + z * cr, y1 = y * ct - z1 * st, z2 = y * st + z1 * ct, sc = F / (F + z2);
        const X = W / 2 + x1 * S * sc, Y = H / 2 + y1 * S * sc;
        const d = clamp((z2 + 1.4) / 2.8, 0, 1);
        const tw = k >= 1 && !reduce ? 0.75 + 0.25 * Math.sin(now / 260 + p.ph) : 1;
        const s = (p.e ? 2.3 : 1.5) * sc + 0.3;
        ctx.fillStyle = p.e ? `hsl(43,80%,${(48 + d * 40) * tw}%)` : `hsl(40,60%,${(30 + d * 34) * tw}%)`;
        ctx.globalAlpha = 0.35 + 0.65 * Math.min(1, k * 2);
        ctx.fillRect(X - s / 2, Y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(frame);

    // replays every time the section scrolls back into view
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      if (e.intersectionRatio >= 0.3 && t0.current === null && !timers.current.length) {
        timers.current.push(window.setTimeout(() => { timers.current = []; setGo(true); t0.current = performance.now(); }, 350));
      } else if (!e.isIntersecting) {
        timers.current.forEach(clearTimeout); timers.current = [];
        t0.current = null; setGo(false);
      }
    }, { threshold: [0, 0.3] });
    io.observe(sec);

    return () => {
      cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
      timers.current.forEach(clearTimeout);
      sec.removeEventListener('pointermove', onMove); sec.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const rise = (i: number) => ({
    className: `transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(.2,.9,.25,1)] motion-reduce:transition-none ${go ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'}`,
    style: { transitionDelay: go ? `${i * 180}ms` : '0ms' },
  });

  return (
    <section ref={section} aria-labelledby="gg-title" className="relative overflow-hidden bg-[#101010] px-6 pb-11 pt-[34px] sm:px-[7%] min-[901px]:px-14 min-[901px]:pb-[60px] min-[901px]:pt-11">
      <div className="grid items-start gap-10 min-[901px]:grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)]">
        <div>
          <div {...rise(0)}>
            <h2 id="gg-title" className="font-serif font-medium text-[clamp(38px,5.4vw,76px)] leading-[1.08] text-[#f6f3ec]">What sets us apart</h2>
            <div className="mb-3 mt-2.5 h-0.5 w-[210px] max-w-[60%] bg-gradient-to-r from-[#d4af5f] to-transparent" />
          </div>
          {PARAS.map((t, i) => (
            <p key={t} {...rise(i + 1)} className={`mb-5 font-light text-[clamp(15px,1.45vw,21px)] leading-[1.8] text-[#9b978d] ${rise(i + 1).className}`}>{t}</p>
          ))}
          <div {...rise(5)} className={`mt-8 font-serif font-medium text-[clamp(26px,3.3vw,46px)] leading-[1.25] text-[#d4af5f] sm:mt-[34px] ${rise(5).className}`}>
            Every slab tells a story of precision, passion and performance.
          </div>
        </div>
        {/* the gem — desktop/large tablet only, as in the original design */}
        <div ref={vis} aria-hidden className="relative hidden h-[470px] min-[901px]:block">
          <canvas ref={cv} className="absolute left-0 top-0" />
        </div>
      </div>
    </section>
  );
}
