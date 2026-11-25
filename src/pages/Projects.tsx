import { Cta, Head, Reveal, Section, Title } from '../components/ui';
import ProjectDrum from '../components/ProjectDrum';

export default function Projects() {
  return (
    <>
      <Head v="clients" eyebrow="Crafted projects" title="Stone that becomes part of a legacy." text="Notable educational, airport, commercial and residential projects where Joys Marbles & Granites has supplied natural stone." />
      <Section alt>
        <Title lead="Project photographs and materials supplied will be added once approved by each client.">Crafted spaces</Title>
        <ProjectDrum />
        <Reveal><p className="text-center font-serif font-semibold text-cg text-xl sm:text-2xl mt-12 max-w-3xl mx-auto">We don’t just supply materials. We build relationships that last as long as our stones.</p></Reveal>
      </Section>
      <Cta title="Planning a project?" text="Discuss your requirements with our team." label="Discuss your project" second={['Explore products', '#collection']} />
    </>
  );
}
