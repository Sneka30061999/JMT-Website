import { useEffect, useRef, useState } from 'react';
import { columnTexture } from '../lib/marbleTex';
import { SITE, waLink } from '../data/site';
import { categories } from '../data/stones';

const EXPLORE: Array<[string, string]> = [['about', 'About Us'], ['collection', 'Our Collection'], ['projects', 'Projects'], ['clients', 'Trusted By'], ['industries', 'Industries'], ['sourcing', 'Sourcing'], ['faq', 'FAQs']];

const N = 22, SW = 14, H = 212;                  // strips, strip width, column height
const R = SW / (2 * Math.tan(Math.PI / N));       // radius so the strips meet edge to edge
const HEAD = 'mb-5 text-[13px] font-normal uppercase tracking-[.3em] text-[#c9a24f] sm:mb-[22px] sm:text-[15px]';
const LINK = 'block py-2 text-base text-[#a9a9a9] transition-colors duration-300 hover:text-[#f0dba0] sm:py-[9px] sm:text-[19px]';

/** Rotating 3D marble column built from vertical strips, lit per strip. */
function MarbleColumn({ footer }: { footer: React.RefObject<HTMLElement> }) {
  const cyl = useRef<HTMLDivElement>(null);
  const shades = useRef<Array<HTMLElement | null>>([]);
  const [tex, setTex] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setTex(columnTexture()), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const ft = footer.current!;
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let target = 0, nudge = 0, visible = false, raf = 0;
    const start = performance.now();
    const onMove = (e: PointerEvent) => { if (e.pointerType !== 'mouse') return; const b = ft.getBoundingClientRect(); target = ((e.clientX - b.left) / b.width - 0.5) * 60; };
    const onLeave = () => { target = 0; };
    ft.addEventListener('pointermove', onMove); ft.addEventListener('pointerleave', onLeave);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: '120px' });
    io.observe(ft);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      nudge += (target - nudge) * 0.06;
      const rot = (rm ? 0 : ((now - start) / 1000) * 34) + nudge;   // 34° per second
      if (cyl.current) cyl.current.style.transform = `rotateX(-10deg) rotateY(${rot}deg)`;
      shades.current.forEach((el, i) => {
        if (!el) return;
        const c = Math.cos(((i * 360) / N + rot) * Math.PI / 180);     // 1 = facing you
        el.style.opacity = c > 0 ? (1 - (0.2 + 0.8 * c)).toFixed(2) : '1';
      });
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); ft.removeEventListener('pointermove', onMove); ft.removeEventListener('pointerleave', onLeave); };
  }, [footer]);

  return (
    <div className="relative h-[250px] w-[130px] flex-none [perspective:800px]" aria-hidden>
      <div ref={cyl} className="absolute left-1/2 top-3.5 h-0 w-0 [transform-style:preserve-3d]">
        {Array.from({ length: N }, (_, i) => {
          const a = (i * 360) / N;
          return (
            <div key={i}>
              <div
                className="absolute top-0 bg-no-repeat [backface-visibility:hidden]"
                style={{ width: SW + 0.6, height: H, left: -SW / 2, backgroundColor: '#cfccc6', backgroundImage: tex ? `url(${tex})` : undefined, backgroundSize: `${N * SW}px ${H}px`, backgroundPosition: `${-i * SW}px 0`, transform: `rotateY(${a}deg) translateZ(${R}px)` }}
              ><i ref={(el) => { shades.current[i] = el; }} className="absolute inset-0 bg-[#05050a]" style={{ opacity: 0.6 }} /></div>
              {[-6, H - 6].map((top) => (
                <div key={top} className="absolute bg-gradient-to-b from-[#f0dba0] via-[#9c7a33] via-50% to-[#d6b25e] [backface-visibility:hidden]"
                  style={{ width: SW + 0.6, height: 12, left: -SW / 2, top, transform: `rotateY(${a}deg) translateZ(${R + 4}px)` }} />
              ))}
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-2 bottom-0 h-[22px] [background:radial-gradient(ellipse_at_center,rgba(214,178,94,.5),transparent_70%)]" />
    </div>
  );
}

/** Site footer with a rotating marble column beside the brand. */
export default function Footer({ sel }: { sel: string }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <footer ref={ref} className="relative z-10 overflow-hidden border-t border-[#4a3d1f] bg-[#101010] px-[6vw] pt-[54px] min-[900px]:pt-[74px]">
      <div className="grid gap-10 sm:grid-cols-2 min-[900px]:grid-cols-[1.05fr_1fr_1fr_1fr] min-[900px]:gap-11">
        <div>
          <div className="flex items-center gap-3.5">
            <MarbleColumn footer={ref as React.RefObject<HTMLElement>} />
            <div className="min-w-0">
              <b className="block font-serif text-2xl font-semibold leading-[1.1] text-white sm:text-[28px]">{SITE.name}</b>
              <p className="mt-3.5 max-w-[330px] text-[15px] leading-[1.6] text-[#a3a3a3] sm:text-base">Premium natural stone supplier since {SITE.founded}. {SITE.city}.</p>
            </div>
          </div>
        </div>

        <nav aria-label="Explore">
          <h4 className={HEAD}>Explore</h4>
          {EXPLORE.map(([k, l]) => <a key={k} className={LINK} href={`#${k}`}>{l}</a>)}
        </nav>

        <nav aria-label="Collections">
          <h4 className={HEAD}>Collections</h4>
          {categories.map((c) => <a key={c.title} className={LINK} href={`#collection/${encodeURIComponent(c.title)}`}>{c.title}</a>)}
        </nav>

        <div>
          <h4 className={HEAD}>Contact</h4>
          <p className={`${LINK} !text-[15px] sm:!text-[17px]`}>{SITE.address}</p>
          <a className={LINK} href={SITE.phoneHref}>{SITE.phone}</a>
          <a className={`${LINK} break-all`} href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a className={LINK} href={waLink(sel)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-between gap-x-5 gap-y-2 border-t border-[#272727] pb-7 pt-6 text-sm text-[#7c7c7c] sm:mt-[50px] sm:text-[17px]">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span className="flex gap-6 sm:gap-[30px]">
          <a className="transition-colors duration-300 hover:text-[#f0dba0]" href="#privacy">Privacy Policy</a>
          <a className="transition-colors duration-300 hover:text-[#f0dba0]" href="#terms">Terms &amp; Conditions</a>
        </span>
      </div>
    </footer>
  );
}
