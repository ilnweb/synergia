'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import Services from './services';
import CtaArea from './cta';
import FooterOne from '@/components/layout/footers/footer-one';
import BannerOne from './banner';
import ScrollToTop from '../common/scroll/scroll-to-top';
import ChooseUs from './choose-us';

const HomeOne = ({ initialServices }) => {
  return (
    <div>
      <HeaderOne />
      <BannerOne />
      <Services initialServices={initialServices} />
      <CtaArea />
      <ChooseUs />
      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default HomeOne;
