import { NEXT_PUBLIC_BASE_URL } from '../constants/index.js';
import { generateSlug } from './slugUtils.js';

export const buildCanonical = (path = '/') =>
  `${NEXT_PUBLIC_BASE_URL}${path === '/' ? '' : path}`;

export const blogSlug = blog =>
  generateSlug(blog.Title || blog.title || '', `blog-${blog.id || blog.documentId || 'unknown'}`);

export const serviceSlug = service =>
  generateSlug(
    service.title || '',
    `service-${service.id || service.documentId || 'unknown'}`
  );

export const blogCanonical = blog => buildCanonical(`/blog/${blogSlug(blog)}`);

export const serviceCanonical = service => buildCanonical(`/uslugi/${serviceSlug(service)}`);
