import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type Variant = 'home' | 'about' | 'collection' | 'clients' | 'contact' | 'industries';
type Tick = (t: number, mx: number, sy: number) => void;

const GOLD = 0xc5a052;
const rnd = (a: number, b: number): number => a + Math.random() * (b - a);

function slabTexture(): THREE.CanvasTexture {
  const k = document.createElement('canvas');
  k.width = k.height = 512;
  const g = k.getContext('2d')!;
  const gr = g.createLinearGradient(0, 0, 512, 512);
  gr.addColorStop(0, '#f4f1ea');
  gr.addColorStop(1, '#cfc9bd');
  g.fillStyle = gr;
  g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 26; i++) {
    let x = Math.random() * 512, y = 0;
    const a = rnd(0.15, 0.65);
    g.beginPath();
    g.moveTo(x, y);
    for (let j = 0; j < 40; j++) { x += rnd(-17, 17); y += 13; g.lineTo(x, y); }
    g.strokeStyle = i % 5 ? `rgba(90,86,80,${a * 0.6})` : `rgba(197,160,82,${a})`;
    g.lineWidth = rnd(0.4, 2.2);
    g.stroke();
  }
  return new THREE.CanvasTexture(k);
}

// opaque, shared materials: no transparency sorting glitches, cheap to draw
const solid = (c: number) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.4, metalness: 0.55, flatShading: true });

function build(v: Variant, main: THREE.Group, scene: THREE.Scene, small: boolean): Tick {
  const ticks: Tick[] = [];
  if (v === 'home') {
    const slab = new THREE.Mesh(new THREE.BoxGeometry(3.2, 4.4, 0.3), new THREE.MeshStandardMaterial({ map: slabTexture(), roughness: 0.25, metalness: 0.1 }));
    slab.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry), new THREE.LineBasicMaterial({ color: GOLD })));
    main.add(slab);
    const gm = new THREE.OctahedronGeometry(0.5), dark = solid(0x3a3a3a), gold = solid(GOLD), shards: THREE.Mesh[] = [];
    for (let i = 0; i < (small ? 12 : 26); i++) {
      const m = new THREE.Mesh(gm, i % 4 ? dark : gold);
      m.position.set(rnd(-9, 9), rnd(-7, 7), rnd(-7, -1));
      m.scale.set(rnd(0.5, 1.4), rnd(0.5, 2), rnd(0.5, 1.4));
      shards.push(m);
      scene.add(m);
    }
    ticks.push((t, mx) => {
      slab.rotation.y = Math.sin(t * 0.4) * 0.6 + mx * 0.5;
      shards.forEach((m) => { m.rotation.x += 0.004; m.rotation.y += 0.005; m.position.y += 0.004; if (m.position.y > 7) m.position.y = -7; });
    });
  }
  if (v === 'about') {
    const mats = [solid(GOLD), solid(0xe9e4da), solid(0x2c2c2e)], slabs: THREE.Mesh[] = [], bg = new THREE.BoxGeometry(3.4, 0.32, 2.4);
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(bg, mats[i % 3]);
      m.position.y = i * 0.55 - 2;
      main.add(m);
      slabs.push(m);
    }
    main.rotation.x = 0.25;
    ticks.push((t) => { slabs.forEach((m, i) => { m.rotation.y = t * 0.3 + i * 0.4; m.position.x = Math.sin(t * 0.6 + i) * 0.25; }); main.rotation.y = t * 0.1; });
  }
  if (v === 'collection') {
    const geo = new THREE.Mesh(new THREE.IcosahedronGeometry(3.4, 1), new THREE.MeshBasicMaterial({ color: GOLD, wireframe: true, transparent: true, opacity: 0.35 }));
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.2, 0.36, 120, 14), solid(0xe9e4da));
    const orb = new THREE.Group(), og = new THREE.OctahedronGeometry(0.3), a = solid(GOLD), b = solid(0x3a3a3a);
    for (let i = 0; i < 12; i++) {
      const m = new THREE.Mesh(og, i % 2 ? a : b);
      const ang = (i / 12) * Math.PI * 2;
      m.position.set(Math.cos(ang) * 4.6, rnd(-1.5, 1.5), Math.sin(ang) * 4.6);
      orb.add(m);
    }
    main.add(geo, knot, orb);
    ticks.push((t) => { geo.rotation.y = t * 0.1; geo.rotation.x = t * 0.06; knot.rotation.x = t * 0.25; knot.rotation.y = t * 0.2; orb.rotation.y = -t * 0.3; });
  }
  if (v === 'clients') {
    const n = small ? 7 : 11, boxes: THREE.Mesh[] = [], bg = new THREE.BoxGeometry(0.7, 1, 0.7), a = solid(GOLD), b = solid(0x3a3a3e);
    for (let x = 0; x < n; x++)
      for (let z = 0; z < n; z++) {
        const m = new THREE.Mesh(bg, (x * 3 + z) % 7 === 0 ? a : b);
        m.position.set((x - n / 2) * 0.95, 0, (z - n / 2) * 0.95);
        main.add(m);
        boxes.push(m);
      }
    main.rotation.x = 0.55;
    ticks.push((t) => {
      boxes.forEach((m, i) => { const h = 0.6 + (Math.sin(t * 0.9 + Math.floor(i / n) * 0.6 + (i % n) * 0.5) + 1) * 1.6; m.scale.y = h; m.position.y = h / 2; });
      main.rotation.y = t * 0.08;
    });
  }
  if (v === 'contact') {
    const n = small ? 40 : 70, pos = new Float32Array(n * n * 3);
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) { const k = (i * n + j) * 3; pos[k] = (i - n / 2) * 0.28; pos[k + 2] = (j - n / 2) * 0.28; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    main.add(new THREE.Points(g, new THREE.PointsMaterial({ color: GOLD, size: 0.06 })));
    main.rotation.x = 0.35;
    ticks.push((t) => {
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) pos[(i * n + j) * 3 + 1] = Math.sin(i * 0.35 + t * 1.2) * 0.4 + Math.cos(j * 0.3 + t) * 0.4;
      g.attributes.position.needsUpdate = true;
      main.rotation.y = t * 0.05;
    });
  }
  if (v === 'industries') {
    // Cinematic fly-through of a stone-and-gold avenue. Towers are recycled in rows; scroll speeds up the flight.
    const rows = small ? 10 : 14, sp = 3.4, total = rows * sp;
    const unit = new THREE.BoxGeometry(1, 1, 1), edges = new THREE.EdgesGeometry(unit);
    const body = new THREE.MeshStandardMaterial({ color: 0x1c1c1f, roughness: 0.32, metalness: 0.65, flatShading: true });
    const pale = new THREE.MeshStandardMaterial({ color: 0xd9d3c6, roughness: 0.3, metalness: 0.2, flatShading: true });
    const line = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.6 });
    const floorLine = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.28 });
    const cross = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-11, 0.01, 0), new THREE.Vector3(11, 0.01, 0)]);
    const groups: THREE.Group[] = [];
    for (let i = 0; i < rows; i++) {
      const g = new THREE.Group();
      for (const side of [-1, 1]) {
        const n = small ? 1 : 2;
        for (let k = 0; k < n; k++) {
          const h = rnd(2, 9.5), w = rnd(0.9, 1.7), d = rnd(1.4, 2.4);
          const m = new THREE.Mesh(unit, Math.random() < 0.18 ? pale : body);
          m.scale.set(w, h, d);
          m.position.set(side * (3.2 + k * 2.3 + rnd(0, 0.8)), h / 2, rnd(-0.5, 0.5));
          m.add(new THREE.LineSegments(edges, line));
          g.add(m);
        }
      }
      g.add(new THREE.Line(cross, floorLine));
      groups.push(g);
      scene.add(g);
    }
    scene.fog = new THREE.Fog(0x101010, 8, small ? 26 : 34);
    const fill = new THREE.PointLight(0xffffff, 1.1, 40);
    fill.position.set(-5, 7, 4);
    scene.add(fill);

    const slab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.3, 0.24), new THREE.MeshStandardMaterial({ map: slabTexture(), roughness: 0.25, metalness: 0.1 }));
    slab.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry), new THREE.LineBasicMaterial({ color: GOLD })));
    slab.position.set(0, 1.9, 2);
    main.add(slab);

    const count = small ? 120 : 260, pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) { pos[i * 3] = rnd(-12, 12); pos[i * 3 + 1] = rnd(0.2, 10); pos[i * 3 + 2] = rnd(-34, 9); }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(dg, new THREE.PointsMaterial({ color: 0xd6bc83, size: 0.05, transparent: true, opacity: 0.8 })));

    ticks.push((t, mx, sy) => {
      const off = t * 1.1 + sy * 0.014;
      groups.forEach((g, i) => { g.position.z = 11 - ((i * sp + off) % total); });
      slab.rotation.y = Math.sin(t * 0.45) * 0.7 + mx * 0.6;
      slab.rotation.x = Math.sin(t * 0.3) * 0.08;
      slab.position.y = 1.9 + Math.sin(t * 0.8) * 0.12;
      for (let i = 0; i < count; i++) { const k = i * 3 + 1; pos[k] += 0.004; if (pos[k] > 10) pos[k] = 0.2; }
      dg.attributes.position.needsUpdate = true;
    });
  }
  return (t, mx, sy) => ticks.forEach((f) => f(t, mx, sy));
}

const disposeTree = (o: THREE.Object3D): void =>
  o.traverse((c) => {
    const m = c as THREE.Mesh;
    m.geometry?.dispose();
    const mt = m.material as THREE.Material | THREE.Material[] | undefined;
    (Array.isArray(mt) ? mt : mt ? [mt] : []).forEach((x) => {
      (x as THREE.MeshStandardMaterial).map?.dispose();
      x.dispose();
    });
  });

interface Api { load: (v: Variant) => void }

/** 3D scene for the first section of a page only. Place inside a `relative overflow-hidden` section. */
export default function Backdrop({ variant }: { variant: Variant }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const api = useRef<Api | null>(null);

  useEffect(() => {
    const cv = ref.current!;
    const calm = matchMedia('(prefers-reduced-motion:reduce)').matches;
    const r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    cam.position.z = 10;
    let seen = true, scene = new THREE.Scene(), main = new THREE.Group(), tick: Tick = () => {}, cur: Variant = 'home', mx = 0, raf = 0, alive = true, lookY = 0, lookZ = 0;
    const frame = (t: number) => { tick(t, mx, window.scrollY); cam.position.x += (mx * (cur === 'industries' ? 1.2 : 2) - cam.position.x) * 0.05; cam.lookAt(0, lookY, lookZ); r.render(scene, cam); };
    const layout = () => {
      const box = cv.parentElement!, w = box.clientWidth || innerWidth, h = box.clientHeight || innerHeight, wide = w > 860;
      r.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      main.scale.setScalar(wide ? 1 : 0.62);
      main.position.set(wide ? 3 : 0, cur === 'home' ? (wide ? 0 : -1.8) : cur === 'clients' ? -1 : cur === 'contact' ? -1.5 : 0, 0);
      if (calm) frame(0);
    };
    api.current = {
      load(v) {
        disposeTree(scene);
        scene = new THREE.Scene();
        main = new THREE.Group();
        cur = v;
        cam.position.y = v === 'industries' ? 2.4 : 0;
        lookY = v === 'industries' ? 1.5 : 0;
        lookZ = v === 'industries' ? -12 : 0;
        scene.fog = new THREE.Fog(0x101010, 9, 24);
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const pl = new THREE.PointLight(0xd6bc83, 1.8, 60);
        pl.position.set(5, 5, 8);
        scene.add(pl, main);
        tick = build(v, main, scene, innerWidth < 700);
        layout();
      },
    };
    const move = (e: MouseEvent) => { mx = e.clientX / innerWidth - 0.5; };
    const loop = () => { if (!alive) return; if (seen) frame(performance.now() / 1000); if (!calm) raf = requestAnimationFrame(loop); };
    const ro = new ResizeObserver(layout);
    ro.observe(cv.parentElement!);
    const io = new IntersectionObserver((e) => { seen = e[0].isIntersecting; });
    io.observe(cv.parentElement!);
    addEventListener('mousemove', move);
    api.current.load(variant);
    loop();
    return () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('mousemove', move); disposeTree(scene); r.dispose(); api.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { api.current?.load(variant); }, [variant]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
}
