import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { projects } from '../data/clients';

const N = projects.length;
const ANGLE = 360 / N;                          // 60° for six projects
const FACTOR = 1 / (2 * Math.tan(Math.PI / N)); // radius = panel height × FACTOR
const AUTO_MS = 3400;
type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Projects page "Crafted spaces": a vertical 3D drum that turns through the projects (auto, click, dashes). */
export default function ProjectDrum() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduce = useRef(typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.3 });
    io.observe(root.current!);
    return () => io.disconnect();
  }, []);

  // auto-turn; the effect restarts whenever the step changes, so a manual turn resets the timer
  useEffect(() => {
    if (reduce.current || paused || !onScreen) return;
    const t = setTimeout(() => setStep((s) => s + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [step, paused, onScreen]);

  const cur = ((step % N) + N) % N;
  const vars: Vars = { '--f': FACTOR, '--r': 'calc(var(--h) * var(--f))', '--a': `${ANGLE}deg` };

  return (
    <div ref={root}>
      <div
        role="region" aria-roledescription="carousel" aria-label="Projects"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
        style={{ ...vars, WebkitMaskImage: 'linear-gradient(transparent,#000 22%,#000 78%,transparent)', maskImage: 'linear-gradient(transparent,#000 22%,#000 78%,transparent)' }}
        className="relative mx-auto flex h-[360px] items-center justify-center [--h:118px] [perspective:1500px] sm:h-[420px] sm:[--h:135px] lg:h-[460px] lg:[--h:150px]"
      >
        <div
          className="relative h-[var(--h)] w-[min(700px,100%)] [transform-style:preserve-3d] transition-transform duration-[1100ms] ease-[cubic-bezier(.3,.7,.2,1)] motion-reduce:duration-[10ms]"
          style={{ transform: `translateZ(calc(var(--r) * -1)) rotateX(${step * ANGLE}deg)` }}
        >
          {projects.map((p, k) => (
            <button
              key={p.name} type="button" onClick={() => setStep((s) => s + 1)}
              aria-label={`${p.name} — show next project`} aria-hidden={k !== cur}
              style={{ transform: `rotateX(${-k * ANGLE}deg) translateZ(var(--r))`, backgroundImage: p.img ? `linear-gradient(90deg,rgba(28,28,28,.88),rgba(28,28,28,.6)),url(${p.img})` : `linear-gradient(90deg,${p.tint}55,#2d2d2d 35%,#1c1c1c)`, backgroundSize: 'cover' }}
              className="absolute inset-0 flex cursor-pointer items-center gap-3.5 border-y border-[#d6b25e]/35 px-[18px] text-left [backface-visibility:hidden] sm:gap-7 sm:px-10"
            >
              <span className="relative block h-[50px] w-[50px] flex-none">
                <span className="absolute inset-2 rotate-45 bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0] shadow-[0_0_18px_rgba(214,178,94,.25)]" />
                <span className="absolute inset-2 translate-y-2.5 rotate-45 bg-[#d6b25e]/30" />
              </span>
              <span className="block min-w-0">
                <h3 className="mb-1.5 font-serif text-[clamp(22px,3vw,36px)] font-medium leading-[1.1] text-[#e6cf9a]">{p.name}</h3>
                <span className="block text-xs leading-[1.4] text-[#b9b3a6] sm:text-base sm:leading-[1.6]">{p.kind} · {p.city}</span>
                <span className="block text-[11px] leading-[1.4] text-[#9a9a9a] sm:text-sm">Natural stone supplied through {p.via}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-1.5 flex justify-center gap-3" role="group" aria-label="Choose project">
        {projects.map((p, i) => (
          <button
            key={p.name} type="button" aria-label={p.name} aria-current={i === cur}
            onClick={() => setStep((s) => s + ((i - (((s % N) + N) % N) + N) % N))}
            className={`h-[3px] w-6 transition-colors duration-[400ms] sm:w-[34px] ${i === cur ? 'bg-[#d6b25e]' : 'bg-[#333] hover:bg-[#555]'}`}
          />
        ))}
      </div>
    </div>
  );
}
