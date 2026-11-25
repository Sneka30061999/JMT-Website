import type { CSSProperties } from 'react';
import { Cta, Counter, Marquee, Reveal, Section, Title } from '../components/ui';
import HeroDomino from '../components/HeroDomino';
import WhyChooseUs from '../components/WhyChooseUs';
import CollectionsShowcase from '../components/CollectionsShowcase';
import SourcingFold from '../components/SourcingFold';
import LegacyProjects from '../components/LegacyProjects';
import LegacySection from '../components/LegacySection';
import { ClientGrid, TrustTree } from '../components/Blocks';
import { STATS } from '../data/content';
import { categories } from '../data/stones';

/** Rotating 3D ring of stone cards. Hover (or touch) pauses it. */
function OfferRing() {
  return (
    <div className="offer-ring" aria-label="Stone categories">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="ringvein">
          <feTurbulence type="fractalNoise" baseFrequency=".012 .05" numOctaves="4" seed="7" result="n" />
          <feColorMatrix in="n" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -2.2 1.35" result="v" />
          <feComposite in="v" in2="SourceGraphic" operator="in" result="m" />
          <feBlend in="SourceGraphic" in2="m" mode="soft-light" />
        </filter>
      </svg>
      <div className="rg">
        {categories.map((c, i) => (
          <a key={c.title} href={`#collection/${encodeURIComponent(c.title)}`} className="ri" style={{ '--i': i } as CSSProperties}>
            <span className="absolute inset-0" style={{ background: c.bg, filter: 'url(#ringvein)' }} />
            <span className="absolute inset-0 bg-gradient-to-t from-bk/90 to-transparent" />
            <span className="relative z-10 text-left">
              <h3 className="text-2xl sm:text-3xl">{c.title}</h3>
              <p className="text-cg text-[13px] mt-1">{c.blurb}</p>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroDomino />

      <div id="scroll-start" className="grid grid-cols-2 lg:grid-cols-4 border-y border-gd/30 bg-bk/70 text-center">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="py-8 sm:py-10 px-3 border-r border-gd/15 last:border-r-0">
            <Counter to={s.to} suffix={s.suffix} plain={s.plain} />
            <span className="text-sg text-sm">{s.label}</span>
          </Reveal>
        ))}
      </div>


      <LegacySection />

      <CollectionsShowcase />

      <Section center>
        <Title center>What we offer</Title>
        <Reveal from="zoom"><OfferRing /></Reveal>
        <a className="btn-fill" href="#collection">View the collection</a>
      </Section>

      <Marquee />

      <WhyChooseUs />

      <Section center>
        <Reveal><TrustTree /></Reveal>
        <Title center lead="Built on trust. Strengthened by relationships.">Trusted partners</Title>
        <ClientGrid limit={9} />
        <Reveal><a className="btn mt-10" href="#clients">See all our customers</a></Reveal>
        <p className="text-sg/70 text-xs mt-6 max-w-xl mx-auto">Names and logos are shown as customers who have purchased from us; they do not imply formal partnership or endorsement.</p>
      </Section>

      <LegacyProjects />

      <SourcingFold />

      <Cta title="Looking for the perfect stone for your project?" text="Tell us what you are looking for. Our team will help you explore suitable options and provide pricing based on your requirements." label="Request pricing" second={['Contact our team', '#contact']} />
    </>
  );
}
