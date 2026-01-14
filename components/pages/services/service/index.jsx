'use client';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import ServicesMain from './services';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';
import ChooseUs from '../../home/choose-us';
import Pricing from '../../pricing-plans/pricing-plans';
import Testimonial from '../../home/testimonial';

const ServicePage = () => {
  return (
    <>
      <SEO pageTitle='Our Services' />
      <SwitchTab />
      <HeaderOne />
      <BreadCrumb title='Our Services' innerTitle='Our Services' />
      <ServicesMain />
      <ChooseUs addClass='services-page' />
      <Pricing addClass='services-page' />
      <div className='testimonial-service section-padding'>
        <Testimonial />
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
