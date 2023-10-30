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
        laptop:px-16
        laptop:py-64
      '
    >  
      <header
        className='
          mb-32
          text-center
          tablet:mx-auto
        '
      >
        <h1
          className='
            text-4xl
            tablet:text-6xl
            laptop:text-7xl 
            font-bold
          '
        >
          Our Core Values.
        </h1>
        <p
          className='
            pt-16
            text-3xl
            font-light
            text-gray-600
            tablet:text-5xl
          '
        >
          Our company is <span className='font-bold'>rooted</span> in
          these values.
          <br />
          <span className='mt-8 flex'>
           Without them, we cannot provide you excellent service.
          </span>
        </p>
      </header>
      <dl
        className='
          py-16
          grid
          grid-cols-1
          gap-y-16
          tablet:gap-y-24
          desktop:flex
          desktop:flex-row
          desktop:justify-between
        '
      >
        {MISSION_VALUES.map((value) => (
         <ValueBlock value={value}/>
        ))}
      </dl>
    </section>
  );
}
