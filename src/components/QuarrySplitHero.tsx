import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sm = (a: number, b: number, x: number) => { x = clamp((x - a) / (b - a)); return x * x * (3 - 2 * x); };

function rng(seed: number) {
  let a = seed;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Procedural stone textures (no image files needed). */
function stoneTex(type: 'nero' | 'granite', seed: number, size = 512): THREE.CanvasTexture {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const x = c.getContext('2d')!; const R = rng(seed * 997 + 13);
  const speck = (n: number, cols: string[], a: number, b: number) => {
    for (let i = 0; i < n; i++) { x.fillStyle = cols[(R() * cols.length) | 0]; const r = a + R() * (b - a); x.beginPath(); x.arc(R() * size, R() * size, r, 0, 6.283); x.fill(); }
  };
  const vein = (col: string, w: number, al: number, count: number, wob: number) => {
    x.lineCap = 'round';
    for (let v = 0; v < count; v++) {
      let px = R() * size, py = R() * size, ang = R() * 6.283;
      x.strokeStyle = col; x.globalAlpha = al * (0.5 + R() * 0.5); x.lineWidth = w * (0.4 + R() * 1.2);
      x.beginPath(); x.moveTo(px, py);
      for (let s = 0; s < 60; s++) { ang += (R() - 0.5) * wob; px += Math.cos(ang) * 12; py += Math.sin(ang) * 12; x.lineTo(px, py); }
      x.stroke();
    }
    x.globalAlpha = 1;
  };
  if (type === 'nero') { // black marble with gold veins
    x.fillStyle = '#141416'; x.fillRect(0, 0, size, size);
    vein('#3a3a3f', 6, 0.3, 5, 0.9); vein('#d9a93f', 3, 0.9, 5, 0.6); vein('#f0d58a', 1.2, 0.9, 6, 0.8);
  } else { // granite
    x.fillStyle = '#34343a'; x.fillRect(0, 0, size, size);
    speck(5000, ['#1c1c20', '#55555c', '#7a6f66', '#26262b'], 0.6, 2); speck(900, ['#a39a8f', '#c7b9a6'], 0.5, 1.4);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}

interface Props { eyebrow: string; title: string; text: string }

/** Sourcing hero: a rough quarry block splits open to reveal a polished black-marble face with gold veins. */
export default function QuarrySplitHero({ eyebrow, title, text }: Props) {
  const stage = useRef<HTMLElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = stage.current!, canvas = cv.current!;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const T = THREE;

    const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setClearColor(0x000000, 0);

    /* studio reflections (makes the polished face shine) */
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
    const pm = new T.PMREMGenerator(renderer);
    const env = pm.fromScene(es, 0.03).texture;
    pm.dispose();
    es.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); ((c as THREE.Mesh).material as THREE.Material | undefined)?.dispose(); });

    const graniteTex = stoneTex('granite', 2), neroTex = stoneTex('nero', 6);
    const glowTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d')!;
      const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, 128, 128);
      return new T.CanvasTexture(c);
    })();

    /* scene — light intensities x PI because three >= r155 uses physical units */
    const scene = new T.Scene();
    scene.environment = env;
    scene.add(new T.AmbientLight(0xffffff, 0.3 * Math.PI));
    const dl = new T.DirectionalLight(0xfff1d0, 1.0 * Math.PI); dl.position.set(3, 5, 7); scene.add(dl);
    const cam = new T.PerspectiveCamera(32, 1, 0.1, 200);
    const root = new T.Group(); scene.add(root);

    // two halves of one block: outside = rough granite, cut face = polished black marble with gold veins
    const rough = new T.MeshStandardMaterial({ map: graniteTex, flatShading: true, roughness: 0.8, metalness: 0, envMapIntensity: 0.55 });
    const polished = new T.MeshStandardMaterial({ map: neroTex, color: 0x8a8a8a, roughness: 0.3, metalness: 0, envMapIntensity: 0.4 });

    const halves = [-1, 1].map((side) => {
      const geo = new T.BoxGeometry(1.2, 2.8, 1.8, 5, 10, 7);
      const p = geo.attributes.position;
      const innerX = -side * 0.6; // x of the face that will be the cut
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        if (Math.abs(x - innerX) < 1e-4) continue; // keep the cut face flat
        const n = Math.sin(x * 11.3 + y * 47.1 + z * 29.7 + side * 3) * 43758.5453; const nn = n - Math.floor(n) - 0.5;
        const m = Math.sin(x * 5.1 + y * 3.3 + z * 7.9) * 0.06; // roughen the outside
        p.setXYZ(i, x + nn * 0.12 + m, y + nn * 0.1, z + nn * 0.12 + m);
      }
      geo.computeVertexNormals();
      const mats = [rough, rough, rough, rough, rough, rough];
      mats[side < 0 ? 0 : 1] = polished; // box face 0 = +x, face 1 = -x
      const mesh = new T.Mesh(geo, mats); root.add(mesh); return mesh;
    });

    // gold glow along the seam
    const seamMat = new T.SpriteMaterial({ map: glowTex, color: 0xe0b860, transparent: true, opacity: 0.3, blending: T.AdditiveBlending, depthWrite: false });
    const seam = new T.Sprite(seamMat); seam.scale.set(0.9, 3.4, 1); root.add(seam);

    // gold sparks rising from the cut
    const SPARKS = 120;
    const sparkMat = new T.PointsMaterial({ color: 0xe0b04a, size: 0.07, transparent: true, opacity: 0.9, blending: T.AdditiveBlending, depthWrite: false });
    const sparks = new T.Points(new T.BufferGeometry(), sparkMat);
    const sd = Array.from({ length: SPARKS }, () => ({ x: Math.random() - 0.5, y: Math.random() * 3 - 1.5, z: (Math.random() - 0.5) * 1.4, v: 0.3 + Math.random() * 0.6 }));
    sparks.geometry.setAttribute('position', new T.BufferAttribute(new Float32Array(SPARKS * 3), 3));
    sparks.frustumCulled = false; root.add(sparks);

    /* layout + loop */
    let W = 0, H = 0, wide = true, zfit = 9, raf = 0, visible = true;
    let mx = 0, my = 0, inside = false, px = 0, py = 0;
    const onMove = (e: PointerEvent) => { const r = box.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; inside = true; };
    const onLeave = () => { inside = false; };
    box.addEventListener('pointermove', onMove); box.addEventListener('pointerleave', onLeave);

    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight, d = Math.min(window.devicePixelRatio || 1, 1.75);
      if (!w || !h || (w === W && h === H)) return;
      W = w; H = h;
      renderer.setPixelRatio(d); renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      wide = w > 760;
      zfit = Math.max(9, (wide ? 12.4 : 6.4) / (2 * Math.tan((16 * Math.PI) / 180) * cam.aspect));
    };

    const t0 = performance.now() / 1000;
    let last = t0;
    const draw = (t: number, dt: number) => {
      if (inside) { mx = (px / W - 0.5) * 2; my = -(py / H - 0.5) * 2; } else { mx = Math.sin(t * 0.3) * 0.5; my = Math.cos(t * 0.25) * 0.3; }

      root.position.set(wide ? 2.9 : 0, wide ? 0 : -3.3, 0); // 3D on the right (desktop) or bottom (phone / small tablet)
      cam.position.set(0, 0, zfit); cam.lookAt(0, 0, 0);

      const tm = calm ? 5 : t % 9; // 9 s loop (calm mode: frozen fully open)
      const open = sm(1.5, 3.5, tm) - sm(6.5, 8.5, tm); // 0 closed ... 1 fully open
      halves.forEach((m, i) => { const side = i ? 1 : -1; m.position.x = side * (0.62 + open * 1.0); m.rotation.y = side * open * 0.12; });
      root.rotation.set(my * 0.1, -0.5 + Math.sin(t * 0.5) * 0.4 + mx * 0.3, 0);

      const crack = sm(0.8, 1.5, tm) * (1 - sm(1.5, 2.2, tm)) * 0.5; // flash just before it opens
      seamMat.opacity = 0.2 + 0.7 * open + crack;
      seam.scale.set(0.9 + open * 1.2, 3.4, 1);

      const a = sparks.geometry.attributes.position as THREE.BufferAttribute;
      sd.forEach((d, j) => { d.y += dt * d.v; if (d.y > 1.6) d.y = -1.5; a.array[j * 3] = d.x * (0.3 + open * 1.6); a.array[j * 3 + 1] = d.y; a.array[j * 3 + 2] = d.z; });
      a.needsUpdate = true; sparkMat.opacity = 0.9 * open;

      cam.updateMatrixWorld();
      renderer.render(scene, cam);
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
      box.removeEventListener('pointermove', onMove); box.removeEventListener('pointerleave', onLeave);
      scene.traverse((c) => { (c as THREE.Mesh).geometry?.dispose(); });
      [rough, polished, seamMat, sparkMat].forEach((m) => m.dispose());
      graniteTex.dispose(); neroTex.dispose(); glowTex.dispose(); env.dispose(); renderer.dispose();
    };
  }, []);

  return (
    <header
      ref={stage}
      className="relative h-[860px] overflow-hidden bg-[radial-gradient(ellipse_at_65%_50%,#1b1a18_0%,#111_60%,#0c0c0c_100%)] min-[761px]:h-[640px]"
    >
      <canvas ref={cv} aria-hidden className="absolute inset-0 z-[1] h-full w-full" />
      <div className="pointer-events-none absolute inset-x-[6%] top-[110px] z-[5] min-[761px]:inset-x-auto min-[761px]:left-[5%] min-[761px]:top-1/2 min-[761px]:max-w-[52%] min-[761px]:-translate-y-1/2">
        <p className="hero-in mb-[22px] font-sans text-[13px] uppercase tracking-[.32em] text-[#b8964f]">{eyebrow}</p>
        <h1 className="hero-in mb-[22px] bg-[linear-gradient(120deg,#8f6f2f_0%,#d9b860_55%,#b8964f_100%)] bg-clip-text font-serif text-[clamp(38px,5.6vw,80px)] font-medium leading-[1.02] text-transparent" style={{ animationDelay: '.15s' }}>{title}</h1>
        <p className="hero-in max-w-[520px] font-sans text-[clamp(15px,1.4vw,19px)] font-light leading-[1.7] text-[#b4afa3]" style={{ animationDelay: '.3s' }}>{text}</p>
      </div>
    </header>
  );
}
