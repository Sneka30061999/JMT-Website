import { useEffect, useMemo, useRef } from 'react';
import { MISSION } from '../data/content';

/* ───────── geometry ───────── */
type V3 = [number, number, number];
interface Mesh { v: V3[]; t: Array<[number, number, number]>; n: V3[] | null }   // n = outward face normals (convex meshes); null → computed per frame (double-sided)

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const cl = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mulberry = (a: number) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

function convex(v: V3[], t: Array<[number, number, number]>): Mesh {
  const n = t.map(([a, b, c]) => {
    let f = norm(cross(sub(v[b], v[a]), sub(v[c], v[a])));
    const m: V3 = [(v[a][0] + v[b][0] + v[c][0]) / 3, (v[a][1] + v[b][1] + v[c][1]) / 3, (v[a][2] + v[b][2] + v[c][2]) / 3];
    if (dot(f, m) < 0) f = [-f[0], -f[1], -f[2]];
    return f;
  });
  return { v, t, n };
}

function octahedron(): Mesh {
  const v: V3[] = [[1, 0, 0], [-1, 0, 0], [0, 1.5, 0], [0, -1.5, 0], [0, 0, 1], [0, 0, -1]];
  const t: Array<[number, number, number]> = [];
  for (const x of [0, 1]) for (const y of [2, 3]) for (const z of [4, 5]) t.push([x, y, z]);
  return convex(v, t);
}

function icoVerts(): { v: V3[]; f: Array<[number, number, number]> } {
  const p = (1 + Math.sqrt(5)) / 2;
  const v = ([[-1, p, 0], [1, p, 0], [-1, -p, 0], [1, -p, 0], [0, -1, p], [0, 1, p], [0, -1, -p], [0, 1, -p], [p, 0, -1], [p, 0, 1], [-p, 0, -1], [-p, 0, 1]] as V3[]).map(norm);
  const f: Array<[number, number, number]> = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
  return { v, f };
}

const icosahedron = (): Mesh => { const { v, f } = icoVerts(); return convex(v, f); };

function dodecahedron(): Mesh {
  const { v: iv, f } = icoVerts();
  const cen = f.map(([a, b, c]) => norm(add(add(iv[a], iv[b]), iv[c])));     // dodeca vertices = icosa face centres
  const t: Array<[number, number, number]> = [];
  iv.forEach((axis, vi) => {
    const ring = f.map((tri, i) => (tri.includes(vi) ? i : -1)).filter((i) => i >= 0);
    const ref = norm(sub(cen[ring[0]], [axis[0] * dot(cen[ring[0]], axis), axis[1] * dot(cen[ring[0]], axis), axis[2] * dot(cen[ring[0]], axis)]));
    const side = cross(axis, ref);
    ring.sort((a, b) => {
      const ang = (i: number) => Math.atan2(dot(cen[i], side), dot(cen[i], ref));
      return ang(a) - ang(b);
    });
    for (let k = 1; k < ring.length - 1; k++) t.push([ring[0], ring[k], ring[k + 1]]);  // fan-triangulate the pentagon
  });
  return convex(cen.map((c) => [c[0] * 1.05, c[1] * 1.05, c[2] * 1.05] as V3), t);
}

function torusKnot(): Mesh {
  const P = 2, Q = 3, SEG = 110, RAD = 10, K = 0.3, TUBE = 0.2;
  const pos = (u: number): V3 => { const r = Math.cos(Q * u) + 2; return [r * Math.cos(P * u) * K, r * Math.sin(P * u) * K, -Math.sin(Q * u) * K]; };
  const v: V3[] = [];
  for (let i = 0; i < SEG; i++) {
    const u = (i / SEG) * Math.PI * 2, p0 = pos(u), p1 = pos(u + 0.01);
    const T = sub(p1, p0), N0 = add(p1, p0);
    const B = norm(cross(T, N0)), N = norm(cross(B, T));
    for (let j = 0; j < RAD; j++) {
      const a = (j / RAD) * Math.PI * 2, c = Math.cos(a) * TUBE, s = Math.sin(a) * TUBE;
      v.push([p0[0] + N[0] * c + B[0] * s, p0[1] + N[1] * c + B[1] * s, p0[2] + N[2] * c + B[2] * s]);
    }
  }
  const t: Array<[number, number, number]> = [];
  for (let i = 0; i < SEG; i++) for (let j = 0; j < RAD; j++) {
    const a = i * RAD + j, b = ((i + 1) % SEG) * RAD + j, c = ((i + 1) % SEG) * RAD + ((j + 1) % RAD), d = i * RAD + ((j + 1) % RAD);
    t.push([a, b, c], [a, c, d]);
  }
  return { v, t, n: null };
}

function glowSprite(): HTMLCanvasElement {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d')!, g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,226,150,1)'); g.addColorStop(0.3, 'rgba(240,190,90,.45)'); g.addColorStop(1, 'rgba(214,160,60,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return c;
}

const DARK: V3 = [58, 36, 8], MID: V3 = [190, 140, 55], LIGHT: V3 = [255, 232, 160];
const LDIR = norm([-0.55, 0.7, 0.75]);
const CAM = 4.4;

/** About page "Our mission in practice": four gold gems, one above each commitment; hovering a column wakes its gem. */
export default function MissionGems() {
  const meshes = useMemo(() => [octahedron(), icosahedron(), dodecahedron(), torusKnot()], []);
  const sec = useRef<HTMLElement>(null);
  const bg = useRef<HTMLCanvasElement>(null);
  const cvs = useRef<Array<HTMLCanvasElement | null>>([]);
  const hov = useRef([0, 0, 0, 0]);

  useEffect(() => {
    const el = sec.current!, bgc = bg.current!, bctx = bgc.getContext('2d')!;
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const sprite = glowSprite();
    const r = mulberry(5);
    const stars = Array.from({ length: 160 }, () => ({ x: r(), y: r(), z: 0.2 + r() * 0.8, p: r() * 6.28 }));
    const gems = meshes.map((m) => ({
      m, h: 0, rx: Math.random() * 6, ry: Math.random() * 6, W: 0, H: 0,
      rv: m.v.map(() => [0, 0, 0] as V3), px: new Float32Array(m.v.length), py: new Float32Array(m.v.length),
      order: m.t.map((_, i) => i), depth: new Float32Array(m.t.length),
    }));
    let BW = 0, BH = 0, raf = 0, vis = false, mx = 0, my = 0, tx = 0, ty = 0, last = performance.now(), T = 0;

    const sizeAll = () => {
      BW = el.clientWidth; BH = el.clientHeight; bgc.width = BW * dpr; bgc.height = BH * dpr;
      gems.forEach((g, i) => { const c = cvs.current[i]; if (!c) return; g.W = c.clientWidth; g.H = c.clientHeight; c.width = g.W * dpr; c.height = g.H * dpr; });
    };
    sizeAll();
    const ro = new ResizeObserver(sizeAll); ro.observe(el);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; }, { rootMargin: '120px' }); io.observe(el);
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const b = el.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width - 0.5; ty = (e.clientY - b.top) / b.height - 0.5; };
    const onLeave = () => { tx = ty = 0; };
    el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', onLeave);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!vis) { last = now; return; }
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now;
      if (!rm) T += dt;
      mx += (tx - mx) * 0.06; my += (ty - my) * 0.06;

      /* starfield */
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0); bctx.clearRect(0, 0, BW, BH);
      bctx.globalCompositeOperation = 'lighter';
      for (const s of stars) {
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(T * (0.6 + s.z) + s.p)) * s.z;
        const x = ((s.x * BW - mx * 40 * s.z) % BW + BW) % BW, y = s.y * BH - my * 26 * s.z;
        bctx.fillStyle = `rgba(240,219,160,${a})`;
        bctx.beginPath(); bctx.arc(x, y, 0.5 + s.z * 1.1, 0, 6.283); bctx.fill();
      }
      bctx.globalCompositeOperation = 'source-over';

      gems.forEach((g, gi) => {
        const c = cvs.current[gi]; if (!c || !g.W) return;
        const ctx = c.getContext('2d')!;
        g.h += (hov.current[gi] - g.h) * 0.09;
        const spin = rm ? 0 : dt * (0.35 + g.h * 2.4);
        g.ry += spin; g.rx += spin * 0.45;
        const cx = g.W / 2 + mx * 16, cy = g.H / 2 + my * 10;
        const S = Math.min(g.W * 0.36, g.H * 0.34) * (1 + g.h * 0.16);
        const ay = g.ry + mx * 0.5, ax = g.rx * 0.6 + 0.35 + my * 0.4;
        const sy = Math.sin(ay), cy_ = Math.cos(ay), sx = Math.sin(ax), cx_ = Math.cos(ax);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, g.W, g.H);

        /* glow */
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = 0.28 + g.h * 0.5;
        const gs = S * (3.1 + g.h * 1.2);
        ctx.drawImage(sprite, cx - gs / 2, cy - gs / 2, gs, gs);
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

        /* rings (back half) */
        const ring = (front: boolean) => {
          ctx.lineWidth = 1.2;
          [[1.5, 0.38, 0.5, 0.3], [1.85, 0.5, -0.6, -0.2]].forEach(([k, ky, tilt, ph], ri) => {
            ctx.strokeStyle = `rgba(230,190,100,${(0.22 + g.h * 0.55) * (ri ? 0.7 : 1)})`;
            ctx.beginPath();
            ctx.ellipse(cx, cy, S * k, S * k * ky, tilt + Math.sin(T * 0.4 + ph) * 0.12 + g.ry * 0.05 * (ri ? -1 : 1), front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2);
            ctx.stroke();
          });
        };
        ring(false);

        /* gem */
        const { m, rv, px, py, order, depth } = g;
        for (let i = 0; i < m.v.length; i++) {
          const [x, y, z] = m.v[i];
          const x1 = x * cy_ + z * sy, z1 = -x * sy + z * cy_;
          const y2 = y * cx_ - z1 * sx, z2 = y * sx + z1 * cx_;
          rv[i][0] = x1; rv[i][1] = y2; rv[i][2] = z2;
          const k = CAM / (CAM - z2);
          px[i] = cx + x1 * S * k; py[i] = cy - y2 * S * k;
        }
        const list: number[] = [];
        for (const ti of order) {
          const [a, b, d] = m.t[ti];
          const A = rv[a], B = rv[b], D = rv[d];
          depth[ti] = (A[2] + B[2] + D[2]) / 3;
          if (m.n) {                                        // convex: back-face cull with the (rotated) stored normal
            const n0 = m.n[ti];
            const nx = n0[0] * cy_ + n0[2] * sy, nz1 = -n0[0] * sy + n0[2] * cy_;
            const ny = n0[1] * cx_ - nz1 * sx, nz = n0[1] * sx + nz1 * cx_;
            const mxv = (A[0] + B[0] + D[0]) / 3, myv = (A[1] + B[1] + D[1]) / 3, mzv = depth[ti];
            if (nx * -mxv + ny * -myv + nz * (CAM - mzv) <= 0) continue;
          }
          list.push(ti);
        }
        list.sort((p, q) => depth[p] - depth[q]);
        const lift = g.h * 0.28;
        for (const ti of list) {
          const [a, b, d] = m.t[ti];
          const A = rv[a], B = rv[b], D = rv[d];
          let n: V3;
          if (m.n) {
            const n0 = m.n[ti];
            const nx = n0[0] * cy_ + n0[2] * sy, nz1 = -n0[0] * sy + n0[2] * cy_;
            n = [nx, n0[1] * cx_ - nz1 * sx, n0[1] * sx + nz1 * cx_];
          } else {
            n = norm(cross(sub(B, A), sub(D, A)));
            if (n[2] < 0) n = [-n[0], -n[1], -n[2]];
          }
          const lam = Math.max(0, dot(n, LDIR));
          const tone = cl(Math.pow(lam, 0.85) * 0.92 + 0.08 + lift * (0.4 + lam));
          const col = tone < 0.55 ? mixc(DARK, MID, tone / 0.55) : mixc(MID, LIGHT, (tone - 0.55) / 0.45);
          ctx.fillStyle = `rgb(${col[0]},${col[1]},${col[2]})`;
          ctx.strokeStyle = `rgba(255,236,170,${0.25 + g.h * 0.4})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(px[a], py[a]); ctx.lineTo(px[b], py[b]); ctx.lineTo(px[d], py[d]); ctx.closePath();
          ctx.fill();
          if (m.n) ctx.stroke(); else { ctx.lineWidth = 0.4; ctx.strokeStyle = `rgb(${col[0]},${col[1]},${col[2]})`; ctx.stroke(); }   // knot: hairline stroke hides seams
        }
        ring(true);
      });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); };
  }, [meshes]);

  const set = (i: number, v: number) => () => { hov.current[i] = v; };
  return (
    <section ref={sec} aria-labelledby="mg-title" className="relative overflow-hidden bg-[radial-gradient(700px_420px_at_50%_0%,rgba(120,90,30,.14),transparent_70%),#080808] px-4 py-16 sm:px-6 sm:py-20 min-[1000px]:py-24">
      <canvas ref={bg} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-[1] mx-auto max-w-[1280px]">
        <h2 id="mg-title" className="text-center font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-semibold text-white">Our mission in practice</h2>
        <i className="mx-auto mb-10 mt-4 block h-px w-24 bg-gradient-to-r from-transparent via-[#d6b25e] to-transparent sm:mb-14" />
        <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4 min-[1000px]:gap-4">
          {MISSION.map(([t, p], i) => (
            <article
              key={t} tabIndex={0}
              onPointerEnter={set(i, 1)} onPointerLeave={set(i, 0)} onFocus={set(i, 1)} onBlur={set(i, 0)}
              onClick={() => { const on = hov.current[i] ? 0 : 1; hov.current = hov.current.map((_, k) => (k === i ? on : 0)); }}
              className="group cursor-default rounded-sm border border-[#d6b25e]/15 bg-black/30 px-5 pb-8 pt-2 text-center outline-none backdrop-blur-[2px] transition hover:border-[#d6b25e]/45 focus-visible:border-[#d6b25e]/70 sm:px-6"
            >
              <canvas ref={(e) => { cvs.current[i] = e; }} aria-hidden className="mx-auto block h-[210px] w-full sm:h-[250px] min-[1000px]:h-[290px]" />
              <span className="text-xs tracking-[.3em] text-[#c9a24f]">0{i + 1}</span>
              <h3 className="mt-2 font-serif text-[1.45rem] font-semibold leading-tight text-white transition group-hover:text-[#f0dba0]">{t}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#a9a9a9]">{p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function mixc(a: V3, b: V3, t: number): [number, number, number] {
  return [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)];
}
