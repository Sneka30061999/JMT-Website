/** Procedural marble veins as a CSS background-image (SVG turbulence) — no image assets needed. */
export interface MarbleOpts {
  rgb?: [number, number, number]; // vein colour 0..1
  seed?: number;
  fx?: number; // horizontal noise frequency
  fy?: number; // vertical noise frequency
  width?: number;
}

export function marble({ rgb = [0.3, 0.29, 0.27], seed = 7, fx = 0.005, fy = 0.016, width = 1 }: MarbleOpts = {}): string {
  const [r, g, b] = rgb;
  // narrow peak in the alpha table = thin vein lines where the noise crosses 0.5
  const table = Array.from({ length: 41 }, (_, i) => {
    const d = Math.abs(i - 20);
    return d <= width - 1 ? 1 : d === width ? 0.45 : 0;
  }).join(' ');
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='1100'>` +
    `<filter id='f' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>` +
    `<feTurbulence type='fractalNoise' baseFrequency='${fx} ${fy}' numOctaves='6' seed='${seed}'/>` +
    `<feColorMatrix values='0 0 0 0 ${r} 0 0 0 0 ${g} 0 0 0 0 ${b} 1 0 0 0 0'/>` +
    `<feComponentTransfer><feFuncA type='table' tableValues='${table}'/></feComponentTransfer></filter>` +
    `<rect width='100%' height='100%' filter='url(%23f)'/></svg>`;
  return `url("data:image/svg+xml,${svg.replace(/#/g, '%23')}")`;
}
