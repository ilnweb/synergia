import Link from 'next/link';
import logo2 from '../../../public/assets/img/logo-2.png';
import logo3 from '../../../public/assets/img/logo-3.png';
import logo4 from '../../../public/assets/img/logo-5.png';
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen, addClass }) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup ${addClass} ${isOpen ? 'active' : ''}`}
      >
        <div className='sidebar-close-btn' onClick={() => setIsOpen(false)}>
          <i className='fal fa-times'></i>
        </div>
        <div className='header__area-menubar-right-sidebar-popup-logo'>
          <Link href='/'>
            <img className='logo_one' src={logo2.src} alt='logo' />
            <img className='logo_two' src={logo3.src} alt='logo' />
            <img className='logo_three' src={logo4.src} alt='logo' />
          </Link>
        </div>
        <p>
          Synergia Energia to lider w dziedzinie odnawialnych źródeł energii. Specjalizujemy się w
          instalacjach fotowoltaicznych, pompach ciepła i kompleksowych rozwiązaniach energetycznych.
        </p>
        <div className='header__area-menubar-right-sidebar-popup-contact'>
          <h4 className='mb-30'>Skontaktuj się z nami</h4>
          <div className='header__area-menubar-right-sidebar-popup-contact-item'>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-icon'>
              <i className='fal fa-phone-alt icon-animation'></i>
            </div>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-content'>
              <span>Zadzwoń teraz</span>
              <h6>
                <Link href='tel:+48698454913'>+48 698 454 913</Link>
              </h6>
            </div>
          </div>
          <div className='header__area-menubar-right-sidebar-popup-contact-item'>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-icon'>
              <i className='fal fa-envelope'></i>
            </div>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-content'>
              <span>Napisz do nas</span>
              <h6>
                <Link href='mailto:biuro@synergiaenergia.pl'>biuro@synergiaenergia.pl</Link>
              </h6>
            </div>
          </div>
          <div className='header__area-menubar-right-sidebar-popup-contact-item'>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-icon'>
              <i className='fal fa-map-marker-alt'></i>
            </div>
            <div className='header__area-menubar-right-sidebar-popup-contact-item-content'>
              <span>Adres biura</span>
              <h6>
                <Link
                  href='https://www.google.com/maps/place/Synergia+energia/@50.890887,20.672871,996m/data=!3m1!1e3!4m6!3m5!1s0x471827b8062ebb57:0xce5a6c93a76ee922!8m2!3d50.8908871!4d20.6728707!16s%2Fg%2F11n85vxb7g?hl=pl&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                >
                  Jana Nowaka-Jeziorańskiego 121, 25-408 Kielce
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className='header__area-menubar-right-sidebar-popup-social social__icon'>
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
    </>
  );
};

export default SideBar;
