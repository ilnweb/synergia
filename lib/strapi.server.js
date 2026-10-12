import 'server-only';
import { STRAPI_URL } from '../constants/index.js';

export const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const PAGE_SIZE = 100;

const strapiRequest = async (collection, query) => {
  if (!STRAPI_TOKEN) {
    throw new Error('STRAPI_TOKEN is not configured in environment variables');
  }

  const response = await fetch(`${STRAPI_URL}/api/${collection}?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${collection}: ${response.status}`);
  }

  return response.json();
};

export const strapiFetchAll = async (collection, query = 'populate=*&sort=createdAt:desc') => {
  const items = [];
  let page = 1;
  let pageCount = 1;

  while (page <= pageCount) {
    const json = await strapiRequest(
      collection,
      `${query}&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`
    );
    items.push(...(json.data || []));
    pageCount = json.meta?.pagination?.pageCount || 1;
    page += 1;
  }

  return items;
};

export const strapiFetchLatest = async (
  collection,
  limit,
  query = 'populate=*&sort=createdAt:desc'
) => {
  const json = await strapiRequest(
    collection,
    `${query}&pagination[page]=1&pagination[pageSize]=${limit}`
  );
  return json.data || [];
};
