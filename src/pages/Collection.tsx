import FinishDoors from '../components/FinishDoors';
import StoneCatalogue from '../components/StoneCatalogue';
import { Cta, Head } from '../components/ui';

export default function Collection({ initial, onPick }: { initial?: string; onPick: (s: string) => void }) {
  return (
    <>
      <Head v="collection" eyebrow="Product catalogue" title="Explore the art of natural stone." text="Discover a selection of natural stones suited to different architectural, residential and commercial applications. Click or tap any stone to see details and request pricing." />

      <StoneCatalogue initial={initial} onPick={onPick} />

      <FinishDoors />

      <Cta title="Can’t find the stone you need?" text="We source natural stones from across India based on your requirements." href="#sourcing" label="Our sourcing capabilities" second={['Contact our team', '#contact']} />
    </>
  );
}
