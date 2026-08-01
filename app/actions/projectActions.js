'use server';

import { STRAPI_TOKEN, STRAPI_URL } from '../../constants';

export async function getProjects() {
  const pageSize = 100; // Strapi's per-request max; loop below covers totals beyond this

  try {
    let page = 1;
    let allProjects = [];
    let pageCount = 1;

    do {
      const url = `${STRAPI_URL}/api/projects?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Ensure fresh data on server
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Fetch failed:', response.status, errorText);
        throw new Error(`Failed to fetch projects: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      allProjects = allProjects.concat(data.data || []);
      pageCount = data.meta?.pagination?.pageCount || 1;
      page += 1;
    } while (page <= pageCount);

    return allProjects;
  } catch (error) {
    throw error; // Re-throw to be caught by the page component
  }
}
