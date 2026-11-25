import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import Backdrop, { type Variant } from './Backdrop';
import { Panel, PANEL_FX } from './Card3D';
import { useHeroFade, useInView, useScrollFrame, useScrub } from '../hooks/useScroll';
import { MARQUEE } from '../data/content';

/** Scroll-triggered reveal. `from` picks the entry direction. */
export function Reveal({ children, from = 'up', delay = 0, className = '' }: { children: ReactNode; from?: 'up' | 'left' | 'right' | 'zoom'; delay?: number; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return <div ref={ref} data-from={from} data-in={seen} style={style} className={`rv ${className}`}>{children}</div>;
}

/** Gold hairline that draws itself on scroll. */
export function Rule({ className = '' }: { className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.5);
  return <div ref={ref} data-in={seen} className={`rule ${className}`} />;
}

/** Number that counts up when scrolled into view. */
export function Counter({ to, suffix = '', plain }: { to: number; suffix?: string; plain?: string }) {
  const [ref, seen] = useInView<HTMLElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (plain) return;
    if (!seen) { setN(0); return; }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }
    const t0 = performance.now(), dur = 1400;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, plain]);
  return <b ref={ref} className="gold font-serif text-4xl sm:text-5xl lg:text-6xl block leading-none">{plain ?? `${n}${suffix}`}</b>;
}

/** Thin gold progress bar fixed to the top of the screen. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useScrollFrame((y) => {
    const h = document.documentElement.scrollHeight - innerHeight;
    setP(h > 0 ? y / h : 0);
  });
  return <div aria-hidden className="fixed top-0 left-0 h-[2px] z-[60] bg-gradient-to-r from-[#8d6c2a] via-gd to-cg origin-left" style={{ transform: `scaleX(${p})`, width: '100%' }} />;
}

interface HeadProps { v: Variant; title: string; text: string; children?: ReactNode; eyebrow?: string; tall?: boolean }
/** First section of every page. The 3D backdrop is rendered here and stays fixed behind the content. */
export function Head({ v, title, text, children, eyebrow, tall }: HeadProps) {
  const fade = useHeroFade<HTMLDivElement>();
  return (
    <header className={`relative overflow-hidden px-[5vw] pt-32 pb-12 sm:pt-40 sm:pb-16 flex items-center ${tall ? 'min-h-screen' : 'min-h-[60vh]'}`}>
      <Backdrop variant={v} />
      <div ref={fade} className="wrap w-full relative z-10 will-change-transform">
        {eyebrow && <p className="text-cg tracking-[.3em] text-xs uppercase mb-4 hero-in" style={{ animationDelay: '.1s' }}>{eyebrow}</p>}
        <h1 className="gold text-[clamp(38px,6.5vw,84px)] max-w-[900px] hero-in" style={{ animationDelay: '.2s' }}>{title}</h1>
        <p className="text-sg max-w-[560px] mt-5 hero-in" style={{ animationDelay: '.4s' }}>{text}</p>
        <div className="hero-in" style={{ animationDelay: '.6s' }}>{children}</div>
      </div>
    </header>
  );
}

export function Section({ children, alt = false, center = false, id, className = '' }: { children: ReactNode; alt?: boolean; center?: boolean; id?: string; className?: string }) {
  return (
    <section id={id} className={`sec ${alt ? 'alt' : ''} ${center ? 'text-center' : ''} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Title({ children, lead, center, gold }: { children: ReactNode; lead?: string; center?: boolean; gold?: boolean }) {
  return (
    <Reveal>
      <h2 className={`h2 ${gold ? 'gold' : ''}`}>{children}</h2>
      <Rule className={center ? 'mx-auto' : ''} />
      {lead && <p className={`lead mt-5 ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </Reveal>
  );
}

export function Info({ t, d, i }: { t: string; d?: string; i: number }) {
  return (
    <Panel fx={PANEL_FX[i % 4]} delay={i} className="card h-full">
      <span className="ico" />
      <h3>{t}</h3>
      {d && <p>{d}</p>}
    </Panel>
  );
}

export function Grid({ items, cols = 4 }: { items: Array<[string, string?]>; cols?: 3 | 4 }) {
  return (
    <div className={`grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} [perspective:1200px]`}>
      {items.map(([t, d], i) => (
        <Reveal key={t} delay={i * 90} from="zoom" className="h-full"><Info t={t} d={d} i={i} /></Reveal>
      ))}
    </div>
  );
}

export function Cta({ title, text, href = '#contact', label, second }: { title: string; text: string; href?: string; label: string; second?: [string, string] }) {
  return (
    <Section center>
      <Reveal>
        <h2 className="h2 gold">{title}</h2>
        <p className="lead mx-auto">{text}</p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a className="btn-fill" href={href}>{label}</a>
          {second && <a className="btn" href={second[1]}>{second[0]}</a>}
        </div>
      </Reveal>
    </Section>
  );
}

export function Marquee() {
  const m = MARQUEE.map((s) => `✔ ${s}`);
  return (
    <div className="overflow-hidden border-y border-gd/30 py-4 bg-bk/70" aria-hidden>
      <div className="flex gap-14 w-max text-cg font-serif font-semibold text-xl whitespace-nowrap animate-[mq_34s_linear_infinite]">
        {[...m, ...m, ...m, ...m].map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  );
}

/** Big outlined words that slide sideways as you scroll past them. */
export function ScrubBand({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  const ref = useScrub<HTMLDivElement>('pass');
  const text = [...words, ...words].join('  ·  ');
  return (
    <div ref={ref} className="overflow-hidden py-6 sm:py-10 border-y border-gd/15 bg-bk/60" aria-hidden>
      <div className="scrub-band font-serif font-semibold whitespace-nowrap text-[clamp(44px,10vw,140px)] leading-none" style={{ ['--dir' as string]: reverse ? -1 : 1 } as CSSProperties}>{text}</div>
    </div>
  );
}
