import Link from 'next/link';
import React from 'react';
import image from "../../../../public/assets/img/pages/choose-us-1.jpg";

const ChooseUs = () => {
    return (
        <>
            <div className="choose__us section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="choose__us-area">
                                <div className="choose__us-area-title">
                                    <span className="subtitle-one">Why Choose US</span>
                                    <h2>Solar Leaders Your Ideal Partner</h2>
                                    <p>Trust is not just a word for us; it's a commitment woven into the Fabric of our interactions. Clients place their confidence in us Because we consistently</p>
                                </div>
                                <div className="choose__us-area-list">
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-deal"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Partner Awaits</h6>									
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-talk"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Meets Commitment</h6>									
                                        </div>
                                    </div>
                                    <div className="choose__us-area-list-item">
                                        <i className="flaticon-global-shipping"></i>
                                        <div className="choose__us-area-list-item-bottom">
                                            <h6>Global Expertise</h6>									
                                        </div>
                                    </div>
                                </div>
                                <div className="choose__us-area-bottom">
                                    <Link className="btn-one" href="/about-us">Own Tomorrow</Link>
                                    <div className="choose__us-area-bottom-tel sm-mt-25">
                                        <h6>If your have any Questions<br/>Feel free to contact <Link href="tel:+123(548)5256"> +123 (548) 5256</Link></h6>
                                    </div>
                                </div>
                                <div className="choose__us-area-image dark_image">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ChooseUs;