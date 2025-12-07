import React from 'react';
import shape1 from "../../../../public/assets/img/shape/shape-11.png";
import shape2 from "../../../../public/assets/img/shape/shape-11-dark.png";
import image from "../../../../public/assets/img/pages/consultation.jpg";
import avatar from "../../../../public/assets/img/avatar/user.png";

const Consultation = ({addClass}) => {
    return (
        <>
        <div className={`consultation__area section-padding ${addClass}`}>
            <img className="about__one-shape dark-n" src={shape1.src} alt="shape" />
            <img className="about__one-shape light-n" src={shape2.src} alt="shape" />
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-6 lg-mb-25">
                        <div className="consultation__area-left t-right dark_image">
                            <img src={image.src} alt="choose" />
                            <div className="content">
                                <img src={avatar.src} alt="user" />
                                <p><span>25,000</span> Customer Satisfaction services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="consultation__area-right">
                            <div className="consultation__area-right-title">
                                <span className="subtitle-three">consultation</span>
                                <h2>High Quality Solar Energy Solutions</h2>
                                <p>Solar Powering Your Sustainable Scene is a vibrant and compelling phrase that conveys the idea of integrating solar energy,</p>
                            </div>
                            <div className="consultation__area-right-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="consultation__area-right-list-item sm-mb-25" data-background="assets/img/shape/shape-19.png">
                                            <div className="consultation__area-right-list-item-icon">
                                                <i className="flaticon-targeting"></i>
                                            </div>
                                            <div className="consultation__area-right-list-item-content">
                                                <h6>Company Mission</h6>
                                                <p>Harness the power of water with our AquaForce.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="consultation__area-right-list-item" data-background="assets/img/shape/shape-19.png">
                                            <div className="consultation__area-right-list-item-icon">
                                                <i className="flaticon-achievement"></i>
                                            </div>
                                            <div className="consultation__area-right-list-item-content">
                                                <h6>Company Vision</h6>
                                                <p>Wind turbines Powering a greener tomorrow.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                    
        </>
    );
};

export default Consultation;