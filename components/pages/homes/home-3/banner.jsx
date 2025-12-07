import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Link from 'next/link';
import banner1 from "../../../../public/assets/img/banner/banner-4.jpg";
import banner2 from "../../../../public/assets/img/banner/banner-5.jpg";
import banner3 from "../../../../public/assets/img/banner/banner-6.jpg";

const BannerThree = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  	return (
		<>
        <div className="banner__three">
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                effect= 'fade'
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                navigation={{
                    nextEl: '.banner_next',
                    prevEl: '.banner_prev',
                }}
                modules={[Autoplay, Thumbs, EffectFade, Navigation]}
            >
            <SwiperSlide>
                <div className="banner__three-area">	
                    <div className="banner__three-area-image" style={{backgroundImage: `url(${banner1.src})`}}></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12">
                                <div className="banner__three-content">
                                    <span className="subtitle-three">Energy Tomorrow</span>
                                    <h2>Sustainable</h2>
                                    <h1>Sunlight</h1>
                                    <Link className="btn-three" href="/about">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="banner__three-area">	
                    <div className="banner__three-area-image" style={{backgroundImage: `url(${banner2.src})`}}></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12">
                                <div className="banner__three-content">
                                    <span className="subtitle-three">Energy Tomorrow</span>
                                    <h2>Green Energy</h2>
                                    <h1>Radiance</h1>
                                    <Link className="btn-three" href="/about">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="banner__three-area">	
                    <div className="banner__three-area-image" style={{backgroundImage: `url(${banner3.src})`}}></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12">
                                <div className="banner__three-content">
                                    <span className="subtitle-three">Energy Tomorrow</span>
                                    <h2>Powered</h2>
                                    <h1>Innovation</h1>
                                    <Link className="btn-three" href="/about">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
        <div className="banner__three-slide">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner__three-slide-area">
                            <div className="banner__three-slide-area-thumb dark_image">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={3}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    autoplay={{
                                        delay: 4500,
                                        disableOnInteraction: false,
                                        reverseDirection: false,
                                    }}
                                    modules={[FreeMode, Thumbs, Autoplay]}
                                >
                                    <SwiperSlide className='banner__three-slide-area-thumb-item'>
                                        <img src={banner1.src} alt="banner" />
                                        <h6>Sustainable Sunlight</h6>
                                    </SwiperSlide>
                                    <SwiperSlide className='banner__three-slide-area-thumb-item'>
                                        <img src={banner2.src} alt="banner" />
                                        <h6>Green Energy Radiance</h6>
                                    </SwiperSlide>
                                    <SwiperSlide className='banner__three-slide-area-thumb-item'>
                                        <img src={banner3.src} alt="banner" />
                                        <h6>Powered Innovation Hub</h6>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="banner__three-slide-area-arrow">
                                <div className="banner__three-slide-area-arrow-prev banner_prev"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="banner__three-slide-area-arrow-next banner_next"><i className="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</>
	);
};

export default BannerThree;