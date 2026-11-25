import { useEffect, useRef } from 'react';

const PARAS = [
  'Joys Marbles and Granites is more than just a supplier. It is a legacy brand built on trust, craftsmanship and an unwavering commitment to quality. Established in 1998, we have spent over two decades mastering the art and science of natural stone distribution, becoming a reliable partner for builders, architects, interior designers and homeowners alike.',
  'From humble beginnings, we have grown into a recognized name in the marble and granite industry by consistently delivering materials that meet the highest standards of durability and visual appeal. Our expertise lies in understanding not just the stone, but the vision behind every project, whether it is a luxury residence, a commercial complex or a large-scale infrastructure development.',
  'Our portfolio includes a wide variety of premium marbles, high-strength granites and durable Kota stones sourced from trusted quarries. Each slab is carefully selected to align with modern design trends while maintaining timeless elegance. We don’t just supply stone. We help shape spaces that stand the test of time.',
];

const ROLLER =
  'relative z-[2] h-8 rounded-2xl bg-gradient-to-b from-[#f6e3a8] from-0% via-[#d2ad5a] via-20% to-[#3a2c0c] shadow-[0_12px_20px_rgba(0,0,0,.6),inset_0_2px_0_rgba(255,255,255,.4)] ' +
  // gold end caps
  "before:absolute before:-left-[7px] before:-top-[5px] before:h-[42px] before:w-3.5 before:rounded-[7px] before:bg-gradient-to-b before:from-[#f0d894] before:via-[#8a6a22] before:to-[#3a2c0c] before:content-[''] " +
  "after:absolute after:-right-[7px] after:-top-[5px] after:h-[42px] after:w-3.5 after:rounded-[7px] after:bg-gradient-to-b after:from-[#f0d894] after:via-[#8a6a22] after:to-[#3a2c0c] after:content-['']";

/** About page "Who we are": a gold scroll that unrolls when it scrolls into view (with replay). */
export default function WhoScroll() {
  const section = useRef<HTMLElement>(null);
  const paper = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);
  const timers = useRef<number[]>([]);
  const reduce = useRef(false);

  const open = () => {
    const p = paper.current; if (!p) return;
    isOpen.current = true;
    p.style.height = p.scrollHeight + 'px';
    if (reduce.current) p.style.height = 'auto';
  };
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };

  useEffect(() => {
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let shown = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio >= 0.35 && !shown) { shown = true; later(open, reduce.current ? 0 : 350); }
      else if (!e.isIntersecting && shown) {
        // roll the scroll back up (instantly, off-screen) so it unrolls again next visit
        shown = false; isOpen.current = false;
        timers.current.forEach(clearTimeout); timers.current = [];
        const p = paper.current;
        if (p) { p.style.transition = 'none'; p.style.height = '0px'; void p.offsetHeight; p.style.transition = ''; }
      }
    }, { threshold: [0, 0.35] });
    io.observe(section.current!);
    return () => { io.disconnect(); timers.current.forEach(clearTimeout); };
  }, []);

  return (
    <section ref={section} id="who" aria-labelledby="ws-title" className="bg-[#1e1e1e] px-[18px] py-[60px] sm:px-[7%] sm:py-[90px]">
      <div className="mx-auto max-w-[980px] [perspective:1500px]">
        <div className="[transform-origin:50%_0] [transform:rotateX(6deg)]">
          <div className={ROLLER} />

          <div
            ref={paper}
            onTransitionEnd={(e) => { if (e.propertyName === 'height' && isOpen.current && paper.current) paper.current.style.height = 'auto'; }}
            className="mx-3 sm:mx-4 -my-1 h-0 overflow-hidden border-x border-[#d4af5f]/25 bg-[#222221] [background-image:linear-gradient(90deg,rgba(0,0,0,.45),transparent_5%,transparent_95%,rgba(0,0,0,.45))] transition-[height] duration-[3200ms] ease-[cubic-bezier(.45,0,.2,1)] motion-reduce:transition-none"
          >
            <div className="px-[22px] pb-2.5 pt-[26px] sm:px-11 sm:pb-3.5 sm:pt-[38px]">
              <h2 id="ws-title" className="font-serif font-semibold text-[clamp(40px,6vw,76px)] leading-[1.04] text-white">Who we are</h2>
              <div className="my-4 mb-5 h-px w-[170px] bg-gradient-to-r from-white/40 to-transparent" />
              {PARAS.map((t) => (
                <p key={t} className="mb-[22px] text-[clamp(15px,1.45vw,18.5px)] leading-[1.85] text-[#a9a59b] last:mb-2.5">{t}</p>
              ))}
            </div>
          </div>

          <div className={ROLLER} />
        </div>
      </div>

    </section>
  );
}
