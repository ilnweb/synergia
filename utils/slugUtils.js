const sanitize = text =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

const transliteratePolish = text =>
  text
    .replace(/ł/gi, match => (match === 'ł' ? 'l' : 'L'))
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/**
 * Generate a URL-friendly slug from a title, transliterating Polish
 * diacritics (ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź/ż→z).
 */
export const generateSlug = (title, fallback = '') => {
  if (!title || typeof title !== 'string') {
    return fallback;
  }

  return sanitize(transliteratePolish(title));
};

/**
 * Previous slug behaviour (diacritics dropped instead of transliterated).
 * Only used so URLs generated before transliteration keep resolving.
 */
export const generateLegacySlug = (title, fallback = '') => {
  if (!title || typeof title !== 'string') {
    return fallback;
  }

  return sanitize(title);
};
