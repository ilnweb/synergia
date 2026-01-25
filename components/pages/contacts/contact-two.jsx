'use client';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from '../common/dark-light';
import Link from 'next/link';
import FormArea from './form';

const ContactTwo = () => {
  return (
    <>
      <SEO
        pageTitle='Kontakt | Synergia Energia - Fotowoltaika i OZE'
        pageDescription='Skontaktuj się z Synergia Energia - specjalistami od fotowoltaiki, pomp ciepła i odnawialnych źródeł energii. Zadzwoń +48 123 445 789, napisz biuro@synergiaenergia.pl. Warszawa, Pon-Pt 09:00-17:00. Profesjonalne doradztwo energetyczne.'
        keywords='kontakt, Synergia Energia, fotowoltaika kontakt, pompy ciepła, odnawialne źródła energii, konsultacja energetyczna, Warszawa, telefon kontaktowy, email, doradztwo OZE, instalacje fotowoltaiczne'
        canonicalUrl='https://synergiaenergia.pl/kontakt'
        ogImage='/assets/img/banner/banner-2.jpg'
      />
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb
        title='Kontakt'
        innerTitle='Kontakt'
        backgroundImage='/assets/img/banner/banner-2.jpg'
      />
      <div className='contact__two section-padding'>
        <div className='container'>
          <div className='row al-center'>
            <div className='col-xl-6 col-lg-5 lg-mb-25'>
              <div className='contact__two-area mr-50 xl-mr-0'>
                <span className='subtitle-one'>Skontaktuj się z nami</span>
                <h2>Masz pytania?</h2>
                <p>
                  Jesteśmy tu, aby pomóc Ci w każdej kwestii związanej z energią odnawialną.
                  Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
                </p>
                <FormArea />
              </div>
            </div>
            <div className='col-xl-6 col-lg-7'>
              <div className='row'>
                <div className='col-md-6 mb-25'>
                  <div className='contact__one-item'>
                    <i className='flaticon-telephone-call'></i>
                    <span>Telefon :</span>
                    <h6>
                      <Link href='tel:+48123445789'>+48 123 445 789</Link>
                    </h6>
                  </div>
                </div>
                <div className='col-md-6 md-mb-25'>
                  <div className='contact__one-item'>
                    <i className='flaticon-mail'></i>
                    <span>Email :</span>
                    <h6>
                      <Link href='mailto:biuro@synergiaenergia.pl'>biuro@synergiaenergia.pl</Link>
                    </h6>
                  </div>
                </div>
                <div className='col-md-6 md-mb-25'>
                  <div className='contact__one-item'>
                    <i className='flaticon-location-1'></i>
                    <span>Lokalizacja :</span>
                    <h6>
                      <Link href='https://google.com/maps'>Warszawa, Polska</Link>
                    </h6>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='contact__one-item'>
                    <i className='flaticon-wall-clock'></i>
                    <span>Godziny otwarcia :</span>
                    <h6>Pon-Pt 09:00-17:00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact__two-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991!2d20.670532!3d50.891334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827b8062ebb57%3A0xce5a6c93a76ee922!2sSynergia%20energia!5e0!3m2!1spl!2spl!4v1705598400000!5m2!1spl!2spl'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default ContactTwo;
