import React from 'react';
import { MISSION_VALUES } from '@/config/mission-values.config';
import ValueBlock from '@/components/blocks/value-block.component';

export default function MissionSection() {
  return (
    <section
      className='
        grid
        grid-cols-1
        px-4
        py-32
        laptop:grid-cols-2
        laptop:px-8
        laptop:py-64
      '
    >  
      <header
        className='
          text-clamp
          text-center
          laptop:text-left
          laptop:max-w-xl
        '
      >
        <div>
          <h1
            className='
              text-5xl
              laptop:text-8xl 
              font-bold
              text-gray-900 
            '
          >
            Our Mission.
          </h1>
        </div>
        <p
          className='
            py-16
            text-4xl
            font-light
            text-gray-600
            leading-relaxed
          '
        >
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar
          et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </header>
      <dl 
        className='
          grid 
          grid-cols-1 
          gap-y-16
          pt-
        '
      >
        {MISSION_VALUES.map((value) => (
         <ValueBlock value={value}/>
        ))}
      </dl>
    </section>
  );
}
