import React from 'react';

import Logo from '../misc/logo.component';

export default function DesktopNavbar() {
  return (
    <div
      className='
      z-10
      flex
      w-full
      items-center
      justify-between
      bg-transparent
      py-8
      mobile:hidden
    '>
      <Logo />
      <nav
        className='
        w-full
        laptop:px-8
        desktop:px-8
      '>
        <ul
          className='
          flex
          items-center
          justify-around
          laptop:text-xl
          font-extralight
          text-gray-50
        '>
          <li>
            <a href='#about-us'>Our Mission</a>
          </li>
          <li>
            <a href='#our-process'>How It Works</a>
          </li>
          <li>
            <a href='#pricing'>Pricing</a>
          </li>
          <li>
            <a href='#customer-reviews'>Reviews</a>
          </li>
          <li>
            <a href='#book-appointment'>Request Service</a>
          </li>
          <li>
            <a href='#frequently-asked-questions'>FAQs</a>
          </li>
          <li>
            <a href='#contact-information'>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
