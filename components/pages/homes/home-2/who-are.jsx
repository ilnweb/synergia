import bannerBg1 from "../../../../public/assets/img/shape/shape-16.png";
import image1 from "../../../../public/assets/img/pages/who-we-1.jpg";
import image2 from "../../../../public/assets/img/pages/who-we-2.jpg";
import shape from "../../../../public/assets/img/shape/shape-12.png";

const WhoAre = ({addClass}) => {
    return (
        <>
        <div className={`who__area ${addClass} section-padding`} style={{backgroundImage: `url(${bannerBg1.src})`}}>
            <div className="container">
                <div className="row al-center">
                    <div className="col-xl-6 col-lg-5 lg-mb-25">
                        <div className="who__area-left">
                            <div className="who__area-left-image dark_image">
                                <img src={image1.src} alt="who-we" />
                                <img className="who__area-left-image-shape" src={shape.src} alt="shape" />
                                <div className="who__area-left-image-two">
                                    <img src={image2.src} alt="who-we" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="who__area-right">
                            <div className="who__area-right-title">
                                <span className="subtitle-two">Who We Area</span>
                                <h2>Innovation in Solar Excellence</h2>
                            </div>
                            <div className="who__area-right-btn">
                                <ul className="nav nav-pills gap-4">
                                    <li className="nav-item">
                                      <button className="btn-two" data-bs-toggle="pill" data-bs-target="#technology">Modern Technology</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="btn-two active" data-bs-toggle="pill" data-bs-target="#solar">Solar Solution</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="btn-two" data-bs-toggle="pill" data-bs-target="#philosophy">Philosophy</button>
                                    </li>
                                </ul>	
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade" id="technology">
                                    <div className="who__area-right-tab">
                                        <p>The phrase captures the essence of harnessing solar power not only as a source of clean energy but also as a driving force behind advancements and accomplishments. Picture a scene where the rays of the sun are not merely beams of light but</p>
                                        <div className="who__area-right-tab-list">
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Management</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Accounting</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Award Winning Company</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>We're very professional</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="solar">
                                    <div className="who__area-right-tab">
                                        <p>The phrase captures the essence of harnessing solar power not only as a source of clean energy but also as a driving force behind advancements and accomplishments. Picture a scene where the rays of the sun are not merely beams of light but</p>
                                        <div className="who__area-right-tab-list">
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Management</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Accounting</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Award Winning Company</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>We're very professional</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="philosophy">
                                    <div className="who__area-right-tab">
                                        <p>The phrase captures the essence of harnessing solar power not only as a source of clean energy but also as a driving force behind advancements and accomplishments. Picture a scene where the rays of the sun are not merely beams of light but</p>
                                        <div className="who__area-right-tab-list">
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Management</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Accounting</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>Award Winning Company</span>
                                            <span><i className="fa-sharp fa-solid fa-circle-check"></i>We're very professional</span>
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

export default WhoAre;