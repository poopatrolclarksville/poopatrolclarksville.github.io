import React from 'react';

import { MAIN_NAV_LINKS } from '@/config/navbar-links.config';
import NavItem from '../items/nav-item.component';

import Logo from '@/components/misc/logo.component';

export default function Navbar() {
  return (
    <div
      className='
        hidden
        z-10
        bg-transparent
        w-full
        tablet:space-y-8
        tablet:py-8
        desktop:py-8
        items-center
        tablet:flex
        tablet:flex-col
        desktop:flex-row
        desktop:justify-between
      '
    >
      <Logo />
      <nav
        className='
          w-full
          laptop:px-8
          desktop:px-8
          laptop:h-full
        '
      >
        <ul
          className='
            flex
            items-center
            justify-around
            laptop:text-xl
            font-extralight
            text-gray-50
          '
        >
        {MAIN_NAV_LINKS.map((navItem) => 
          <NavItem navItem={navItem} />
        )}
        </ul>
      </nav>
    </div>
  );
}
