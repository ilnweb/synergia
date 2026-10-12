import { NEXT_PUBLIC_BASE_URL } from '../constants/index.js';
import { generateSlug } from './slugUtils.js';

export const buildCanonical = (path = '/') =>
  `${NEXT_PUBLIC_BASE_URL}${path === '/' ? '' : path}`;

export const blogCanonical = blog => {
  const fallback = `blog-${blog.id || blog.documentId || 'unknown'}`;
  return buildCanonical(`/blog/${generateSlug(blog.Title || blog.title || '', fallback)}`);
};

export const serviceCanonical = service => {
  const fallback = `service-${service.id || service.documentId || 'unknown'}`;
  return buildCanonical(`/uslugi/${generateSlug(service.title || '', fallback)}`);
};
