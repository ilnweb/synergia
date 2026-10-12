'use server';

import { strapiFetchAll } from '../../lib/strapi.server.js';

export async function getProjects() {
  return strapiFetchAll('projects', 'populate=*');
}
