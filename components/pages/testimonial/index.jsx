'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import TestimonialMain from './testimonial';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from '../common/dark-light';

const Testimonial = () => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='Testimonials' innerTitle='Testimonials' />
      <TestimonialMain addClass='services-page' />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default Testimonial;
