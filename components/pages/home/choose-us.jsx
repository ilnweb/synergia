import Link from 'next/link';
import React from 'react';
import image from '../../../public/assets/img/pages/choose-us-1.jpg';

const ChooseUs = () => {
  return (
    <>
      <div className='choose__us section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='choose__us-area'>
                <div className='choose__us-area-title'>
                  <span className='subtitle-one'>DLACZEGO MY?</span>
                  <h2>Energia dobrana świadomie</h2>
                  <p>
                    Łączymy wiedzę audytora energetycznego z praktyką wykonawczą, dzięki czemu
                    oferujemy rozwiązania dopasowane, skuteczne i opłacalne.
                  </p>
                </div>
                <div className='choose__us-area-list'>
                  <div className='choose__us-area-list-item'>
                    <img
                      src='/assets/img/icon/Wiedza.png'
                      alt='Wiedza'
                      style={{ height: '60px' }}
                    />
                    <div className='choose__us-area-list-item-bottom'>
                      <h6>Wiedza audytora połączona z praktyką</h6>
                    </div>
                  </div>
                  <div className='choose__us-area-list-item'>
                    <img
                      src='/assets/img/icon/Indywidualne.png'
                      alt='Indywidualne doradztwo'
                      style={{ height: '60px' }}
                    />
                    <div className='choose__us-area-list-item-bottom'>
                      <h6>Indywidualne doradztwo</h6>
                    </div>
                  </div>
                  <div className='choose__us-area-list-item'>
                    <img
                      src='/assets/img/icon/Jakość.png'
                      alt='Jakość'
                      style={{ height: '60px' }}
                    />
                    <div className='choose__us-area-list-item-bottom'>
                      <h6>Jakość potwierdzona opiniami</h6>
                    </div>
                  </div>
                </div>
                <div className='choose__us-area-bottom'>
                  <Link className='btn-one' href='/kontakt'>
                    Porozmawiajmy{' '}
                  </Link>
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
