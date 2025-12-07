import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul>
                <li className='menu-item-has-children'><Link href='#'>Home</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/'>Solar Energy</Link></li>
                        <li><Link href='/home-two'>Wind Energy</Link></li>
                        <li><Link href='/home-three'>Renewable Energy</Link></li>
                    </ul>
                </li>  
                <li className='menu-item-has-children'><Link href='#'>Pages</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/about-us'>About Us</Link></li>
                        <li className='menu-item-has-children'><Link href='#'>Services</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/services'>Services 01</Link></li>
                                <li><Link href='/services-two'>Services 02</Link></li>
                                <li><Link href='/services/panel-installation'>Services Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/pricing-plans'>Price Plans</Link></li>
                        <li><Link href='/faq'>FAQ's</Link></li>
                        <li><Link href='/testimonial'>Testimonials</Link></li>
                        <li className='menu-item-has-children'><Link href='#'>Teams</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/team'>Team 01</Link></li>
                                <li><Link href='/team-two'>Team 02</Link></li>
                                <li><Link href='/team-three'>Team 03</Link></li>
                                <li><Link href='/team/lisa-thompson'>Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/request-quote'>Request Quote</Link></li>
                        <li><Link href='/404-error'>404 Page</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Project</Link>
                    <ul className='sub-menu'>
                        <li className='menu-item-has-children'><Link href='#'>Project Grid</Link>
                            <ul className='sub-menu'>
                                <li><Link href='/portfolio/2-columns'>2 Columns</Link></li>
                                <li><Link href='/portfolio/3-columns'>3 Columns</Link></li>
                                <li><Link href='/portfolio/4-columns'>4 Columns</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/portfolio/agricultural-facilities'>Project Details</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Blog</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/blog'>Blog Grid</Link></li>
                        <li><Link href='/blog-standard'>Blog Standard</Link></li>
                        <li><Link href='/blog/impact-of-energy-on-reducing-carbon-footprint'>Blog Details</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='#'>Contact</Link>
                    <ul className='sub-menu'>
                        <li><Link href='/contact'>Contact Style 01</Link></li>
                        <li><Link href='/contact-two'>Contact Style 02</Link></li>
                    </ul>
                </li>      
            </ul>  
        </>
    );
};

export default MainMenu;