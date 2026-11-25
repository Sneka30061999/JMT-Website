import { Flip, FLIP_FX } from './Card3D';
import { Reveal, Rule } from './ui';
import { useInView, useParallax } from '../hooks/useScroll';
import { clients, projects, type Client, type Project } from '../data/clients';
import { categories } from '../data/stones';

/** Project image with stone-tint fallback; parallax only when a real photo exists. */
function ProjImg({ p }: { p: Project }) {
  const par = useParallax<HTMLDivElement>(0.06);
  return (
    <div ref={par} className="absolute -inset-[8%]" style={{ background: `linear-gradient(160deg,${p.tint},#141414)` }}>
      {p.img && <img src={p.img} alt={`${p.name}, ${p.city}`} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} className="w-full h-full object-cover" />}
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.slice(0, limit).map((p, i) => (
        <Reveal key={p.name} delay={(i % 3) * 110}>
          <Flip
            index={i}
            fx={FLIP_FX[(i + 1) % 4]}
            className="aspect-[4/3] w-full"
            front={
              <>
                <ProjImg p={p} />
                <div className="absolute inset-0 bg-gradient-to-t from-bk/90 via-bk/10 to-transparent" />
                <div className="absolute bottom-0 p-4 sm:p-5">
                  <h3 className="text-2xl sm:text-3xl">{p.name}</h3>
                  <small className="text-cg">{p.kind} · {p.city}</small>
                </div>
              </>
            }
            back={
              <div className="h-full flex flex-col justify-center gap-2 p-5 sm:p-6">
                <h3 className="text-2xl text-cg">{p.name}</h3>
                <p className="text-sg text-sm">{p.kind}, {p.city}. Natural stone supplied through {p.via}.</p>
                <a href="#contact" className="btn self-start !px-4 !py-2 !text-xs mt-1" onClick={(e) => e.stopPropagation()}>Discuss your project</a>
              </div>
            }
          />
        </Reveal>
      ))}
    </div>
  );
}

function ClientFace({ c }: { c: Client }) {
  return c.logo ? (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: c.bg }}>
      <img src={c.logo} alt={c.name} loading="lazy" className="w-full h-full object-contain" />
    </div>
  ) : (
    <div className="absolute inset-0 grid place-items-center p-3 text-center bg-gradient-to-br from-[#2a2a2a] to-[#151515]">
      <span className="font-serif font-semibold text-cg text-base sm:text-lg leading-snug">{c.name}</span>
    </div>
  );
}

export function ClientGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {clients.slice(0, limit).map((c, i) => (
        <Reveal key={c.name} delay={(i % 5) * 70} from="zoom">
          <Flip
            index={i}
            fx={FLIP_FX[i % 4]}
            className="aspect-[3/2]"
            front={<ClientFace c={c} />}
            back={<div className="h-full grid place-items-center p-3 text-center"><span className="font-serif font-semibold text-cg text-base sm:text-lg leading-snug">{c.name}</span></div>}
          />
        </Reveal>
      ))}
      <Reveal delay={200}><div className="aspect-[3/2] grid place-items-center border border-dashed border-gd/40 text-sg font-serif text-lg">and many more</div></Reveal>
    </div>
  );
}

/** Subtle tree drawn in gold line that animates in: roots of long relationships. */
export function TrustTree() {
  const [ref, seen] = useInView<SVGSVGElement>(0.3);
  return (
    <svg ref={ref} data-in={seen} className="tree mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 120 120" fill="none" stroke="#C5A052" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <path d="M60 112 V58" />
      <path d="M60 86 C48 80 40 72 34 62" /><path d="M60 78 C72 72 80 64 86 54" />
      <path d="M60 64 C52 56 48 46 46 34" /><path d="M60 58 C68 50 72 40 74 30" />
      <path d="M60 58 V22" />
      <circle cx="34" cy="60" r="4" /><circle cx="86" cy="52" r="4" /><circle cx="46" cy="32" r="4" /><circle cx="74" cy="28" r="4" /><circle cx="60" cy="20" r="4" />
      <path d="M40 112 H80" />
    </svg>
  );
}

export function CategoryCards() {
  return (
    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
      {categories.map((c, i) => (
        <Reveal key={c.title} delay={i * 100} from="up" className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
          <a href={`#collection/${encodeURIComponent(c.title)}`} className="group relative block overflow-hidden border border-gd/30 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[320px]">
            <span className="zoom-img absolute inset-0" style={{ background: c.bg }} />
            <span className="absolute inset-0 bg-gradient-to-t from-bk/90 via-bk/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-3xl sm:text-4xl">{c.title}</h3>
              <p className="text-cg text-sm mt-1">{c.blurb}</p>
              <span className="inline-block mt-3 text-xs tracking-[.2em] uppercase text-wh border-b border-gd pb-0.5 transition group-hover:tracking-[.3em]">Explore collection</span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export { Rule };
