import React from 'react';
import PricingPlansMain from '../../pricing-plans/pricing-plans';
import bannerBg1 from "../../../../public/assets/img/shape/shape-8.png";

const Pricing = ({addClass}) => {
    return (
        <>
        <div className={`pricing__area ${addClass} section-padding`} style={{backgroundImage: `url(${bannerBg1.src})`}}>
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="pricing__area-title t-center">
                            <span className="subtitle-two">Pricing Plan</span>
                            <h2>Pricing Overview</h2>
                        </div>
                    </div>
                </div>
                <PricingPlansMain />
            </div>
        </div>
        </>
    );
};

export default Pricing;