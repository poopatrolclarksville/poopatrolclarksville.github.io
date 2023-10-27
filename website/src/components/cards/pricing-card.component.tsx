import React from 'react';

import { PackageDetails } from '@/lib/types';

import PromoBadge from '../badges/promo-badge.component';
import IconListItem from '../items/icon-list-item.component';

export default function PriceCard({ 
  servicePackage 
}: { servicePackage: PackageDetails }
) {

  const {
    packageType,
    price,
    description,
    details,
    isPopular,
  } = servicePackage;

  return (
    <article
      className='
        h-96
        w-full
        rounded-xl
        px-8
        py-4
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
          '
        >
          <h1
            className='
              text-3xl
              font-bold
              text-indigo-600
            '
          >
            {packageType}
          </h1>
          {isPopular ? <PromoBadge /> : null}
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
            {`$ ${price.toPrecision(4)}`} &nbsp;
          </span>
          / pet
        </p>

        {/* Decoration */}
        <div
          className='
            w-50
            boder-gray-600
            border-b
            pt-4
          '
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
         {details.map((detail) => (
           <IconListItem 
            icon={detail.icon}
            text={detail.text}
          />
         ))}
        </ul>
      </div>
    </article>
  );
}