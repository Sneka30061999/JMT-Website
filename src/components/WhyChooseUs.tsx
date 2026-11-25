import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent, ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  "Why choose us" — luxury 3D banner (React + TS + Tailwind).        */
/*  Floating gold cards with pointer parallax, orbiting gold rings,    */
/*  drifting dust and a stone platform. Responsive:                    */
/*  xl: copy | 3D stage · md–xl: stacked, one row · mobile: 2-up grid. */
/* ------------------------------------------------------------------ */

const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

interface Reason {
  lines: [string, string];
  icon: ReactNode;
  rz: string; // resting tilt
  y: string; // resting vertical offset
}

const reasons: Reason[] = [
  {
    lines: ['Experience', 'since 1998'],
    rz: '-6deg',
    y: '6px',
    icon: (
      <>
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3 8 9l4 13 4-13-3-6M2 9h20" />
      </>
    ),
  },
  {
    lines: ['Diverse stone', 'selection'],
    rz: '-3deg',
    y: '-6px',
    icon: (
      <>
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </>
    ),
  },
  {
    lines: ['Requirement-', 'based sourcing'],
    rz: '0deg',
    y: '-14px',
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    lines: ['Residential &', 'commercial'],
    rz: '3deg',
    y: '-6px',
    icon: (
      <>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </>
    ),
  },
  {
    lines: ['Personalised', 'assistance'],
    rz: '6deg',
    y: '6px',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M6.5 20v-1.5a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4V20" />
        <circle cx="5" cy="10" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M2 18v-.8a2.6 2.6 0 0 1 2.6-2.6M22 18v-.8a2.6 2.6 0 0 0-2.6-2.6" />
      </>
    ),
  },
];

/* ---------------- drifting gold dust ---------------- */

function Dust() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const host = cv?.parentElement;
    if (!cv || !host) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = true;

    const size = () => {
      W = host.clientWidth;
      H = host.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const mk = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 6.28,
      s: Math.random() * 0.02 + 0.005,
    });
    const count = W < 700 ? 40 : 80;
    const P = Array.from({ length: count }, mk);

    const ro = new ResizeObserver(size);
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(host);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of P) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.s;
        if (p.y < -5) {
          p.y = H + 5;
          p.x = Math.random() * W;
        }
        const al = 0.25 + 0.55 * Math.abs(Math.sin(p.a));
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,215,130,${al})`;
        ctx.shadowColor = 'rgba(255,200,100,.9)';
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.r, 0, 6.28);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}

/* ---------------- one floating card ---------------- */

function ReasonCard({ r, i }: { r: Reason; i: number }) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    const c = e.currentTarget;
    const f = c.querySelector<HTMLElement>('.wy-face');
    if (!f) return;
    const b = c.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width;
    const y = (e.clientY - b.top) / b.height;
    f.style.setProperty('--gx', `${x * 100}%`);
    f.style.setProperty('--gy', `${y * 100}%`);
    f.style.setProperty('--cy', `${(x - 0.5) * 26}deg`);
    f.style.setProperty('--cx', `${(0.5 - y) * 22}deg`);
  };
  const onLeave = (e: PointerEvent<HTMLElement>) => {
    const f = e.currentTarget.querySelector<HTMLElement>('.wy-face');
    ['--gx', '--gy', '--cy', '--cx'].forEach((k) => f?.style.removeProperty(k));
  };

  return (
    <article
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="wy-card relative h-[176px] w-[calc(50%-8px)] max-w-[170px] md:h-[190px] md:w-[17.5%] md:max-w-[150px] xl:h-[200px] xl:w-[clamp(104px,9vw,152px)] xl:max-w-none"
      style={{ '--i': i, '--rz': r.rz, '--y': r.y } as CSSProperties}
    >
      <div className="wy-float absolute inset-0">
        <div className="wy-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[18px] px-2.5 py-5 text-center">
          <div className="wy-medal relative grid h-[54px] w-[54px] place-items-center rounded-full text-[#e3b765] sm:h-[62px] sm:w-[62px]">
            <svg viewBox="0 0 24 24" aria-hidden className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]" style={{ filter: 'drop-shadow(0 0 5px rgba(255,208,110,.8))' }} {...STROKE}>
              {r.icon}
            </svg>
          </div>
          <div className="wy-label text-[14px] font-medium leading-tight text-white 2xl:text-[15px]">
            {r.lines[0]}
            <br />
            {r.lines[1]}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------------- section ---------------- */

export default function WhyChooseUs() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // start the card "rise" animation when scrolled into view
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.2) setInView(true);
        else if (!e.isIntersecting) setInView(false); // cards rise again on the next visit
      },
      { threshold: [0, 0.2] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = bannerRef.current;
    const rig = rigRef.current;
    if (!el || !rig) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    rig.style.setProperty('--ry', (x * 16).toFixed(2));
    rig.style.setProperty('--rx', (-y * 10).toFixed(2));
  };
  const onLeave = () => {
    rigRef.current?.style.setProperty('--ry', '0');
    rigRef.current?.style.setProperty('--rx', '0');
  };

  return (
    <section aria-labelledby="wy-title" className="relative bg-black px-[5vw] py-14 sm:py-20">
      <style>{`
        .wy-banner {
          background:
            radial-gradient(60% 80% at 8% 0%,rgba(15,90,63,.55),transparent 60%),
            radial-gradient(40% 60% at 100% 0%,rgba(20,120,80,.5),transparent 65%),
            radial-gradient(70% 50% at 70% 100%,rgba(227,183,101,.16),transparent 70%),
            linear-gradient(180deg,#030302,#0a0907 60%,#050504);
          box-shadow: 0 40px 90px -30px rgba(227,183,101,.25);
        }
        .wy-banner::before { content:""; position:absolute; inset:-20%; z-index:-1; opacity:.35;
          background: repeating-linear-gradient(115deg,transparent 0 46px,rgba(227,183,101,.07) 47px,transparent 49px 120px),
                      repeating-linear-gradient(62deg,transparent 0 80px,rgba(31,150,100,.09) 81px,transparent 83px 190px);
          animation: wy-drift 40s linear infinite; }
        .wy-orn-r { transform: scaleX(-1); }
        .wy-gem { filter: drop-shadow(0 0 8px rgba(227,183,101,.8)); animation: wy-pulse 3.6s ease-in-out infinite; }
        .wy-h {
          background: linear-gradient(100deg,#fff 0%,#fff 40%,#fff0c4 50%,#fff 60%,#fff 100%); background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent; animation: wy-sheen 7s ease-in-out infinite 1.6s; }
        .wy-gold { background: linear-gradient(120deg,#9a6d2a,#e3b765,#fff0c4,#e3b765); -webkit-background-clip: text; background-clip: text; color: transparent; }

        .wy-cta { transition: transform .3s, box-shadow .3s, background .3s; }
        .wy-cta::before { content:""; position:absolute; inset:0; transform: translateX(-120%); transition: transform .8s;
          background: linear-gradient(110deg,transparent 35%,rgba(255,240,196,.35) 50%,transparent 65%); }
        .wy-cta:hover, .wy-cta:focus-visible { transform: translateY(-2px); background: rgba(227,183,101,.14);
          box-shadow: 0 10px 30px -8px rgba(227,183,101,.6), inset 0 0 18px rgba(227,183,101,.2); outline: none; }
        .wy-cta:hover::before, .wy-cta:focus-visible::before { transform: translateX(120%); }
        .wy-cta:hover .wy-arr { transform: translateX(4px); }

        .wy-stage { perspective: 1300px; }
        @media (max-width: 1279px) { .wy-stage { perspective: 900px; } }
        .wy-ring { fill: none; stroke: url(#wy-gl); stroke-linecap: round; filter: drop-shadow(0 0 7px rgba(227,183,101,.9)); }
        .wy-r1 { stroke-width: 2; stroke-dasharray: 900 1400; animation: wy-dash 14s linear infinite; }
        .wy-r2 { stroke-width: 1.2; stroke-dasharray: 500 1500; animation: wy-dash 20s linear infinite reverse; opacity: .8; }

        .wy-rig { transform-style: preserve-3d; transform: rotateX(calc(var(--rx,0)*1deg)) rotateY(calc(var(--ry,0)*1deg)); transition: transform .25s ease-out; }
        .wy-platform { clip-path: polygon(2% 38%,10% 18%,30% 28%,52% 8%,75% 26%,92% 14%,100% 40%,98% 100%,0 100%);
          background: linear-gradient(180deg,#26221a,#0d0c09 55%,#050504); }
        .wy-platform::before { content:""; position:absolute; inset:0; mix-blend-mode: screen; animation: wy-vein 6s ease-in-out infinite;
          background: linear-gradient(100deg,transparent 30%,rgba(227,183,101,.5) 32%,transparent 34%,transparent 60%,rgba(227,183,101,.35) 61%,transparent 63%),
                      linear-gradient(180deg,rgba(255,225,150,.35),transparent 35%); }

        .wy-card { transform-style: preserve-3d; opacity: 0; transform: rotateZ(var(--rz)) translateY(var(--y,0)); }
        .wy-in .wy-card { animation: wy-rise 1.1s cubic-bezier(.2,.9,.25,1) forwards; animation-delay: calc(var(--i)*.14s + .2s); }
        .wy-float { transform-style: preserve-3d; animation: wy-bob 5s ease-in-out infinite; animation-delay: calc(var(--i)*-.9s); }
        .wy-face {
          transform: rotateY(var(--cy,-8deg)) rotateX(var(--cx,0deg)); transition: transform .2s ease-out, box-shadow .3s;
          background:
            radial-gradient(circle at var(--gx,50%) var(--gy,0%),rgba(255,226,150,.22),transparent 55%),
            linear-gradient(115deg,transparent 42%,rgba(227,183,101,.22) 43%,transparent 45%),
            linear-gradient(65deg,transparent 60%,rgba(255,255,255,.07) 61%,transparent 63%),
            linear-gradient(160deg,#25231f,#0b0a08 60%,#16130e);
          border: 1px solid rgba(227,183,101,.45);
          box-shadow: inset 0 0 22px rgba(227,183,101,.14), inset 0 1px 0 rgba(255,240,196,.4), 0 26px 40px -12px rgba(0,0,0,.9), 0 0 30px -4px rgba(227,183,101,.35); }
        .wy-face::after { content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none; mix-blend-mode: screen;
          background: linear-gradient(105deg,transparent 30%,rgba(255,240,200,.28) 50%,transparent 70%); background-size: 250% 100%; background-position: 150% 0;
          animation: wy-glint 6s ease-in-out infinite; animation-delay: calc(var(--i)*.5s + 2s); }
        .wy-card:hover .wy-face { box-shadow: inset 0 0 26px rgba(227,183,101,.28), inset 0 1px 0 rgba(255,240,196,.6), 0 30px 50px -12px rgba(0,0,0,.9), 0 0 46px 0 rgba(255,208,110,.6); }
        .wy-medal { transform: translateZ(36px); background: radial-gradient(circle at 35% 25%,#3a3224,#0a0907 70%); border: 1px solid rgba(227,183,101,.6);
          box-shadow: 0 0 0 5px rgba(227,183,101,.08), 0 0 22px rgba(227,183,101,.45), inset 0 0 14px rgba(227,183,101,.25); }
        .wy-medal::before { content:""; position:absolute; inset:-7px; border-radius:50%; border:1px dashed rgba(227,183,101,.4); animation: wy-spin 16s linear infinite; }
        .wy-label { transform: translateZ(22px); }

        @keyframes wy-drift { to { transform: translate3d(-90px,40px,0); } }
        @keyframes wy-pulse { 50% { filter: drop-shadow(0 0 16px rgba(255,220,140,1)); transform: scale(1.08); } }
        @keyframes wy-sheen { 0%,60% { background-position: 120% 0; } 100% { background-position: -120% 0; } }
        @keyframes wy-dash { to { stroke-dashoffset: -2300; } }
        @keyframes wy-vein { 50% { opacity: .45; } }
        @keyframes wy-rise {
          from { opacity: 0; transform: rotateZ(var(--rz)) translateY(120px) translateZ(-200px) rotateX(50deg); }
          to   { opacity: 1; transform: rotateZ(var(--rz)) translateY(var(--y,0)); } }
        @keyframes wy-bob { 0%,100% { transform: translateY(0) translateZ(0); } 50% { transform: translateY(-12px) translateZ(26px); } }
        @keyframes wy-glint { 0%,70% { background-position: 150% 0; } 100% { background-position: -150% 0; } }
        @keyframes wy-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .wy-banner::before,.wy-gem,.wy-h,.wy-r1,.wy-r2,.wy-platform::before,.wy-float,.wy-face::after,.wy-medal::before { animation: none !important; }
          .wy-in .wy-card, .wy-card { animation: none !important; opacity: 1; }
          .wy-rig { transform: none !important; }
        }
      `}</style>

      <div
        ref={bannerRef}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`wy-banner relative isolate mx-auto grid w-full max-w-[1400px] items-center gap-5 overflow-hidden rounded-[22px] px-5 py-8 sm:px-8 sm:py-10 xl:min-h-[460px] xl:grid-cols-[minmax(300px,34%)_1fr] xl:px-12 xl:py-10 ${inView ? 'wy-in' : ''}`}
      >
        <Dust />

        {/* copy */}
        <div className="relative z-[3] text-center xl:text-left">
          <div className="mx-auto mb-4 flex w-[200px] items-center gap-3.5 text-[#e3b765] sm:w-[230px] xl:mx-0" aria-hidden>
            <i className="h-px flex-1 bg-gradient-to-r from-transparent to-[#e3b765]" />
            <svg viewBox="0 0 24 24" className="wy-gem h-[30px] w-[30px]" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9Z" />
              <path d="M11 3 8 9l4 13 4-13-3-6M2 9h20" />
            </svg>
            <i className="wy-orn-r h-px flex-1 bg-gradient-to-r from-transparent to-[#e3b765]" />
          </div>

          <h2 id="wy-title" className="wy-h mb-3.5 font-serif text-[clamp(42px,9vw,68px)] font-semibold leading-[1.02]">
            Why choose <b className="wy-gold font-semibold">us</b>
          </h2>
          <p className="mx-auto mb-6 max-w-[36ch] text-[15.5px] leading-[1.55] text-[#e9e3d4] xl:mx-0">
            Quality you can build on, from the first slab to the final delivery.
          </p>

          <a
            href="#sourcing"
            className="wy-cta relative inline-flex items-center gap-3.5 overflow-hidden rounded-full border border-[#e3b765]/70 bg-[#e3b765]/[.06] py-[13px] pl-[22px] pr-[18px] text-sm font-medium text-[#fff0c4]"
          >
            Explore Our Services
            <span className="wy-arr grid h-6 w-6 place-items-center rounded-full border border-current transition-transform duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>

        {/* 3D stage */}
        <div className="wy-stage relative z-[2] flex items-center justify-center pb-6 xl:h-[380px] xl:pb-0">
          <svg
            viewBox="0 0 900 380"
            preserveAspectRatio="none"
            aria-hidden
            className="pointer-events-none absolute -inset-x-[2%] -top-[6%] bottom-[8%] z-0 hidden h-[96%] w-[104%] overflow-visible xl:block"
          >
            <defs>
              <linearGradient id="wy-gl" x1="0" x2="1">
                <stop offset="0" stopColor="#9a6d2a" stopOpacity="0" />
                <stop offset=".5" stopColor="#ffe2a0" />
                <stop offset="1" stopColor="#9a6d2a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse className="wy-ring wy-r1" cx="450" cy="190" rx="430" ry="150" transform="rotate(-3 450 190)" />
            <ellipse className="wy-ring wy-r2" cx="470" cy="200" rx="380" ry="120" transform="rotate(4 470 200)" />
          </svg>
          <div aria-hidden className="wy-platform absolute -inset-x-[3%] bottom-0 z-[1] hidden h-[120px] xl:block" />

          <div
            ref={rigRef}
            className="wy-rig relative z-[2] flex w-full flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-3 xl:mb-[46px] xl:w-auto xl:gap-3 2xl:gap-4"
          >
            {reasons.map((r, i) => (
              <ReasonCard key={r.lines.join('')} r={r} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
