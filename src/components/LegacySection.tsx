import { useRef } from 'react';
import type { CSSProperties, PointerEvent, ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  "A legacy built on stone." — layered 3D hero.                      */
/*  Assets live in /public/legacy (base.jpg + transparent .webp cut-   */
/*  outs). lg+ : parallax 3D stage built from the layers.              */
/*  < lg       : stacked layout with real, readable HTML text.         */
/* ------------------------------------------------------------------ */

const W = 1983;
const H = 793;
const P = 1800; // virtual perspective distance (design px)
const src = (name: string, ext = 'webp') => `${import.meta.env.BASE_URL}legacy/${name}.${ext}`;

type Box = [number, number, number, number]; // x0, y0, x1, y1 in original image px

const box: Record<string, Box> = {
  sculpture: [517, 77, 1244, 764],
  rockTL: [0, 0, 239, 219],
  rockTR: [1742, 0, 1983, 154],
  rockBR: [1457, 597, 1983, 793],
  card0: [1109, 157, 1502, 308],
  card1: [1517, 157, 1912, 308],
  card2: [1109, 321, 1502, 473],
  card3: [1517, 321, 1912, 473],
  card4: [1109, 484, 1502, 637],
  card5: [1517, 484, 1912, 637],
  cta: [97, 595, 436, 702],
};

/* hrefs map to the site's existing hash routes */
const cards = [
  { id: 'card0', label: 'Established history', href: '#about' },
  { id: 'card1', label: 'Natural stone expertise', href: '#collection' },
  { id: 'card2', label: 'Product diversity', href: '#collection' },
  { id: 'card3', label: 'Sourcing capabilities', href: '#sourcing' },
  { id: 'card4', label: 'Residential projects', href: '#projects' },
  { id: 'card5', label: 'Commercial projects', href: '#projects' },
];

const STORY_HREF = '#about';

/** Absolute position of a layer; transform-origin = centre of the whole stage,
 *  so translateZ + compensating scale keeps the layer pixel-aligned at rest. */
function place(id: string, z: number, zHover = z): CSSProperties {
  const [x0, y0, x1, y1] = box[id];
  const w = x1 - x0;
  const h = y1 - y0;
  return {
    left: `${(x0 / W) * 100}%`,
    top: `${(y0 / H) * 100}%`,
    width: `${(w / W) * 100}%`,
    height: `${(h / H) * 100}%`,
    transformOrigin: `${((W / 2 - x0) / w) * 100}% ${((H / 2 - y0) / h) * 100}%`,
    '--z0': z,
    '--zh': zHover,
  } as CSSProperties;
}

/* gold sparks that drift up from the stone */
const sparks = Array.from({ length: 26 }, (_, i) => ({
  left: 12 + ((i * 41) % 76),
  top: 25 + ((i * 29) % 62),
  size: 2 + (i % 3),
  delay: (i * 0.37) % 6,
  dur: 4 + (i % 5),
}));

function Plane({ id, z, children, className = '' }: { id: string; z: number; children?: ReactNode; className?: string }) {
  return (
    <div className={`ls-plane pointer-events-none ${className}`} style={place(id, z)}>
      <div className="ls-float h-full w-full">
        <img src={src(id)} alt="" draggable={false} className="block h-full w-full select-none" />
        {children}
      </div>
    </div>
  );
}

function CardPlane({ id, label, href }: { id: string; label: string; href: string }) {
  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--crx', `${(0.5 - y) * 14}deg`);
    el.style.setProperty('--cry', `${(x - 0.5) * 18}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = (e: PointerEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty('--crx', '0deg');
    e.currentTarget.style.setProperty('--cry', '0deg');
  };

  return (
    <a
      href={href}
      aria-label={label}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="ls-plane ls-card group outline-none"
      style={place(id, 30, 110)}
    >
      <div className="ls-tilt relative h-full w-full">
        <img src={src(id)} alt="" draggable={false} className="block h-full w-full select-none" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[6%] rounded-[8%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{ background: 'radial-gradient(40% 70% at var(--mx,50%) var(--my,50%), rgba(226,178,84,.28), transparent 70%)' }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[3.2%] rounded-[8%] opacity-0 shadow-[0_0_28px_rgba(226,178,84,.55),inset_0_0_0_1.5px_rgba(226,178,84,.9)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </div>
    </a>
  );
}

function CtaPlane() {
  return (
    <a
      href={STORY_HREF}
      aria-label="Discover our story"
      className="ls-plane ls-card group outline-none"
      style={place('cta', 40, 100)}
    >
      <div className="ls-tilt relative h-full w-full">
        <img src={src('cta')} alt="" draggable={false} className="block h-full w-full select-none" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[4%] rounded-full opacity-0 shadow-[0_0_30px_rgba(47,227,143,.65),inset_0_0_0_1.5px_rgba(226,178,84,.95)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </div>
    </a>
  );
}

/* ---------------- desktop: layered 3D stage (lg+) ---------------- */

function Stage() {
  const rootRef = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${-py * 7}deg`);
    el.style.setProperty('--ry', `${px * 10}deg`);
  };
  const onLeave = () => {
    rootRef.current?.style.setProperty('--rx', '0deg');
    rootRef.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="ls-root ls-fade relative hidden w-full select-none overflow-hidden bg-black lg:block"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <div className="ls-persp absolute inset-0">
        <div className="ls-sway absolute inset-0">
          <div className="ls-stage absolute inset-0">
            {/* base: original artwork with the layered parts removed (also carries the headline) */}
            <img
              src={src('base', 'jpg')}
              alt="A legacy built on stone. Joys Marbles & Granites deals in marbles, granites, Kota stones, quartz and Kadapa stones, sourced from across India."
              draggable={false}
              className="absolute inset-0 h-full w-full"
            />

            {/* floor ripples under the rock */}
            {[0, 2.2].map((d) => (
              <span
                key={d}
                aria-hidden
                className="ls-ripple pointer-events-none absolute rounded-[50%] border border-amber-300/70 shadow-[0_0_18px_rgba(226,178,84,.5)]"
                style={{
                  left: `${((890 - 520) / W) * 100}%`,
                  top: `${((735 - 26) / H) * 100}%`,
                  width: `${(1040 / W) * 100}%`,
                  height: `${(52 / H) * 100}%`,
                  animationDelay: `${d}s`,
                }}
              />
            ))}

            <Plane id="rockTL" z={140} className="ls-drift-a" />
            <Plane id="rockTR" z={110} className="ls-drift-b" />
            <Plane id="rockBR" z={170} className="ls-drift-a" />

            {/* hero sculpture: floats, glows, light-sweeps and sheds sparks */}
            <Plane id="sculpture" z={75} className="ls-sculpt">
              <img
                src={src('sculpture')}
                alt=""
                aria-hidden
                draggable={false}
                className="ls-pulse pointer-events-none absolute inset-0 h-full w-full"
                style={{ filter: 'brightness(1.7) saturate(1.2)' }}
              />
              <img
                src={src('sculpture')}
                alt=""
                aria-hidden
                draggable={false}
                className="ls-sweep pointer-events-none absolute inset-0 h-full w-full"
              />
              {sparks.map((p, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="ls-spark absolute rounded-full bg-amber-300 shadow-[0_0_8px_#e2b254]"
                  style={{
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    width: p.size,
                    height: p.size,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.dur}s`,
                  }}
                />
              ))}
            </Plane>

            {cards.map((c) => (
              <CardPlane key={c.id} id={c.id} label={c.label} href={c.href} />
            ))}
            <CtaPlane />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- mobile + tablet: stacked layout (< lg) ---------------- */

function Stacked() {
  return (
    <div className="relative overflow-hidden bg-black px-[5vw] py-14 sm:py-16 lg:hidden">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 40% at 80% 35%, rgba(47,227,143,.12), transparent 70%), radial-gradient(50% 35% at 15% 90%, rgba(226,178,84,.12), transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-[1000px] items-center gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#e2b254]/40 bg-gradient-to-r from-[#e2b254]/10 to-transparent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.28em] text-[#e2b254]">
            <span className="h-2 w-2 rotate-45 bg-[#e2b254]" />
            Our legacy
          </span>

          <h2 className="mt-5 text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] text-white">
            A legacy built
            <br />
            on <span className="bg-gradient-to-r from-[#1fbf78] to-[#52f0a8] bg-clip-text text-transparent">stone.</span>
          </h2>

          <div className="mt-6 space-y-4 border-l-2 border-[#2fe38f] pl-4 text-[15px] leading-relaxed text-white/85 sm:text-base">
            <p>
              Joys Marbles &amp; Granites has built its presence in the natural stone trading industry through years of
              experience, product knowledge and customer relationships.
            </p>
            <p>
              We deal in marbles, granites, Kota stones, quartz and Kadapa stones, and source materials from across India
              to suit each project.
            </p>
          </div>

          <a
            href={STORY_HREF}
            aria-label="Discover our story"
            className="mt-8 inline-block transition hover:-translate-y-0.5 hover:drop-shadow-[0_0_18px_rgba(47,227,143,.5)] active:scale-[.98]"
          >
            <img src={src('cta')} alt="" draggable={false} className="block h-auto w-[230px] sm:w-[260px]" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
          <img
            src={src('sculpture')}
            alt="Black, white and green marble slabs encircled by a golden ring on a rock"
            draggable={false}
            className="ls-float-m block h-auto w-full select-none"
            loading="lazy"
          />
        </div>
      </div>

      <ul className="relative mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 md:gap-4">
        {cards.map((c) => (
          <li key={c.id}>
            <a
              href={c.href}
              aria-label={c.label}
              className="group block transition duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_20px_rgba(226,178,84,.45)] active:scale-[.98]"
            >
              <img src={src(c.id)} alt="" draggable={false} className="block h-auto w-full select-none" loading="lazy" />
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        .ls-float-m { animation: ls-float 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ls-float-m { animation: none !important; } }
      `}</style>
    </div>
  );
}

export default function LegacySection() {
  return (
    <section aria-label="Our legacy" className="w-full bg-black">
      <style>{`
        .ls-root { --u: ${100 / W}cqw; container-type: inline-size; }
        .ls-persp { perspective: calc(${P} * var(--u)); perspective-origin: 50% 50%; }
        .ls-stage { transform-style: preserve-3d; transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .35s ease-out; }
        .ls-sway { transform-style: preserve-3d; animation: ls-sway 16s ease-in-out infinite; }
        .ls-plane { position: absolute; transform-style: preserve-3d; --z: var(--z0);
          transform: translateZ(calc(var(--z) * var(--u))) scale(calc((${P} - var(--z)) / ${P}));
          transition: transform .5s cubic-bezier(.2,.8,.2,1); }
        .ls-card:hover, .ls-card:focus-visible { --z: var(--zh); }
        .ls-tilt { transform-style: preserve-3d; transform: rotateX(var(--crx,0deg)) rotateY(var(--cry,0deg)); transition: transform .2s ease-out; }
        .ls-float { transform-style: preserve-3d; }
        .ls-sculpt .ls-float { animation: ls-float 7s ease-in-out infinite; }
        .ls-pulse { animation: ls-pulse 5s ease-in-out infinite; }
        .ls-sweep {
          filter: brightness(2.1) contrast(1.05);
          -webkit-mask-image: linear-gradient(105deg, transparent 42%, #000 50%, transparent 58%);
                  mask-image: linear-gradient(105deg, transparent 42%, #000 50%, transparent 58%);
          -webkit-mask-size: 300% 100%; mask-size: 300% 100%;
          animation: ls-sweep 8s ease-in-out infinite;
        }
        .ls-spark { animation: ls-spark 5s ease-in infinite; opacity: 0; }
        .ls-ripple { animation: ls-ripple 6s ease-out infinite; }
        .ls-drift-a .ls-float { animation: ls-float 9s ease-in-out infinite; }
        .ls-drift-b .ls-float { animation: ls-float 11s ease-in-out -3s infinite; }
        .ls-fade { animation: ls-fade 1s ease-out both; }
        @keyframes ls-sway   { 0%,100% { transform: rotateY(-1.6deg) } 50% { transform: rotateY(1.6deg) } }
        @keyframes ls-float  { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes ls-pulse  { 0%,100% { opacity: 0 } 50% { opacity: .55 } }
        @keyframes ls-sweep  { 0% { -webkit-mask-position: 130% 0; mask-position: 130% 0 } 60%,100% { -webkit-mask-position: -30% 0; mask-position: -30% 0 } }
        @keyframes ls-spark  { 0% { transform: translateY(0) scale(.6); opacity: 0 } 30% { opacity: 1 } 100% { transform: translateY(-80px) scale(1.1); opacity: 0 } }
        @keyframes ls-ripple { 0% { transform: scale(.55); opacity: .75 } 100% { transform: scale(1.15); opacity: 0 } }
        @keyframes ls-fade   { from { opacity: 0; transform: scale(1.015) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) {
          .ls-sway,.ls-sculpt .ls-float,.ls-pulse,.ls-sweep,.ls-spark,.ls-ripple,.ls-drift-a .ls-float,.ls-drift-b .ls-float,.ls-fade { animation: none !important; }
          .ls-stage { transform: none !important; }
        }
      `}</style>

      <Stage />
      <Stacked />
    </section>
  );
}
