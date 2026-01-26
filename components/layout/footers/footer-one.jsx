import Social from '@/components/data/social';
import Link from 'next/link';
import logo from '../../../public/assets/img/logo-1.png';
import ctaBg from '../../../public/assets/img/shape/shape-6.png';
import avatar from '../../../public/assets/img/avatar/avatar-5.jpg';
import footerBg from '../../../public/assets/img/shape/shape-13.png';

const FooterOne = () => {
  return (
    <>
      <div className='footer__cta'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div
                className='footer__cta-area'
                style={{ backgroundColor: '#0D3A57', backgroundImage: `url(${ctaBg.src})` }}
              >
                <div className='row al-center'>
                  <div className='col-lg-9'>
                    <div className='footer__cta-area-left'>
                      <h3>Skontaktuj się z nami, a my zajmiemy się resztą!</h3>
                      <div className='footer__cta-area-left-btn'>
                        <Link className='btn-one' href='/contact'>
                          Zacznij już dziś
                        </Link>
                        <div className='footer__cta-area-left-btn-tel author'>
                          <i className='flaticon-phone-call'></i>
                          <div className='info'>
                            <h6>
                              <Link href='tel:+48698454913'>+48 698 454 913</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='col-lg-3 lg-mt-25 d-none d-lg-block'>
                    <div className='footer__cta-area-right t-right lg-t-center'>
                      <div
                        className='footer__cta-area-right-image dark_image'
                        style={{ backgroundImage: `url(${avatar.src})` }}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__area' style={{ backgroundImage: `url(${footerBg.src})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-5 lg-mb-25'>
              <div className='footer__area-widget'>
                <div className='logo'>
                  <Link href='/' aria-label='Synergia Energia - Strona główna'>
                    <img src='/assets/svg/synergia-logo.svg' alt='Synergia Logo' />
                  </Link>
                </div>
                <div className='footer__area-widget-company'>
                  <p>
                    <Link
                      href='https://www.google.com/maps/place/Synergia+energia/@50.890887,20.672871,996m/data=!3m1!1e3!4m6!3m5!1s0x471827b8062ebb57:0xce5a6c93a76ee922!8m2!3d50.8908871!4d20.6728707!16s%2Fg%2F11n85vxb7g?hl=pl&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'
                      target='_blank'
                    >
                      <i className='flaticon-placeholder'></i>Jana Nowaka-Jeziorańskiego 121, 25-408
                      Kielce
                    </Link>
                  </p>
                  <div className='social__icon mt-60'>
                    <Social />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-7'>
              <div className='row'>
                <div className='col-sm-6 col-12 sm-mt-25'>
                  <div className='footer__area-widget'>
                    <h6>Telefon</h6>
                    <div className='footer__area-widget-info mb-35'>
                      <p>
                        <Link href='tel:+48123445789'>+48 698 454 913</Link>
                      </p>
                    </div>
                    <h6>Email</h6>
                    <div className='footer__area-widget-info'>
                      <p>
                        <Link href='mailto:hello.help@gmail.com'>buiro@synergiaenergia.pl</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-12 sm-mt-25'>
                  <div className='footer__area-widget'>
                    <h6>Zasoby</h6>
                    <div className='footer-widget-menu'>
                      <ul>
                        <li>
                          <Link href='/about-us'>O nas</Link>
                        </li>
                        <li>{/* <Link href='/blog'>Blog</Link> */}</li>
                        <li>{/* <Link href='/testimonial'>Testimonials</Link> */}</li>
                        <li>{/* <Link href='/faq'>Faqs</Link> */}</li>
                        <li>
                          <Link href='/contact'>Kontakt</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright__area lg-t-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <p>
                  Copyright 2025 - All Rights Reserved{' '}
                  {/* <Link href='https://themeforest.net/user/themeori/portfolio'>ThemeOri</Link> */}
                </p>
              </div>
              <div className='col-lg-6'>
                <div className='copyright__area-menu t-right lg-t-center lg-mt-5'>
                  <ul>
                    <li style={{ color: '#f4f4f4' }}>
                      Created by <span style={{ color: '#f33633' }}>DigitalSurf</span>
                    </li>
                    {/* <li>
                      <Link href='/contact-two'>Terms and Conditions</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
