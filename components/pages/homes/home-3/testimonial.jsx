import testimonialData from "@/components/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination} from 'swiper/modules';
import brand from "../../../../public/assets/img/brand/brand-1.png";

const Testimonial = ({addClass}) => {
const slideControl = {
    spaceBetween: 25,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
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
        <div className={`testimonial__two ${addClass} section-padding`}>
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="testimonial__two-title t-center">
                            <span className="subtitle-three">Testimonial</span>
                            <h2>Shining Success Stories</h2>				
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial__two-area">
                        <Swiper modules={[EffectFade, Autoplay, Pagination]} {...slideControl} >
                            {testimonialData?.map((data, id) => (
                                <SwiperSlide key={id}>
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
										<div className="testimonial__two-item-content-bottom-brand">
											<img src={brand.src} alt="brand" />
										</div>
									</div>
								</div>
							</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="testimonial-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;