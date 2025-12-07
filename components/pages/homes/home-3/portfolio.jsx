import portfolioData from "@/components/data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import Link from "next/link";

const Portfolio = () => {
    const slideControl = {
        spaceBetween: 0,
        slidesPerView: 4,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 4500,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        }
    };

    return (
        <div className="portfolio__three dark_image">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__three-title t-center">
                            <span className="subtitle-three">Our Work</span>
                            <h2>Solar Project Gallery</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                {portfolioData?.map((data, id) => (
                    <SwiperSlide key={id}>
                    <div className="portfolio__three-item">
                        <Link href={`/portfolio/${data.id}`}><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                        <div className="portfolio__three-item-image">
                            <img src={data.image.src} alt="image" />
                            <div className="portfolio__three-item-image-content">
                                <span><i className="fa-regular fa-horizontal-rule"></i>{data.subtitle}</span>
                                <h6><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h6>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio;