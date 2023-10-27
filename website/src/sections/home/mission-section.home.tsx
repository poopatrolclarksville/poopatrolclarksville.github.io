import React from 'react';
import { MISSION_VALUES } from '../../config/mission-values.config';

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
      '>  
      <header
        className='
        text-clamp
        text-center
        laptop:text-left
        laptop:max-w-xl
      '>
        <div>
          <h1
            className='
            text-5xl
            laptop:text-8xl 
            font-bold
            text-gray-900 
            '>
            Our Mission.
          </h1>
        </div>
        <p
          className='
          py-16
          text-4xl
          font-extralight
          text-gray-600
          leading-relaxed
        '>
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar
          et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </header>
      <dl className='lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-10 pt-8'>
        {MISSION_VALUES.map((value) => (
          <div key={value.name} className='relative pl-16'>
            <dt
              className='
              text-4xl 
               font-semibold 
              text-gray-900
              '>
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
              rounded-lg bg-indigo-600'>
                <value.icon className='h-8 w-8 text-white' aria-hidden='true' />
              </div>
              {value.name}
            </dt>
            <dd
              className='
              mt-2 
              text-2xl
              leading-10
              text-gray-600
              '>
              {value.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
