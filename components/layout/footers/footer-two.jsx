import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-3.png";
import ctaBg from "../../../public/assets/img/shape/shape-17.png";
import footerBg from "../../../public/assets/img/shape/shape-13.png";
import servicesData from "@/components/data/services-data";
import blogData from "@/components/data/blog-data";

const FooterTwo = () => {
    return (
        <>
        <div className="footer__cta two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer__cta-area"  style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="row al-center">
                                <div className="col-lg-6 lg-mb-25">
                                    <div className="footer__cta-area-left">
                                        <h3>Join Our Solar Updates Community</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer__cta-form">
                                        <form action="#">
                                            <input type="text" name="email" placeholder="Email Address" required="required" />
                                            <button className="btn-two" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__area two" style={{backgroundImage: `url(${footerBg.src})`}}>
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
                            <div className="col-md-6 col-sm-5 sm-mb-25">
                                <div className="footer__area-widget ml-40 lg-ml-0">
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
                            <div className="col-md-6 col-sm-7">
                                <div className="footer__area-widget">
                                    <h6>Recent Post</h6>
                                    <div className="all__sidebar-item-post dark_image">
                                        {blogData?.slice(0, 2)?.map((data, id) => (
                                            <div className="post__item" key={id}>
                                                <div className="post__item-image">
                                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="" /></Link>
                                                </div>
                                                <div className="post__item-title">
                                                    <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                                    <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2024</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>					
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__area two lg-t-center">
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

export default FooterTwo;