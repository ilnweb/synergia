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
      <SEO
        pageTitle='O nas | Synergia Energia - Fotowoltaika i Odnawialne Źródła Energii'
        pageDescription='Poznaj historię Synergia Energia - firmy specjalizującej się w fotowoltaice, pompach ciepła i systemach grzewczych w Polsce. Od boomu na fotowoltaikę po certyfikowanego audytora energetycznego. Zaufanie, pasja i najwyższa jakość.'
        keywords='o nas, Synergia Energia, historia firmy, fotowoltaika Polska, pompy ciepła, audytor energetyczny, energia odnawialna, ogrzewanie ekologiczne, RED SNEKE, folie grzewcze, doświadczenie w OZE'
        canonicalUrl='https://synergiaenergia.pl/o-nas'
        ogImage='/assets/img/banner/banner-4.jpg'
      />
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
