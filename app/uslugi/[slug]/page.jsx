import { cache } from 'react';
import ServicesSingle from '@/components/pages/services/service-single';
import { serviceService } from '@/services/serviceService';
import { notFound, permanentRedirect } from 'next/navigation';
import { serviceCanonical, serviceSlug } from '@/utils/canonical';
import { buildMetadata } from '@/utils/metadata';
import { STRAPI_URL } from '@/constants';

const findService = cache(async slug => {
  try {
    return await serviceService.getServiceBySlug(slug);
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const service = await findService(params.slug);
  if (!service) return {};

  const imagePath = service.headerImage?.formats?.medium?.url || service.headerImage?.url;

  return buildMetadata({
    title: service.title || 'Usługa',
    description: service.shortDescription,
    canonical: serviceCanonical(service),
    image: imagePath ? `${STRAPI_URL}${imagePath}` : undefined,
  });
}

// Server component for proper 404 handling
const ServicesDetail = async ({ params }) => {
  const service = await findService(params.slug);

  if (!service) {
    notFound();
  }

  if (params.slug !== serviceSlug(service)) {
    permanentRedirect(`/uslugi/${serviceSlug(service)}`);
  }

  return <ServicesSingle serviceDetails={service} />;
};

export default ServicesDetail;
