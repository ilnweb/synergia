import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import servicesData from '@/components/data/services-data';

const Services = () => {
  return (
    <div className='service__one' style={{ overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
        <Image
          src='/assets/img/shape/shape-9.png'
          alt='Service background'
          fill
          sizes='100vw'
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className='container' style={{ overflow: 'hidden' }}>
        <div className='row mb-35' style={{ overflow: 'hidden' }}>
          <div className='col-xl-12' style={{ overflow: 'hidden' }}>
            <div className='service__one-title t-center'>
              <span className='subtitle-one'>Nasze usługi</span>
              <h2>W czym możemy Ci pomóc?</h2>
            </div>
          </div>
        </div>
        <div className='row' style={{ overflow: 'hidden' }}>
          {servicesData?.map((data, id) => (
            <div className='col-lg-4 col-md-6' key={id} style={{ overflow: 'hidden' }}>
              <div className='service__one-item' style={{ overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
                  <Image
                    src='/assets/img/shape/shape-5.png'
                    alt='Service item background'
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className='service__one-item-icon'>{data.icon}</div>
                <div className='service__one-item-content'>
                  <h6>{data.title}</h6>
                  <p>{data.des}</p>
                  {/* <Link className='simple-btn' href={`/services/${data.id}`}>
                    DOWIEDZ SIĘ WIĘCEJ{' '}
                    <span>
                      <i className='fa-sharp fa-regular fa-arrow-up-right'></i>
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
