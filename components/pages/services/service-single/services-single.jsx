import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { serviceService } from '@/services/serviceService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ctaBg from '../../../../public/assets/img/shape/shape-6.png';
import { generateSlug } from '@/utils/slugUtils';
import './markdown-styles.css';

const ServicesSingleMain = ({ serviceDetails }) => {
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const data = await serviceService.getServices();
      // Transform services to include slug and sort by createdAt date (oldest first)
      const transformedServices = data.map(service => {
        const title = service.Title || service.title || 'Untitled Service';
        const slug = generateSlug(title, `service-${service.id || service.documentId}`);
        console.log(`Service Single: "${title}" -> Slug: "${slug}"`);
        return {
          ...service,
          slug,
          title, // Ensure we have a title field for display
        };
      });
      return transformedServices.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <div className='service__details section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 lg-mb-50'>
              <div className='all__sidebar mr-25'>
                <div className='all__sidebar-item'>
                  <h6>Nasze Usługi</h6>
                  <div className='all__sidebar-item-category'>
                    <ul>
                      {services.slice(0, 5).map(service => (
                        <li key={service.id}>
                          <Link href={`/services/${service.slug}`}>
                            {service.title || 'No Title'}
                            <i className='fa-regular fa-arrow-right'></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className='all__sidebar-item-help mt-30 cta__one-area'
                  style={{
                    backgroundImage: `url(${ctaBg.src})`,
                    backgroundPosition: 'right top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    position: 'relative',
                    zIndex: '1',
                    overflow: 'hidden',
                    padding: '30px',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      zIndex: '2',
                    }}
                  >
                    <div className='all__sidebar-item-help-icon'>
                      <i
                        className='fal fa-phone-alt'
                        style={{
                          position: 'relative',
                          zIndex: '1',
                          width: '90px',
                          height: '90px',
                          lineHeight: '90px',
                          textAlign: 'center',
                          background: 'var(--bg-white)',
                          color: 'var(--primary-color-1)',
                          borderRadius: '50%',
                          fontSize: '40px',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                          transition: 'all 0.3s ease-in-out',
                        }}
                      ></i>
                    </div>
                    <h5
                      style={{
                        color: 'var(--text-white)',
                        marginBottom: '15px',
                        fontSize: '24px',
                        lineHeight: '34px',
                        position: 'relative',
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                      }}
                    >
                      Potrzebujesz pomocy?
                    </h5>
                    <div className='all__sidebar-item-help-contact'>
                      <div className='all__sidebar-item-help-contact-content'>
                        <span
                          style={{
                            display: 'block',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: '5px',
                            fontSize: '16px',
                            fontWeight: '500',
                            textShadow: '0 1px 1px rgba(0,0,0,0.1)',
                          }}
                        >
                          Zadzwoń do nas
                        </span>
                        <h6
                          style={{
                            margin: '0',
                            fontSize: '22px',
                            lineHeight: '32px',
                            position: 'relative',
                          }}
                        >
                          <Link
                            href='tel:+48698454913'
                            style={{
                              color: 'var(--text-white)',
                              textDecoration: 'none',
                              transition: 'all 0.4s ease-in-out',
                              fontWeight: '700',
                              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                            }}
                          >
                            +48 698 454 913
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-8 col-lg-8'>
              <div className='service__details-content'>
                {serviceDetails?.content && (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {serviceDetails.content}
                  </ReactMarkdown>
                )}
                {serviceDetails?.servicesFAQ && (
                  <>
                    <h4>Najczęściej zadawane pytania</h4>
                    <div className='service__details-content-faq'>
                      <div className='accordion' id='accordionExample'>
                        {serviceDetails.servicesFAQ.QuestionOne && (
                          <div className='faq__area-item'>
                            <h6
                              className='icon'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseOne'
                              aria-expanded='true'
                            >
                              <span>01.</span>
                              {serviceDetails.servicesFAQ.QuestionOne}
                            </h6>
                            <div
                              id='collapseOne'
                              className='accordion-collapse collapse show'
                              data-bs-parent='#accordionExample'
                            >
                              <div className='accordion-body'>
                                <p>{serviceDetails.servicesFAQ.QuestionOneAnswer}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {serviceDetails.servicesFAQ.QuestionTwo && (
                          <div className='faq__area-item'>
                            <h6
                              className='icon collapsed'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseTwo'
                              aria-expanded='false'
                            >
                              <span>02.</span>
                              {serviceDetails.servicesFAQ.QuestionTwo}
                            </h6>
                            <div
                              id='collapseTwo'
                              className='accordion-collapse collapse'
                              data-bs-parent='#accordionExample'
                            >
                              <div className='accordion-body'>
                                <p>{serviceDetails.servicesFAQ.QuestionTwoAnswer}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {serviceDetails.servicesFAQ.QuestionThree && (
                          <div className='faq__area-item'>
                            <h6
                              className='icon collapsed'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseThree'
                              aria-expanded='false'
                            >
                              <span>03.</span>
                              {serviceDetails.servicesFAQ.QuestionThree}
                            </h6>
                            <div
                              id='collapseThree'
                              className='accordion-collapse collapse'
                              data-bs-parent='#accordionExample'
                            >
                              <div className='accordion-body'>
                                <p>{serviceDetails.servicesFAQ.QuestionThreeAnswer}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSingleMain;
