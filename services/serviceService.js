import { STRAPI_URL, STRAPI_TOKEN } from '../constants';
import { generateSlug } from '../utils/slugUtils';

export const serviceService = {
  // Fetch all services
  getServices: async () => {
    try {
      const response = await fetch(`${STRAPI_URL}/api/services?populate=*&sort=createdAt:desc`, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  // Fetch single service by slug
  getServiceBySlug: async slug => {
    try {
      // First fetch all services
      const response = await fetch(`${STRAPI_URL}/api/services?populate=*&sort=createdAt:desc`, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();

      // Generate slug for each service and find the matching one
      const service = data.data.find(service => {
        const generatedSlug = generateSlug(service.title);
        console.log(
          `Service Service: "${service.title}" -> Slug: "${generatedSlug}" (looking for: "${slug}")`
        );
        return generatedSlug === slug;
      });

      return service;
    } catch (error) {
      console.error(`Error fetching service with slug ${slug}:`, error);
      throw error;
    }
  },
};

export default serviceService;
