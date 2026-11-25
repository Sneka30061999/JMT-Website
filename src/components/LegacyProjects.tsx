import { useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '../data/clients';

/* ───────── scene data (deterministic, built once) ───────── */
type V = [number, number, number];
const N = projects.length;
const HOLD = 4.2;                 // seconds spent on each cluster
const FOV = (55 * Math.PI) / 180;
const PER = 170;                  // stars per cluster

const mulberry = (a: number) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const cl = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (x: number) => x * x * (3 - 2 * x);
const lerp3 = (a: V, b: V, t: number): V => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const dist = (a: V, b: V) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

function build() {
  const r = mulberry(7), g = () => r() + r() + r() - 1.5;
  const centres: V[] = Array.from({ length: N }, (_, i) => [Math.sin(i * 1.9) * 6, Math.cos(i * 2.3) * 3.5, -i * 10.5]);
  const stars: V[][] = centres.map((c) => Array.from({ length: PER }, (): V => [c[0] + g() * 2.4, c[1] + g() * 1.7, c[2] + g() * 1.5]));
  const bg: V[] = Array.from({ length: 1800 }, (): V => [(r() - 0.5) * 60, (r() - 0.5) * 34, 18 - r() * (N * 10.5 + 40)]);
  const lines: Array<[V, V]> = [];
  centres.forEach((c, i) => {
    for (let k = 0; k < 22; k++) {
      const a = stars[i][Math.floor(r() * PER)], b = r() < 0.5 ? c : stars[i][Math.floor(r() * PER)];
      if (dist(a, b) < 3.2) lines.push([a, b]);
    }
  });
  for (let i = 0; i < N - 1; i++) lines.push([centres[i], centres[i + 1]]);   // route between clusters
  const stops: V[] = centres.map((c) => [c[0] + 1.2, c[1] + 0.6, c[2] + 7.5]); // camera stop per cluster
  return { centres, stars, bg, lines, stops };
}

function glow(color: string): HTMLCanvasElement {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d')!, g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, color); g.addColorStop(0.35, color.replace(/[\d.]+\)$/, '.7)')); g.addColorStop(1, color.replace(/[\d.]+\)$/, '0)'));
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return c;
}

/** Home page "Stone that becomes part of a legacy": a camera flies through constellations, one per project. */
export default function LegacyProjects() {
  const scene = useMemo(build, []);
  const box = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const [idx, setIdx] = useState(0);
  const lastIdx = useRef(0);

  useEffect(() => {
    const el = box.current!, canvas = cv.current!, ctx = canvas.getContext('2d')!;
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const sBg = glow('rgba(207,195,160,1)'), sStar = glow('rgba(240,219,160,1)'), sHub = glow('rgba(255,231,168,1)');
    let W = 0, H = 0, F = 1, raf = 0, vis = true;
    const m = { x: 0, y: 0, tx: 0, ty: 0 };

    const size = () => { W = el.clientWidth; H = el.clientHeight; canvas.width = W * dpr; canvas.height = H * dpr; F = H / 2 / Math.tan(FOV / 2); };
    size();
    const ro = new ResizeObserver(size); ro.observe(el);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }); io.observe(el);
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const b = el.getBoundingClientRect(); m.tx = (e.clientX - b.left) / b.width - 0.5; m.ty = (e.clientY - b.top) / b.height - 0.5; };
    const onLeave = () => { m.tx = m.ty = 0; };
    el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', onLeave);

    const t0 = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis || !W) return;
      const t = rm ? 0 : Math.max(0, (now - t0) / 1000);   // first rAF timestamp can precede t0 → negative index
      m.x += (m.tx - m.x) * 0.06; m.y += (m.ty - m.y) * 0.06;
      const k = Math.floor(t / HOLD), u = (t % HOLD) / HOLD, e = ease(cl((u - 0.62) / 0.38)), a = k % N, b = (k + 1) % N;
      const cur = e > 0.5 ? b : a;
      if (cur !== lastIdx.current) { lastIdx.current = cur; setIdx(cur); }

      // camera: eased glide between stops, mouse parallax, slow sway; looks at the interpolated cluster centre
      const p = lerp3(scene.stops[a], scene.stops[b], e);
      p[0] += m.x * 2 + Math.sin(t * 0.4) * 0.4; p[1] += -m.y * 1.4;
      const tg = lerp3(scene.centres[a], scene.centres[b], e);
      let fx = tg[0] - p[0], fy = tg[1] - p[1], fz = tg[2] - p[2];
      const fl = Math.hypot(fx, fy, fz); fx /= fl; fy /= fl; fz /= fl;
      let rx = -fz, rz = fx; const rl = Math.hypot(rx, rz) || 1; rx /= rl; rz /= rl;     // right = forward × up(0,1,0)
      const ux = -rz * fy, uy = rz * fx - rx * fz, uz = rx * fy;                            // up = right × forward

      const proj = (v: V, out: number[]) => {
        const dx = v[0] - p[0], dy = v[1] - p[1], dz = v[2] - p[2];
        const z = dx * fx + dy * fy + dz * fz;
        if (z < 0.1) return false;
        const s = F / z;
        out[0] = W / 2 + (dx * rx + dz * rz) * s; out[1] = H / 2 - (dx * ux + dy * uy + dz * uz) * s; out[2] = s;
        return true;
      };

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      const o = [0, 0, 0], o2 = [0, 0, 0];

      ctx.globalAlpha = 0.7;
      for (const v of scene.bg) if (proj(v, o)) { const s = 0.09 * o[2]; if (s > 0.6) ctx.drawImage(sBg, o[0] - s / 2, o[1] - s / 2, s, s); }

      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(214,178,94,.35)'; ctx.lineWidth = 1; ctx.beginPath();
      for (const [va, vb] of scene.lines) if (proj(va, o) && proj(vb, o2)) { ctx.moveTo(o[0], o[1]); ctx.lineTo(o2[0], o2[1]); }
      ctx.stroke();

      for (const cluster of scene.stars) for (const v of cluster) if (proj(v, o)) { const s = 0.16 * o[2]; if (s > 0.6) ctx.drawImage(sStar, o[0] - s / 2, o[1] - s / 2, s, s); }

      ctx.globalAlpha = 0.75;
      scene.centres.forEach((c, i) => {
        if (!proj(c, o)) return;
        const s = (1.1 + (i === cur ? 0.9 + Math.sin(t * 3) * 0.2 : 0)) * o[2];
        ctx.drawImage(sHub, o[0] - s / 2, o[1] - s / 2, s, s);
      });
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); };
  }, [scene]);

  const p = projects[idx];
  return (
    <section aria-labelledby="lp-title" className="relative grid min-h-[620px] items-center overflow-hidden bg-[radial-gradient(500px_400px_at_5%_10%,rgba(120,90,30,.12),transparent_70%),#070707] min-[900px]:grid-cols-[minmax(300px,.74fr)_1.8fr] min-[900px]:pl-[3vw]">
      <div className="relative z-[5] px-6 pb-2 pt-14 sm:px-10 min-[900px]:p-0 min-[900px]:py-[30px]">
        <div className="mb-7 flex items-center gap-4 sm:mb-[34px]" aria-hidden>
          <svg width="52" height="46" viewBox="0 0 52 46" fill="none" stroke="#d6b25e" strokeWidth="2.4" strokeLinejoin="round"><path d="M13 3h26l11 13L26 43 2 16z" /><path d="M2 16h48M19 3l-6 13 13 27 13-27-6-13M13 16 26 3l13 13" /></svg>
          <i className="h-px w-[140px] bg-gradient-to-r from-[#d6b25e] to-transparent" />
        </div>
        <h2 id="lp-title" className="font-serif text-[clamp(40px,4.6vw,72px)] font-medium leading-[1.05] text-white">
          Stone that becomes part of{' '}
          <em className="bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0] bg-clip-text not-italic text-transparent">a legacy</em>
        </h2>
        <p className="mb-8 mt-5 max-w-[420px] text-[17px] leading-[1.6] text-[#a3a3a3] sm:mt-[26px] sm:mb-[34px] sm:text-xl">Notable projects where we have supplied natural stones.</p>
        <a href="#projects" className="inline-flex items-center gap-3 rounded-full border border-[#d6b25e]/55 bg-[#d6b25e]/5 px-6 py-3.5 text-base text-[#f0dba0] transition hover:bg-[#d6b25e]/15 hover:shadow-[0_0_30px_rgba(214,178,94,.25)] sm:px-[30px] sm:py-[17px] sm:text-lg">
          View all projects <span aria-hidden>→</span>
        </a>
      </div>

      <div ref={box} role="img" aria-label="A flight through constellations, one for each of our notable projects" className="relative h-[440px] touch-pan-y select-none sm:h-[520px] min-[900px]:h-[660px]">
        <canvas ref={cv} className="absolute inset-0 block h-full w-full" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(90deg,#070707,transparent_14%),linear-gradient(0deg,#070707,transparent_10%)] max-[899px]:[background:linear-gradient(0deg,#070707,transparent_10%)]" />
        <div className="pointer-events-none absolute bottom-5 left-1/2 w-[92%] -translate-x-1/2 text-center sm:bottom-[26px]" aria-live="polite">
          <small className="block text-[11px] uppercase tracking-[.32em] text-[#c9a24f] sm:text-xs">{p.kind}</small>
          <b className="my-1 block font-serif text-[clamp(26px,5vw,40px)] font-semibold text-white [text-shadow:0_4px_24px_#000]">{p.name}</b>
          <em className="block text-sm not-italic text-[#a5a5a5] sm:text-[15px]">{p.city}</em>
        </div>
      </div>
    </section>
  );
}
