export interface Client { name: string; logo?: string; bg?: string }
export interface Project { name: string; kind: string; via: string; tint: string; img?: string; city: string }

/** Logos live in /public/clients. `bg` is each logo image's own background so tiles look seamless. */
const LOGOS: Record<string, [file: string, bg: string]> = {
  'Hindus Construction': ['hcc', '#fefefe'],
  'Spectrum Engineers': ['spectrum', '#ffffff'],
  'Ellora Builders': ['ellora', '#d6def1'],
  'Cauvery Build Tech': ['cauvery', '#fefefe'],
  'Sanjana Builders': ['sanjana', '#fefefe'],
  'TVS Emerald Limited': ['tvs-emerald', '#ffffff'],
  'Teemage Precas In': ['teemage', '#d3d3d3'],
  'P V K Construction Pvt Ltd': ['pvk', '#ffffff'],
  'Marbo Furnishing LLP': ['marbo', '#000000'],
  'Sabarie Construction Pvt Ltd': ['sabari', '#ffffff'],
};

const NAMES = [
  'Sattva Engineering Construction Pvt Ltd', 'Velu Builders Pvt Ltd', 'Hindus Construction', 'Spectrum Engineers',
  'Ellora Builders', 'Moghan Builders', 'Cauvery Build Tech', 'Joshuva Builders', 'Sanjana Builders', 'Elango Builders',
  'Saravana Builders', 'Santhosh Construction', 'TVS Emerald Limited', 'Teemage Builders Pvt Ltd', 'Teemage Precas In',
  'P V K Construction Pvt Ltd', 'Marbo Furnishing LLP', 'Sabarie Construction Pvt Ltd',
];

const toClient = (name: string): Client => {
  const l = LOGOS[name];
  return l ? { name, logo: `${import.meta.env.BASE_URL}clients/${l[0]}.jpg`, bg: l[1] } : { name };
};
/** Clients with a logo first, then text-only tiles. */
export const clients: Client[] = [...NAMES.filter((n) => LOGOS[n]).map(toClient), ...NAMES.filter((n) => !LOGOS[n]).map(toClient)];

/** Put real photos in /public/projects and set img, e.g. img: '/projects/iit-hyderabad.jpg'. Confirm client permissions first. */
export const projects: Project[] = [
  { name: 'IIT Hyderabad', city: 'Hyderabad', kind: 'Educational institution', via: 'Teemage', tint: '#4a4132' },
  { name: 'NIT Karaikal', city: 'Karaikal', kind: 'Educational institution', via: 'Teemage', tint: '#3a3f48' },
  { name: 'Vijayawada Airport', city: 'Vijayawada', kind: 'Airport', via: 'Teemage', tint: '#4d4a44' },
  { name: 'Chennai Silks', city: 'Chennai', kind: 'Commercial', via: 'Teemage', tint: '#503438' },
  { name: 'TVS Emerald, Anna Nagar', city: 'Chennai', kind: 'Residential', via: 'TVS', tint: '#5a4a30' },
  { name: 'TVS Emerald, Kovilambakkam', city: 'Chennai', kind: 'Residential', via: 'TVS', tint: '#3b4a45' },
];
