import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BASE = 0.85; // object scale
const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sm = (a: number, b: number, x: number) => { x = clamp((x - a) / (b - a)); return x * x * (3 - 2 * x); };

// orb timeline (seconds): travel, pause on each step, travel on ... then fade and loop
const KT = [0, 1.6, 2.5, 4.1, 5.0, 6.6, 7.5, 9.1, 10.5, 12]; // keyframe times
const KV = [0, 0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1];   // position along the path (0..1)
const CYCLE = 13.5;

interface Props { title: string; steps: Array<[string, string]> }

/** "How it works": a glowing orb travels a golden path and lights up four 3D step objects (plane, magnifier, stone + pin, price tag). */
export default function JourneyPath({ title, steps }: Props) {
  const stage = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const lbs = useRef<Array<HTMLDivElement | null>>([]);
  const dcs = useRef<Array<HTMLSpanElement | null>>([]);

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
    panel(14, 6, 0, -9, 0, new T.Color(1.1, 0.9, 0.6)); // soft bounce from below
    panel(12, 3, 0, 0, -9, new T.Color(0.9, 0.75, 0.5));
    const pm = new T.PMREMGenerator(renderer);
    const env = pm.fromScene(es, 0.03).texture;
    pm.dispose();
    es.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); ((c as THREE.Mesh).material as THREE.Material | undefined)?.dispose(); });

    /* materials */
    const GOLD = new T.MeshStandardMaterial({ color: 0xd9a93f, metalness: 1, roughness: 0.26, envMapIntensity: 1.3 });
    const GEM = new T.MeshStandardMaterial({ color: 0xe0b04a, metalness: 1, roughness: 0.16, flatShading: true, envMapIntensity: 2.1 });
    const PLANE = new T.MeshStandardMaterial({ color: 0xe0b04a, metalness: 1, roughness: 0.22, flatShading: true, side: T.DoubleSide, envMapIntensity: 1.8 });
    const GLASS = new T.MeshStandardMaterial({ color: 0xcfe3ee, metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.28, side: T.DoubleSide, envMapIntensity: 1.3, depthWrite: false });
    const GRANITE = new T.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.1, roughness: 0.34, envMapIntensity: 0.35 });
    const ROCK = new T.MeshStandardMaterial({ color: 0x5c5f63, roughness: 0.6, envMapIntensity: 0.4, flatShading: true });

    /* rupee symbol drawn with strokes, so it never depends on a font */
    const rupee = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d')!;
      x.strokeStyle = '#2a2112'; x.lineWidth = 22; x.lineCap = 'round'; x.lineJoin = 'round';
      x.beginPath(); x.moveTo(60, 62); x.lineTo(200, 62); x.moveTo(60, 108); x.lineTo(200, 108);
      x.moveTo(78, 62); x.bezierCurveTo(182, 62, 182, 152, 78, 152); x.lineTo(180, 214); x.stroke();
      return new T.CanvasTexture(c);
    })();
    /* soft glow sprite texture */
    const glowTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d')!;
      const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, 128, 128);
      return new T.CanvasTexture(c);
    })();
    const rupeeMat = new T.MeshBasicMaterial({ map: rupee, transparent: true, depthWrite: false });

    /* the four step objects */
    const makeObject = (k: number): THREE.Group => {
      const g = new T.Group();
      if (k === 0) { // 1 Share: paper plane
        const v = [[1, 0, 0], [-0.8, 0.12, 0.65], [-0.5, -0.18, 0], [1, 0, 0], [-0.5, -0.18, 0], [-0.8, 0.12, -0.65], [1, 0, 0], [-0.8, 0.12, 0.65], [-0.55, 0.06, 0], [1, 0, 0], [-0.55, 0.06, 0], [-0.8, 0.12, -0.65]];
        const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(new Float32Array(v.flat()), 3)); geo.computeVertexNormals();
        const m = new T.Mesh(geo, PLANE); m.scale.setScalar(1.15); m.position.x = -0.1; g.add(m);
      } else if (k === 1) { // 2 Review: magnifier over a gem
        const h = new T.Group(); h.position.set(-0.25, 0.25, 0); g.add(h);
        h.add(new T.Mesh(new T.TorusGeometry(0.5, 0.07, 18, 56), GOLD));
        h.add(new T.Mesh(new T.CircleGeometry(0.47, 40), GLASS));
        const gm = new T.Mesh(new T.OctahedronGeometry(0.2, 0), GEM); gm.scale.y = 1.35; h.add(gm);
        const hd = new T.Mesh(new T.CylinderGeometry(0.075, 0.075, 0.75, 16), GRANITE); hd.position.set(0.6, -0.6, 0); hd.rotation.z = (-3 * Math.PI) / 4; h.add(hd);
        const cap = new T.Mesh(new T.TorusGeometry(0.085, 0.03, 10, 24), GOLD); cap.position.set(0.4, -0.4, 0); cap.rotation.y = Math.PI / 2; h.add(cap);
      } else if (k === 2) { // 3 Source: rough stone block + location pin
        const bg = new T.BoxGeometry(1.25, 0.85, 0.95, 5, 3, 4); const p = bg.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
          const n = Math.sin(x * 12.9 + y * 78.2 + z * 37.7) * 43758.5453; const r = (n - Math.floor(n) - 0.5) * 0.1;
          p.setXYZ(i, x + r, y + r * 0.8, z + r);
        }
        bg.computeVertexNormals();
        const b = new T.Mesh(bg, ROCK); b.position.y = -0.3; g.add(b);
        const pin = new T.Group(); pin.position.y = 0.5;
        const cg = new T.ConeGeometry(0.09, 0.34, 14); cg.rotateX(Math.PI); pin.add(new T.Mesh(cg, GOLD));
        const hd = new T.Mesh(new T.SphereGeometry(0.14, 20, 20), GEM); hd.position.y = 0.3; pin.add(hd);
        g.add(pin); g.userData.pin = pin;
      } else { // 4 Quote: price tag with rupee
        const sh = new T.Shape();
        sh.moveTo(-0.55, -0.8); sh.lineTo(0.55, -0.8); sh.lineTo(0.55, 0.45); sh.lineTo(0.25, 0.8); sh.lineTo(-0.25, 0.8); sh.lineTo(-0.55, 0.45); sh.closePath();
        const hole = new T.Path(); hole.absarc(0, 0.52, 0.1, 0, Math.PI * 2, true); sh.holes.push(hole);
        const geo = new T.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2, curveSegments: 24 }); geo.translate(0, 0, -0.06);
        g.add(new T.Mesh(geo, GOLD));
        const r = new T.Mesh(new T.TorusGeometry(0.15, 0.028, 10, 32), GOLD); r.position.y = 0.52; g.add(r);
        const f = new T.Mesh(new T.PlaneGeometry(0.72, 0.72), rupeeMat); f.position.set(0, -0.15, 0.1); g.add(f);
        const bk = new T.Mesh(new T.PlaneGeometry(0.72, 0.72), rupeeMat); bk.position.set(0, -0.15, -0.1); bk.rotation.y = Math.PI; g.add(bk);
      }
      return g;
    };
    const idle = (g: THREE.Group, k: number, t: number, i: number) => {
      if (k === 0) g.rotation.set(0.95, Math.sin(t * 0.7 + i) * 0.7 - 0.4, -0.1);
      else if (k === 1) g.rotation.set(Math.sin(t * 0.6 + i) * 0.12, Math.sin(t * 0.8 + i) * 0.55, 0.05);
      else if (k === 2) { g.rotation.set(0.1, t * 0.6 + i, 0); const p = g.userData.pin as THREE.Group | undefined; if (p) p.position.y = 0.5 + Math.abs(Math.sin(t * 2 + i)) * 0.08; }
      else g.rotation.set(0, t * 0.9 + i, Math.sin(t + i) * 0.12);
    };

    /* scene — light intensities x PI because three >= r155 uses physical units */
    const scene = new T.Scene();
    scene.environment = env;
    scene.add(new T.AmbientLight(0xffffff, 0.3 * Math.PI));
    const dl = new T.DirectionalLight(0xfff1d0, 1.0 * Math.PI); dl.position.set(3, 5, 7); scene.add(dl);
    const cam = new T.PerspectiveCamera(32, 1, 0.1, 200);

    const objs = [0, 1, 2, 3].map((k) => { const g = makeObject(k); scene.add(g); return g; });
    const spin = [0, 0, 0, 0];

    // the glowing orb that travels the path
    const orbMat = new T.MeshBasicMaterial({ color: 0xffeaa8, transparent: true });
    const orb = new T.Mesh(new T.SphereGeometry(0.11, 20, 20), orbMat);
    const glowMat = new T.SpriteMaterial({ map: glowTex, color: 0xe0b860, transparent: true, opacity: 0.9, blending: T.AdditiveBlending, depthWrite: false });
    const glow = new T.Sprite(glowMat);
    scene.add(orb); scene.add(glow);

    /* layout + path */
    let W = 0, H = 0, wide = true, zfit = 9, raf = 0, visible = true;
    const base = (i: number): [number, number] => (wide ? [(i - 1.5) * 3.2, 0.35] : [((i % 2) - 0.5) * 3.4, (i < 2 ? 1 : -1) * 2.1 + 0.3]);

    let curve: THREE.CatmullRomCurve3 | null = null, pathLine: THREE.Line | null = null, trail: THREE.Line | null = null;
    let pp: THREE.Vector3[] = [], builtWide: boolean | null = null;
    const dropLine = (l: THREE.Line | null) => { if (!l) return; scene.remove(l); l.geometry.dispose(); (l.material as THREE.Material).dispose(); };
    const buildPath = () => {
      dropLine(pathLine); dropLine(trail);
      // the path passes exactly through each object's position
      pp = [0, 1, 2, 3].map((i) => { const [x, y] = base(i); return new T.Vector3(x, y + (wide ? (i % 2 ? -0.45 : 0.45) : 0), 0); });
      const start = wide ? new T.Vector3(-6.3, -1.3, -1.2) : pp[0].clone().add(new T.Vector3(-2, 0.5, -1));
      const end = wide ? new T.Vector3(6.3, 1.1, -1.2) : pp[3].clone().add(new T.Vector3(2, -0.8, -1));
      curve = new T.CatmullRomCurve3([start, ...pp, end]);
      const P = curve.getPoints(400);
      pathLine = new T.Line(new T.BufferGeometry().setFromPoints(P), new T.LineBasicMaterial({ color: 0xb8964f, transparent: true, opacity: 0.28 }));
      trail = new T.Line(new T.BufferGeometry().setFromPoints(P), new T.LineBasicMaterial({ color: 0xf0cf80, transparent: true, opacity: 0.95 }));
      scene.add(pathLine); scene.add(trail);
      builtWide = wide;
    };

    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight, d = Math.min(window.devicePixelRatio || 1, 1.75);
      if (!w || !h || (w === W && h === H)) return;
      W = w; H = h;
      renderer.setPixelRatio(d); renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      wide = w / h > 1.15;
      zfit = Math.max(9, (wide ? 12.4 : 6.6) / (2 * Math.tan((16 * Math.PI) / 180) * cam.aspect));
    };

    const t0 = performance.now() / 1000;
    let last = t0;
    const draw = (t: number, dt: number) => {
      if (builtWide !== wide) buildPath();
      if (!curve || !trail) return;
      cam.position.set(0, 0, zfit); cam.lookAt(0, 0, 0);

      // calm mode: freeze with the whole journey completed
      const tm = calm ? 11.9 : t % CYCLE;
      let u = 1;
      if (tm < 12) for (let j = 0; j < KT.length - 1; j++) if (tm >= KT[j] && tm < KT[j + 1]) { u = KV[j] + (KV[j + 1] - KV[j]) * sm(0, 1, (tm - KT[j]) / (KT[j + 1] - KT[j])); break; }
      const fade = calm ? 0 : 1 - sm(12.3, 13.3, tm);

      const p = curve.getPoint(u);
      orb.position.copy(p); glow.position.copy(p);
      orb.scale.setScalar(Math.max(0.001, fade)); glow.scale.setScalar(1.1 * fade + 0.001);
      trail.geometry.setDrawRange(0, Math.floor(u * 401)); (trail.material as THREE.LineBasicMaterial).opacity = 0.95 * (calm ? 0.5 : fade);

      const lab: number[] = [];
      objs.forEach((o, i) => {
        const ci = (i + 1) / 5;                       // where object i sits on the path
        const g = 1 - sm(0, 0.1, Math.abs(u - ci));   // 1 when the orb is at the object
        const vis = sm(ci - 0.07, ci, u) * (tm < 12.4 ? 1 : 1 - sm(12.4, 13.3, tm)); // 1 once the orb has passed
        spin[i] += g * dt * 5;
        o.position.copy(pp[i]); o.position.y += Math.sin(t * 1.3 + i) * 0.06;
        o.scale.setScalar(BASE * (0.85 + 0.3 * g) * (0.88 + 0.12 * vis) * (wide ? 1 : 0.8));
        idle(o, i, t, i); o.rotation.y += spin[i];
        lab[i] = vis;
      });

      cam.updateMatrixWorld();
      renderer.render(scene, cam);

      objs.forEach((o, i) => {
        const el = lbs.current[i], de = dcs.current[i]; if (!el || !de) return;
        const v = o.position.clone(); v.y -= 1.2; v.project(cam);
        el.style.transform = `translate(${(v.x * 0.5 + 0.5) * W}px,${(-v.y * 0.5 + 0.5) * H}px) translate(-50%,0)`;
        el.style.opacity = String(clamp(0.3 + 0.7 * lab[i])); // dim until the orb reaches it
        de.style.opacity = String(clamp(lab[i]));              // description appears with the orb
      });
    };

    const frame = (ms: number) => {
      if (!calm) raf = requestAnimationFrame(frame);
      const now = ms / 1000, dt = Math.min(0.05, now - last); last = now;
      resize();
      if (!visible) return;
      draw(now - t0, dt);
    };
    resize();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { resize(); if (calm) draw(0, 0); }); ro.observe(box);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(box);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      dropLine(pathLine); dropLine(trail);
      scene.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); });
      [GOLD, GEM, PLANE, GLASS, GRANITE, ROCK, rupeeMat, orbMat, glowMat].forEach((m) => m.dispose());
      rupee.dispose(); glowTex.dispose(); env.dispose(); renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={stage} aria-labelledby="jp-title"
      className="relative h-[800px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,#1f1e1c_0%,#141414_55%,#0d0d0d_100%)] min-[641px]:h-[560px]"
    >
      <canvas ref={cv} aria-hidden className="absolute inset-0 h-full w-full" />
      <h2 id="jp-title" className="pointer-events-none absolute left-[18px] top-[22px] z-[5] m-0 font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.05] text-white min-[641px]:left-10 min-[641px]:top-[34px]">
        {title}
      </h2>
      {steps.map(([name, text], i) => (
        <div
          key={name} ref={(el) => { lbs.current[i] = el; }}
          className="pointer-events-none absolute left-0 top-0 z-[4] w-[44%] text-center [text-shadow:0_2px_14px_rgba(0,0,0,.9)] will-change-[transform,opacity] min-[641px]:w-1/5 min-[641px]:min-w-[150px] min-[641px]:max-w-[260px]"
        >
          <i className="mb-0.5 block font-serif text-[clamp(34px,3.4vw,48px)] font-normal not-italic leading-none text-[#b8964f]">{i + 1}</i>
          <b className="mb-1.5 block font-serif text-[clamp(22px,2.2vw,30px)] font-semibold leading-[1.1] text-[#d8bd7e]">{name}</b>
          <span ref={(el) => { dcs.current[i] = el; }} className="block font-sans text-[clamp(13px,1.15vw,15.5px)] font-light leading-[1.55] text-[#b4afa3]">{text}</span>
        </div>
      ))}
    </section>
  );
}
