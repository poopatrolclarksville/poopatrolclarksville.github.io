import React from 'react';

import type { PriceDetail } from '../../../lib/types';

import IconListItem from '@/components/items/icon-list-item.component';

interface PricingCardBodyContentProps {
  hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
  price: number
  description: string,
  priceDetails: PriceDetail[]
}

export default function PricingCardBodyContent({
  hasLeftBorder = false, 
  hasRightBorder = false,
  price,
  description,
  priceDetails,
}: PricingCardBodyContentProps) {

  let rightBorderStyles = hasRightBorder ? 'border-l border-gray-100' : '';
  let leftBorderStyles = hasLeftBorder ? 'border-r border-gray-100' : '';

  return (
    <article
      className={`
        h-96
        w-full
        px-8
        py-4
        ${leftBorderStyles}
        ${rightBorderStyles}
      `}
    >
      <div
        className='
          items-left
          flex
          flex-col
        '
      >
        {/* Card Header */}
        <p
          className='
            text-md
            line-clamp-2
            text-clip
            py-6
            font-light
            text-gray-600
          '
        >
          {description}
        </p>
        <p
          className='
            text-gray-600
          '
        >
          <span
            className='
              text-3xl
              font-semibold
              text-gray-900
            '
          >
            {price} &nbsp;
          </span>
          / pet
        </p>

        {/* Decoration */}
        <div
          className='
            boder-gray-600
            w-[30%]
            border-b
            pt-4
          '
        />

        {/* Pricing Details */}
        <ul
          className='
            flex
            list-none
            flex-col
            items-start
            justify-start
            py-4
          '
        >
          {priceDetails.map((detail) => (
            <IconListItem 
              icon={detail.icon}
              detailText={detail.text}
            />
          ))}
        </ul>
      </div>
    </article>
  );
}