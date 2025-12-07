import testimonialData from '@/components/data/testimonial-data';
import brand from "../../../public/assets/img/brand/brand-1.png";

const TestimonialMain = ({addClass}) => {
    return (
        <>
        <div className="testimonial__one-two section-padding-two">
            <div className="container">
                <div className="row">
                    {testimonialData.slice(0, 2)?.map((data, id) => (
                        <div className="col-lg-6 mt-25" key={id}>
                            <div className="testimonial__one-right-item">
                                <div className="testimonial__one-right-item-avatar dark_image">
                                    <img src={data.avatar.src} alt="avatar" />
                                </div>
                                <div className="testimonial__one-right-item-content">
                                    <div className="rating">
                                        <i className="fa-solid fa-square-star"></i>
                                        <i className="fa-solid fa-square-star"></i>
                                        <i className="fa-solid fa-square-star"></i>
                                        <i className="fa-solid fa-square-star"></i>
                                        <i className="fa-solid fa-square-star"></i>
                                    </div>
                                    <p>{data.des}</p>
                                    <div className="testimonial__one-right-item-content-bottom">
                                        <div className="testimonial__one-right-item-content-bottom-name">
                                            <h6>{data.name}</h6>
                                            <span>{data.position}</span>
                                        </div>
                                        <div className="testimonial__one-right-item-content-bottom-brand">
                                            <img src={brand.src} alt="brand" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className={`testimonial__two section-padding ${addClass}`}>
            <div className="container">
                <div className="row">
                    {testimonialData.map((data, id) => (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="testimonial__two-item">
                                <div className="testimonial__two-item-content">
                                    <i className="flaticon-straight-quotes"></i>
                                    <p>{data.des}</p>
                                    <div className="testimonial__two-item-content-bottom">
                                        <div className="testimonial__two-item-content-bottom-author dark_image">
                                            <img src={data.avatar.src} alt="avatar" />
                                            <div className="testimonial__two-item-content-bottom-author-info">
                                                <h6>{data.name}</h6>
                                                <span>{data.position}</span>
                                            </div>
                                        </div>
                                    </div>
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

export default TestimonialMain;