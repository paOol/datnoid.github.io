export const metadata = {
  title: 'About - Datnoid',
  description: 'We prevent scams for token traders and generate better returns for liquidity providers on our unified liquidity DEX.',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
import Team from '@/components/team'
import Recruitment from '@/components/recruitment'
import Testimonials from '@/components/testimonials-02'
import Cta from '@/components/cta-02'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Recruitment />
      <Testimonials />
      <Cta />
    </>
  )
}
