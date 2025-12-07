import React from 'react';

const FaqOne = () => {
    return (
        <>
        <div id="accordionExample1">
            <div className="faq__area-item">
                <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne1"><span>01.</span>How much solar energy is needed?</h6>
                <div id="collapseOne1" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample1">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo2"><span>02.</span>How much solar power is enough?</h6>
                <div id="collapseTwo2" className="faq__area-item-body collapse" data-bs-parent="#accordionExample1">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
            <div className="faq__area-item">
                <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree3"><span>03.</span>How many solar panels can I have?</h6>
                <div id="collapseThree3" className="faq__area-item-body collapse" data-bs-parent="#accordionExample1">
                    <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                </div>
            </div>
        </div> 
        </>
    );
};

export default FaqOne;