import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-5.png";
import ctaBg from "../../../public/assets/img/shape/shape-17.png";
import footerBg from "../../../public/assets/img/shape/shape-13.png";
import servicesData from "@/components/data/services-data";

const FooterThree = () => {
    return (
        <>
        <div className="footer__cta three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__cta-area" style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="footer__cta-area-item">
                                <i className="flaticon-phone-call"></i>
                                <span>Help Center</span>
                                <h6><Link href="tel:+123(456)25658">+123(456)256 58</Link></h6>
                            </div>
                            <div className="footer__cta-area-item">
                                <i className="flaticon-mail"></i>
                                <span>Email Address</span>
                                <h6><Link href="mailto:hello.help@gmail.com">hello.help@gmail.com</Link></h6>
                            </div>
                            <div className="footer__cta-area-item">
                                <i className="flaticon-location-1"></i>
                                <span>Location</span>
                                <h6><Link href="https://google.com/maps">12/A, New Boston, NYC</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__area three" style={{backgroundImage: `url(${footerBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 lg-mb-25">
                        <div className="row">
                            <div className="col-lg-8 col-sm-7 sm-mb-25">
                                <div className="footer__area-widget">
                                    <div className="logo">
                                        <Link href="/"><img src={logo.src} alt="Logo-image" /></Link>
                                    </div>
                                    <div className="footer__area-widget-company">
                                        <p>Solar energy is generated when sunlight strikes solar panels, creating</p>
                                        <div className="social__icon mt-60">
                                            <Social />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-5">
                                <div className="footer__area-widget">
                                    <h6>Company</h6>
                                    <div className="footer-widget-menu">
                                        <ul>
                                            <li><Link href="/about-us">About Us</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><Link href="/testimonial">Testimonials</Link></li>
                                            <li><Link href="/faq">Faqs</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-sm-5 sm-mb-25">
                                <div className="footer__area-widget">
                                    <h6>Our Services</h6>
                                    <div className="footer-widget-menu">
                                        <ul>
                                            {servicesData?.slice(0, 5)?.map((data, id) => (
                                                <li key={id}><Link href={`/services/${data.id}`}>{data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="footer__area-widget">
                                    <h6>Subscribe</h6>
                                    <div className="footer__area-widget-subscribe">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email Address" required="required" />
                                            <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                            <label><input type="checkbox" />I agree with the terms and conditions</label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area three lg-t-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Copyright 2024 - All Rights Reserved By <Link href="https://themeforest.net/user/themeori/portfolio">ThemeOri</Link></p>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright__area-menu t-right lg-t-center lg-mt-5">
                                <ul>
                                    <li><Link href="/contact-two">Privacy & Policy</Link></li>
                                    <li><Link href="/contact-two">Terms and Conditions</Link></li>
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

export default FooterThree;