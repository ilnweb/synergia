'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import PricingPlansMain from './pricing-plans';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from '../common/dark-light';

const PricingPages = () => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
      <div className='pricing__area-page section-padding'>
        <PricingPlansMain />
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default PricingPages;
