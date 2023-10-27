import React from 'react';
import PriceCard from '../cards/pricing-card.component';
import WeeklyPackageCard from '../cards/weekly-package-card.component';

export default function CardGrid() {
  return (
    <section
      className='
        hidden
        laptop:grid
        laptop:grid-cols-3
        laptop:grid-rows-2
        laptop:gap-8
      '
    >
      <div
        className='
          col-start-1
          col- nd-4
        '
      >
        <WeeklyPackageCard hasBadge={true} />
      </div>
      <PriceCard />
      <PriceCard />
      <PriceCard />
    </section>
  );
}
