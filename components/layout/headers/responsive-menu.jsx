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
        <Link href='/o-nas'>O nas</Link>
      </li>
      <li>
        <Link href='/uslugi'>Usługi</Link>
      </li>
      <li>
        <Link href='/blog'>Blog</Link>
      </li>
      <li>
        <Link href='/realizacje'>Realizacje</Link>
      </li>
      <li>
        <Link href='/kontakt'>Kontakt</Link>
      </li>
    </ul>
  );
};

export default ResponsiveMenu;
