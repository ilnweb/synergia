'use client';
import Social from '@/components/data/social';
import Link from 'next/link';
import MainMenu from './header-menu';
import Search from './search';
import { useState } from 'react';
import SideBar from './offcanvas';
import logo1 from '../../../public/assets/img/logo-1.png';
import logo2 from '../../../public/assets/img/logo-2.png';
import SynergyLogo from '@/components/ui/SynergyLogo';
import MobileMenuPopup from './mobile-menu/menu-area';

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      <div className='topBar__one'>
        <div className='custom__container'>
          <div className='row al-center'>
            <div className='col-lg-8'>
              <div className='topBar__one-left lg-t-center'>
                <ul>
                  <li>
                    <Link href='mailto:buiro@synergiaenergia.pl'>
                      <i className='flaticon-envelope'></i>buiro@synergiaenergia.pl
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.google.com/maps/place/Synergia+energia/@50.890887,20.672871,996m/data=!3m1!1e3!4m6!3m5!1s0x471827b8062ebb57:0xce5a6c93a76ee922!8m2!3d50.8908871!4d20.6728707!16s%2Fg%2F11n85vxb7g?hl=pl&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'
                      target='_blank'
                    >
                      <i className='flaticon-placeholder'></i>Jana Nowaka-Jeziorańskiego 121, 25-408
                      Kielce
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='topBar__one-right t-right lg-t-center'>
                <div className='topBar__one-right-social'>
                  <h6>Obserwuj nas</h6>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header__area'>
        <div className='custom__container'>
          <div className='header__area-menubar'>
            <div className='header__area-menubar-left one'>
              <div className='header__area-menubar-left-logo'>
                <Link href='/'>
                  <SynergyLogo />
                </Link>
              </div>
            </div>
            <div className='header__area-menubar-center'>
              <div className='header__area-menubar-center-menu'>
                <MainMenu />
              </div>
            </div>
            <div className='header__area-menubar-right'>
              {/* <div className='header__area-menubar-right-sidebar'>
                <div
                  className='header__area-menubar-right-sidebar-popup-icon'
                  onClick={() => setSidebarOpen(true)}
                >
                  <i className='flaticon-menu-2'></i>
                </div>
              </div> */}
              <div className='header__area-menubar-right-btn'>
                <Link className='btn-one' href='/request-quote'>
                  Porozmawiajmy
                </Link>
              </div>
              <div className='header__area-menubar-right-responsive-menu menu__bar'>
                <i className='flaticon-menu-2' onClick={() => setMenuSidebar(true)}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo2}
        addClass=''
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default HeaderOne;
