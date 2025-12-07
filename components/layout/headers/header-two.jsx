"use client";
import Social from '@/components/data/social';
import Link from 'next/link';
import MainMenu from './header-menu';
import Search from './search';
import { useState } from 'react';
import SideBar from './offcanvas';
import logo1 from "../../../public/assets/img/logo-1.png";
import logo2 from "../../../public/assets/img/logo-3.png";
import MobileMenuPopup from './mobile-menu/menu-area';

const HeaderOne = ({addClass}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
        <div className="topBar__one two">
            <div className="custom__container">
                <div className="row al-center">
                    <div className="col-lg-8">
                        <div className="topBar__one-left lg-t-center">
                            <ul>
                                <li><Link href="mailto:need.help@gmail.com"><i className="flaticon-envelope"></i>need.help@gmail.com</Link></li>
                                <li><Link href="https://google.com/maps"><i className="flaticon-placeholder"></i>2464 Royal Ln. Mesa, New Jersey 45463</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="topBar__one-right t-right lg-t-center">
                            <div className="topBar__one-right-social">
                                <h6>Follow Us</h6>
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__area two">
            <div className="custom__container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu two">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-search">
                            <div className="search">	
                                <span className="header__area-menubar-right-search-icon open" onClick={() => setSearch(true)}>
                                    <i className="fal fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-sidebar">
                            <div className="header__area-menubar-right-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                <i className="flaticon-menu-2"></i>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-btn">						
                            <Link className="btn-two" href="/request-quote">Talk with us</Link>
                        </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-2" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} addClass={addClass} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} addClass="two" />
        <Search isOpen={search} setIsOpen={setSearch} addClass={addClass} />
        </>
    );
};

export default HeaderOne;