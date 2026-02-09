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
      <div class='accordion' id='accordionExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id='collapseOne'
            class='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              <strong>This is the first item’s accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It’s also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id='collapseTwo'
            class='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              <strong>This is the second item’s accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It’s also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id='collapseThree'
            class='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              <strong>This is the third item’s accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It’s also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
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
