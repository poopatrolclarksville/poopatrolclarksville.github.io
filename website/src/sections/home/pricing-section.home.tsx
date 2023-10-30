import React from 'react';

import CardGrid from '@/components/grids/pricing-grid.component';
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
        laptop:px-16
        desktop:py-64
      '
    >
      <header
        className='
          mb-32
          text-center
        '
      >
        <h1
          className='
            text-5xl
            tablet:text-6xl
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
            desktop:text-5xl
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
      <CardGrid />
    </section>
  );
}

