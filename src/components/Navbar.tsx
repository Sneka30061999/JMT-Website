import { useState } from 'react';

/* gold extrusion for the logo: stacked 1px offsets get darker, then a soft drop shadow */
const COLS = ['#f0dba0', '#e6cf92', '#dcc485', '#d1b878', '#c6ac6c', '#bba060', '#b09555', '#a58a4b', '#9a7f41', '#8f7438', '#85692f', '#7a5f27'];
const extrude = (n: number) => COLS.slice(0, n).map((c, k) => `${k + 1}px ${k + 1}px 0 ${c}`).join(',') + `,${n + 3}px ${n + 6}px ${n * 2}px rgba(0,0,0,.55)`;
const E1 = extrude(4), E2 = extrude(12);

/** Text whose letters flip in 3D (staggered) when the parent `.group` is hovered / focused. */
function FlipText({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      {[...text].map((c, i) => (
        <span
          key={i} aria-hidden="true" style={{ transitionDelay: `${i * 32}ms` }}
          className="inline-block [transform-origin:50%_60%] transition-transform duration-700 ease-[cubic-bezier(.3,.7,.2,1)] group-hover:[transform:rotateX(360deg)_translateZ(16px)] group-focus-visible:[transform:rotateX(360deg)_translateZ(16px)] motion-reduce:transition-none"
        >{c === ' ' ? '\u00A0' : c}</span>
      ))}
    </>
  );
}

interface Props { links: Array<[string, string]>; active: string; stuck: boolean; sel: string; menuOpen?: boolean; onMenu?: () => void }

/** Site navbar: extruded 3D logo, letter-flip links, gold buttons, responsive menu. */
export default function Navbar({ links, active, stuck, menuOpen = false, onMenu }: Props) {
  const [hot, setHot] = useState(false); // logo hover / focus

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-[70] flex [transform:translateZ(0)] [backface-visibility:hidden] flex items-center justify-between gap-4 border-b px-[4vw] backdrop-blur-md transition-all duration-500 xl:gap-7 ${stuck ? 'border-gd/40 bg-bk/90' : 'border-gd/15 bg-bk/70'}`}
      style={{ height: `calc(${stuck ? 60 : 68}px + env(safe-area-inset-top, 0px))`, paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      {/* extruded 3D logo */}
      <a
        href="#home" aria-label="Joys Marbles & Granites — home"
        onMouseEnter={() => setHot(true)} onMouseLeave={() => setHot(false)} onFocus={() => setHot(true)} onBlur={() => setHot(false)}
        className="flex flex-none flex-col leading-none [perspective:700px]"
      >
        <b
          className="font-serif text-[30px] font-semibold text-[#f0dba0] transition-[transform,text-shadow] duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-origin:0_60%] motion-reduce:transition-none sm:text-[34px]"
          style={{ transform: hot ? 'rotateY(-24deg) rotateX(10deg)' : 'none', textShadow: hot ? E2 : E1 }}
        >Joys</b>
        <small className="mt-[3px] whitespace-nowrap text-[10px] uppercase tracking-[.3em] text-[#aaa] sm:text-[11.5px]">Marbles &amp; Granites</small>
      </a>

      {/* links: desktop only — mobile/tablet use the bottom DrumNav */}
      <ul
        className="hidden lg:flex lg:flex-row lg:gap-[13px] xl:gap-[20px] 2xl:gap-[34px]"
      >
        {links.map(([k, l]) => {
          const on = active === k;
          return (
            <li key={k} className="relative">
              <a
                href={`#${k}`} aria-current={on ? 'page' : undefined}
                className={`group inline-block whitespace-nowrap py-2.5 font-serif text-[22px] font-normal outline-none transition-colors duration-300 [perspective:500px] hover:text-[#f0dba0] focus-visible:text-[#f0dba0] lg:py-0 lg:text-[15px] xl:text-[17px] 2xl:text-[21px] ${on ? 'text-[#d6b25e]' : 'text-[#a3a3a3]'}`}
              >
                <FlipText text={l} />
              </a>
              {/* gold underline that grows from the centre */}
              <span className={`pointer-events-none absolute bottom-1.5 h-px bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0] transition-[width,left] duration-500 lg:-bottom-2.5 ${on ? 'left-0 w-full' : 'left-1/2 w-0'}`} />
            </li>
          );
        })}
      </ul>

      <div className="flex flex-none items-center gap-3 xl:gap-[22px]">
        <a
          href="#contact"
          className="relative hidden overflow-hidden whitespace-nowrap border border-[#e3c677] bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0] px-4 py-[10px] text-[12px] font-medium uppercase tracking-[.04em] text-[#1a1408] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(214,178,94,.7)] lg:inline-block xl:px-5 xl:text-[13px] 2xl:px-[26px] 2xl:text-[15px]"
        >Request a quote</a>
        {/* hamburger: opens the room-turn menu on mobile / tablet */}
        <button
          type="button" aria-label="Open menu" aria-expanded={menuOpen} onClick={onMenu}
          className="relative flex h-14 w-12 flex-col items-end justify-center gap-[6px] outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#e0c677] lg:hidden"
        >
          <i className="block h-[1.5px] w-[26px] bg-[#e0c677]" />
          <i className="block h-[1.5px] w-[18px] bg-[#e0c677]" />
          <i className="block h-[1.5px] w-[26px] bg-[#e0c677]" />
        </button>
      </div>
    </nav>
  );
}
