import AboutHero from '../components/AboutHero';
import { Cta } from '../components/ui';
import MissionGems from '../components/MissionGems';
import GoldGem from '../components/GoldGem';
import StampCapabilities from '../components/StampCapabilities';
import WhoScroll from '../components/WhoScroll';
import HangingSignboards from '../components/HangingSignboards';


export default function About() {
  return (
    <>
      <AboutHero />

      <WhoScroll />

      <HangingSignboards />

      <MissionGems />

      <StampCapabilities />

      <GoldGem />

      <Cta title="Let’s build something exceptional." text="Share your requirements and our team will help you find the right stone." label="Request a quote" second={['Explore products', '#collection']} />
    </>
  );
}
