import { BenefitsSection } from '@/components/layout/sections/benefits';
import { CommunitySection } from '@/components/layout/sections/community';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { FooterSection } from '@/components/layout/sections/footer';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { SponsorsSection } from '@/components/layout/sections/sponsors';
import { TeamSection } from '@/components/layout/sections/team';
import { TestimonialSection } from '@/components/layout/sections/testimonial';

export const metadata = {
  title: 'Datnoid | Safe and Fair trading in web3.',
  description:
    'Stop losing money in web3. Datnoid is the safest DEX in crypto; Discover, trade, and create tokens with our Fair Launch System.',
  openGraph: {
    type: 'website',
    url: 'https://datnoid.com/',
    title: 'Datnoid | Safe and Fair trading in web3.',
    description:
      'Stop losing money in web3. Datnoid is the safest DEX in crypto; Discover, trade, and create tokens with our Fair Launch System.',
    images: [
      {
        url: 'https://datnoid.com/logocolor.png',
        width: 200,
        height: 200,
        alt: 'Datnoid Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@datnoid_dapp',
    title: 'Datnoid | Safe and Fair trading in web3.',
    description:
      'Stop losing money in web3. Datnoid is the safest DEX in crypto; Discover, trade, and create tokens with our Fair Launch System.',
    images: ['https://datnoid.com/logocolor.png'],
  },
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'datnoid, memecoins, avalanche, dex, trading, memes, cryptocurrency',
    },
    {
      property: 'robots',
      content: 'index, follow',
    },
    {
      property: 'author',
      content: 'Datnoid',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'canonical',
      href: 'https://datnoid.com/',
    },
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <CommunitySection />

      <FAQSection />
      <FooterSection />
    </>
  );
}
