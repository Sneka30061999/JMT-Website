import { Cta, Reveal, Section, Title } from '../components/ui';
import GoldVortexHero from '../components/GoldVortexHero';
import ClientHalos from '../components/ClientHalos';
import { ClientGrid, TrustTree } from '../components/Blocks';

export default function Clients() {
  return (
    <>
      <GoldVortexHero eyebrow="Trusted by" title="Trusted by builders, architects & developers." text="Over the years, we’ve partnered with construction companies, architects and independent builders to deliver materials that meet the highest standards." />
      <ClientHalos />
      <Section center>
        <Reveal><TrustTree /></Reveal>
        <Title center lead="Built on trust. Strengthened by relationships.">Our customers</Title>
        <ClientGrid />
        <p className="text-sg/70 text-xs mt-8 max-w-xl mx-auto">Logos belong to their respective owners and appear with the company’s permission. Listing does not imply a formal partnership or endorsement.</p>
      </Section>
      <Cta title="Join the builders who trust us." text="Tell us about your next project." label="Request a quote" />
    </>
  );
}
