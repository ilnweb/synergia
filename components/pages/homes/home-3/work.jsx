import React, { useState } from 'react';
import workBg from "../../../../public/assets/img/shape/shape-16.png";
import image from "../../../../public/assets/img/pages/work-5.jpg";
import ModalVideo from 'react-modal-video';

const Work = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    }; 
    return (
        <>
        <div className="work__area section-padding" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row al-center">
                    <div className="col-lg-6 lg-mb-25">
                        <div className="work__area-left">
                            <div className="work__area-left-title">
                                <span className="subtitle-three">Our Work</span>
                                <h2>Innovators in Energy Solutions</h2>
                                <p>The phrase captures the essence of harnessing solar power not only as a source of clean energy but also as a driving force behind advancements</p>
                            </div>
                            <div className="work__area-left-list">
                                <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Management</span>
                                <span><i className="fa-sharp fa-solid fa-circle-check"></i>Business Accounting</span>
                                <span><i className="fa-sharp fa-solid fa-circle-check"></i>Award Winning Company</span>
                                <span><i className="fa-sharp fa-solid fa-circle-check"></i>We're very professional</span>
                            </div>
                            <a className="btn-three" href="about.html">Explore now</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="work__area-right t-right dark_image">
                            <img src={image.src} alt="work" />
                            <div className="work__area-right-icon video video-pulse">
                                <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default Work;