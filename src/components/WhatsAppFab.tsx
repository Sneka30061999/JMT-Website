import { waLink } from '../data/site';

/** Floating gold WhatsApp logo: black disc, gold rim, phone-in-bubble glyph, glowing orbit. */
export default function WhatsAppFab({ sel }: { sel?: string }) {
  return (
    <a
      href={waLink(sel)} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="wa-fab fixed right-2 z-40 block h-[72px] w-[72px] transition-transform duration-300 hover:scale-110 sm:right-4 sm:h-[84px] sm:w-[84px] lg:h-[96px] lg:w-[96px]"
      style={{ bottom: 'calc(8px + env(safe-area-inset-bottom, 0px))' }}
    >
      <span aria-hidden className="wa-ripple absolute inset-[14%] rounded-full" />
      <span aria-hidden className="wa-ripple wa-ripple2 absolute inset-[14%] rounded-full" />
      <span className="wa-stage block h-full w-full">
      <svg viewBox="0 0 120 120" className="wa-3d h-full w-full overflow-visible" aria-hidden>
        <defs>
          <linearGradient id="wa-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff1b8" />
            <stop offset=".45" stopColor="#d6a944" />
            <stop offset="1" stopColor="#8d6620" />
          </linearGradient>
          <radialGradient id="wa-bg" cx=".5" cy=".5" r=".55">
            <stop offset="0" stopColor="#0b0f0d" />
            <stop offset=".6" stopColor="#07110d" />
            <stop offset="1" stopColor="#0c4a35" />
          </radialGradient>
          <linearGradient id="wa-em" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#34e0a1" />
            <stop offset="1" stopColor="#0f7a55" stopOpacity="0" />
          </linearGradient>
          <filter id="wa-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* orbit */}
        <ellipse className="wa-orbit" cx="60" cy="60" rx="56" ry="20" transform="rotate(-28 60 60)" fill="none" stroke="url(#wa-g)" strokeWidth="1.6" opacity=".85" filter="url(#wa-glow)" />
        {/* disc */}
        <circle cx="60" cy="60" r="38" fill="url(#wa-bg)" stroke="url(#wa-g)" strokeWidth="4" filter="url(#wa-glow)" />
        <circle cx="60" cy="60" r="34.500" fill="none" stroke="url(#wa-em)" strokeWidth="2.200" />
        <circle cx="60" cy="60" r="32" fill="none" stroke="#f0dba0" strokeOpacity=".4" strokeWidth=".8" />
        <g className="wa-shake">
        {/* bubble */}
        <path d="M60 36a24 24 0 0 0-20.7 36L36 84l12.4-3.2A24 24 0 1 0 60 36z" fill="none" stroke="url(#wa-g)" strokeWidth="4" strokeLinejoin="round" />
        {/* phone */}
        <path d="M52 47c-1.5 0-4 2-4 5.2 0 5.800 9.800 15.800 16.800 15.800 3.200 0 5.200-2.500 5.200-4 0-.8-4-3-5-3-.8 0-1.800 2.200-3 2-2.800-.5-7-5.200-7.600-7.800-.2-1.200 1.800-2 1.800-3 0-1-2-5.200-4.200-5.200z" fill="url(#wa-g)" />
        </g>
      </svg>
      </span>
    </a>
  );
}
