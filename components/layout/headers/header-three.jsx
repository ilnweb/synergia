"use client";
import Social from '@/components/data/social';
import Link from 'next/link';
import MainMenu from './header-menu';
import Search from './search';
import { useState } from 'react';
import SideBar from './offcanvas';
import logo1 from "../../../public/assets/img/logo-4.png";
import logo2 from "../../../public/assets/img/logo-5.png";
import MobileMenuPopup from './mobile-menu/menu-area';

const HeaderOne = ({addClass}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
        <div className="topBar__three">
            <div className="custom__container">
                <div className="row al-center">
                    <div className="col-lg-2">
                        <div className="topBar__three-left">
                            <div className="topBar__three-left-logo lg-t-center">
                            <Link href="/">
                                <img className='dark-n' src={logo1.src} alt="logo" />
                                <img className='light-n' src={logo2.src} alt="logo" />
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="topBar__three-right lg-jc-center">
                            <div className="topBar__three-right-item">
                                    <i className="flaticon-phone-call"></i>
                                <div className="topBar__three-right-item-info">
                                    <span>Phone Number</span>
                                    <h6><Link href="tel:+123(568)58486">+123 (568) 584 86</Link></h6>
                                </div>
                            </div>
                            <div className="topBar__three-right-item">
                                    <i className="flaticon-mail"></i>
                                <div className="topBar__three-right-item-info">
                                    <span>Email Address</span>
                                    <h6><Link href="mailto:hello.help@gmail.com">hello.help@gmail.com</Link></h6>
                                </div>
                            </div>
                            <div className="topBar__three-right-social social__icon">
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__area three">
            <div className="custom__container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu three">
                            <MainMenu />
                        </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-2" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-search">
                            <div className="search">	
                                <span className="header__area-menubar-right-search-icon open" onClick={() => setSearch(true)}>
                                    <i className="fal fa-search"></i></span>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-sidebar">
                            <div className="header__area-menubar-right-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                <i className="flaticon-menu-2"></i>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-btn">						
                            <Link className="btn-three" href="/request-quote">Get In touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} addClass={addClass} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} addClass="three" />
        <Search isOpen={search} setIsOpen={setSearch} addClass={addClass} />
        </>
    );
};

export default HeaderOne;