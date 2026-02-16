'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import ServicesSingleMain from './services-single';
import SEO from '@/components/data/seo';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import FooterOne from '@/components/layout/footers/footer-one';
import SwitchTab from '../../common/dark-light';
import { STRAPI_URL } from '@/constants';

const ServicesSingle = ({ serviceDetails }) => {
  return (
    <>
      <SEO pageTitle={serviceDetails?.title} />
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb
        title={serviceDetails?.title}
        innerTitle={serviceDetails?.title}
        backgroundImage={`${STRAPI_URL}${serviceDetails?.headerImage?.formats?.medium?.url}`}
      />
      <ServicesSingleMain serviceDetails={serviceDetails} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default ServicesSingle;
