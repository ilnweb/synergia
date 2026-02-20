import ServicesSingle from '@/components/pages/services/service-single';
import { serviceService } from '@/services/serviceService';
import { notFound } from 'next/navigation';

// Server component for proper 404 handling
const ServicesDetail = async ({ params }) => {
  const { slug } = params;

  try {
    // Fetch service data on server side
    const service = await serviceService.getServiceBySlug(slug);

    // If service is not found, return proper 404
    if (!service) {
      notFound();
    }

    return <ServicesSingle serviceDetails={service} />;
  } catch (error) {
    console.error('Error fetching service:', error);
    notFound();
  }
};

export default ServicesDetail;
