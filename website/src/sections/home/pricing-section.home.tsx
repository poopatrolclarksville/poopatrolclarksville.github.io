import React from 'react';

import CardGrid from '@/components/grids/pricing-card.component';
import MobileCardGrid from '@/components/grids/mobile-pricing-card-grid.component';

export default function PricingSection() {
  return (
    <section
      id='service-pricing'
      className='
        flex
        flex-col
        justify-start
        items-center
        px-4
        py-32
        desktop:px-0
        desktop:h-96
        desktop:py-64
      '
    >
    <header
      className='
        mb-32
        desktop:mb-64 
        desktop:max-w-7xl
        text-center
      '
    >
      <h1
        className='
          text-5xl
          desktop:text-7xl 
          font-bold
        '
      >
        Services and Pricing
      </h1>
      <p
        className='
          pt-16
          text-4xl
          font-light
          text-gray-600
        '
      >
        We're <span className='font-bold'>confident</span> we have the services you're needing.
        <br />
        <span className='mt-8 flex'>
          But don't see what you're looking for or want more information? Just call or email us.
        </span>
      </p>
    </header>
    <MobileCardGrid />
    {/* <CardGrid /> */}
  </section>
  );
}

