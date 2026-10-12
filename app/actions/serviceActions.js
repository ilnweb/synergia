'use server';

import { serviceService } from '../../services/serviceService.js';

export async function getServices() {
  return serviceService.getServices();
}
