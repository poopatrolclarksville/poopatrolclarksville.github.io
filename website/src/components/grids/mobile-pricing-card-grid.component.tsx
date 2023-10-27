import React from 'react';

import { PACKAGE_PRICES } from '../../config/pricing.config';
import PriceCard from '../cards/pricing-card.component';

export default function MobileCardGrid() {
  return (
    <div
      className='
      laptop:hidden
      grid
      grid-cols-1
      gap-12
    '>
     {PACKAGE_PRICES.map((service) => 
        <PriceCard servicePackage={service}/>
     )}
    </div>
  );
}
