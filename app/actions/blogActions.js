'use server';

import { STRAPI_TOKEN, STRAPI_URL } from '../../constants/index.js';

export async function getBlogs() {
  const url = `${STRAPI_URL}/api/blogs?populate=*&sort=createdAt:desc`;

  try {
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
      throw new Error(`Failed to fetch blogs: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    throw error; // Re-throw to be caught by the page component
  }
}
