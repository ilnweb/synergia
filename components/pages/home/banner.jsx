import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import banner1 from '../../../public/assets/img/banner/banner-1.jpg';
import banner2 from '../../../public/assets/img/banner/banner-3.jpg';
import bannerBg from '../../../public/assets/img/shape/shape-3.png';
import Link from 'next/link';
import Count from '../common/count';

const slideControl = {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  autoplay: {
    delay: 5500,
    reverseDirection: false,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.banner_next',
    prevEl: '.banner_prev',
  },
};

const BannerOne = () => {
  return (
    <>
      <div className='banner__one'>
        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
          <SwiperSlide>
            <div className='banner__one-image'>
              <img className='banner__one-shape' src={bannerBg.src} alt='banner-shape' />
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-7'>
                    <div className='banner__one-content'>
                      <span className='subtitle-one'>Energia Słoneczna</span>
                      <h1>
                        Oszczędzaj na
                        <br /> Rachunkach
                      </h1>
                      <p>
                        Zainwestuj w fotowoltaikę i zmniejsz rachunki za prąd nawet o 90%.
                        Profesjonalne instalacje z gwarancją i dofinansowaniem.
                      </p>
                      <div className='banner__one-content-button'>
                        <Link className='btn-one' href='/kontakt'>
                          Dowiedz się więcej
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-5'>
                    <div className='banner__one-right dark_image'>
                      <img src={banner1.src} alt='banner-image' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='banner__one-image'>
              <img className='banner__one-shape' src={bannerBg.src} alt='banner-shape' />
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-7'>
                    <div className='banner__one-content'>
                      <span className='subtitle-one'>Ekologiczna Energia</span>
                      <h1>
                        Pełna
                        <br /> Niezależność
                      </h1>
                      <p>
                        Produkuj własny prąd z słońca i ciesz się niezależnością energetyczną. Pompy
                        ciepła i folie grzewcze to przyszłość ogrzewania.
                      </p>
                      <div className='banner__one-content-button'>
                        <Link className='btn-one' href='/kontakt'>
                          Sprawdź ofertę
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-5'>
                    <div className='banner__one-right dark_image'>
                      <img src={banner2.src} alt='banner-image' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='container'>
          <div className='row column-reverse'>
            <div className='col-xl-7'>
              <div className='banner__one-capacity'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4 col-sm-5 sm-mb-15'>
                      <div className='banner__one-capacity-item sm-t-center'>
                        <h3>
                          <Count number={286} />
                        </h3>
                        <h6>Zakończonych projektów</h6>
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-5'>
                      <div className='banner__one-capacity-item sm-t-center'>
                        <h3>
                          <Count number={2456} />
                        </h3>
                        <h6>Zainstalowana moc (kW)</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-5'>
              <div className='banner__one-right'>
                <div className='banner__one-arrow'>
                  <div className='banner__one-arrow-prev banner_prev'>
                    <i className='fal fa-long-arrow-left'></i>
                  </div>
                  <div className='banner__one-arrow-next banner_next'>
                    <i className='fal fa-long-arrow-right'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerOne;
