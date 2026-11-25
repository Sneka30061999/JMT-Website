import { Head, Section } from '../components/ui';

const COPY = {
  privacy: ['Privacy Policy', ['We collect the details you submit through our enquiry forms (such as name, phone number, email, location and project requirements) only to respond to your enquiry and to follow up on quotations.', 'We do not sell your information. Access is limited to authorised team members, and uploaded files are stored securely.', 'To ask about or remove your data, contact us using the details on the Contact page.']],
  terms: ['Terms & Conditions', ['This website is an information and enquiry platform. It does not offer online purchasing. All prices and availability are confirmed by our team through a written quotation.', 'Images show representative colours and patterns. Natural stone varies from slab to slab; please request samples before finalising.', 'Company, client and project names appear for reference only and do not imply endorsement.']],
} as const;

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const [title, paras] = COPY[kind];
  return (
    <>
      <Head v="about" title={title} text="Draft text for company review. Replace with the approved policy before launch." />
      <Section alt><div className="space-y-4 text-sg max-w-[760px]">{paras.map((p) => <p key={p}>{p}</p>)}</div></Section>
    </>
  );
}
