export type Category = 'Marbles' | 'Granites' | 'Kota Stones' | 'Quartz' | 'Kadapa Stones';
export interface Stone { name: string; cat: Category; c?: [string, string]; desc?: string }

const PALETTE: Array<[RegExp, string, string]> = [
  [/black/, '#2a2a2d', '#0a0a0c'], [/green/, '#6f8f78', '#24382f'], [/red|ruby/, '#a8322f', '#4a0e10'],
  [/pink|flamingo/, '#e8b6b0', '#a8706c'], [/blue/, '#6f86a3', '#2b3a52'], [/yellow|golden/, '#e5c76b', '#a8832f'],
  [/brown|tan|ivory|cheetha/, '#9a6a45', '#3d2416'], [/grey|silver|steel/, '#aab0b3', '#5d6468'],
  [/beige|botticino|chiffon/, '#dccdb0', '#a99a7c'],
];
export const colorOf = (n: string): [string, string] => {
  const l = n.toLowerCase();
  const hit = PALETTE.find((p) => p[0].test(l));
  return hit ? [hit[1], hit[2]] : ['#f4f2ee', '#bdb8ad'];
};

const GRANITES = 'Meera White,Black,Tiger Green,Silver Paradise,Silver Black,Ivory Brown,Royal Brown,Bose Brown,Steel Grey,Silver Blue,Paradise Brown,Tan Brown,Kuppam Green,Imperial Brown,Rajshree Red,Black Pearl,Jet Black,Red Multi,Cheetha Brown,Himalayan Brown,Black Galaxy,Ruby Red'.split(',');
const MARBLES = ['Toranto Marble Light', 'Morchana White Marble', 'Dharmeta White Marble', 'Green Marble', 'Yellow Marble', 'Makrana White Marble', 'Banswara White Marble', 'Rajnagar White Marble', 'Agaria White Marble', 'Morwad White Marble', 'Wonder White / White Sangemarmar', 'Black Marble', 'Jet Black Marble', 'Udaipur Green Marble', 'Katni Green Marble', 'Kota Green / Rainforest Green', 'Rainforest Brown', 'Toronto Brown', 'Imperial Brown', 'Paradise Brown / Bose Brown / Royal Brown', 'Tan Brown Marble', 'Himalayan Brown Marble', 'Pink Marble (Udaipur, Rajpura, Baroda)', 'Flamingo Pink Marble', 'Ivory Brown / Chiffon Beige', 'Botticino Beige', 'Golden Silk / Italian Yellow', 'Statuario Marble', 'White Onyx', 'Green Onyx', 'Black Onyx', 'Rainbow Onyx'];

export const stones: Stone[] = [
  ...GRANITES.map((n): Stone => ({ name: `${n} Granite`, cat: 'Granites' })),
  ...MARBLES.map((n): Stone => ({ name: n, cat: 'Marbles' })),
  { name: 'Kota Stone', cat: 'Kota Stones', c: ['#7f8b82', '#3f4a44'], desc: 'Natural, cost-effective and highly durable. Perfect for outdoor spaces, pathways and industrial use.' },
];

export interface CategoryInfo { title: Category; blurb: string; bg: string; count?: number }
export const categories: CategoryInfo[] = ([
  { title: 'Marbles', blurb: 'Timeless veined elegance for interiors.', bg: 'linear-gradient(135deg,#f3f1ec,#c9c4ba 55%,#8e8a82)' },
  { title: 'Granites', blurb: 'Strength and depth for any surface.', bg: 'linear-gradient(135deg,#3a3a3c,#16161a 55%,#6b5a3a)' },
  { title: 'Kota Stones', blurb: 'Durable, cost-effective, built for outdoors.', bg: 'linear-gradient(135deg,#8a9a8f,#566a62 55%,#2f3d38)' },
  { title: 'Quartz', blurb: 'Refined engineered surfaces.', bg: 'linear-gradient(135deg,#e9e4da,#b7aea0 55%,#6f685e)' },
  { title: 'Kadapa Stones', blurb: 'Dark, durable slabs for flooring.', bg: 'linear-gradient(135deg,#6e6a73,#3d3a45 55%,#1d1b24)' },
] as Array<Omit<CategoryInfo, 'count'>>).map((c) => ({ ...c, count: stones.filter((s) => s.cat === c.title).length }));

export const FINISHES = ['Polished', 'Matte / Honed', 'Lapatra'];

export const COLOURS = ['White', 'Black', 'Green', 'Brown', 'Red', 'Pink', 'Yellow', 'Grey', 'Blue', 'Beige'] as const;
/** Colour family derived from the stone name (the catalogue has no separate colour field yet). */
export const colourOf2 = (n: string): string => {
  const l = n.toLowerCase();
  if (/beige|botticino|chiffon/.test(l)) return 'Beige';
  if (/red|ruby/.test(l)) return 'Red';
  if (/pink|flamingo/.test(l)) return 'Pink';
  if (/yellow|golden/.test(l)) return 'Yellow';
  if (/blue/.test(l)) return 'Blue';
  if (/grey|steel|silver paradise/.test(l)) return 'Grey';
  if (/black/.test(l)) return 'Black';
  if (/green/.test(l)) return 'Green';
  if (/brown|tan|ivory|cheetha/.test(l)) return 'Brown';
  if (/white|statuario|sangemarmar/.test(l)) return 'White';
  return '';
};

export const slug = (s: string): string => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const findStone = (id: string): Stone | undefined => stones.find((s) => slug(s.name) === id);

export const APPLICATIONS: Record<Category, string[]> = {
  Marbles: ['Flooring', 'Wall cladding', 'Staircases', 'Interior accents'],
  Granites: ['Kitchen countertops', 'Flooring', 'Staircases', 'Exterior cladding'],
  'Kota Stones': ['Outdoor spaces', 'Pathways', 'Industrial flooring'],
  Quartz: ['Kitchen countertops', 'Interiors'],
  'Kadapa Stones': ['Flooring', 'Wall cladding', 'Outdoor paving'],
};
