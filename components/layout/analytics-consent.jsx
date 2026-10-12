'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NEXT_PUBLIC_GA_ID } from '@/constants';

const STORAGE_KEY = 'cookie-consent';
export const OPEN_SETTINGS_EVENT = 'open-cookie-settings';

const readConsent = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const writeConsent = value => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {}
};

const deleteAnalyticsCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    if (name.startsWith('_ga')) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname.replace(/^www\./, '')}`;
    }
  });
};

const AnalyticsConsent = () => {
  const [consent, setConsent] = useState('loading');

  useEffect(() => {
    setConsent(readConsent() || 'unset');

    const reopen = () => setConsent('unset');
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const accept = () => {
    writeConsent('granted');
    setConsent('granted');
  };

  const decline = () => {
    const hadAnalytics = readConsent() === 'granted';
    writeConsent('denied');
    deleteAnalyticsCookies();
    setConsent('denied');
    if (hadAnalytics) window.location.reload();
  };

  return (
    <>
      {consent === 'granted' && NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ID} />}
      {consent === 'unset' && (
        <div
          role='region'
          aria-label='Zgoda na pliki cookies'
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: '#1f2937',
            color: '#fff',
            padding: '16px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px 20px',
            fontSize: '14px',
            lineHeight: 1.5,
            boxShadow: '0 -2px 12px rgba(0,0,0,0.25)',
          }}
        >
          <p style={{ margin: 0, maxWidth: '760px' }}>
            Używamy plików cookies Google Analytics, aby analizować ruch na stronie i ulepszać ją.
            Zgoda jest dobrowolna. Szczegóły znajdziesz w{' '}
            <Link
              href='/polityka-prywatnosci'
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              polityce prywatności
            </Link>
            .
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type='button'
              onClick={decline}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid #fff',
                borderRadius: '4px',
                padding: '8px 18px',
                cursor: 'pointer',
              }}
            >
              Odrzucam
            </button>
            <button
              type='button'
              onClick={accept}
              style={{
                background: '#f33633',
                color: '#fff',
                border: '1px solid #f33633',
                borderRadius: '4px',
                padding: '8px 18px',
                cursor: 'pointer',
              }}
            >
              Akceptuję
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnalyticsConsent;
