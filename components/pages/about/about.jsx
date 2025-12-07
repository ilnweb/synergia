import Link from "next/link";
import SkillBarItem from "../common/skill-bar";
import bg2 from "../../../public/assets/img/shape/shape-20.jpg";
import CounterSection from "../common/counter";
import Team from "../homes/home/team";
import Consultation from "../homes/home-3/consultation";


const AboutMain = () => {
    return (
        <>
            <div className="about__four section-padding pt-0">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-6 lg-mb-25">
                            <div className="about__four-left">
                                <div className="about__four-left-image dark_image">
                                    <div className="about__four-left-image-one">
                                        <img src="assets/img/about/about-5.jpg" alt="about" />
                                    </div>
                                    <div className="about__four-left-image-two">
                                        <img src="assets/img/about/about-6.jpg" alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__four-right">
                                <div className="about__four-right-title">
                                    <span className="subtitle-one">About us</span>
                                    <h2>Rays of Progress & Solar Success</h2>
                                    <p>Rays of Progress & Solar Success serves as a powerful beacon, embodying the transformative journey toward a future powered by the boundless Energy of the sun. It's a vision where each</p>
                                </div>
                                <div className="about__four-right-list">
                                    <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Management</span>
                                    <span><i className="fa-sharp fa-solid fa-circle-check"></i>Award Winning Company</span>
                                </div>
                                <Link className="btn-one" href="/about-us">Explore now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CounterSection addClass="page" />
            <div className="experience__area section-padding" style={{backgroundImage: `url(${bg2.src})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-mb-25">
                            <div className="experience__area-left">
                                <div className="experience__area-left-title">
                                    <span className="subtitle-one">Our Experience</span>
                                    <h2>Solar Team Experience area</h2>
                                    <p>Business, or everyday living, imagine a world where solar success is not just an aspiration but a reality driven by the Rays of the sun. It's a vision where the</p>
                                </div>
                                <div className="about__one-right-skill">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Hybrid Energy</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={76} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Solar Panel</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={85} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <h6>Wind Turbines</h6>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="experience__area-image dark_image">
                                <img src="assets/img/pages/experience.jpg" alt="experience" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding pb-0">
                <Team />                
            </div>
            <Consultation addClass="page" />
        </>
    );
};

export default AboutMain;