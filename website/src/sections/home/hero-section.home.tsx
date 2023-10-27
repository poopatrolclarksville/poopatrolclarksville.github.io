import React from 'react';
import DesktopNavbar from '../../components/bars/desktop-navbar.component';
import { StaticImage } from 'gatsby-plugin-image';
import { CalendarClock } from 'lucide-react';

export default function HeroSection() {
  
  return (
    <section>
      <div
        className='
        relative
        h-[100vh]
        bg-gradient-to-r
      from-gray-700
      to-gray-700
      '>
        <StaticImage
          src='https://images.unsplash.com/photo-1597595735637-05a49627ee29?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Placeholder alt text'
          className='absolute h-full w-full mix-blend-overlay'
        />
        <div
          className='
          flex
          h-full
          flex-col
          items-center
          justify-between
          border
          mobile:px-4
          px-32
          pb-96
          pt-4
        '>
          <DesktopNavbar />
          <header
            className='
            py-32 
            text-center 
            text-gray-50
          '>
            <h1 className='
              font-bold
              mobile:text-6xl
              mobile:pb-8
              desktop:text-8xl
              desktop:pb-12
            '>
              Poo Patrol
            </h1>
            <p
              className='
              text-gray-50
              mobile:font-normal
              mobile:text-5xl
              laptop:text-5xl
              laptop:font-medium
          '>
              We scoop poop, so you don't have to.
            </p>
          </header>
          <button
            type='button'
            className='
              mt-50 
              z-10
              font-bold
              border-2
              border-gray-50
              mobile:text-lg
              mobile:rounded-sm
              mobile:p-4
              mobile:text-md
              mobile:w-full
              mobile:text-gray-900
              mobile:bg-gray-50
              desktop:p-8
              desktop:w-[600px]
              desktop:text-2xl
              desktop:bg-transparent
              desktop: text-gray-50
              desktop:cursor-pointer
              desktop:rounded-lg
              hover:bg-gray-50
              hover:text-gray-900
          '>
            <div className='flex items-center justify-between px-4'>
              Book Appointment Now
              <CalendarClock size={32} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
