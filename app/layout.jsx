'use client';
import { useEffect } from 'react';
import './globals.css';
import QueryProvider from '../providers/QueryProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NEXT_PUBLIC_GA_ID } from '@/constants';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <html lang='pl'>
      <head>
        <link rel='icon' type='image/png' href='../favicon.ico' />

        {/* Preconnect to Google Fonts for faster loading */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Preload critical fonts with font-display: swap */}
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
        />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
        />

        {/* Load fonts with font-display: swap to prevent render blocking */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
          media='print'
          onLoad="this.media='all'"
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
          media='print'
          onLoad="this.media='all'"
        />

        {/* Critical CSS inline or preloaded */}
        <style jsx global>{`
          /* Fallback fonts while Google Fonts load */
          body {
            font-family:
              -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              sans-serif;
          }
        `}</style>
      </head>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
