import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { serviceService } from '@/services/serviceService';

// Render icon from service data
const ServiceIcon = ({ iconClass }) => {
  return iconClass ? <i className={iconClass}></i> : <i className='fa-regular fa-bolt'></i>;
};

const Services = () => {
  const {
    data: services = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const data = await serviceService.getServices();
      // Sort by createdAt date (oldest first)
      return [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <div>Ładowanie usług...</div>;
  if (isError) return <div>Wystąpił błąd podczas ładowania usług</div>;
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
          {services?.slice(0, 6)?.map(service => (
            <div className='col-lg-4 col-md-6' key={service.id} style={{ overflow: 'hidden' }}>
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
                <div className='service__one-item-icon'>
                  <ServiceIcon iconClass={service.iconText} />
                </div>
                <div className='service__one-item-content'>
                  <h6>{service.title}</h6>
                  <p>{service.shortDescription || 'Odkryj naszą ofertę'}</p>
                  <Link
                    className='simple-btn'
                    href={`/services/${service.documentId || service.id}`}
                  >
                    DOWIEDZ SIĘ WIĘCEJ{' '}
                    <span>
                      <i className='fa-sharp fa-regular fa-arrow-up-right'></i>
                    </span>
                  </Link>
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
