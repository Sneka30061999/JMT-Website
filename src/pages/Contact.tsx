import { Head, Reveal, Section } from '../components/ui';
import { useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import ContactSlabs from '../components/ContactSlabs';
import { SITE } from '../data/site';

export default function Contact({ sel, setSel }: { sel: string; setSel: (s: string) => void }) {
  const [sentAt, setSentAt] = useState(0);
  return (
    <>
      <Head v="contact" eyebrow="Contact us" title="Let’s build something exceptional." text="Have a project in mind? Reach out to us instantly.">
        <div className="flex flex-wrap gap-3.5 mt-8">
          <a className="btn" href={SITE.phoneHref}>Call us</a>
        </div>
      </Head>
      <section id="enquiry">
        <ContactSlabs sentAt={sentAt}>
          <EnquiryForm stone={sel} setStone={setSel} onSent={() => setSentAt((n) => n + 1)} />
        </ContactSlabs>
      </section>
      <Section>
        <Reveal>
          <div className="border border-gd/30 bg-bk/50 w-full min-w-0 aspect-[16/7] min-h-[200px] grid place-items-center text-center p-6 text-sg">
            <p>Google Map will appear here once the business address is confirmed.</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
