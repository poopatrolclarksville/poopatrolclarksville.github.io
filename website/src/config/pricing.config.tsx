import React from 'react';

import type { PackagePrice } from '../lib/types';

import { Check } from 'lucide-react';

const icon = <Check size={28} className='text-indigo-600'/>;

export const PACKAGE_PRICES: PackagePrice[] = [
  {
    packageType: 'Weekly',
    price: 50.00,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: [
      {
        icon,
        text: 'Lorem ipsum dolor.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit amet.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit.'
      },
    ]
  },
  {
    packageType: 'Weekly',
    price: 65.00,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: [
      {
        icon,
        text: 'Lorem ipsum dolor.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit amet.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit.'
      },
    ]
  },
  {
    packageType: 'Weekly',
    price: 80.00,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: [
      {
        icon,
        text: 'Lorem ipsum dolor.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit amet.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit.'
      },
    ]
  },
  {
    packageType: 'One-Time',
    price: 30,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: [
      {
        icon,
        text: 'Lorem ipsum dolor.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit amet.'
      },
      {
        icon,
        text: 'Lorem ipsum dolor sit.'
      },
    ]
  },
]