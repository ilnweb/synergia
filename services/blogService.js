import 'server-only';
import { strapiFetchAll, strapiFetchLatest } from '../lib/strapi.server.js';
import { generateSlug, generateLegacySlug } from '../utils/slugUtils.js';

const blogTitleAndFallback = blog => ({
  title: blog.Title || blog.title || '',
  fallback: `blog-${blog.id || blog.documentId || 'unknown'}`,
});

export const blogService = {
  getBlogs() {
    return strapiFetchAll('blogs');
  },

  getRecentBlogs(limit = 3) {
    return strapiFetchLatest('blogs', limit);
  },

  async getBlogBySlug(slug) {
    const blogs = await strapiFetchAll('blogs');

    return blogs.find(blog => {
      const { title, fallback } = blogTitleAndFallback(blog);
      return generateSlug(title, fallback) === slug || generateLegacySlug(title, fallback) === slug;
    });
  },
};
