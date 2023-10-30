import React from 'react';

import { PACKAGE_PRICES } from '@/config/pricing.config';
import PriceCard from '@/components/cards/pricing-card.component';

export default function MobileCardGrid() {
  return (
    <div
      className='
      w-full
      grid
      grid-cols-1
      gap-12
      tablet:px-16
      laptop:hidden
    '>
     {PACKAGE_PRICES.map((service) => 
        <PriceCard servicePackage={service}/>
     )}
    </div>
  );
}
