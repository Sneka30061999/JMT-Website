import { useCallback, useEffect, useState } from 'react';
import { ScrollProgress } from './components/ui';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import StoneDetail from './pages/StoneDetail';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Industries from './pages/Industries';
import Sourcing from './pages/Sourcing';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Legal from './pages/Legal';
import WhatsAppFab from './components/WhatsAppFab';
import { useScrollFrame } from './hooks/useScroll';

const PAGES = ['home', 'about', 'collection', 'stone', 'projects', 'clients', 'industries', 'sourcing', 'contact', 'faq', 'privacy', 'terms'] as const;
type Page = (typeof PAGES)[number];

const NAV: Array<[Page, string]> = [['home', 'Home'], ['about', 'About Us'], ['collection', 'Our Collection'], ['projects', 'Projects'], ['clients', 'Trusted By'], ['industries', 'Industries'], ['sourcing', 'Sourcing'], ['contact', 'Contact'], ['faq', 'FAQs']];
const TITLES: Record<Page, string> = { home: '', about: 'About Us', collection: 'Products', stone: 'Stone details', projects: 'Projects', clients: 'Trusted By', industries: 'Industries We Serve', sourcing: 'Sourcing Capabilities', contact: 'Contact Us', faq: 'FAQs', privacy: 'Privacy Policy', terms: 'Terms & Conditions' };

interface Route { page: Page; param: string }
const read = (): Route => {
  const [p = '', ...rest] = decodeURIComponent(location.hash.slice(1)).split('/');
  return { page: (PAGES as readonly string[]).includes(p) ? (p as Page) : 'home', param: rest.join('/') };
};

export default function App() {
  const [route, setRoute] = useState<Route>(read);
  const [sel, setSel] = useState('');
  const [ready, setReady] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeMenu = useCallback(() => setMenu(false), []);
  const { page, param } = route;

  useScrollFrame((y) => setStuck(y > 40));

  useEffect(() => {
    const on = () => { setRoute(read()); scrollTo(0, 0); };
    addEventListener('hashchange', on);
    const t = setTimeout(() => setReady(true), 700);
    return () => { removeEventListener('hashchange', on); clearTimeout(t); };
  }, []);

  useEffect(() => {
    document.title = (TITLES[page] ? `${TITLES[page]} | ` : '') + 'Joys Marbles & Granites' + (page === 'home' ? ' | Premium Natural Stone Supplier Since 1998' : '');
  }, [page]);

  const activeKey: Page = page === 'stone' ? 'collection' : page;

  return (
    <>
      <div className={`fixed inset-0 z-[100] bg-bk grid place-items-center transition-all duration-700 ${ready ? 'opacity-0 invisible' : ''}`} aria-hidden={ready}>
        <b className="gold font-serif text-6xl">Joys</b>
      </div>
      <ScrollProgress />

      <Navbar links={NAV} active={activeKey} stuck={stuck} sel={sel} menuOpen={menu} onMenu={() => setMenu(true)} />
      <MobileMenu open={menu} onClose={closeMenu} links={NAV} active={activeKey} sel={sel} />

      <main key={page + param} className="page relative z-10 min-h-screen">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'collection' && <Collection initial={param} onPick={setSel} />}
        {page === 'stone' && <StoneDetail id={param} onPick={setSel} />}
        {page === 'projects' && <Projects />}
        {page === 'clients' && <Clients />}
        {page === 'industries' && <Industries />}
        {page === 'sourcing' && <Sourcing />}
        {page === 'contact' && <Contact sel={sel} setSel={setSel} />}
        {page === 'faq' && <Faq />}
        {(page === 'privacy' || page === 'terms') && <Legal kind={page} />}
      </main>

      <Footer sel={sel} />

      <WhatsAppFab sel={sel} />
    </>
  );
}
