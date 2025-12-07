import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesSingleMain = ({serviceDetails}) => {
    return (
        <>
        <div className="service__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 lg-mb-50">
                        <div className="all__sidebar mr-25">
                            <div className="all__sidebar-item">
                                <h6>Our Solutions</h6>
                                <div className="all__sidebar-item-category">
                                    <ul>
                                        {servicesData.slice(0, 5).map((data, id) => (
                                            <li key={id}><Link href={`/services/${data.id}`}>{data.title}<i className="fa-regular fa-arrow-right"></i></Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="all__sidebar-item">
                                <h6>Download</h6>
                                <div className="all__sidebar-item-download">
                                    <ul>
                                        <li><Link href="#"><div><i className="fa-light fa-file-word"></i>Company Details</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        <li><Link href="#"><div><i className="fa-light fa-file-pdf"></i>Our Brochures</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                    </ul>                            
                                </div>
                            </div>
                            <div className="all__sidebar-item-help mt-30" style={{backgroundImage: `url(${serviceDetails.image.src})`}}>
                                <div className="all__sidebar-item-help-icon">
                                    <i className="fal fa-phone-alt"></i>
                                </div>
                                <h5> Easy solutions to your home beauty</h5>
                                <div className="all__sidebar-item-help-contact">
                                    <div className="all__sidebar-item-help-contact-content">
                                        <span>Quick Help</span>
                                        <h6><Link href="tel:+125(895)658568">+125 (895) 658 568</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="service__details-content">
                            <div className="service__details-content-image dark_image">
                                <img src={serviceDetails?.image.src} alt="image" />
                            </div>
                            <h3>{serviceDetails?.title}</h3>
                            <p>Product UI/UX Design is a critical aspect of developing digital products, including websites, mobile apps, and software applications. UI stands for User Interface, while UX stands for User Experience. Both UI and UX design work together to ensure that a product is not only visually appealing but also user-friendly and functional. Here's a detailed description of each</p>
                            <p>UI design focuses on the aesthetics and visual elements of a digital product. It involves creating the layout, look, and feel of the user interface, including elements such as buttons, icons, typography, color schemes, and images. UI designers aim to make the product visually appealing, cohesive, and in line with the brand's identity. Consistency and clear visual hierarchy</p>
                            <h4>Our Core features</h4>
                            <p>Product UI/UX Design is a critical aspect of developing digital products, including websites, mobile apps, and software applications. UI stands for User Interface, while UX stands for User Experience. Both UI and UX design work together to ensure that a product is not only visually appealing but also user-friendly and functional. Here's a detailed description of each</p>
                            <div className="row mb-30 mt-30">
                                <div className="col-md-4 col-sm-6 md-mb-25">
                                    <div className="service__details-content-list">
                                        <i className="flaticon-reputation"></i>
                                        <h6>Well Experience</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 sm-mb-25">
                                    <div className="service__details-content-list">
                                        <i className="flaticon-talk"></i>
                                        <h6>Client Satisfaction</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="service__details-content-list">
                                        <i className="flaticon-global-shipping"></i>
                                        <h6>Global Expertise</h6>
                                    </div>
                                </div>
                            </div>
                            <p>Product UI/UX Design is a critical aspect of developing digital products, including websites, mobile apps, and software applications. UI stands for User Interface, while UX stands for User Experience. Both UI and UX design work together to ensure that a product is not only visually appealing but also user-friendly and functional. Here's a detailed description of each</p>
                            <h4>Frequently Asked Questions & answer</h4>
                            <div className="service__details-content-faq">
                                <div id="accordionExample">
                                    <div className="faq__area-item">
                                        <h6 className="icon" data-bs-toggle="collapse" data-bs-target="#collapseOne"><span>01.</span>How much solar energy is needed?</h6>
                                        <div id="collapseOne" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree"><span>03.</span>How much solar power is enough?</h6>
                                        <div id="collapseThree" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
                                        </div>
                                    </div>
                                    <div className="faq__area-item">
                                        <h6 className="icon collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"><span>04.</span>How many solar panels can I have?</h6>
                                        <div id="collapseFour" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                            <p>Solar energy is generated when sunlight strikes solar panels, creating electricity through the photovoltaic effect. The availability of solar energy is tied</p>
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

export default ServicesSingleMain;