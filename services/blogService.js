import { STRAPI_URL, STRAPI_TOKEN } from '../constants';

export const blogService = {
  // Fetch all blogs
  getBlogs: async () => {
    try {
      const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*&sort=createdAt:desc`, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
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
  getBlogBySlug: async slug => {
    try {
      const response = await fetch(
        `${STRAPI_URL}/api/blogs?filters[documentId][$eq]=${slug}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },
};
