import React from 'react';
import bannerBg1 from "../../../../public/assets/img/shape/shape-15.png";
import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const Services = () => {
    return (
        <>
        <div className="service__two section-padding" style={{backgroundImage: `url(${bannerBg1.src})`}}>
            <div className="container">
                <div className="row al-end mb-35">
                    <div className="col-lg-9 lg-mb-25">
                        <div className="service__two-title lg-t-center">
                            <span className="subtitle-two">Our Services</span>
                            <h2>Quality Energy Solutions</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service__two-btn t-right lg-t-center">
                            <a className="btn-two" href="service-two.html">More services</a>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {servicesData.slice(0, 3).map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="service__two-item">
                                <div className="service__two-item-image">
                                    <img src={data.image.src} alt="image" />
                                </div>
                                <div className="service__two-item-content">
                                    <div className="service__two-item-content-icon">
                                        {data.icon}
                                    </div>
                                    <span><i className="fa-regular fa-horizontal-rule"></i>0{id + 1}</span>
                                        <h6><Link href={`/services/${data.id}`}>{data.title}</Link></h6>
                                        <p>{data.des}</p>
                                    <Link className="simple-btn" href={`/services/${data.id}`}>Details More <span><i className="fa-sharp fa-regular fa-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>            
        </>
    );
};

export default Services;