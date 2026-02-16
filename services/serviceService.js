import { STRAPI_URL, STRAPI_TOKEN } from '../constants';

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

  // Fetch single service by documentId
  getServiceBySlug: async documentId => {
    try {
      const response = await fetch(
        `${STRAPI_URL}/api/services?filters[documentId][$eq]=${documentId}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch service with documentId: ${documentId}`);
      }

      const data = await response.json();
      return data.data[0]; // Return first (and should be only) matching service
    } catch (error) {
      console.error(`Error fetching service with documentId ${documentId}:`, error);
      throw error;
    }
  },
};

export default serviceService;
