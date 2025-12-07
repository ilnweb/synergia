import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    return (
        <>
        <div className="service__two services section-padding-three">
            <div className="container">
                <div className="row dark_image">
                    {servicesData?.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="service__two-item">
                                <div className="service__two-item-image">
                                    <img src={data.image.src} alt="service" />
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

export default ServicesMain;