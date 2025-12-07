import React from 'react';
import SkillBarItem from '../../common/skill-bar';
import bannerBg1 from "../../../../public/assets/img/shape/shape-16.png";
import image from "../../../../public/assets/img/pages/choose-us-2.jpg";
import avatar from "../../../../public/assets/img/avatar/user.png";

const  ChooseUs = ({addClass}) => {
    return (
        <>
        <div className={`choose__area ${addClass} section-padding pt-0`} style={{backgroundImage: `url(${bannerBg1.src})`}}>
            <div className="container">
                <div className="row al-end">
                    <div className="col-xl-6 col-lg-7 lg-mb-25">
                        <div className="choose__area-left">
                            <div className="choose__area-left-title">
                                <span className="subtitle-two">Why Choose Us</span>
                                <h2>Proven Excellence Client's Choice</h2>
                                <p>Business, or everyday living, imagine a world where solar success is not just an aspiration but a reality driven by the</p>
                            </div>
                            <div className="choose__area-left-list">
                                <div className="row">
                                    <div className="col-sm-5 col-6">
                                        <div className="choose__area-left-list-item">
                                            <i className="flaticon-trust"></i>
                                            <h6>Trusted Results</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 col-6">
                                        <div className="choose__area-left-list-item">
                                            <i className="flaticon-reputation"></i>
                                            <h6>Client Satisfaction</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choose__area-left-skill">
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
                                        <h6>Wind Turbines</h6>
                                    </div>
                                    <div className="skill__area-item-inner">
                                        <SkillBarItem countUp={60} />
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="choose__area-right dark_image t-right">
                            <img src={image.src} alt="choose" />
                            <div className="content">
                                <img src={avatar.src} alt="user" />
                                <p><span>25,000</span> Customer Satisfaction services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default  ChooseUs;