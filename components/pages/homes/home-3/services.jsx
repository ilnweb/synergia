import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const Services = () => {
    return (
        <>
        <div className="service__three section-padding">
            <div className="container">
                <div className="row mb-35">
                    <div className="col-xl-12">
                        <div className="service__three-title t-center">
                            <span className="subtitle-three">Our Services</span>
                            <h2>Our Solar Solutions</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicesData.slice(0, 4)?.map((data, id) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-25" key={id}>
                        <div className="service__three-item">
                            <div className="service__three-item-icon">
                            {data.icon}
                            </div>
                            <div className="service__three-item-content">
                                <h6><Link href={`/services/${data.id}`}>{data.title}</Link></h6>
                                <p>{data.des}</p>
                                <Link className="simple-btn" href={`/services/${data.id}`}>Load More <span><i className="fa-sharp fa-regular fa-arrow-up-right"></i></span></Link>
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