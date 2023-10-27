import * as React from 'react';
import type { HeadFC } from 'gatsby';

import HeroSection from '../sections/home/hero-section.home';
import MissionSection from '../sections/home/mission-section.home';
import ProcessSection from '../sections/home/process-section.home';
import PricingSection from '../sections/home/pricing-section.home';
import ReviewsSection from '../sections/home/reviews-section.home';
import BookingSection from '../sections/home/booking-section/booking-section.home';
import FAQSection from '../sections/home/faq-section.home';
import Footer from '../sections/footer-section.global';
import MobileNavbar from '@/components/bars/mobile-navbar.component';

export default function Homepage() {
  return (
    <>
      <main>
        <MobileNavbar />
        <HeroSection />
        <MissionSection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <BookingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => <title>Poo Patrol | We scoop, you chill.</title>;
