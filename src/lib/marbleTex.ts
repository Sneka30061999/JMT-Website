/** Procedural marble textures drawn on a canvas (no image assets). Shared by the hero sections. */
type RGB = [number, number, number];
interface Pal { a: RGB; b: RGB; v: RGB; k: number }

const PAL: Pal[] = [
  { a: [238, 236, 232], b: [206, 204, 200], v: [88, 90, 98], k: 1 },
  { a: [22, 22, 24], b: [42, 42, 44], v: [236, 236, 232], k: 1 },
  { a: [30, 58, 46], b: [56, 92, 74], v: [196, 214, 196], k: 1 },
  { a: [224, 208, 172], b: [196, 176, 136], v: [158, 128, 88], k: 1 },
  { a: [216, 172, 162], b: [188, 140, 130], v: [244, 228, 218], k: 1 },
  { a: [58, 84, 112], b: [102, 132, 158], v: [226, 204, 152], k: 1 },
  { a: [96, 66, 46], b: [134, 96, 68], v: [224, 204, 172], k: 1 },
  { a: [18, 16, 14], b: [36, 32, 26], v: [214, 178, 94], k: 1.3 },
];

function mkNoise(seed: number) {
  const h = (x: number, y: number) => { const s = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453; return s - Math.floor(s); };
  const sm = (t: number) => t * t * (3 - 2 * t);
  const n = (x: number, y: number) => {
    const ix = Math.floor(x), iy = Math.floor(y), fx = sm(x - ix), fy = sm(y - iy);
    const a = h(ix, iy), b = h(ix + 1, iy), c = h(ix, iy + 1), d = h(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
  return (x: number, y: number) => { let v = 0, a = 0.5, f = 1; for (let o = 0; o < 4; o++) { v += a * n(x * f, y * f); a *= 0.5; f *= 2.03; } return v / 0.9375; };
}

function marble(pal: Pal, seed: number, W: number, H: number): string {
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const cx = cv.getContext('2d')!, img = cx.createImageData(W, H), d = img.data, f = mkNoise(seed), g = mkNoise(seed + 9.3);
  const rot = (seed % 5) * 0.35 + 0.2, cs = Math.cos(rot), sn = Math.sin(rot), asp = H / W;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const u = (x / W) * 3.2, v = (y / H) * 3.2 * asp, w = f(u * 0.9, v * 0.9), t = g(u * 0.7 + 4, v * 0.7 + 2), p = (u * cs + v * sn) * 2.4 + w * 4.6;
    const l1 = Math.pow(1 - Math.abs(Math.sin(p)), 22 * pal.k), l2 = Math.pow(1 - Math.abs(Math.sin(p * 0.43 + w * 3 + 1.7)), 9) * 0.45;
    const vein = Math.min(1, l1 + l2), grain = (g(x * 0.6, y * 0.6) - 0.5) * 14, i = (y * W + x) * 4;
    for (let c = 0; c < 3; c++) { const base = pal.a[c] + (pal.b[c] - pal.a[c]) * t; d[i + c] = Math.max(0, Math.min(255, base + (pal.v[c] - base) * vein * 0.85 + grain)); }
    d[i + 3] = 255;
  }
  cx.putImageData(img, 0, 0);
  return cv.toDataURL('image/jpeg', 0.88);
}

let cache: string[] | null = null;
/** Eight different marble/granite textures as data URLs (built once, then reused). */
export function stoneTextures(): string[] {
  if (!cache) cache = PAL.map((p, i) => marble(p, i + 1, 190, 330));
  return cache;
}

let col: string | null = null;
/** One wide white-marble texture used to wrap the footer column. */
export function columnTexture(): string {
  if (!col) col = marble(PAL[0], 3, 480, 300);
  return col;
}
