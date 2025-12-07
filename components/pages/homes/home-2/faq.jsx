import React from 'react';
import FaqOne from '../../faq/faq-one';
import Count from '../../common/count';

const Faq = ({addClass}) => {
    return (
        <>
        <div className={`faq__one ${addClass} section-padding pt-0`}>
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-6 lg-mb-25">
                        <div className="faq__one-title">
                            <span className="subtitle-two">FAQs. answer</span>
                            <h2>Unlock Answers Explore FAQs</h2>
                            <p>The phrase captures the essence of harnessing solar power not only as a source of clean energy,</p>
                            <div className="faq__one-title-box">
                                <i className="flaticon-trophy-1"></i>
                                <div className="faq__one-title-box-content">
                                    <h3><Count number={22}/>+</h3>
                                    <span>Winning award</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <FaqOne />				
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Faq;