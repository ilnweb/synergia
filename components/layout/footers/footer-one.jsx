import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import ctaBg from "../../../public/assets/img/shape/shape-7.png";
import avatar from "../../../public/assets/img/avatar/avatar-5.png";
import footerBg from "../../../public/assets/img/shape/shape-13.png";

const FooterOne = () => {
    return (
        <>
        <div className="footer__cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__cta-area" style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="row al-center">
                                <div className="col-lg-9">
                                    <div className="footer__cta-area-left">
                                        <h3>Harness the Sun Get Solar Power Today!</h3>
                                        <div className="footer__cta-area-left-btn lg-jc-center">
                                            <Link className="btn-one" href="/request-quote">Start Today</Link>
                                            <div className="footer__cta-area-left-btn-tel author">
                                                <i className="flaticon-phone-call"></i>
                                                <div className="info">
                                                    <span>Need any help</span>
                                                    <h6><Link href="tel:+123(548)5256">+123 (548) 5256</Link></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 lg-mt-25">
                                    <div className="footer__cta-area-right t-right lg-t-center">
                                        <div className="footer__cta-area-right-image dark_image">
                                            <img src={avatar.src} alt="avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__area" style={{backgroundImage: `url(${footerBg.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 lg-mb-25">
                        <div className="footer__area-widget">
                            <div className="logo">
                                <Link href="/"><img src={logo.src} alt="Logo-image" /></Link>
                            </div>
                            <div className="footer__area-widget-company">
                                <p><Link href="https://google.com/maps">8502 Preston Rd. Inglewood, Maine 98380 US</Link></p>
                                <div className="social__icon mt-60">
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7">
                        <div className="row">
                            <div className="col-sm-6 col-12 sm-mt-25">
                                <div className="footer__area-widget">
                                    <h6>Phone</h6>
                                    <div className="footer__area-widget-info mb-35">
                                        <p><Link href="tel:+12(456)65878">+12(456)658 78</Link></p>
                                        <p><Link href="tel:+12(518)45145">+12(518)451 45</Link></p>
                                    </div>
                                    <h6>Email</h6>
                                    <div className="footer__area-widget-info">
                                        <p><Link href="mailto:hello.help@gmail.com">hello.help@gmail.com</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12 sm-mt-25">
                                <div className="footer__area-widget">
                                    <h6>Resources</h6>
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
                    <div className="col-lg-4 col-md-6 lg-mt-25">
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
            <div className="copyright__area lg-t-center">
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

export default FooterOne;