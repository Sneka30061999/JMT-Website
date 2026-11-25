import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SOURCING } from '../data/content';

const BASE = 0.85; // object scale
const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sm = (a: number, b: number, x: number) => { x = clamp((x - a) / (b - a)); return x * x * (3 - 2 * x); };
const easeBack = (x: number) => { const c1 = 1.70158, c3 = c1 + 1; x = clamp(x); return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };

interface Part { c: THREE.Object3D; rp: THREE.Vector3; rs: THREE.Vector3; rr: THREE.Euler; off: THREE.Vector3; spin: number }

/** "What we offer": four 3D stone objects that assemble from flying parts, hold, then come apart in a loop. */
export default function AssembleOffer() {
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

    /* studio reflections */
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
    panel(14, 6, 0, -9, 0, new T.Color(1.1, 0.9, 0.6)); // soft bounce from below
    panel(12, 3, 0, 0, -9, new T.Color(0.9, 0.75, 0.5));
    const pm = new T.PMREMGenerator(renderer);
    const env = pm.fromScene(es, 0.03).texture;
    pm.dispose();
    es.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); ((c as THREE.Mesh).material as THREE.Material | undefined)?.dispose(); });

    /* materials: gold + stones */
    const GOLD = new T.MeshStandardMaterial({ color: 0xd9a93f, metalness: 1, roughness: 0.26, envMapIntensity: 1.3 });
    const GEM = new T.MeshStandardMaterial({ color: 0xe0b04a, metalness: 1, roughness: 0.16, flatShading: true, envMapIntensity: 2.1 });
    const ST = {
      marble: new T.MeshStandardMaterial({ color: 0xd9d3c6, roughness: 0.28, envMapIntensity: 0.4 }),
      granite: new T.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.1, roughness: 0.34, envMapIntensity: 0.35 }),
      kota: new T.MeshStandardMaterial({ color: 0x56684f, roughness: 0.5, envMapIntensity: 0.35 }),
      kadapa: new T.MeshStandardMaterial({ color: 0x2f3d4a, metalness: 0.05, roughness: 0.5, envMapIntensity: 0.35 }),
      quartz: new T.MeshStandardMaterial({ color: 0xe9d7d4, metalness: 0.1, roughness: 0.12, flatShading: true, envMapIntensity: 0.7 }),
    };
    const flat = (m: THREE.MeshStandardMaterial) => { const c = m.clone(); c.flatShading = true; return c; };
    const STF = { granite: flat(ST.granite), kota: flat(ST.kota), marble: flat(ST.marble) };
    const wire = new T.LineBasicMaterial({ color: 0xd9a93f, transparent: true, opacity: 0.7 });
    const mats: THREE.Material[] = [GOLD, GEM, wire, ...Object.values(ST), ...Object.values(STF)];

    /* the four 3D objects */
    const makeObject = (k: number): THREE.Group => {
      const g = new T.Group();
      if (k === 0) { // stacked slabs
        [ST.kota, ST.granite, ST.marble].forEach((m, j) => {
          const s = new T.Mesh(new T.BoxGeometry(1.5, 0.16, 1.0), m); s.position.y = -0.3 + j * 0.3; s.rotation.y = (j - 1) * 0.32; g.add(s);
          const e = new T.Mesh(new T.BoxGeometry(1.52, 0.02, 1.02), GOLD); e.position.y = s.position.y + 0.09; e.rotation.y = s.rotation.y; g.add(e);
        });
        const d = new T.Mesh(new T.OctahedronGeometry(0.16, 0), GEM); d.scale.y = 1.35; d.position.y = 0.62; g.add(d);
      } else if (k === 1) { // mixed stone cluster
        const a = new T.Mesh(new T.BoxGeometry(0.62, 0.62, 0.62), ST.marble); a.position.set(-0.4, -0.25, 0.05); a.rotation.set(0.3, 0.5, 0.1); g.add(a);
        const b = new T.Mesh(new T.IcosahedronGeometry(0.42, 0), STF.granite); b.position.set(0.42, -0.2, -0.1); g.add(b);
        const c = new T.Mesh(new T.DodecahedronGeometry(0.4, 0), STF.kota); c.position.set(-0.05, 0.42, -0.05); g.add(c);
        const d = new T.Mesh(new T.OctahedronGeometry(0.4, 0), ST.quartz); d.position.set(0.05, -0.45, 0.45); d.scale.y = 1.25; g.add(d);
        const e = new T.Mesh(new T.BoxGeometry(0.5, 0.18, 0.4), ST.kadapa); e.position.set(0.45, 0.48, 0.1); e.rotation.set(0.2, 0.6, 0.3); g.add(e);
      } else if (k === 2) { // column
        const add = (geo: THREE.BufferGeometry, mat: THREE.Material, y: number) => { const m = new T.Mesh(geo, mat); m.position.y = y; g.add(m); return m; };
        add(new T.BoxGeometry(0.95, 0.14, 0.95), ST.granite, -0.82);
        add(new T.BoxGeometry(0.72, 0.1, 0.72), ST.marble, -0.7);
        add(new T.CylinderGeometry(0.27, 0.31, 1.3, 18), STF.marble, 0);
        add(new T.TorusGeometry(0.3, 0.035, 10, 40), GOLD, -0.62).rotation.x = Math.PI / 2;
        add(new T.TorusGeometry(0.28, 0.035, 10, 40), GOLD, 0.62).rotation.x = Math.PI / 2;
        add(new T.BoxGeometry(0.72, 0.1, 0.72), ST.marble, 0.72);
        add(new T.BoxGeometry(0.95, 0.14, 0.95), ST.granite, 0.84);
      } else { // globe with pins
        g.add(new T.Mesh(new T.SphereGeometry(0.7, 40, 28), ST.granite));
        g.add(new T.LineSegments(new T.WireframeGeometry(new T.SphereGeometry(0.705, 16, 12)), wire));
        ([[0.45, 0.6], [0.1, -0.6], [-0.35, 1.9], [0.6, -2.1]] as Array<[number, number]>).forEach(([lat, lon]) => {
          const p = new T.Vector3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)).multiplyScalar(0.7);
          const pin = new T.Group(); pin.position.copy(p); pin.lookAt(p.clone().multiplyScalar(2));
          const cg = new T.ConeGeometry(0.05, 0.22, 12); cg.rotateX(-Math.PI / 2);
          const cone = new T.Mesh(cg, GOLD); cone.position.z = 0.11; pin.add(cone);
          const hd = new T.Mesh(new T.SphereGeometry(0.08, 16, 16), GEM); hd.position.z = 0.29; pin.add(hd);
          g.add(pin);
        });
      }
      return g;
    };
    const idle = (g: THREE.Group, k: number, t: number, i: number) => {
      if (k === 0) g.rotation.set(0.32, t * 0.7 + i, 0);
      else if (k === 1) g.rotation.set(Math.sin(t * 0.6 + i) * 0.15, t * 0.8 + i, 0);
      else if (k === 2) g.rotation.set(0.08, t * 0.6 + i, 0);
      else g.rotation.set(0.1, t * 0.55 + i, 0.2);
    };

    /* scene — light intensities x PI because three >= r155 uses physical units */
    const scene = new T.Scene();
    scene.environment = env;
    scene.add(new T.AmbientLight(0xffffff, 0.3 * Math.PI));
    const dl = new T.DirectionalLight(0xfff1d0, 1.0 * Math.PI); dl.position.set(3, 5, 7); scene.add(dl);
    const cam = new T.PerspectiveCamera(32, 1, 0.1, 200);

    // each object remembers its parts: where they rest, and where they fly in from
    const parts: Part[][] = [];
    const objs = [0, 1, 2, 3].map((k) => {
      const g = makeObject(k); scene.add(g);
      parts[k] = g.children.map((c, j) => {
        const r = Math.random; let off: THREE.Vector3;
        if (k === 2) off = new T.Vector3(0, 5 + j * 0.6, 0);                                              // column drops in, bottom to top
        else if (k === 0) off = new T.Vector3((j % 2 ? 1 : -1) * (4 + j * 0.2), j > 5 ? 5 : 0, ((j % 3) - 1) * 1.5); // slabs slide in from the sides
        else if (k === 1) off = new T.Vector3((r() - 0.5) * 8, (r() - 0.5) * 5 + 2, (r() - 0.5) * 4);   // stones fly together
        else off = c.position.length() < 0.01 ? new T.Vector3() : c.position.clone().multiplyScalar(4); // pins drop onto the globe
        return { c, rp: c.position.clone(), rs: c.scale.clone(), rr: c.rotation.clone(), off, spin: (r() - 0.5) * 6 };
      });
      return g;
    });

    /* layout + loop */
    let W = 0, H = 0, wide = true, zfit = 9, raf = 0, visible = true;
    const t0 = performance.now() / 1000;
    const base = (i: number): [number, number] => (wide ? [(i - 1.5) * 3.2, 0.35] : [((i % 2) - 0.5) * 3.4, (i < 2 ? 1 : -1) * 2.1 + 0.3]);

    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight, d = Math.min(window.devicePixelRatio || 1, 1.75);
      if (!w || !h || (w === W && h === H)) return;
      W = w; H = h;
      renderer.setPixelRatio(d); renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      wide = w / h > 1.15;
      zfit = Math.max(9, (wide ? 12.4 : 6.6) / (2 * Math.tan((16 * Math.PI) / 180) * cam.aspect));
    };

    const draw = (t: number) => {
      cam.position.set(0, 0, zfit); cam.lookAt(0, 0, 0);
      const lab: number[] = [];
      objs.forEach((g, i) => {
        const [x, y] = base(i);
        const ph = calm ? 5 : (((t - i * 0.3) % 10) + 10) % 10; // 10 s loop per object, staggered
        parts[i].forEach((p, j) => {
          const dj = j * 0.13; // each part starts a little later
          const pr = ph < 7.4 ? clamp((ph - dj) / 1.5) : 1 - clamp((ph - 7.4 - dj * 0.5) / 1.3); // build, hold, come apart
          const e = easeBack(pr), s = clamp(pr);
          p.c.position.copy(p.rp).addScaledVector(p.off, 1 - e);
          p.c.scale.set(Math.max(0.001, p.rs.x * s), Math.max(0.001, p.rs.y * s), Math.max(0.001, p.rs.z * s));
          p.c.rotation.set(p.rr.x + p.spin * (1 - e), p.rr.y, p.rr.z);
        });
        g.position.set(x, y + Math.sin(t * 1.2 + i) * 0.06, 0);
        g.scale.setScalar(BASE);
        idle(g, i, t, i);
        lab[i] = calm ? 1 : sm(0.4, 2.4, ph) * (1 - sm(7.6, 9, ph)); // label fades in with the build
      });

      cam.updateMatrixWorld();
      renderer.render(scene, cam);

      objs.forEach((o, i) => {
        const el = lbs.current[i]; if (!el) return;
        const v = o.position.clone(); v.y -= 1.2; v.project(cam);
        el.style.transform = `translate(${(v.x * 0.5 + 0.5) * W}px,${(-v.y * 0.5 + 0.5) * H}px) translate(-50%,0)`;
        el.style.opacity = String(clamp(lab[i]));
      });
    };

    const frame = (ms: number) => {
      if (!calm) raf = requestAnimationFrame(frame);
      resize();
      if (!visible) return;
      draw(ms / 1000 - t0);
    };
    resize();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { resize(); if (calm) draw(0); }); ro.observe(box);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(box);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      scene.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); });
      mats.forEach((m) => m.dispose());
      env.dispose(); renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={stage} aria-labelledby="ao-title"
      className="relative h-[800px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,#2a2927_0%,#1c1c1c_55%,#151515_100%)] min-[641px]:h-[560px]"
    >
      <canvas ref={cv} aria-hidden className="absolute inset-0 h-full w-full" />
      <h2 id="ao-title" className="pointer-events-none absolute left-[18px] top-[22px] z-[5] m-0 font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.05] text-white min-[641px]:left-10 min-[641px]:top-[34px]">
        What we offer
      </h2>
      {SOURCING.map(([title, text], i) => (
        <div
          key={title} ref={(el) => { lbs.current[i] = el; }}
          className="pointer-events-none absolute left-0 top-0 z-[4] w-[44%] text-center [text-shadow:0_2px_14px_rgba(0,0,0,.85)] will-change-[transform,opacity] min-[641px]:w-1/5 min-[641px]:min-w-[150px] min-[641px]:max-w-[260px]"
        >
          <b className="mb-2 block font-serif text-[clamp(20px,2vw,27px)] font-semibold leading-[1.15] text-[#d8bd7e]">{title}</b>
          <span className="block font-sans text-[clamp(13px,1.15vw,15.5px)] font-light leading-[1.55] text-[#b4afa3]">{text}</span>
        </div>
      ))}
    </section>
  );
}
