import { useEffect, useRef } from 'react';
import { CAPABILITIES } from '../data/content';

const CSS = `
.gs-tile span{opacity:0}
.gs-tile.gs-inked span{animation:gs-ink .55s cubic-bezier(.2,.9,.3,1) both}
@keyframes gs-ink{0%{opacity:0;transform:scale(1.45);filter:blur(7px)}100%{opacity:1;transform:none;filter:none}}
.gs-tile.gs-hit{animation:gs-press .55s ease-out}
@keyframes gs-press{0%{transform:none}22%{transform:perspective(700px) translateZ(-18px) rotateX(5deg) scale(.985)}100%{transform:none}}
.gs-tile.gs-hit::after{content:"";position:absolute;inset:0;border:2px solid rgba(240,216,148,.9);pointer-events:none;animation:gs-ring .7s ease-out forwards}
@keyframes gs-ring{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.1,1.5)}}
.gs-stamp.gs-on{opacity:1}
.gs-stamp.gs-dn i{transform:scale(1);box-shadow:3px 5px 8px rgba(0,0,0,.6)}
@media(prefers-reduced-motion:reduce){.gs-tile span{opacity:1}.gs-stamp{display:none}}
`;

/** About page "Our philosophy & capabilities": a gold stamp presses each tile in turn. */
export default function StampCapabilities() {
  const section = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const stamp = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const reduce = useRef(false);

  const resetStamp = () => {
    timers.current.forEach(clearTimeout); timers.current = [];
    stamp.current?.classList.remove('gs-on', 'gs-dn');
    grid.current?.querySelectorAll('.gs-tile').forEach((t) => t.classList.remove('gs-hit', 'gs-inked'));
  };

  const play = () => {
    const g = grid.current, s = stamp.current;
    if (!g || !s) return;
    const tiles = Array.from(g.querySelectorAll<HTMLElement>('.gs-tile'));
    const at = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };

    resetStamp();
    if (reduce.current) return;

    let t = 500;
    s.style.transition = 'none';
    s.style.transform = 'translate(-140px,-140px)'; // start off-screen, top-left
    void s.offsetWidth;
    s.style.transition = '';
    s.classList.add('gs-on');

    tiles.forEach((el) => {
      const cx = el.offsetLeft + el.offsetWidth / 2, cy = el.offsetTop + el.offsetHeight / 2;
      at(() => { s.classList.remove('gs-dn'); s.style.transform = `translate(${cx}px,${cy}px)`; }, t); // glide
      at(() => s.classList.add('gs-dn'), t + 640);                                                      // press
      at(() => el.classList.add('gs-hit', 'gs-inked'), t + 850);                                        // struck
      at(() => s.classList.remove('gs-dn'), t + 1020);                                                  // lift
      t += 1200;
    });
    at(() => { s.style.transform = `translate(${g.offsetWidth + 160}px,-140px)`; }, t + 150);           // exit
    at(() => s.classList.remove('gs-on'), t + 900);
  };

  useEffect(() => {
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tm = 0;
    let playing = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= 0.3 && !playing) { playing = true; tm = window.setTimeout(play, 350); }
      else if (!e.isIntersecting && playing) { playing = false; clearTimeout(tm); resetStamp(); } // stamp again on the next visit
    }, { threshold: [0, 0.3] });
    io.observe(section.current!);
    return () => { io.disconnect(); clearTimeout(tm); timers.current.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={section} aria-labelledby="gs-title" className="relative overflow-hidden bg-[#1d1d1d] px-6 pb-[46px] pt-[34px] sm:px-7 md:px-[52px] md:pb-[58px] md:pt-10">
      <style>{CSS}</style>
      <h2 id="gs-title" className="font-serif font-medium text-[clamp(34px,5.2vw,72px)] leading-[1.1] text-[#f4f1ea]">Our philosophy &amp; capabilities</h2>
      <div className="mt-2 h-0.5 w-[210px] max-w-[60%] bg-gradient-to-r from-[#d4af5f] to-transparent" />

      <div ref={grid} className="relative mt-2 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-[18px] min-[900px]:grid-cols-3 [perspective:900px]">
        {CAPABILITIES.map((c) => (
          <div key={c} className="gs-tile relative flex h-[88px] items-center border border-[#b8923c]/40 bg-[#1a1a19] px-6 sm:h-[104px] sm:px-[30px]">
            <span className="font-serif font-medium text-[clamp(19px,1.9vw,27px)] leading-[1.2] text-[#d8c38c]">{c}</span>
          </div>
        ))}
        {/* the gold stamp */}
        <div ref={stamp} aria-hidden className="gs-stamp pointer-events-none absolute left-0 top-0 z-[9] -ml-[50px] -mt-[50px] h-[100px] w-[100px] opacity-0 transition-[transform,opacity] duration-[600ms,400ms] ease-[cubic-bezier(.45,0,.2,1)]">
          <i className="relative block h-full w-full scale-[1.4] rounded-full border-[3px] border-[#f6e3a8] [background:radial-gradient(circle_at_35%_30%,#fff1b5,#d2ad5a_55%,#6b5014)] shadow-[22px_30px_30px_rgba(0,0,0,.55)] transition-[transform,box-shadow] duration-[220ms] ease-in after:absolute after:inset-[30px] after:rotate-45 after:border-[3px] after:border-[#5a430f]/80 after:content-['']" />
        </div>
      </div>

    </section>
  );
}
