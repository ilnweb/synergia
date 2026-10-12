import { generateSlug } from './slugUtils.js';

export const withServiceSlugs = (services = [], order = 'oldest') => {
  const withSlugs = services.map(service => {
    const title = service.Title || service.title || 'Untitled Service';
    const fallback = `service-${service.id || service.documentId || 'unknown'}`;
    return { ...service, title, slug: generateSlug(title, fallback) || fallback };
  });

  const direction = order === 'oldest' ? 1 : -1;
  return withSlugs.sort((a, b) => direction * (new Date(a.createdAt) - new Date(b.createdAt)));
};
