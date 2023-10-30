import React from 'react';

import { PACKAGE_PRICES } from '@/config/pricing.config';

import WeeklyPackageCard from '@/components/cards/weekly-package-card.component';
import PriceCard from '@/components/cards/price-card.component';
import OneTimeFeeCard from '@/components/cards/one-time-fee-card.component';

const oneTimePackages = 
  PACKAGE_PRICES.filter((item) => item.packageType === 'One-Time');

export default function CardGrid() {
  return (
    <section
      className='
        hidden
        laptop:w-full
        laptop:grid
        laptop:grid-cols-3
        laptop:gap-8
      '
    >
      <div
        className='
          col-start-1
          col-end-4
        '
      >
        <WeeklyPackageCard />
      </div>
      {oneTimePackages.map((pkg) => 
        <PriceCard servicePackage={pkg} />
      )}
      <OneTimeFeeCard />
    </section>
  );
}
