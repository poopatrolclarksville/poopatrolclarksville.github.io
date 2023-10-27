import React, { ReactNode } from 'react';
import Footer from '../../sections/footer-section.global';
import DesktopNavbar from '../bars/desktop-navbar.component';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
