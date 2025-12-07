import image1 from "../../../../public/assets/img/about/about-3.jpg";
import bannerBg1 from "../../../../public/assets/img/shape/shape-14.png";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    return (
        <>
            <div className="about__two section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about__two-area" style={{backgroundImage: `url(${bannerBg1.src})`}}>
                                <div className="about__two-left lg-mb-25">
                                    <div className="about__two-left-image dark_image">
                                        <img src={image1.src} alt="about" />
                                        <div className="about__two-left-image-experience">
                                            <h2><Count number={32}/> +</h2>
                                            <h6>Working Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__two-right">
                                    <div className="about__two-right-title">
                                        <span className="subtitle-two">Our Company</span>
                                        <h2>Crafting Solar Brilliance Together</h2>
                                        <p>Our design philosophy is more than aesthetics; it's a dynamic Process That delves into the heart of each brand</p>
                                    </div>
                                    <div className="about__two-right-list">
                                        <i className="flaticon-profit"></i>
                                        <div>
                                            <h6>Financial Savings</h6>
                                            <p>From captivating logos that serve as Brand ambassadors to</p>
                                        </div>
                                    </div>
                                    <div className="about__two-right-bottom">
                                        <Link className="btn-two" href="/about-us">Discover more</Link>								
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter__one section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="counter__one-grid">
                                <div className="counter__one-item">
                                    <h2><Count number={98}/>%</h2>
                                    <span>Project Success Rate</span>
                                </div>
                                <div className="counter__one-item">
                                    <h2><Count number={93}/>%</h2>
                                    <span>Satisfaction Clients</span>
                                </div>
                                <div className="counter__one-item">
                                    <h2><Count number={21}/>k</h2>
                                    <span>Installed Capacity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;