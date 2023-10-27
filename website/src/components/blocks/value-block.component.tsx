import React from 'react'
import { type MissionValue } from '@/lib/types';

export default function ValueBlock(
  { value }: { value: MissionValue }
) {

  const { name, description } = value;

  return (
    <div key={name} className='relative pl-16'>
      <dt
        className='
          text-4xl 
          font-semibold 
        text-gray-900
        '
      >
        <div
          className='
            absolute 
            left-0 
            top-0 
            flex 
            h-12 
            w-12 
            items-center 
            justify-center 
            rounded-lg 
            bg-indigo-600
          '
        >
          <value.icon 
            aria-hidden='true' 
            className='h-8 w-8 text-white' 
          />
        </div>
        {name}
      </dt>
      <dd
        className='
          mt-2 
          text-2xl
          leading-10
        text-gray-600
        '
      >
        {description}
      </dd>
    </div>
  )
}
