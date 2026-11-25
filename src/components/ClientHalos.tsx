import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LABELS = ['Consistent quality', 'On-time delivery', 'Transparent pricing', 'Long-term reliability'];
const BASE = 0.85; // object scale

const disposeTree = (o: THREE.Object3D): void =>
  o.traverse((c) => {
    const m = c as THREE.Mesh;
    m.geometry?.dispose();
  });

function makePoints(n: number, size: number, color: number, fill: (arr: Float32Array) => void): THREE.Points {
  const geo = new THREE.BufferGeometry();
  const arr = new Float32Array(n * 3);
  fill(arr);
  geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  const p = new THREE.Points(geo, new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  p.frustumCulled = false;
  return p;
}

/** "Our clients trust us for": four 3D gold objects (crystal, clock, coin, chain) wrapped in drifting gold-dust halos. */
export default function ClientHalos() {
  const stage = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const lbs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const box = stage.current!, canvas = cv.current!;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const T = THREE;

    const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0);

    /* studio reflections so the gold looks like metal */
    const es = new T.Scene();
    es.background = new T.Color(0x0b0a08);
    const panel = (w: number, h: number, x: number, y: number, z: number, c: THREE.Color) => {
      const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: c, side: T.DoubleSide }));
      m.position.set(x, y, z); m.lookAt(0, 0, 0); es.add(m);
    };
    panel(14, 5, 0, 9, 0, new T.Color(2.6, 2.3, 1.7));
    panel(3, 12, -9, 2, 2, new T.Color(1.8, 1.55, 1.1));
    panel(3, 12, 9, 1, 3, new T.Color(1.4, 1.2, 0.9));
    panel(10, 3, 0, -1, 9, new T.Color(0.9, 0.8, 0.6));
    panel(8, 2, 0, 2, -9, new T.Color(1.2, 1, 0.8));
    panel(14, 6, 0, -9, 0, new T.Color(1.1, 0.9, 0.6)); // soft bounce from below so undersides are not black
    panel(12, 3, 0, 0, -9, new T.Color(0.9, 0.75, 0.5));
    const pm = new T.PMREMGenerator(renderer);
    const env = pm.fromScene(es, 0.03).texture;
    pm.dispose();
    disposeTree(es);

    /* materials + the four 3D gold objects */
    const GOLD = new T.MeshStandardMaterial({ color: 0xd9a93f, metalness: 1, roughness: 0.26, envMapIntensity: 1.3 });
    const GEM = new T.MeshStandardMaterial({ color: 0xe0b04a, metalness: 1, roughness: 0.16, flatShading: true, envMapIntensity: 2.1 });
    const DARK = new T.MeshStandardMaterial({ color: 0x1c1b19, metalness: 0.4, roughness: 0.55, side: T.DoubleSide });

    const makeObject = (k: number): THREE.Group => {
      const g = new T.Group();
      if (k === 0) { // crystal
        const m = new T.Mesh(new T.OctahedronGeometry(0.75, 0), GEM); m.scale.y = 1.35; g.add(m);
      } else if (k === 1) { // clock
        g.add(new T.Mesh(new T.TorusGeometry(0.72, 0.09, 20, 72), GOLD));
        const face = new T.Mesh(new T.CircleGeometry(0.66, 48), DARK); face.position.z = -0.01; g.add(face);
        for (let i = 0; i < 12; i++) {
          const big = i % 3 === 0;
          const tk = new T.Mesh(new T.BoxGeometry(big ? 0.06 : 0.035, big ? 0.14 : 0.08, 0.04), GOLD);
          const a = (i / 12) * Math.PI * 2;
          tk.position.set(Math.sin(a) * 0.53, Math.cos(a) * 0.53, 0.02); tk.rotation.z = -a; g.add(tk);
        }
        const hand = (l: number, w: number) => {
          const h = new T.Group();
          const m = new T.Mesh(new T.BoxGeometry(w, l, 0.04), GOLD); m.position.y = l / 2 - 0.04; h.add(m);
          h.position.z = 0.06; g.add(h); return h;
        };
        g.userData.hands = [hand(0.38, 0.07), hand(0.55, 0.05)];
        const c = new T.Mesh(new T.SphereGeometry(0.07, 16, 16), GOLD); c.position.z = 0.07; g.add(c);
      } else if (k === 2) { // coin
        const cg = new T.CylinderGeometry(0.78, 0.78, 0.16, 64); cg.rotateX(Math.PI / 2); g.add(new T.Mesh(cg, GOLD));
        for (const z of [-1, 1]) {
          const r = new T.Mesh(new T.TorusGeometry(0.68, 0.04, 12, 64), GOLD); r.position.z = z * 0.085; g.add(r);
          const d = new T.Mesh(new T.OctahedronGeometry(0.24, 0), GEM); d.scale.set(1, 1.35, 0.45); d.position.z = z * 0.1; g.add(d);
        }
      } else { // interlocked chain links
        const a = new T.Mesh(new T.TorusGeometry(0.4, 0.1, 20, 48), GOLD); a.scale.y = 1.2; a.position.y = 0.32; g.add(a);
        const b = new T.Mesh(new T.TorusGeometry(0.4, 0.1, 20, 48), GOLD); b.scale.y = 1.2; b.position.y = -0.32; b.rotation.y = Math.PI / 2; g.add(b);
      }
      return g;
    };
    const idle = (g: THREE.Group, k: number, t: number, i: number) => {
      if (k === 0) g.rotation.set(0, t * 0.9 + i, 0);
      else if (k === 1) {
        g.rotation.set(Math.sin(t * 0.6 + i) * 0.15, Math.sin(t * 0.8 + i) * 0.5, 0);
        const h = g.userData.hands as THREE.Group[]; h[1].rotation.z = -t * 1.6; h[0].rotation.z = -t * 0.133;
      } else if (k === 2) g.rotation.set(0.2, t * 1.1 + i, 0);
      else g.rotation.set(0, t * 0.8 + i, Math.sin(t + i) * 0.15);
    };

    /* scene — light intensities are doubled-up (x PI) vs the old r128 demo because three >= r155 uses physical units */
    const scene = new T.Scene();
    scene.environment = env;
    scene.add(new T.AmbientLight(0xffffff, 0.3 * Math.PI));
    const dl = new T.DirectionalLight(0xfff1d0, 1.0 * Math.PI); dl.position.set(3, 5, 7); scene.add(dl);
    const cam = new T.PerspectiveCamera(32, 1, 0.1, 200);

    const objs = [0, 1, 2, 3].map((k) => { const g = makeObject(k); scene.add(g); return g; });

    // two counter-rotating dust rings around each object
    const halos = objs.map(() => {
      const G = new T.Group();
      [1, -1].forEach((dir) => {
        const ring = makePoints(220, 0.065, 0xc8932f, (arr) => {
          for (let j = 0; j < 220; j++) {
            const a = Math.random() * 6.283, r = 1.15 + Math.random() * 0.55;
            arr[j * 3] = Math.cos(a) * r; arr[j * 3 + 1] = (Math.random() - 0.5) * 0.35; arr[j * 3 + 2] = Math.sin(a) * r;
          }
        });
        ring.userData.dir = dir; G.add(ring);
      });
      scene.add(G); return G;
    });

    // ambient dust drifting upward through the whole scene
    const dust = makePoints(320, 0.045, 0xa97c2c, (arr) => {
      for (let j = 0; j < 320; j++) { arr[j * 3] = (Math.random() - 0.5) * 14; arr[j * 3 + 1] = (Math.random() - 0.5) * 6; arr[j * 3 + 2] = (Math.random() - 0.5) * 6; }
    });
    scene.add(dust);

    /* layout + loop */
    let W = 0, H = 0, wide = true, zfit = 9, raf = 0, visible = true, last = performance.now() / 1000;
    const t0 = last;
    const base = (i: number): [number, number] => (wide ? [(i - 1.5) * 3.2, -0.35] : [((i % 2) - 0.5) * 3, (i < 2 ? 1 : -1) * 1.45 - 0.55]);

    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight, d = Math.min(window.devicePixelRatio || 1, 1.75);
      if (!w || !h || (w === W && h === H)) return;
      W = w; H = h;
      renderer.setPixelRatio(d); renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      wide = w / h > 1.15;
      zfit = Math.max(9, (wide ? 12.4 : 7) / (2 * Math.tan((16 * Math.PI) / 180) * cam.aspect));
    };

    const draw = (t: number, dt: number) => {
      cam.position.set(0, 0, zfit); cam.lookAt(0, 0, 0);
      objs.forEach((o, i) => {
        const [x, y] = base(i), yy = y + Math.sin(t * 1.1 + i) * 0.08;
        o.position.set(x, yy, 0); o.scale.setScalar(BASE); idle(o, i, t, i);
        const G = halos[i];
        G.position.set(x, yy, 0); G.rotation.z = 0.45 * (i % 2 ? 1 : -1);
        G.children.forEach((h) => { h.rotation.y = t * 0.9 * (h.userData.dir as number); });
        G.scale.setScalar(1 + Math.sin(t * 1.6 + i) * 0.05);
      });
      const a = dust.geometry.attributes.position as THREE.BufferAttribute;
      for (let j = 0; j < a.count; j++) { a.array[j * 3 + 1] += dt * 0.25; if (a.array[j * 3 + 1] > 3) a.array[j * 3 + 1] = -3; }
      a.needsUpdate = true;

      cam.updateMatrixWorld();
      renderer.render(scene, cam);

      // place the text labels under each object
      objs.forEach((o, i) => {
        const el = lbs.current[i]; if (!el) return;
        const v = o.position.clone(); v.y -= 1.25; v.project(cam);
        el.style.transform = `translate(${(v.x * 0.5 + 0.5) * W}px,${(-v.y * 0.5 + 0.5) * H}px) translate(-50%,-50%)`;
      });
    };

    const frame = (ms: number) => {
      if (!calm) raf = requestAnimationFrame(frame);
      const now = ms / 1000, dt = Math.min(0.05, now - last); last = now;
      resize();
      if (!visible) return;
      draw(calm ? 2 : now - t0, dt);
    };
    resize();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { resize(); if (calm) draw(2, 0); }); ro.observe(box);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(box);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      disposeTree(scene);
      [GOLD, GEM, DARK].forEach((m) => m.dispose());
      scene.traverse((c) => { const m = (c as THREE.Points).material as THREE.Material | undefined; m?.dispose?.(); });
      env.dispose(); renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={stage} aria-labelledby="ch-title"
      className="relative h-[600px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,#2a2927_0%,#1c1c1c_55%,#151515_100%)] min-[641px]:h-[480px]"
    >
      <canvas ref={cv} aria-hidden className="absolute inset-0 h-full w-full" />
      <h2 id="ch-title" className="pointer-events-none absolute left-[18px] top-[22px] z-[5] m-0 font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.05] text-white min-[641px]:left-10 min-[641px]:top-[34px]">
        Our clients trust us for
      </h2>
      {LABELS.map((t, i) => (
        <div
          key={t} ref={(el) => { lbs.current[i] = el; }}
          className="pointer-events-none absolute left-0 top-0 z-[4] whitespace-nowrap font-serif text-[clamp(18px,2.4vw,30px)] font-medium leading-none text-[#d8bd7e] [text-shadow:0_2px_14px_rgba(0,0,0,.8)] will-change-transform"
        >{t}</div>
      ))}
    </section>
  );
}
