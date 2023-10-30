import React from 'react'
import { type MissionValue } from '@/lib/types';

export default function ValueBlock(
  { value }: { value: MissionValue }
) {

  const { name, description } = value;

  return (
    <div 
      key={name} 
      className='
        px-4
        tablet:px-12
      '
    >
      <dt
        className='
          flex
          flex-col
          text-3xl
          font-bold
          text-gray-900
          tablet:text-3xl
        '
      >
        <div 
          className="
            flex
            items-center
          "
        >
          <div
            className='
              h-12 
              w-12
              flex 
              items-center
              justify-center
              rounded-xl
              tablet:rounded-lg
              bg-indigo-600
            '
          >
            <value.icon 
              aria-hidden='true' 
              className='h-8 w-8 text-white' 
            />
          </div>
          <span className="pl-4">{name}</span>
          </div>
      </dt>
      <dd
        className='
          mt-4
          text-2xl
          leading-10
        text-gray-600
          font-light
          tablet:font-light
          tablet:text-
          tablet:leading-relaxed
        '
      >
        {description}
      </dd>
    </div>
  )
}
