import { STRAPI_URL, STRAPI_TOKEN } from '../constants';

export const projectService = {
  async getProjects() {
    const pageSize = 100; // Strapi's per-request max; loop below covers totals beyond this

    try {
      let page = 1;
      let allProjects = [];
      let pageCount = 1;

      do {
        const response = await fetch(
          `${STRAPI_URL}/api/projects?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${STRAPI_TOKEN}`,
              'Content-Type': 'application/json',
            },
            cache: 'no-store',
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        allProjects = allProjects.concat(data.data || []);
        pageCount = data.meta?.pagination?.pageCount || 1;
        page += 1;
      } while (page <= pageCount);

      return allProjects;
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
