'use client';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import About from './about';
import Services from './services';
import CtaArea from './cta';
import Portfolio from './portfolio';
import Testimonial from './testimonial';
import WorkArea from './work';
import Blog from './blog';
import FooterOne from '@/components/layout/footers/footer-one';
import BannerOne from './banner';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from '../common/dark-light';
import Features from './features';
import ChooseUs from './choose-us';
import Team from './team';
import bgImage from '../../../public/assets/img/shape/shape-9.png';

const HomeOne = () => {
  return (
    <div>
      <SEO
        pageTitle='Fotowoltaika i Odnawialne Źródła Energii | Synergia'
        pageDescription='Profesjonalne instalacje fotowoltaiczne, pompy ciepła, folie grzewcze i wiaty solarne w Polsce. Zmniejsz rachunki za prąd i ciepło z ekologicznymi rozwiązaniami energetycznymi. 3886 zakończonych projektów, 24456 kW zainstalowanej mocy.'
        keywords='fotowoltaika, panele słoneczne, pompy ciepła, odnawialne źródła energii, OZE, energia słoneczna, audyt energetyczny, folie grzewcze, wiaty solarne, instalacje fotowoltaiczne, energia odnawialna, ekologiczne ogrzewanie'
        canonicalUrl='https://synergia.pl'
        ogImage='/assets/img/banner/banner-1.jpg'
      />
      <HeaderOne />
      {/* <SwitchTab /> */}
      <BannerOne />
      <Services />
      {/* <Features /> */}
      {/* <About /> */}
      <CtaArea />
      <ChooseUs />
      {/* <Portfolio /> */}
      {/* <WorkArea /> */}
      {/* <Team /> */}
      {/* <div
        className='testimonial__one section-padding'
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Testimonial />
      </div> */}
      {/* <Blog /> */}
      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default HomeOne;
