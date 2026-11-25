import { FINISHES } from '../data/stones';

interface DoorItem { title: string; text: string; kicker: string; reveal: string }

const ITEMS: DoorItem[] = [
  { title: 'Finishes', text: `${FINISHES.join(', ')} finish.`, kicker: FINISHES.join(' · '), reveal: `${FINISHES.length} finishes available` },
  { title: 'Customization options', text: 'Custom sizes and thickness, with polished, honed and textured finishes.', kicker: 'Made to your requirement', reveal: 'Cut to size' },
  { title: 'Bulk supply', text: 'Bulk supply for projects.', kicker: 'Residential · Commercial · Institutional', reveal: 'Project supply' },
];

const DOOR = 'absolute top-0 h-full w-1/2 overflow-hidden [backface-visibility:hidden] transition-transform duration-[1100ms] ease-[cubic-bezier(.65,.05,.2,1)] motion-reduce:duration-[10ms]';
const FACE = 'h-full w-[200%] border border-white/10 bg-gradient-to-br from-[#2b2b2b] to-[#1b1b1b] px-6 py-8 sm:px-[34px] sm:py-10';

function Face({ item }: { item: DoorItem }) {
  return (
    <>
      <span className="relative block h-[50px] w-[50px]">
        <span className="absolute inset-2 rotate-45 bg-gradient-to-br from-[#9c7a33] via-[#d6b25e] to-[#f0dba0] shadow-[0_0_18px_rgba(214,178,94,.25)]" />
        <span className="absolute inset-2 translate-y-2.5 rotate-45 bg-[#d6b25e]/30" />
      </span>
      <h3 className="mb-3 mt-6 font-serif text-[clamp(24px,2.2vw,30px)] font-medium leading-[1.1] text-[#e6cf9a]">{item.title}</h3>
      <p className="max-w-[300px] text-[15px] leading-[1.75] text-[#9a9a9a] sm:text-base">{item.text}</p>
    </>
  );
}

/** Product page "Available finishes & customization": cards whose double doors swing open on hover / focus / tap. */
export default function FinishDoors() {
  return (
    <section aria-labelledby="fd-title" className="overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,#161616,#0e0e0e_70%)] px-5 py-14 sm:px-[5vw] sm:py-20">
      <h2 id="fd-title" className="mx-auto mb-8 max-w-[1200px] font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-white sm:mb-11">
        Available finishes &amp; customization
      </h2>

      <div className="mx-auto grid max-w-[1200px] gap-5 min-[700px]:grid-cols-2 min-[700px]:gap-6 lg:grid-cols-3 lg:gap-8">
        {ITEMS.map((it, i) => (
          <article
            key={it.title}
            tabIndex={0}
            aria-label={`${it.title} — tap or hover to open`}
            className={`group relative h-[270px] outline-none [perspective:1400px] sm:h-[300px] focus-visible:ring-1 focus-visible:ring-[#d6b25e]/60 ${i === 2 ? 'min-[700px]:max-lg:col-span-2 min-[700px]:max-lg:mx-auto min-[700px]:max-lg:w-[calc(50%-12px)]' : ''}`}
          >
            {/* revealed behind the doors */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 border border-[#d6b25e]/50 p-[30px] text-center shadow-[inset_0_0_80px_rgba(240,219,160,.18)] [background:radial-gradient(ellipse_at_50%_50%,#6b5424_0%,#2c2412_55%,#171717_100%)]">
              <small className="text-[11px] uppercase tracking-[.16em] text-[#c9ac66]">{it.kicker}</small>
              <h3 className="font-serif text-[clamp(26px,2.4vw,30px)] font-medium text-[#f6e7bb]">{it.reveal}</h3>
              <a href="#contact" className="mt-2 border-b border-[#f0dba0] pb-[3px] text-[#f0dba0]">Request samples →</a>
            </div>

            <div className={`${DOOR} left-0 origin-left group-hover:[transform:rotateY(-105deg)] group-focus-within:[transform:rotateY(-105deg)]`}>
              <div className={FACE}><Face item={it} /></div>
            </div>
            <div className={`${DOOR} right-0 origin-right group-hover:[transform:rotateY(105deg)] group-focus-within:[transform:rotateY(105deg)]`}>
              <div className={`${FACE} -ml-[100%]`}><Face item={it} /></div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center sm:mt-12">
        <a className="btn-fill" href="#contact">Request samples or pricing</a>
      </p>
    </section>
  );
}
