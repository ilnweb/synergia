import Link from 'next/link';
import servicesData from '@/components/data/services-data';
import shape from "../../../../public/assets/img/shape/shape-5.png";

const ServicesMain = () => {
    return (
        <>
            <div className="service-one section-padding-three">
                <div className="container">
                    <div className="row">
                        {servicesData?.map((data, id) => (
                            <div className="col-lg-4 col-md-6" key={id}>
                                <div className="service__one-item" style={{backgroundImage: `url(${shape.src})`}}>
                                    <div className="service__one-item-icon">
                                        {data.icon}
                                    </div>
                                    <div className="service__one-item-content">
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

export default ServicesMain;