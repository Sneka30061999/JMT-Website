import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react';

export const PANEL_FX = ['tilt', 'rise', 'swing', 'float'] as const;
export const FLIP_FX = ['flipY', 'flipX', 'diag', 'door'] as const;
export type PanelFx = (typeof PANEL_FX)[number];
export type FlipFx = (typeof FLIP_FX)[number];

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Static info card with a 3D hover effect (tilt / rise / swing / float). */
export function Panel({ fx, children, className = '', delay = 0 }: { fx: PanelFx; children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || fx !== 'tilt' || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
    el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  const style: Vars = { '--d': `${-delay * 0.7}s` };
  return <div ref={ref} data-fx={fx} className={`pn ${className}`} style={style} onPointerMove={move} onPointerLeave={leave}>{children}</div>;
}

/** Two-sided card. Hover on desktop, tap on touch devices. Size comes from className (use aspect-*). */
export function Flip({ fx, front, back, className = '', index = 0 }: { fx: FlipFx; front: ReactNode; back: ReactNode; className?: string; index?: number }) {
  const [open, setOpen] = useState(false);
  const style: Vars = { '--i': index % 14 };
  const key = (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') setOpen((v) => !v); };
  return (
    <div data-fx={fx} data-open={open} className={`fl ${className}`} style={style} onClick={() => setOpen((v) => !v)} role="button" tabIndex={0} onKeyDown={key}>
      <div className="fl-in">
        <div className="fl-f">{front}</div>
        <div className="fl-b">{back}</div>
      </div>
    </div>
  );
}

// Veins are drawn once on a small canvas and reused by every swatch
let vein = '';
function veinURL(): string {
  if (vein) return vein;
  const k = document.createElement('canvas');
  k.width = k.height = 256;
  const g = k.getContext('2d')!;
  for (let i = 0; i < 16; i++) {
    let x = Math.random() * 256, y = 0;
    g.beginPath();
    g.moveTo(x, y);
    for (let j = 0; j < 20; j++) { x += (Math.random() - 0.5) * 22; y += 13; g.lineTo(x, y); }
    g.strokeStyle = i % 3 ? `rgba(255,255,255,${0.25 + Math.random() * 0.4})` : `rgba(0,0,0,${0.2 + Math.random() * 0.3})`;
    g.lineWidth = 0.6 + Math.random() * 2.2;
    g.stroke();
  }
  return (vein = `url(${k.toDataURL()})`);
}

/** Marble-looking swatch */
export function Swatch({ c, r = 0 }: { c: [string, string]; r?: number }) {
  return (
    <div
      className="absolute inset-0"
      style={{ backgroundImage: `${veinURL()}, linear-gradient(135deg,${c[0]},${c[1]})`, backgroundSize: '100% 100%, 100% 100%', backgroundBlendMode: 'overlay, normal', transform: `scale(1.5) rotate(${r}deg)` }}
    />
  );
}
