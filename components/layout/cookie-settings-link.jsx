'use client';

import { OPEN_SETTINGS_EVENT } from './analytics-consent';

const CookieSettingsLink = () => (
  <button
    type='button'
    onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'inherit',
      textDecoration: 'underline',
      cursor: 'pointer',
      font: 'inherit',
    }}
  >
    Ustawienia cookies
  </button>
);

export default CookieSettingsLink;
