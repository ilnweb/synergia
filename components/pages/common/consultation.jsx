import React from 'react';
import Link from 'next/link';

const Consultation = () => {
  return (
    <section className='consultation__area p-relative pt-110 pb-130'>
      <div className='container'>
        <div className='consultation__inner p-relative'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='consultation__content text-center'>
                <h2>Need Help? Get a Free Consultation</h2>
                <p>
                  Have questions about our services or need a custom solution? Our team is here to
                  help you with expert advice and support.
                </p>
                <div className='consultation__btn mt-35'>
                  <Link href='/kontakt' className='theme-btn'>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
