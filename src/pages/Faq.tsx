import { Cta } from '../components/ui';
import FaqTiles from '../components/FaqTiles';

export default function Faq() {
  return (
    <>
      <FaqTiles />
      <Cta title="Still have a question?" text="Our team is happy to help." label="Contact our team" />
    </>
  );
}
