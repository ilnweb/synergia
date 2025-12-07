import bgImage from "../../../../public/assets/img/shape/shape-8.png";
import image1 from "../../../../public/assets/img/avatar/avatar-1.jpg";
import image2 from "../../../../public/assets/img/about/about-4.jpg";
import CircleBar from "../../common/circle-bar";

const About = () => {
    return (
        <div className="about__three section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-7 lg-mb-25">
                        <div className="about__three-left">
                            <div className="about__three-left-title">
                                <span className="subtitle-three">We're the best</span>
                                <h2>Solar Powering Your Sustainable Scene</h2>
                            </div>
                            <div className="row al-center">
                                <div className="col-xl-4 col-md-5">
                                    <div className="about__three-left-author dark_image">
                                        <img src={image1.src} alt="avatar" />
                                        <h6>Roberto Lewis</h6>
                                        <span>Founder of CEO</span>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7">
                                    <div className="about__three-left-content">
                                        <p>Solar Powering Your Sustainable Scene" is a vibrant and compelling phrase that conveys the idea of integrating solar energy into</p>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="about__three-left-progress">
                                                    <CircleBar progressBar={86} />
                                                    <h6>Successful</h6>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="about__three-left-progress">
                                                    <CircleBar progressBar={67} />
                                                    <h6>Branching</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about__three-right t-right dark_image">
                            <img src={image2.src} alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;