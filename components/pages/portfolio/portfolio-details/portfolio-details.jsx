import React from 'react';
import image1 from '../../../../public/assets/img/portfolio/portfolio-7.jpg';
import image2 from '../../../../public/assets/img/portfolio/portfolio-8.jpg';
import image3 from '../../../../public/assets/img/portfolio/portfolio-9.jpg';

const PortfolioDetailsMain = ({singleData}) => {
    return (
        <div className="portfolio__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio__details-image dark_image">
                            <img src={singleData.image.src} alt="portfolio" />
                            <div className="portfolio__details-meta">
                                <div className="portfolio__details-meta-item">
                                    <span>Date :</span>
                                    <h6>21 April, 2024</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Category :</span>
                                    <h6>{singleData.title}</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Customer :</span>
                                    <h6>ThemeOri</h6>
                                </div>
                                <div className="portfolio__details-meta-item">
                                    <span>Locations :</span>
                                    <h6>Preston Rd. Inglewood,</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>About Project</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>Graphic design is a creative and visual communication discipline that involves the art and practice of planning and projecting ideas and experiences with visual and textual content. It is a versatile field used in various media, such as print, digital, and multimedia, to convey messages, concepts, or information in an aesthetically pleasing and impactful manner.</p>
                        <p>Graphic designers use various software tools like Adobe Photoshop, Illustrator, InDesign, and others to create their designs. The field continues to evolve with technological advancements and changing design trends, but the fundamental principles of visual communication and creativity remain at its core. Graphic design is integral to marketing,</p>
                    </div>
                </div>
                <div className="row mt-30 dark_image">
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={image1.src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src={image2.src} alt="portfolio" />
                    </div>
                    <div className="col-sm-4">
                        <img className="img__full" src={image3.src} alt="portfolio" />
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>The Challenges</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>Graphic design is a creative and visual communication discipline that involves the art and practice of planning and projecting ideas and experiences with visual and textual content. It is a versatile field used in various media, such as print, digital, and multimedia, to convey messages, concepts, or information in an aesthetically pleasing and impactful manner.</p>
                        <p>Graphic designers use various software tools like Adobe Photoshop, Illustrator, InDesign, and others to create their designs. The field continues to evolve with technological advancements and changing design trends, but the fundamental principles of visual communication and creativity remain at its core. Graphic design is integral to marketing,</p>
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>The Solutions</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>Graphic design is a creative and visual communication discipline that involves the art and practice of planning and projecting ideas and experiences with visual and textual content. It is a versatile field used in various media, such as print, digital, and multimedia,</p>
                        <p>Graphic designers use various software tools like Adobe Photoshop, Illustrator, InDesign, and others to create their designs. The field continues to evolve with ,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;