import FaqOne from './faq-one';
import FaqTwo from './faq-two';
import image1 from "../../../public/assets/img/pages/faq-1.jpg";
import image2 from "../../../public/assets/img/pages/faq-2.jpg";

const FaqPage = () => {
    return (
        <>
            <div className="faq-area section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-mb-20">
                            <FaqOne />	
                        </div>
                        <div className="col-lg-6">
                            <FaqTwo />	
                        </div>
                    </div>
                </div>
            </div>   
            <div className="faq__page section-padding">
                <div className="container">
                    <div className="row al-center">
                        <div className="col-lg-6 lg-mb-30">
                            <div className="faq__page-left">
                                <div className="faq__page-left-image dark_image">
                                    <img src={image1.src} alt="faq-image" />
                                    <img className="faq__page-left-image-one" src={image2.src} alt="faq-image" />
                                    <div className="faq__page-left-image-question left-right-animate">
                                        <div className="faq__page-left-image-question-icon page">
                                            <i className="fa-sharp fa-solid fa-question"></i>
                                        </div>
                                        <h6>Have any questions?</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq__page-right">
                                <div className="faq__page-right-title mb-40">
                                    <span className="subtitle-one">Faq Questions</span>
                                    <h2>Unlock Answers Explore FAQs</h2>
                                </div>
                                <div id="accordionExample">
                                    <div className="faq__area-item">
                                        <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne"><span>01.</span>How much solar energy is needed?</h6>
                                        <div id="collapseOne" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo"><span>02.</span>How much solar power is enough?</h6>
                                        <div id="collapseTwo" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree"><span>03.</span>How many solar panels can I have?</h6>
                                        <div id="collapseThree" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
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

export default FaqPage;