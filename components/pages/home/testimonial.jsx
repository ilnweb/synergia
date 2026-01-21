'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import testimonialData from '@/components/data/testimonial-data';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        if (data.reviews?.length > 0) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error('Failed to fetch Google reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const displayData = reviews.length > 0 ? reviews : testimonialData;

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
    },
  };

  return (
    <>
      <div className='container'>
        <div className='row al-center'>
          <div className='col-xl-5 col-lg-6 lg-mb-45'>
            <div className='testimonial__one-left lg-t-center'>
              <span className='subtitle-one'>Opinie</span>
              <h2>Co mówią nasi klienci</h2>
              <div className='testimonial__one-arrow lg-jc-center'>
                <div className='testimonial__one-arrow-prev testimonial_prev'>
                  <i className='fal fa-long-arrow-left'></i>
                </div>
                <div className='testimonial__one-arrow-next testimonial_next'>
                  <i className='fal fa-long-arrow-right'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7 col-lg-6'>
            <div className='testimonial__one-right dark_image'>
              <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                {displayData?.map((data, id) => (
                  <SwiperSlide key={data.id || id}>
                    <div className='testimonial__one-right-item'>
                      <div className='testimonial__one-right-item-avatar'>
                        <img
                          src={typeof data.avatar === 'string' ? data.avatar : data.avatar?.src}
                          alt={data.name}
                          referrerPolicy='no-referrer'
                        />
                      </div>
                      <div className='testimonial__one-right-item-content'>
                        <div className='rating'>
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fa-solid fa-square-star ${i < (data.rating || 5) ? '' : 'opacity-30'}`}
                            ></i>
                          ))}
                        </div>
                        <p>{data.des}</p>
                        <div className='testimonial__one-right-item-content-bottom'>
                          <div className='testimonial__one-right-item-content-bottom-name'>
                            <h6>{data.name}</h6>
                            <span>{data.time || data.position}</span>
                          </div>
                          <div className='testimonial__one-right-item-content-bottom-brand'>
                            <img src='/assets/img/brand/google-logo.png' alt='Google' />
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
