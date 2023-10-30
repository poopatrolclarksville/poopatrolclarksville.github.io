import React from 'react';

import type { PackageDetails, PriceDetail } from '@/lib/types'; 
import IconListItem from '@/components/items/icon-list-item.component';

interface PriceCardProps {
  hasPackageType?: boolean
  isContained?: boolean
  hasRightBorder?: boolean,
  hasLeftBorder?: boolean,
  servicePackage: PackageDetails
}

export default function PriceCard({
  hasPackageType = true,
  isContained = true,
  hasRightBorder = false,
  hasLeftBorder= false,
  servicePackage
}: PriceCardProps
) {

  const { 
    packageType, 
    description, 
    price, 
    details
  } = servicePackage;

  let rightBorderStyles = hasRightBorder ? 'border-l border-gray-100' : '';
  let leftBorderStyles = hasLeftBorder ? 'border-r border-gray-100' : '';
  let containedStyles = isContained ? 'rounded-xl border shadow-lg shadow-gray-200' : ''
    
  return (
    <article
      className={`
        h-96
        w-full
        py-4
        px-8
        border-gray-200
        ${containedStyles}
        ${rightBorderStyles}
        ${leftBorderStyles}
      `}
    >
      <header>
        <div
          className='
            flex 
            items-center
            justify-between
          '
        >
          <h1
            className='
              font-bold
            text-indigo-600
              text-3xl
            '
          >
            {hasPackageType ? packageType : ''}
          </h1>
        </div>
      </header>

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
            tablet:text-xl
          '
        >
         {description}
        </p>
        <p
          className='
           text-gray-600
            tablet:text-xl
          '
        >
          <span
            className='
              text-4xl
              font-semibold
              text-gray-900
            '
          >
            {`$ ${price.toPrecision(4)}`} &nbsp;
          </span>
          / pet
        </p>

        {/* Decoration */}
        <div
          className={`
            w-full
            laptop:w-[30%]
            boder-gray-600
            border-b
            pt-4
          `}
        />

        {/* Card Body Section */}
        <ul
          className='
            flex
            list-none
            flex-col
            items-start
            justify-start
            py-6
            space-y-4
          '
        >
         {details.map((detail: PriceDetail) => 
            <IconListItem 
              icon={detail.icon}
              text={detail.text}
            />
         )}
        </ul>
      </div>
    </article>
  );
}