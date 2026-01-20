'use server';

const STRAPI_URL = 'http://72.60.17.88:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export async function getBlogs() {
  const url = `${STRAPI_URL}/api/blogs?populate=*`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure fresh data on server
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    throw error; // Re-throw to be caught by the page component
  }
}
