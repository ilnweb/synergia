'use client';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import AboutMain from './about';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from '../common/dark-light';
import FooterOne from '@/components/layout/footers/footer-one';
import Features from '../home/features';

const AboutUs = () => {
  return (
    <>
      <SEO pageTitle='About Us' />
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb
        title='O nas'
        innerTitle='O nas firma'
        backgroundImage='/assets/img/banner/banner-4.jpg'
      />
      {/* <Features /> */}
      <AboutMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
