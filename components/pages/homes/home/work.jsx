
import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/work-1.jpg";
import image2 from "../../../../public/assets/img/pages/work-2.jpg";
import image3 from "../../../../public/assets/img/pages/work-3.jpg";
import image4 from "../../../../public/assets/img/pages/work-4.jpg";

const WorkArea = () => {
    return (
        <>
            <div className="work__process section-padding">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xl-12">
                            <div className="work__process-title t-center">
                                <span className="subtitle-one">How It Work</span>
                                <h2>Our Work Process</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 dark_image">
                        <div className="col-lg-3 col-sm-6 lg-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 01</span></p>
                                <img src={image1.src} alt="image" />
                                <h6>Solar Assessment</h6>
                                <p className="des">Evaluate energy needs and site feasibility.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 02</span></p>
                                <img src={image2.src} alt="image" />
                                <h6>Innovative Design</h6>
                                <p className="des">Collaborate on customized solar solutions.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-mb-45">
                            <div className="work__process-item">
                                <p><span>Step 03</span></p>
                                <img src={image3.src} alt="image" />
                                <h6>Efficient Installation</h6>
                                <p className="des">Implement seamless solar Panel installations.</p>
                            </div>					
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="work__process-item">
                                <p><span>Step 04</span></p>
                                <img src={image4.src} alt="image" />
                                <h6>Triumph Transition</h6>
                                <p className="des">Monitor and maintain solar systems.</p>
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default WorkArea;