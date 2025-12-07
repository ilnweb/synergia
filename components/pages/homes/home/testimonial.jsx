import testimonialData from "@/components/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import brand from "../../../../public/assets/img/brand/brand-1.png";

const Testimonial = () => {
const slideControl = {
    spaceBetween: 25,
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: '.testimonial_next',
        prevEl: '.testimonial_prev',
    },			
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    }
};

    return (
        <>        
            <div className="container">
                <div className="row al-center">
                    <div className="col-xl-5 col-lg-6 lg-mb-45">
                        <div className="testimonial__one-left lg-t-center">
                            <span className="subtitle-one">Testimonial</span>
                            <h2>Capturing Our Success Stories</h2>	
                            <div className="testimonial__one-arrow lg-jc-center">
                                <div className="testimonial__one-arrow-prev testimonial_prev"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="testimonial__one-arrow-next testimonial_next"><i className="fal fa-long-arrow-right"></i></div>
                            </div>					
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="testimonial__one-right dark_image">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                            {testimonialData?.map((data, id) => (
                                <SwiperSlide key={id}>
                                <div className="testimonial__one-right-item">
                                    <div className="testimonial__one-right-item-avatar">
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
};

export default Testimonial;