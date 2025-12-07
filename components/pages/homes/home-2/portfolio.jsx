import { useState } from 'react';
import Link from 'next/link';
import portfolioData from '@/components/data/portfolio-data';

const Portfolio = () => {
    const [active, setActive] = useState(1);
    const handelActive = (index) => {
        setActive(index);
    };

    return (
        <>
        <div className="portfolio__two section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__two-title t-center">
                            <span className="subtitle-two">Our Work</span>
                            <h2>Solar Success Gallery</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio__two-area dark_image">
                        { portfolioData.slice(0, 3)?.map((data, index) => (
                            <div onMouseEnter={() => handelActive(index)} className={`portfolio__two-item ${ active === index ? "active" : "" }`} key={index} >
                                <span>0{index + 1}</span>
                                <img src={data.image.src} alt="image" />
                                <div className="portfolio__two-item-content">
                                    <div className="portfolio__two-item-content-icon">
                                        <Link href={`/portfolio/${data.id}`}><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                                    </div>
                                    <span><i className="fa-regular fa-horizontal-rule"></i>{data.subtitle}</span>
                                    <h6><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h6>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Portfolio;