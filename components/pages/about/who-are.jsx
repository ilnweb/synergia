import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhoAre = ({ addClass = '' }) => {
  return (
    <section className={`who-are ${addClass} section-padding`}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='who-are__left'>
              <div className='who-are__left-image'>
                <Image
                  src='/assets/img/about/about-1.jpg'
                  alt='Who We Are'
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='who-are__right'>
              <div className='who-are__right-title'>
                <span className='subtitle'>Who We Are</span>
                <h2>We Are Committed To Provide Quality Services</h2>
                <p>
                  We are a team of dedicated professionals committed to delivering high-quality
                  services tailored to your needs. Our expertise and passion drive us to exceed your
                  expectations.
                </p>
              </div>
              <div className='who-are__right-list'>
                <ul>
                  <li>
                    <i className='far fa-check'></i>
                    <span>Expert Team Members</span>
                  </li>
                  <li>
                    <i className='far fa-check'></i>
                    <span>Quality Services</span>
                  </li>
                  <li>
                    <i className='far fa-check'></i>
                    <span>Customer Satisfaction</span>
                  </li>
                </ul>
              </div>
              <div className='who-are__right-btn'>
                <Link href='/about-us' className='theme-btn'>
                  Learn More <i className='far fa-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAre;
