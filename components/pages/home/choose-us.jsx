import Link from 'next/link';
import React from 'react';
import image from '../../../public/assets/img/pages/choose-us-1.jpg';

const ChooseUs = () => {
  return (
    <>
      <div
        className='choose__us section-padding'
        style={{ overflow: 'hidden', maxWidth: '100%', padding: '60px 0' }}
      >
        <div className='container' style={{ overflow: 'hidden', maxWidth: '100%' }}>
          <div className='row' style={{ overflow: 'hidden' }}>
            <div className='col-xl-12' style={{ overflow: 'hidden' }}>
              <div
                className='choose__us-area'
                style={{ overflow: 'hidden', maxWidth: '100%', border: 'none' }}
              >
                <div
                  className='choose__us-area-title'
                  style={{ overflow: 'hidden', borderBottom: 'none', paddingBottom: '30px' }}
                >
                  <span className='subtitle-one'>DLACZEGO MY?</span>
                  <h2>Energia dobrana świadomie</h2>
                  <p>
                    Łączymy wiedzę audytora energetycznego z praktyką wykonawczą, dzięki czemu
                    oferujemy rozwiązania dopasowane, skuteczne i opłacalne.
                  </p>
                </div>
                <div className='choose__us-area-list' style={{ overflow: 'hidden' }}>
                  <div className='row' style={{ overflow: 'hidden' }}>
                    <div className='col-12 col-md-4 mb-4 mb-md-0' style={{ overflow: 'hidden' }}>
                      <div
                        className='choose__us-area-list-item d-flex flex-column align-items-center text-center'
                        style={{ overflow: 'hidden', width: '100%' }}
                      >
                        <img
                          src='/assets/img/icon/Wiedza.png'
                          alt='Wiedza'
                          style={{ maxWidth: '100%', height: '60px' }}
                        />
                        <div className='choose__us-area-list-item-bottom'>
                          <h6>Wiedza audytora połączona z praktyką</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-md-4 mb-4 mb-md-0' style={{ overflow: 'hidden' }}>
                      <div
                        className='choose__us-area-list-item d-flex flex-column align-items-center text-center'
                        style={{ overflow: 'hidden', width: '100%' }}
                      >
                        <img
                          src='/assets/img/icon/Indywidualne.png'
                          alt='Indywidualne doradztwo'
                          style={{ maxWidth: '100%', height: '60px' }}
                        />
                        <div className='choose__us-area-list-item-bottom'>
                          <h6>Indywidualne doradztwo</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-md-4' style={{ overflow: 'hidden' }}>
                      <div
                        className='choose__us-area-list-item d-flex flex-column align-items-center text-center'
                        style={{ overflow: 'hidden', width: '100%' }}
                      >
                        <img
                          src='/assets/img/icon/Jakość.png'
                          alt='Jakość'
                          style={{ maxWidth: '100%', height: '60px' }}
                        />
                        <div className='choose__us-area-list-item-bottom'>
                          <h6>Jakość potwierdzona opiniami</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='choose__us-area-bottom text-center d-none d-md-block'
                  style={{ overflow: 'hidden' }}
                >
                  <Link className='btn-one' href='/about-us' style={{ maxWidth: '100%' }}>
                    Porozmawiajmy{' '}
                  </Link>
                </div>
                <div
                  className='choose__us-area-image dark_image d-none d-md-block text-center'
                  style={{ overflow: 'hidden' }}
                >
                  <img
                    src={image.src}
                    alt='image'
                    style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
                  />
                </div>
                <div className='choose__us-area-image dark_image'>
                  <img src={image.src} alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
