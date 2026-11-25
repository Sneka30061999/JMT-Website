import { Cta } from '../components/ui';
import QuarrySplitHero from '../components/QuarrySplitHero';
import AssembleOffer from '../components/AssembleOffer';
import JourneyPath from '../components/JourneyPath';

export default function Sourcing() {
  const steps: Array<[string, string]> = [['Share', 'Tell us the category, colour, finish, quantity and application.'], ['Review', 'Our team reviews your requirement and suitable options.'], ['Source', 'We source the material from the right part of India.'], ['Quote', 'You receive pricing based on your requirements.']];
  return (
    <>
      <QuarrySplitHero eyebrow="Our sourcing capabilities" title="The right stone. Sourced for your requirements." text="Joys Marbles & Granites sources natural stones from different parts of India based on customer and project requirements." />
      <AssembleOffer />
      <JourneyPath title="How it works" steps={steps} />
      <Cta title="Share your requirements." text="The more detail you share, the better we can help." label="Share your requirements" />
    </>
  );
}
