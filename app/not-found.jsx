import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='error section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='error-page'>
              <h1>
                4<span>0</span>4
              </h1>
              <h2>Ups! Strona nie została znaleziona.</h2>
              <p>
                Strona, której szukasz, nie istnieje lub nie należy do tej witryny!
              </p>
              <Link className='btn-one' href='/'>
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
