'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { serviceService } from '@/services/serviceService';
import { STRAPI_URL } from '@/constants';
import './services.css';

const ServicesMain = () => {
  const {
    data: services = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const data = await serviceService.getServices();
      // Sort by createdAt date (newest first)
      return [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });

  console.log(services);

  if (isLoading) {
    return (
      <div className='service__two services section-padding-three'>
        <div className='container text-center py-5'>
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
          <p className='mt-3'>Loading services...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='service__two services section-padding-three'>
        <div className='container text-center py-5'>
          <div className='alert alert-danger' role='alert'>
            {error?.message || 'Failed to load services. Please try again.'}
          </div>
          <button className='btn btn-primary mt-3' onClick={() => refetch()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className='service__two services section-padding-three'>
        <div className='container text-center py-5'>
          <p>No services found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='service__two services section-padding-three'>
      <div className='container'>
        <div className='row dark_image'>
          {services?.map((service, index) => {
            // Get the main image from the service
            const imageUrl = service.headerImage?.formats?.medium?.url?.startsWith('/')
              ? `${STRAPI_URL}${service.headerImage.formats.medium.url}`
              : '/assets/img/service/placeholder.jpg';

            return (
              <div
                className='col-lg-4 col-md-6 mb-4'
                key={service.id}
                style={{ cursor: 'pointer', minHeight: '600px' }}
              >
                <Link
                  href={`/services/${service.documentId || service.id}`}
                  className='text-decoration-none d-block h-100 service-card-link'
                  style={{ color: 'inherit' }}
                  onClick={e => {
                    // Only navigate if the click wasn't on the button
                    if (e.target.closest('.details-button')) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className='service__two-item h-100'>
                    <div className='service__two-item-image' title={service.title || 'Service'}>
                      <Image
                        src={imageUrl}
                        alt={
                          service.title
                            ? `Obraz przedstawiający usługę: ${service.title}`
                            : 'Obraz usługi'
                        }
                        width={400}
                        height={250}
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                        priority={index < 3}
                      />
                    </div>
                    <div className='service__two-item-content'>
                      {service.iconText && (
                        <div className='service__two-item-content-icon'>
                          <i className={service.iconText}></i>
                        </div>
                      )}
                      <span>
                        <i className='fa-regular fa-horizontal-rule' />
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h6 className='mb-2'>{service.title || 'Untitled Service'}</h6>
                      <p className='mb-3'>
                        {service.shortDescription || 'No description available.'}
                      </p>
                      <Link
                        href={`/services/${service.documentId || service.id}`}
                        className='simple-btn details-button'
                        onClick={e => e.stopPropagation()}
                        style={{ marginBottom: '0px !important', color: 'rgb(18, 89, 136)' }}
                      >
                        Szczegóły{' '}
                        <span>
                          <i
                            className='fa-sharp fa-regular fa-arrow-up-right'
                            style={{ color: '#f33633' }}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
