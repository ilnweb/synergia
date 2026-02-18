/**
 * Generate a URL-friendly slug from a title
 * @param {string} title - The title to convert to slug
 * @param {string} fallback - Fallback slug if title is empty
 * @returns {string} - URL-friendly slug
 */
export const generateSlug = (title, fallback = '') => {
  if (!title || typeof title !== 'string') {
    return fallback;
  }
  
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-'); // Remove leading/trailing hyphens
};
