import { STRAPI_URL, STRAPI_TOKEN } from '../constants';

export const projectService = {
  async getProjects() {
    try {
      const response = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  async getProject(slug) {
    try {
      const response = await fetch(
        `${STRAPI_URL}/api/projects?filters[documentId][$eq]=${slug}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch project');
      }
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  },
};
