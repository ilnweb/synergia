'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import FourColumns from './four-columns';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const PortfolioFourColumns = () => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='04 Columns' innerTitle='Portfolio Grid' />
      <FourColumns />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default PortfolioFourColumns;
