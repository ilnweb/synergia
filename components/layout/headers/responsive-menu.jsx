'use client';
import Link from 'next/link';
import React from 'react';

const ResponsiveMenu = () => {
  return (
    <ul>
      <li>
        <Link href='/'>Strona główna</Link>
      </li>
      <li>
        <Link href='/about-us'>O nas</Link>
      </li>
      <li>
        <Link href='/contact'>Kontakt</Link>
      </li>
    </ul>
  );
};

export default ResponsiveMenu;
