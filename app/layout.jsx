'use client';
import { useEffect } from 'react';
import './globals.css';
import QueryProvider from '../providers/QueryProvider';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='../favicon.ico' />
      </head>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
