export const metadata = {
  title: 'Datnoid: The Future of Fair Meme Coin Launches & Trading',
  description:
    'Stop losing money in web3. Datnoid is the innovative launchpad redefining meme coin launches with transparent methods, and a unified liquidity pool for secure, fair trading.',
};

import Hero from '@/components/hero-about';
import Story from '@/components/story';
import Team from '@/components/team';
import Recruitment from '@/components/recruitment';
import Testimonials from '@/components/testimonials-02';
import Cta from '@/components/cta-02';

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      {/* <Team /> */}
      {/* <Recruitment /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
