import React from 'react';
import Link from 'next/link';
import ctaBg from "../../../../public/assets/img/shape/shape-6.png";

const CtaArea = () => {
    return (        
        <div className="cta__one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cta__one-area" style={{backgroundImage: `url(${ctaBg.src})`}}>
                            <div className="row align-items-center">
                                <div className="col-lg-7 lg-mb-25">
                                    <div className="cta__one-title lg-t-center">
                                        <h3>Harness the Sun<br/>Get Solar Power Today!</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="cta__one-contact lg-jc-center">
                                        <div className="cta__one-contact-icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="cta__one-contact-info">
                                            <span>Free contact 24/7</span>
                                            <h6><Link href="tel:+123(568)584856">+123 (568) 584 856</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaArea;