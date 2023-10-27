import React from 'react';

import PricingCardBodyContent from './body/pricing-card-body-content.component';

interface PriceCardProps {
  hasBadge?: boolean;
}

export default function WeeklyPackageCard({ hasBadge = false }: PriceCardProps) {
  return (
    <div
      className='
        flex
        flex-col
        rounded-xl
        border
        border-gray-200
        shadow-lg
        shadow-gray-200
      '
    >
      <header className='p-8'>
        <div
          className='
            flex 
            items-center
            justify-between
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
          {hasBadge ? (
            <div
              className='
                rounded
                bg-indigo-100
                px-8
                py-4
                text-indigo-900
              '
            >
              <p
                className='
                  text-xl
                  font-medium            
                '
              >
                Most Popular
              </p>
            </div>
          ) : null}
        </div>
      </header>
      <div
        className='
          space-between 
          flex 
          items-center
          py-4
        '
      >
        <PricingCardBodyContent hasLeftBorder={true} />
        <PricingCardBodyContent />
        <PricingCardBodyContent hasRightBorder={true} />
      </div>
    </div>
  );
}

// pricing: {
//   weekly: 50.0,
//   twiceWeekly: 75.0,
//   biWeekly: 33.0,
//   oneTime: 40.0,
//   deoderizing: 36.0,
//   initCleanFee: 25.0,
// },

