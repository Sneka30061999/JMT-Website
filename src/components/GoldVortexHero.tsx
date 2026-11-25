import { useEffect, useRef } from 'react';

type V3 = [number, number, number];
type V2 = [number, number];
type Scr = [number, number, number, number]; // x, y, depth, scale
interface Mat { c: V3; a: number; vein: { a: number; b: number; k: number } }
interface Face { pts: Scr[]; z: number; lam: number; o: Mat; v: Mat['vein'] | null }
interface Particle { r: number; th: number; y: number; sz: number; hue: number }
interface Slab { r: number; th: number; y: number; s: number; ph: number }

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerp2 = (p: Scr, q: Scr, t: number): V2 => [lerp(p[0], q[0], t), lerp(p[1], q[1], t)];
const norm = (v: V3): V3 => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const BF = [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [3, 2, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5]];
const CREAM: V3 = [206, 194, 166];
const PARTICLES = 2600; // gold dust density
const TILES = 9;        // orbiting marble tiles

/** Deterministic random so the vortex looks the same on every load. */
function makeRng(start: number) {
  let seed = start;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  return { rnd, rr: (a: number, b: number) => a + (b - a) * rnd() };
}

interface Props { eyebrow: string; title: string; text: string }

/** Hero with a 3D gold-dust vortex and orbiting marble tiles drawn on a 2D canvas. */
export default function GoldVortexHero({ eyebrow, title, text }: Props) {
  const wrap = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = wrap.current!, canvas = cv.current!, ctx = canvas.getContext('2d')!;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, DPR = 1, mobile = false, raf = 0, visible = true;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      mobile = W < 900;
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(box);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(box);

    // mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; mouse.tx = (e.clientX / innerWidth - 0.5) * 2; mouse.ty = (e.clientY / innerHeight - 0.5) * 2; };
    addEventListener('pointermove', onMove);

    /* ---------- tiny 3D engine ---------- */
    const C = { rx: 0.85, ry: 0, d: 13.5, f: 600, ox: 0, oy: 0 };
    const L = norm([-0.45, 0.75, -0.6]);
    const camRot = (p: V3): V3 => {
      const cy = Math.cos(C.ry), sy = Math.sin(C.ry), cx = Math.cos(C.rx), sx = Math.sin(C.rx);
      const x1 = p[0] * cy + p[2] * sy, z1 = -p[0] * sy + p[2] * cy;
      return [x1, p[1] * cx + z1 * sx, -p[1] * sx + z1 * cx];
    };
    const cam = (p: V3): V3 => { const q = camRot(p); q[2] += C.d; return q; };
    const proj = (q: V3): Scr => { const s = C.f / q[2]; return [C.ox + q[0] * s, C.oy - q[1] * s, q[2], s]; };
    const P = (p: V3) => proj(cam(p));
    const rotV = (v: V3, ax: number, ay: number, az: number): V3 => {
      let [x, y, z] = v, c: number, s: number, t: number;
      c = Math.cos(az); s = Math.sin(az); t = x * c - y * s; y = x * s + y * c; x = t;
      c = Math.cos(ax); s = Math.sin(ax); t = y * c - z * s; z = y * s + z * c; y = t;
      c = Math.cos(ay); s = Math.sin(ay); t = x * c + z * s; z = -x * s + z * c; x = t;
      return [x, y, z];
    };

    let faces: Face[] = [];
    const addPoly = (vs: V3[], center: V3, o: Mat, vein: Mat['vein'] | null) => {
      const a = vs[0], b = vs[1], c = vs[2];
      const u: V3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v: V3 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = norm([u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]);
      const fc: V3 = [0, 0, 0];
      for (const p of vs) { fc[0] += p[0]; fc[1] += p[1]; fc[2] += p[2]; }
      fc[0] /= vs.length; fc[1] /= vs.length; fc[2] /= vs.length;
      if (dot(n, [fc[0] - center[0], fc[1] - center[1], fc[2] - center[2]]) < 0) n = [-n[0], -n[1], -n[2]];
      const fcc = cam(fc);
      if (dot(camRot(n), fcc) >= 0) return; // back face
      const pts: Scr[] = [];
      for (const p of vs) { const q = cam(p); if (q[2] < 0.6) return; pts.push(proj(q)); }
      faces.push({ pts, z: fcc[2], lam: Math.max(0, dot(n, L)), o, v: vein });
    };
    const addBox = (pos: V3, size: V3, rot: V3, o: Mat, veinFaces: number[]) => {
      const x = size[0] / 2, y = size[1] / 2, z = size[2] / 2;
      const base: V3[] = [[-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z], [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]];
      const vs = base.map((p): V3 => { const r = rotV(p, rot[0], rot[1], rot[2]); return [r[0] + pos[0], r[1] + pos[1], r[2] + pos[2]]; });
      for (let i = 0; i < 6; i++) addPoly(BF[i].map((k) => vs[k]), pos, o, veinFaces.includes(i) ? o.vein : null);
    };
    const drawFaces = (fade: number) => {
      faces.sort((a, b) => b.z - a.z);
      for (const f of faces) {
        const o = f.o, k = 0.14 + 0.86 * f.lam;
        const fog = Math.max(0.3, Math.min(1, 1.2 - (f.z - C.d + 7) / 22));
        const r = Math.min(255, o.c[0] * k), g = Math.min(255, o.c[1] * k), b = Math.min(255, o.c[2] * k);
        ctx.beginPath();
        f.pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
        ctx.closePath();
        ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${o.a * fog * fade})`; ctx.fill();
        ctx.strokeStyle = `rgba(222,184,98,${0.55 * fog * fade})`; ctx.lineWidth = 1; ctx.stroke();
        if (f.v && f.pts.length === 4) { // gold vein across the marble face
          const p = f.pts, A = lerp2(p[0], p[1], f.v.a), B = lerp2(p[3], p[2], f.v.b);
          const dx = B[0] - A[0], dy = B[1] - A[1], m = [(A[0] + B[0]) / 2 - dy * f.v.k, (A[1] + B[1]) / 2 + dx * f.v.k];
          ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.quadraticCurveTo(m[0], m[1], B[0], B[1]);
          ctx.strokeStyle = `rgba(236,208,128,${0.7 * fog * fade * (0.35 + f.lam)})`; ctx.lineWidth = 1.3; ctx.stroke();
        }
      }
    };

    /* ---------- gold dust vortex ---------- */
    const { rnd, rr } = makeRng(23);
    const pts: Particle[] = [], slabs: Slab[] = [];
    for (let i = 0; i < PARTICLES; i++) {
      const r = 0.5 + Math.pow(rnd(), 1.5) * 6.2, arm = Math.floor(rnd() * 3); // 3 spiral arms
      pts.push({ r, th: arm * 2.094 + r * 0.85 + (rnd() - 0.5) * 0.7, y: (rnd() - 0.5) * 0.5 * (0.4 + r * 0.12), sz: rr(0.6, 2), hue: rnd() });
    }
    for (let i = 0; i < TILES; i++) slabs.push({ r: rr(2.4, 5.4), th: rr(0, 6.28), y: rr(-0.8, 0.8), s: rr(0.5, 0.9), ph: rr(0, 6) });

    const T0 = performance.now();
    const frame = (now: number) => {
      if (!calm) raf = requestAnimationFrame(frame);
      if (!visible || !W || !H) return;
      const t = calm ? 3 : (now - T0) / 1000, fade = calm ? 1 : clamp(t / 0.7, 0, 1);
      mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, W, H);

      C.rx = 0.85 - mouse.y * 0.12; C.ry = t * 0.1 + mouse.x * 0.25; C.d = 13.5; // camera
      C.f = Math.min(W * (mobile ? 1.05 : 0.62), H * 1.15);
      C.ox = W * (mobile ? 0.5 : 0.64); C.oy = H * (mobile ? 0.66 : 0.52);       // vortex centre (right side on desktop)

      // ambient gold haze
      let g = ctx.createRadialGradient(C.ox, C.oy, 0, C.ox, C.oy, C.f * 0.75);
      g.addColorStop(0, `rgba(201,162,75,${0.1 * fade})`); g.addColorStop(1, 'rgba(201,162,75,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      // glowing core
      const o = P([0, 0, 0]);
      g = ctx.createRadialGradient(o[0], o[1], 0, o[0], o[1], C.f * 0.35);
      g.addColorStop(0, `rgba(255,226,150,${0.55 * fade})`); g.addColorStop(0.25, `rgba(214,170,80,${0.2 * fade})`); g.addColorStop(1, 'rgba(214,170,80,0)');
      ctx.fillStyle = g; ctx.fillRect(o[0] - C.f, o[1] - C.f, C.f * 2, C.f * 2);

      // orbit rings
      for (const R of [2.3, 3.8, 5.5]) {
        ctx.beginPath();
        for (let k = 0; k <= 96; k++) { const a = (k / 96) * 6.2832, q = P([Math.cos(a) * R, 0, Math.sin(a) * R]); if (k) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
        ctx.strokeStyle = `rgba(214,176,92,${0.16 * fade})`; ctx.lineWidth = 1; ctx.stroke();
      }

      // gold dust (additive blending)
      ctx.globalCompositeOperation = 'lighter';
      for (const p of pts) {
        const a = p.th + t * (1.5 / (p.r + 0.7)); // inner particles spin faster
        const q = cam([Math.cos(a) * p.r, p.y, Math.sin(a) * p.r]); if (q[2] < 0.6) continue;
        const s = proj(q), sz = (p.sz * s[3]) / (C.f / C.d) * (mobile ? 0.8 : 1.1);
        const al = clamp(1.15 - (q[2] - C.d + 6) / 14, 0.15, 1) * fade * (0.35 + 0.65 / (1 + p.r * 0.25));
        ctx.fillStyle = `rgba(${lerp(230, 255, p.hue) | 0},${lerp(170, 225, p.hue) | 0},${lerp(70, 140, p.hue) | 0},${al})`;
        ctx.fillRect(s[0], s[1], sz, sz);
      }
      ctx.globalCompositeOperation = 'source-over';

      // orbiting marble tiles
      faces = [];
      for (const s of slabs) {
        const a = s.th + t * (1.1 / (s.r + 0.7));
        addBox([Math.cos(a) * s.r, s.y + Math.sin(t + s.ph) * 0.15, Math.sin(a) * s.r], [s.s * 1.3, 0.1, s.s], [0, -a, 0.2], { c: CREAM, a: 0.95, vein: { a: 0.3, b: 0.6, k: 0.2 } }, [2, 3]);
      }
      drawFaces(fade);
    };
    raf = requestAnimationFrame(frame);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('pointermove', onMove); };
  }, []);

  return (
    <header ref={wrap} className="relative min-h-screen overflow-hidden bg-[#0d0d0d]">
      <canvas ref={cv} aria-hidden className="absolute inset-0 block h-full w-full" />
      {/* readability shade: left-to-right on wide screens, top-to-bottom on phones / small tablets */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden min-[900px]:block [background:linear-gradient(90deg,#0d0d0d_0%,rgba(13,13,13,.88)_30%,rgba(13,13,13,.25)_58%,transparent_75%),linear-gradient(180deg,rgba(13,13,13,.7)_0%,transparent_18%,transparent_80%,rgba(13,13,13,.85)_100%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 min-[900px]:hidden [background:linear-gradient(180deg,#0d0d0d_0%,rgba(13,13,13,.8)_38%,transparent_62%,rgba(13,13,13,.85)_100%)]" />

      <div className="relative z-[2] max-w-[980px] px-6 pb-16 pt-[130px] min-[900px]:px-[76px] min-[900px]:pb-[200px] min-[900px]:pt-[240px]">
        <p className="hero-in mb-5 text-xs uppercase tracking-[.34em] text-[#c9a24b] min-[900px]:mb-[30px] min-[900px]:text-[15px]">{eyebrow}</p>
        <h1 className="hero-in bg-[linear-gradient(100deg,#a8822f_0%,#d5b36a_45%,#b8923a_100%)] bg-clip-text font-serif text-[clamp(40px,6.6vw,104px)] font-medium leading-[1.06] text-transparent" style={{ animationDelay: '.15s' }}>{title}</h1>
        <p className="hero-in mt-[22px] max-w-[810px] text-lg font-light leading-[1.9] text-[#b9b3a6] min-[900px]:mt-[42px] min-[900px]:text-[22px]" style={{ animationDelay: '.3s' }}>{text}</p>
      </div>
    </header>
  );
}
