import React from 'react';
import FAQGrid from '@/components/grids/faq-grid.component';

export default function FAQSection() {
  return (
    <section
      className='
        px-4
        py-16
        flex
        flex-col
        tablet:px-16
        desktop:px-16
        desktop:py-32
      '
    >
      <header
        className='
          text-clamp
          text-center
          px-4
          tablet:px-0
          desktop:text-left
          desktop:max-w-7xl
          desktop:pr-16
        '
      >
        <div>
          <h1
            className='
            font-bold
            text-5xl
            desktop:text-7xl 
            text-gray-900 
            '>
            Frequently Asked Questions.
          </h1>
          <span>.</span>
        </div>
        <p
          className='
          text-5xl
          font-extralight
          leading-snug
          text-gray-600
        '>
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar
          et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </header>
      <div
        className='
          hidden
          border-t-1
          mt-12
          w-[45vw]
          border-t
          desktop:block
        '
      />
      <FAQGrid />
    </section>
  );
}
