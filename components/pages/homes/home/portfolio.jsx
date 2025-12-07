import portfolioData from "@/components/data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import Link from "next/link";

const Portfolio = () => {
    const slideControl = {
        spaceBetween: 25,
        slidesPerView: 3.8,
        centeredSlides: true,
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
                slidesPerView: 2.6,
            },
            1200: {
                slidesPerView: 3.4,
            },
            1500: {
                slidesPerView: 3.8,
            },
        }
    };

    return (
        <div className="portfolio__one dark_image">
            <div className="container">
                <div className="row al-end mb-60">
                    <div className="col-xl-8 lg-mb-25">
                        <div className="portfolio__one-title lg-t-center">
                            <span className="subtitle-one">Our Work</span>
                            <h2>Solar Project Gallery</h2>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="portfolio__one-btn t-right lg-t-center">
                            <a className="btn-one" href="project-four.html">View All Projects</a>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                {portfolioData?.map((data, id) => (
                    <SwiperSlide key={id}>
                    <div className="portfolio__one-item">
                        <div className="portfolio__one-item-image">
                            <img src={data.image.src} alt="image" />
                            <div className="portfolio__one-item-image-content">
                                <span><i className="fa-regular fa-horizontal-rule"></i>{data.subtitle}</span>
                                <h6><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h6>
                                <Link href={`/portfolio/${data.id}`}><i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
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