# Joys Marbles & Granites website

React 18 + TypeScript + Tailwind CSS 3 + Vite. 3D first-section backdrops use Three.js.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build in dist/
```

## Fill in before launch
- `src/data/site.ts`: WhatsApp number, phone, email, address, hours.
- `src/data/clients.ts`: add real project photos to `public/projects/` and set `img` on each project. Confirm client permissions first.
- `src/data/api.ts`: connect `submitEnquiry` to the backend (POST /api/enquiries). Today it is a stub, so enquiries are not stored or emailed.
- `src/data/stones.ts`: add Quartz and Kadapa stones when product data is ready (the categories already exist).
- Replace the draft Privacy and Terms text in `src/pages/Legal.tsx`.

## Structure
- `src/components/Backdrop.tsx`: the 3D scene for the first section of each page (unchanged from the previous build).
- `src/hooks/useScroll.ts`: reveal, parallax, hero fade and timeline progress hooks.
- `src/components/ui.tsx`: Reveal, Counter, ScrollProgress, Head, Section, Cta.
- `src/pages/*`: one file per page. Routing is hash-based (`#about`, `#collection/Marbles`, `#stone/black-galaxy-granite`).
