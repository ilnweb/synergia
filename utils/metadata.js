import { NEXT_PUBLIC_BASE_URL } from '../constants/index.js';
import { buildCanonical } from './canonical.js';

const SITE_NAME = 'Synergia Energia';
const DEFAULT_IMAGE = '/assets/img/banner/banner-1.jpg';
export const DEFAULT_DESCRIPTION =
  'Profesjonalne instalacje fotowoltaiczne, pompy ciepła, folie grzewcze i wiaty solarne. Zmniejsz rachunki za prąd i ciepło z ekologicznymi rozwiązaniami energetycznymi.';

export const descriptionFromMarkdown = (text, maxLength = 155) => {
  if (!text || typeof text !== 'string') return '';

  const plain = text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/[*_`>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).replace(/\s+\S*$/, '')}…`;
};

export const buildMetadata = ({ title, description, path, canonical, image = DEFAULT_IMAGE }) => {
  const url = canonical || buildCanonical(path);
  const fullTitle = `${title} | ${SITE_NAME}`;
  const text = description || DEFAULT_DESCRIPTION;
  const imageUrl = image.startsWith('http') ? image : `${NEXT_PUBLIC_BASE_URL}${image}`;

  return {
    title: fullTitle,
    description: text,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: text,
      url,
      siteName: SITE_NAME,
      locale: 'pl_PL',
      type: 'website',
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: text,
      images: [imageUrl],
    },
  };
};
