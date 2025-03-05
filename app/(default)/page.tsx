export const metadata = {
  title: 'Datnoid: The Future of Fair Meme Coin Launches & Trading',
  description:
    'Stop losing money in web3. Datnoid is the innovative launchpad redefining meme coin launches with transparent methods, and a unified liquidity pool for secure, fair trading.',
};

import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Features from '@/components/features';
import Features02 from '@/components/features-02';
import Features03 from '@/components/features-03';
import TestimonialsCarousel from '@/components/testimonials-carousel';
import Features04 from '@/components/features-04';
import Testimonials from '@/components/testimonials';
import Cta from '@/components/cta';

import Faqs from '@/components/faqs';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />

      <Faqs />
      <Testimonials />
      <Cta />
    </>
  );
}
