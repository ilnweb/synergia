import 'server-only';
import { strapiFetchAll } from '../lib/strapi.server.js';
import { generateSlug, generateLegacySlug } from '../utils/slugUtils.js';

export const serviceService = {
  getServices() {
    return strapiFetchAll('services');
  },

  async getServiceBySlug(slug) {
    const services = await strapiFetchAll('services');

    return services.find(
      service => generateSlug(service.title) === slug || generateLegacySlug(service.title) === slug
    );
  },
};

export default serviceService;
