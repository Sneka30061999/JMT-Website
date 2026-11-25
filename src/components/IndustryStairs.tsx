import { useEffect, useRef, useState } from 'react';
import { INDUSTRIES } from '../data/content';

const STEP_H = 124;  // depth of one step's top surface
const RISE = 48;     // how much each step rises above the previous one
const LIFT = 34;     // extra lift for the active step
const SCENE = 560;   // design size of the stairs rig (px)
const N = INDUSTRIES.length;
const COLORS: Array<[string, string]> = [['#4d3d22', '#1f1a10'], ['#3a404b', '#171a20'], ['#46423a', '#16140f'], ['#2f3f37', '#131a16']];
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/** Industries page: a 3D staircase; hovering / tapping / focusing a step lifts it and swaps the details beside it. */
export default function IndustryStairs() {
  const [on, setOn] = useState(0);
  const [scale, setScale] = useState(1);
  const box = useRef<HTMLDivElement>(null);

  // scale the fixed-size 3D rig to the room available (mobile / tablet / desktop)
  useEffect(() => {
    const el = box.current!;
    const fit = () => setScale(clamp(el.clientWidth / 640, 0.42, 1));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section aria-label="Industries we serve" className="overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,#1d1d1d,#101010_70%)] px-5 py-14 sm:px-[5vw] sm:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-6 min-[860px]:grid-cols-[.8fr_1.2fr] min-[860px]:gap-[30px]">
        {/* details — one block per step, stacked and cross-faded */}
        <div className="grid max-[859px]:order-2" aria-live="polite">
          {INDUSTRIES.map((s, i) => (
            <div
              key={s.title}
              aria-hidden={on !== i}
              className={`[grid-area:1/1] transition-[opacity,transform] duration-[600ms,800ms] ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none ${on === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3.5 opacity-0'}`}
            >
              <h2 className="mb-1.5 font-serif text-[clamp(32px,4vw,48px)] font-medium leading-[1.08] text-[#c49a45]">{s.title}</h2>
              <ul className="mb-7 mt-[18px] grid gap-x-[30px] gap-y-2.5 text-[15px] text-[#a8a8a8] sm:grid-cols-2">
                {s.items.map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="h-[7px] w-[7px] flex-none rotate-45 bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0]" />{t}
                  </li>
                ))}
              </ul>
              <a href="#contact" tabIndex={on === i ? 0 : -1} className="btn-fill">Discuss your project</a>
            </div>
          ))}
        </div>

        {/* the staircase */}
        <div ref={box} className="relative w-full [perspective:2400px]" style={{ height: SCENE * scale + 20 }}>
          <div className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]" style={{ width: SCENE, height: STEP_H * N, transform: `translate(-50%,-50%) scale(${scale})` }}>
            <div className="absolute inset-0 [transform-style:preserve-3d]" style={{ transform: 'rotateX(56deg) rotateZ(-34deg)' }}>
              {INDUSTRIES.map((s, i) => {
                const active = on === i;
                const [a, b] = COLORS[i % COLORS.length];
                return (
                  <div
                    key={s.title}
                    role="button" tabIndex={0} aria-pressed={active} aria-label={s.title}
                    onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onClick={() => setOn(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOn(i); } }}
                    className="absolute left-0 w-full cursor-pointer outline-none transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none"
                    style={{ height: STEP_H, top: (N - 1 - i) * STEP_H, transform: `translateZ(${(i + 1) * RISE + (active ? LIFT : 0)}px)` }}
                  >
                    <div
                      className={`absolute inset-0 flex items-center gap-[22px] border border-[#d6b25e]/40 px-8 transition-shadow duration-700 ${active ? 'shadow-[0_0_50px_rgba(214,178,94,.4)]' : ''}`}
                      style={{ background: `linear-gradient(90deg,${a},${b})` }}
                    >
                      <span className="font-serif text-[52px] font-semibold leading-none text-[#d6b25e]">{String(i + 1).padStart(2, '0')}</span>
                      <b className="font-serif text-[30px] font-medium leading-tight text-[#f0e2bb]">{s.title}</b>
                    </div>
                    {/* vertical face that makes the step look solid */}
                    <div className="absolute left-0 top-full w-full border border-[#6b5426] bg-gradient-to-b from-[#6b5426] to-[#2a2110] [transform-origin:50%_0] [transform:rotateX(-90deg)]" style={{ height: (i + 1) * RISE }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
