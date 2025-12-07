import React from 'react';

const FaqTwo = () => {
    return (
        <>
        <div id="accordionExamplePage">
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"><span>04.</span>How much solar energy is needed?</h6>
                <div id="collapseFour" className="faq__area-item-body collapse" data-bs-parent="#accordionExamplePage">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseFive"><span>05.</span>How much solar power is enough?</h6>
                <div id="collapseFive" className="faq__area-item-body collapse show" data-bs-parent="#accordionExamplePage">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix"><span>06.</span>How many solar panels can I have?</h6>
                <div id="collapseSix" className="faq__area-item-body collapse" data-bs-parent="#accordionExamplePage">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default FaqTwo;