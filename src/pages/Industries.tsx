import { Cta, Head } from '../components/ui';
import IndustryStairs from '../components/IndustryStairs';

export default function Industries() {
  return (
    <>
      <Head v="industries" tall eyebrow="Industries we serve" title="Stone for every kind of space." text="From private homes to airports and campuses, we help each customer segment find the right material." />
      <IndustryStairs />
      <Cta title="Not sure where your project fits?" text="Share your requirements and we will help you choose." label="Contact our team" />
    </>
  );
}
