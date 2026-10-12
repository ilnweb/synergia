'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import PortfolioDetailsMain from './portfolio-details';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';

const PortfolioDetails = ({ singleData }) => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
      <PortfolioDetailsMain singleData={singleData} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default PortfolioDetails;
