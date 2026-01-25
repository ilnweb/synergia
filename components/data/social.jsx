import Link from 'next/link';
import React from 'react';

const Social = () => {
  return (
    <>
      <ul>
        <li>
          <Link
            href='https://www.facebook.com/SynergiaEnergiaPL'
            target='_blank'
            aria-label='Facebook - Synergia Energia'
          >
            <i className='fab fa-facebook-f'></i>
          </Link>
        </li>
        <li>
          <Link
            href='https://www.linkedin.com/company/synergia-energia'
            target='_blank'
            aria-label='LinkedIn - Synergia Energia'
          >
            <i className='fab fa-linkedin-in'></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Social;
