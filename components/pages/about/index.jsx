'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import AboutMain from './about';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FooterOne from '@/components/layout/footers/footer-one';

const AboutUs = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb
        title='O nas'
        innerTitle='O nas firma'
        backgroundImage='/assets/img/banner/banner-4.jpg'
      />
      <AboutMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
