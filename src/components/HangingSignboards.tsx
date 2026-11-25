import { useEffect, useRef } from 'react';

const MILESTONES = [
  { y: '1998', t: 'Joys Marbles & Granites is established', d: 'We begin trading natural stone in Chennai.' },
  { y: 'Today', t: '25+ years of experience', d: 'Five stone categories, requirement-based sourcing across India, and supply to residential, commercial and institutional projects.' },
];

const CARDS = [
  { t: 'Our vision', p: ['To redefine how natural stone is perceived and used in construction and design, delivering premium stone solutions that blend aesthetics with structural integrity.', 'We envision a future where every architectural space, modern or traditional, reflects sophistication, strength and sustainability through the intelligent use of natural stone.'] },
  { t: 'Our mission', p: ['To deliver excellence at every touchpoint, creating value not just through our products but through the experience we provide to our clients.', 'It comes down to four commitments, set out below.'] },
];

interface Body { el: HTMLElement; rz: number; vz: number; rx: number; vx: number; k: number; c: number; card: boolean }
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const GOLD_TXT = 'bg-gradient-to-r from-[#e8cd8a] to-[#b58f3d] bg-clip-text text-transparent';

/** About page: "Our journey" milestones + "Vision / Mission" cards that swing like hanging signboards (spring physics). */
export default function HangingSignboards() {
  const root = useRef<HTMLElement>(null);
  const bodies = useRef<Body[]>([]);
  const kickRef = useRef<() => void>(() => {});

  useEffect(() => {
    const section = root.current!;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mk = (sel: string, k: number, c: number, card: boolean): Body[] =>
      Array.from(section.querySelectorAll<HTMLElement>(sel)).map((el) => ({ el, rz: 0, vz: 0, rx: 0, vx: 0, k, c, card }));
    const list = [...mk('[data-hang]', 0.006, 0.011, true), ...mk('[data-swing]', 0.009, 0.014, false)];
    bodies.current = list;

    const kick = () => list.forEach((b, i) => { b.vz += (i % 2 ? 1 : -1) * (b.card ? 1 : 0.7); b.vx += b.card ? 0.35 : 0; });
    kickRef.current = () => { if (!reduce) kick(); };

    let lx = 0, ly = 0, vis = false;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const dx = e.clientX - lx, dy = e.clientY - ly;
      lx = e.clientX; ly = e.clientY;
      if (reduce) return;
      list.forEach((b) => {
        const r = b.el.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        const reach = r.width * 0.8;
        if (d < reach) { const f = 1 - d / reach; b.vz += clamp(dx, -40, 40) * f * 0.012; b.vx += -clamp(dy, -40, 40) * f * 0.008; }
      });
    };
    section.addEventListener('pointermove', onMove);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!vis) return;
      list.forEach((b) => {
        b.vz += -b.k * b.rz - b.c * b.vz; b.rz += b.vz;
        b.vx += -b.k * 1.3 * b.rx - b.c * b.vx; b.rx += b.vx;
        b.el.style.transform = `perspective(1000px) rotateZ(${b.rz.toFixed(3)}deg) rotateX(${b.rx.toFixed(3)}deg)`;
      });
    };
    raf = requestAnimationFrame(loop);

    let timer = 0, kicked = false;
    const io = new IntersectionObserver(([e]) => {
      vis = e.isIntersecting;
      if (e.intersectionRatio >= 0.25 && !kicked) { kicked = true; if (!reduce) timer = window.setTimeout(kick, 350); }
      else if (!vis) { kicked = false; clearTimeout(timer); } // swing again next time it comes into view
    }, { threshold: [0, 0.25] });
    io.observe(section);

    return () => { cancelAnimationFrame(raf); clearTimeout(timer); io.disconnect(); section.removeEventListener('pointermove', onMove); };
  }, []);

  return (
    <section ref={root} aria-label="Our journey, vision and mission" className="overflow-x-clip">
      {/* ───── Our journey ───── */}
      <div className="bg-[#101010] px-[6%] sm:px-[8%] pt-14 sm:pt-16 pb-12 sm:pb-14">
        <h2 className="font-serif font-semibold text-[clamp(36px,4.2vw,52px)] leading-[1.1] text-white">Our journey</h2>
        <div className="my-2 h-px w-[70px] bg-gradient-to-r from-[#d4af5f] to-transparent" />

        <div className="relative max-w-[640px] pl-7">
          <div className="absolute left-0.5 top-2 bottom-1.5 w-px opacity-70 bg-gradient-to-b from-[#d4af5f] via-[#d9c9a0] to-[#d9c9a0]/90" />
          {MILESTONES.map((m) => (
            <div key={m.y} data-swing className="relative mb-8 sm:mb-[34px] will-change-transform [transform-origin:-24px_17px]">
              <span className="absolute -left-[31px] top-[11px] h-[11px] w-[11px] rotate-45 bg-gradient-to-br from-[#f6e3a8] to-[#a9812f]" />
              <div className={`inline-block font-serif font-medium text-[clamp(28px,3vw,36px)] leading-[1.2] ${GOLD_TXT}`}>{m.y}</div>
              <h4 className="mt-0.5 mb-1 font-serif font-semibold text-[clamp(18px,1.8vw,22px)] leading-[1.3] text-[#dcc17a]">{m.t}</h4>
              <p className="max-w-[520px] text-[clamp(13px,1.15vw,14px)] leading-[1.7] text-[#8f8b82]">{m.d}</p>
            </div>
          ))}
          <p className="mt-10 text-[11px] text-[#5f5b53]">More milestones will be added after company confirmation.</p>
        </div>
      </div>

      {/* ───── Vision & Mission signboards ───── */}
      <div className="bg-[#1e1e1e] px-[6%] sm:px-[8%] pt-[70px] pb-14 sm:pb-16">
        <div className="relative flex flex-wrap gap-6">
          <div className="pointer-events-none absolute -left-[3%] -right-[3%] -top-1.5 z-[3] h-[9px] rounded-[5px] bg-gradient-to-b from-[#f6e3a8] via-[#b58f3d] to-[#5d4512] shadow-[0_8px_14px_rgba(0,0,0,.5)]" />
          {CARDS.map((c) => (
            <div key={c.t} data-hang className="relative w-full sm:basis-[320px] sm:flex-1 sm:max-w-[440px] pt-[58px] will-change-transform [transform-origin:50%_0]">
              <i className="absolute left-[16%] top-0.5 h-[60px] w-0.5 [background:repeating-linear-gradient(#d9b95f_0_4px,#5d4512_4px_6px)]" />
              <i className="absolute right-[16%] top-0.5 h-[60px] w-0.5 [background:repeating-linear-gradient(#d9b95f_0_4px,#5d4512_4px_6px)]" />
              <div className="border border-[#d4af5f]/40 px-5 sm:px-[26px] pt-[30px] pb-[22px] bg-gradient-to-br from-[#2a2a28] to-[#151514] shadow-[0_24px_40px_rgba(0,0,0,.45)]">
                <span className="mb-[22px] ml-2.5 mt-2 block h-4 w-4 rotate-45 bg-gradient-to-br from-[#f6e3a8] to-[#a9812f]" />
                <h3 className="mb-2.5 font-serif font-semibold text-[clamp(26px,2.4vw,30px)] leading-[1.2] text-[#dcc17a]">{c.t}</h3>
                {c.p.map((t) => <p key={t} className="mb-3 text-[clamp(13px,1.15vw,14px)] leading-[1.75] text-[#8f8b82]">{t}</p>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
