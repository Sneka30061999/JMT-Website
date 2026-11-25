import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { FAQS } from '../data/content';

const LABELS = ['Marble', 'Granite', 'Kota', 'Kadapa', 'Quartz'];
const pad = (i: number) => String(i + 1).padStart(2, '0');

/** FAQ "3D tile floor": pick a stone tile to raise it and read the answer. */
export default function FaqTiles() {
  const n = FAQS.length;
  const [cur, setCur] = useState(0);
  const go = (i: number) => setCur(((i % n) + n) % n);
  const [q, a] = FAQS[cur];

  // FAQPage structured data for search engines
  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.text = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQS.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
    });
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  return (
    <section aria-labelledby="faq-title" className="ft relative overflow-hidden bg-gradient-to-b from-[#faf7f1] to-[#e8e1d4] px-[clamp(16px,4vw,56px)] pb-[clamp(56px,7vw,110px)] pt-[clamp(110px,13vw,170px)] font-sans text-[#1e2b33]">
      <div aria-hidden className="ft-veins pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1280px]">
        <span className="text-xs font-bold uppercase tracking-[.3em] text-[#2c6e8f]">Joys Marbles &amp; Granites · Chennai · Since 1998</span>
        <h1 id="faq-title" className="mb-2.5 mt-3 font-serif text-[clamp(38px,5.4vw,70px)] font-normal leading-[1.03] text-[#1e2b33]">
          Step onto the <em className="text-[#2c6e8f]">tile floor</em>
        </h1>
        <p className="max-w-[560px] text-[#56636b]">Marble, granite, Kota, Kadapa and quartz — pick a tile to raise it and read the answer.</p>

        <div className="mt-5 grid items-center gap-[clamp(16px,3vw,50px)] min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* the floor */}
          <div
            aria-label="Question tiles"
            className="relative grid h-[clamp(300px,70vw,420px)] place-items-center [perspective-origin:50%_30%] [perspective:1800px] before:absolute before:left-1/2 before:top-[56%] before:h-1/2 before:w-[90%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[radial-gradient(closest-side,rgba(30,43,51,.22),transparent)] before:blur-[14px] before:content-[''] min-[900px]:h-[clamp(360px,46vw,540px)]"
          >
            <div className="relative grid grid-cols-[repeat(5,var(--t))] gap-[calc(var(--t)*.13)] [--t:clamp(44px,12.5vw,80px)] [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateZ(-38deg)] min-[900px]:[--t:clamp(52px,8.6vw,116px)]">
              {FAQS.map(([question], i) => {
                const on = i === cur;
                const k = `ft-k${i % 5}`;
                return (
                  <button
                    key={question} type="button" aria-label={`Question ${i + 1}: ${question}`} aria-pressed={on} onClick={() => go(i)}
                    className={`group relative h-[var(--t)] w-[var(--t)] cursor-pointer border-0 bg-transparent p-0 outline-none transition-transform duration-[550ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none ${on ? '[transform:translateZ(64px)]' : 'hover:[transform:translateZ(22px)]'}`}
                  >
                    {[1, 2, 3, 4, 5, 6].map((l) => (
                      <div key={l} aria-hidden className={`${k} absolute inset-0 rounded-[3px] [filter:brightness(.5)]`} style={{ transform: `translateZ(${-l * 3.2}px)` } as CSSProperties} />
                    ))}
                    <div
                      className={`${k} absolute inset-0 flex flex-col items-center justify-center gap-0.5 rounded-[3px] transition-shadow duration-[400ms] group-focus-visible:outline group-focus-visible:outline-[3px] group-focus-visible:outline-[#2c6e8f] ${on ? 'shadow-[inset_0_0_0_2px_#fff,0_0_36px_6px_rgba(44,110,143,.65)]' : 'shadow-[inset_0_0_0_1px_rgba(255,255,255,.4)]'}`}
                    >
                      <b className="font-serif font-normal leading-none [font-size:calc(var(--t)*.4)]">{pad(i)}</b>
                      <i className="font-bold not-italic uppercase tracking-[.14em] opacity-80 [font-size:calc(var(--t)*.115)]">{LABELS[i % 5]}</i>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* the answer */}
          <article
            key={cur} aria-live="polite"
            className="ft-swap relative origin-[0_50%] rounded-[10px] border border-[#1e2b33]/10 bg-white p-[clamp(24px,3.2vw,40px)] [perspective:1000px] shadow-[1px_1px_0_#d9d4c8,2px_2px_0_#d0cabd,3px_3px_0_#c7c1b3,4px_4px_0_#bdb7a8,5px_5px_0_#b3ad9e,0_30px_40px_-14px_rgba(30,43,51,.35)]"
          >
            <small className="text-[11px] font-bold uppercase tracking-[.3em] text-[#2c6e8f]">Question {pad(cur)} of {n}</small>
            <h2 className="mb-3.5 mt-2.5 font-serif text-[clamp(22px,2.6vw,32px)] font-normal leading-[1.18] text-[#1e2b33]">{q}</h2>
            <p className="border-t border-[#1e2b33]/15 pt-3.5 text-base leading-[1.7] text-[#3d4a52]">{a}</p>
            <div className="mt-[22px] flex gap-2.5">
              <button type="button" onClick={() => go(cur - 1)} className="cursor-pointer rounded-[3px] bg-[#e7e1d3] px-5 py-3 text-[13px] font-bold tracking-[.05em] text-[#1e2b33] shadow-[0_4px_0_#bdb6a4] outline-none transition active:translate-y-[3px] active:shadow-[0_1px_0_#bdb6a4] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#2c6e8f]">← Previous</button>
              <button type="button" onClick={() => go(cur + 1)} className="cursor-pointer rounded-[3px] bg-[#1e2b33] px-5 py-3 text-[13px] font-bold tracking-[.05em] text-white shadow-[0_4px_0_#0c1317] outline-none transition active:translate-y-[3px] active:shadow-[0_1px_0_#0c1317] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#2c6e8f]">Next →</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
