'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import TwoColumns from './two-columns';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const PortfolioTowColumns = () => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='02 Columns' innerTitle='Portfolio Grid' />
      <TwoColumns />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default PortfolioTowColumns;
