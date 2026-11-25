import { useState, type FormEvent } from 'react';
import { submitEnquiry } from '../data/api';
import { waLink } from '../data/site';

const CATS = ['Marbles', 'Granites', 'Kota Stones', 'Quartz', 'Kadapa Stones'];
const TYPES = ['Product Enquiry', 'Request Pricing', 'Bulk Requirement', 'Project Enquiry', 'General Enquiry'];
const FINISHES = ['', 'Polished', 'Matte / Honed', 'Lapatra', 'Not sure'];
const fld = 'w-full bg-white/5 border border-gd/30 text-wh px-3.5 py-3 font-light text-base rounded-none placeholder:text-sg/80 focus:border-cg focus:bg-white/10 outline-none transition';
const lbl = 'block text-xs tracking-wider uppercase text-cg mb-1.5';

interface Props { stone: string; setStone: (s: string) => void; category?: string; onSent?: () => void }

export default function EnquiryForm({ stone, setStone, category = '', onSent }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [ref, setRef] = useState('');
  const [err, setErr] = useState('');

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    if (f.get('website')) return; // honeypot: bots fill this hidden field
    const g = (k: string) => String(f.get(k) ?? '').trim();
    if (!g('name') || !g('phone') || !g('category') || !g('location')) { setErr('Please fill the required fields marked *.'); return; }
    if (!/^[+\d][\d\s-]{7,}$/.test(g('phone'))) { setErr('Please enter a valid phone number.'); return; }
    setErr('');
    setState('sending');
    const file = f.get('file');
    const { id } = await submitEnquiry({
      name: g('name'), phone: g('phone'), category: g('category'), location: g('location'), email: g('email'), company: g('company'),
      stone: g('stone'), quantity: g('quantity'), dimensions: g('dimensions'), finish: g('finish'), application: g('application'),
      message: g('message'), type: g('type'), file: file instanceof File ? file.name : '', source: stone ? 'Product page' : 'Website form',
    });
    setRef(id);
    setState('done');
    onSent?.();
  };

  if (state === 'done')
    return (
      <div className="max-w-[760px] mx-auto mt-8 border border-gd p-7 sm:p-10 text-center" role="status">
        <h3 className="gold text-3xl sm:text-4xl">Thank you.</h3>
        <p className="text-sg mt-3">Thank you for contacting Joys Marbles & Granites. Your enquiry has been received. Our team will get in touch with you shortly.</p>
        <p className="text-cg text-sm mt-3">Reference: {ref}</p>
        <a className="btn mt-6" href={waLink(stone)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto mt-8 p-5 sm:p-8 border border-gd/35 bg-[rgba(20,20,20,.8)] text-left">
      <div><label className={lbl} htmlFor="f-name">Full name *</label><input id="f-name" className={fld} name="name" autoComplete="name" required /></div>
      <div><label className={lbl} htmlFor="f-phone">Phone number *</label><input id="f-phone" className={fld} name="phone" type="tel" inputMode="tel" autoComplete="tel" required /></div>
      <div><label className={lbl} htmlFor="f-email">Email address</label><input id="f-email" className={fld} name="email" type="email" autoComplete="email" /></div>
      <div><label className={lbl} htmlFor="f-company">Company name</label><input id="f-company" className={fld} name="company" autoComplete="organization" /></div>
      <div><label className={lbl} htmlFor="f-type">Enquiry type</label>
        <select id="f-type" className={fld} name="type" defaultValue="Request Pricing">{TYPES.map((t) => <option key={t} className="bg-ch">{t}</option>)}</select></div>
      <div><label className={lbl} htmlFor="f-cat">Product category *</label>
        <select id="f-cat" className={fld} name="category" defaultValue={category} required><option value="" className="bg-ch">Select</option>{CATS.map((t) => <option key={t} className="bg-ch">{t}</option>)}</select></div>
      <div><label className={lbl} htmlFor="f-loc">Location *</label><input id="f-loc" className={fld} name="location" placeholder="City / project location" required /></div>
      <div><label className={lbl} htmlFor="f-stone">Selected stone</label><input id="f-stone" className={fld} name="stone" value={stone} onChange={(e) => setStone(e.target.value)} placeholder="e.g. Black Galaxy Granite" /></div>
      <div><label className={lbl} htmlFor="f-qty">Required quantity</label><input id="f-qty" className={fld} name="quantity" placeholder="e.g. 2,000 sq ft" /></div>
      <div><label className={lbl} htmlFor="f-dim">Required dimensions</label><input id="f-dim" className={fld} name="dimensions" placeholder="e.g. 600 x 600 mm, 18 mm" /></div>
      <div><label className={lbl} htmlFor="f-fin">Preferred finish</label>
        <select id="f-fin" className={fld} name="finish" defaultValue="">{FINISHES.map((t) => <option key={t} value={t} className="bg-ch">{t || 'Select'}</option>)}</select></div>
      <div><label className={lbl} htmlFor="f-app">Intended application</label><input id="f-app" className={fld} name="application" placeholder="Flooring, countertop, cladding..." /></div>
      <div className="sm:col-span-2"><label className={lbl} htmlFor="f-msg">Project description</label><textarea id="f-msg" className={fld} name="message" rows={4} /></div>
      <div className="sm:col-span-2"><label className={lbl} htmlFor="f-file">Reference image (optional)</label>
        <input id="f-file" className={`${fld} file:mr-4 file:border-0 file:bg-gd file:text-bk file:px-3 file:py-1.5`} name="file" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" /></div>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <p className="sm:col-span-2 text-xs text-sg">By submitting, you agree that Joys Marbles & Granites may use these details to respond to your enquiry. See our <a className="text-cg underline" href="#privacy">Privacy Policy</a>.</p>
      {err && <p className="sm:col-span-2 text-[#ff9b8a] text-sm" role="alert">{err}</p>}
      <button className="btn-fill sm:col-span-2 disabled:opacity-60" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'SENDING...' : 'SUBMIT ENQUIRY'}</button>
    </form>
  );
}
