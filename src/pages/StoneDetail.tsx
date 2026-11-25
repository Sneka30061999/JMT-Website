import { Cta, Head, Reveal, Section, Title } from '../components/ui';
import { Swatch } from '../components/Card3D';
import { waLink } from '../data/site';
import { APPLICATIONS, FINISHES, colorOf, colourOf2, findStone, slug, stones } from '../data/stones';

export default function StoneDetail({ id, onPick }: { id: string; onPick: (s: string) => void }) {
  const s = findStone(id);
  if (!s)
    return (
      <>
        <Head v="collection" title="Stone not found." text="This stone is not in the catalogue. Browse the full collection or ask us to source it." />
        <Cta title="Looking for something specific?" text="Share your requirement and we will source it." label="Contact our team" />
      </>
    );
  const related = stones.filter((r) => r.cat === s.cat && r.name !== s.name).slice(0, 4);
  const colour = colourOf2(s.name);
  const rows: Array<[string, string]> = [
    ['Category', s.cat],
    ...(colour ? ([['Colour', colour]] as Array<[string, string]>) : []),
    ['Finish', FINISHES.join(' / ')],
    ['Thickness & dimensions', 'Custom sizes and thickness available on request'],
    ['Recommended applications', APPLICATIONS[s.cat].join(', ')],
  ];
  return (
    <>
      <Head v="collection" eyebrow={s.cat} title={s.name} text={s.desc ?? `Natural ${s.cat.toLowerCase().replace(/s$/, '')} for architectural, residential and commercial applications.`}>
        <p className="mt-6"><a className="text-cg text-sm underline" href="#collection">← Back to collection</a></p>
      </Head>
      <Section alt>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <Reveal from="left">
            <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden border border-gd/40 shadow-[0_30px_80px_rgba(0,0,0,.6)]">
              <Swatch c={s.c ?? colorOf(s.name)} r={20} />
              <div className="absolute inset-0 bg-gradient-to-t from-bk/60 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs text-wh/80">Representative colour. Natural stone varies by slab; ask for samples.</span>
            </div>
          </Reveal>
          <Reveal from="right">
            <dl className="divide-y divide-gd/20 border-y border-gd/20">
              {rows.map(([k, v]) => (
                <div key={k} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 py-4"><dt className="text-cg text-sm tracking-wider uppercase">{k}</dt><dd className="text-sg">{v}</dd></div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <a className="btn-fill" href="#contact" onClick={() => onPick(s.name)}>REQUEST PRICING FOR THIS STONE</a>
              <a className="btn" href={waLink(s.name)} target="_blank" rel="noopener noreferrer">ENQUIRE ON WHATSAPP</a>
            </div>
            <p className="text-sg/70 text-xs mt-4">Availability and specifications are confirmed by our team when you enquire.</p>
          </Reveal>
        </div>
      </Section>
      {related.length > 0 && (
        <Section>
          <Title>Related stones</Title>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal key={r.name} delay={i * 90} from="zoom">
                <a href={`#stone/${slug(r.name)}`} className="group relative block aspect-[4/5] overflow-hidden border border-gd/30">
                  <span className="zoom-img absolute inset-0"><Swatch c={r.c ?? colorOf(r.name)} r={i * 53} /></span>
                  <span className="absolute inset-0 bg-gradient-to-t from-bk/90 to-transparent" />
                  <span className="absolute bottom-0 p-3 sm:p-4 text-lg sm:text-2xl font-serif font-semibold leading-tight">{r.name}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
