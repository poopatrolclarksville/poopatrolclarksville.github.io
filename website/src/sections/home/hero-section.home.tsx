import React from 'react';
import Navbar from '@/components/bars/navbar.component';
import CTAButton from '@/components/buttons/cta-button.component';
import { StaticImage } from 'gatsby-plugin-image';

export default function HeroSection() {
  
  return (
    <section>
      <div
        className='
          relative
          h-[60vh]
          desktop:h-[100vh]
          bg-gradient-to-r
        from-gray-700
        to-gray-700
        '
      >
        <StaticImage
          src='https://images.unsplash.com/photo-1597595735637-05a49627ee29?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Placeholder alt text'
          className='
            absolute 
            h-full 
            w-full 
            mix-blend-overlay
          '
        />
        <div
          className='
            flex
            h-full
            flex-col
            items-center
            justify-between
            border
            px-4
            desktop:px-32
            pb-96
            pt-4
            tablet:px-16
          '
        >
          <Navbar />
          <header
            className='
            py-16
            desktop:py-32 
            text-center 
            text-gray-50
          '>
            <h1 className='
              font-bold
              text-6xl
              pb-8
              desktop:text-8xl
              desktop:pb-12
            '>
              Poo Patrol
            </h1>
            <p
              className='
              text-gray-50
              font-normal
              text-5xl
              laptop:text-5xl
              laptop:font-medium
          '>
              We scoop poop, so you don't have to.
            </p>
          </header>
        <CTAButton />
        </div>
      </div>
    </section>
  );
}
