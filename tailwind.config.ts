import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bk: '#101010', ch: '#242424', gd: '#C5A052', cg: '#D6BC83', sg: '#A5A29C', mg: '#858585', wh: '#F5F5F2' },
      fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Jost', 'system-ui', 'sans-serif'] },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
} satisfies Config;
