import React from 'react';

import { PACKAGE_PRICES } from '@/config/pricing.config';
import PromoBadge from '../badges/promo-badge.component';
import PricingCardBodyContent from './body/pricing-card-body-content.component';
import PriceCard from './price-card.component';

interface PriceCardProps {
  hasBadge?: boolean;
}

const weeklyPkg = PACKAGE_PRICES[0];
const twiceWeeklyPkg = PACKAGE_PRICES[1];
const everyOtherWeekPkg = PACKAGE_PRICES[2];

export default function WeeklyPackageCard({ hasBadge = true }: PriceCardProps) {
  return (
    <div
      className='
        px-4
        pt-8
        flex
        flex-col
        rounded-xl
        border
        border-gray-200
        shadow-lg
        shadow-gray-200
      '
    >
      <header>
        <div
          className='
            flex 
            items-center
            justify-between
            px-6
          '
        >
          <h1
            className='
              text-5xl
              font-bold
              text-indigo-600
            '
          >
            Weekly Packages
          </h1>
            {hasBadge ? <PromoBadge label='Most Popular'/> : null}
        </div>
      </header>
      <div 
        className="
          flex
          laptop:py-16
        "
      >
        <PriceCard
          hasPackageType={false}
          isContained={false}
          servicePackage={weeklyPkg}
        />

        <PriceCard
          hasPackageType={false}
          isContained={false}
          servicePackage={twiceWeeklyPkg}
          hasLeftBorder 
          hasRightBorder
        />

        <PriceCard
          hasPackageType={false}
          isContained={false}
          servicePackage={everyOtherWeekPkg} 
        />
      </div>
    </div>
  );
}