import { STRAPI_URL, STRAPI_TOKEN } from '../constants/index.js';
import { generateSlug } from '../utils/slugUtils.js';

export const blogService = {
  // Fetch all blogs
  async getBlogs() {
    const url = `${STRAPI_URL}/api/blogs?populate=*&sort=createdAt:desc`;

    try {
      // Check if STRAPI_TOKEN is properly configured
      if (!STRAPI_TOKEN || STRAPI_TOKEN === 'your-api-token-here') {
        throw new Error('STRAPI_TOKEN is not properly configured in environment variables');
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Fetch single blog by slug
  async getBlogBySlug(slug) {
    const url = `${STRAPI_URL}/api/blogs?populate=*&sort=createdAt:desc`;

    try {
      // Check if STRAPI_TOKEN is properly configured
      if (!STRAPI_TOKEN || STRAPI_TOKEN === 'your-api-token-here') {
        throw new Error('STRAPI_TOKEN is not properly configured in environment variables');
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }

      const data = await response.json();

      // Generate slug for each blog and find the matching one
      const blog = data.data.find(blog => {
        const title = blog.Title || blog.title || '';
        const blogId = blog.id || blog.documentId || 'unknown';
        const fallback = `blog-${blogId}`;
        const generatedSlug = generateSlug(title, fallback);

        return generatedSlug === slug;
      });

      return blog;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },
};
