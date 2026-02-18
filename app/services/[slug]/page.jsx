'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ServicesSingle from '@/components/pages/services/service-single';
import { serviceService } from '@/services/serviceService';

const ServicesDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const serviceData = await serviceService.getServiceBySlug(params.slug);
        if (!serviceData) {
          router.push('/404-error');
          return;
        }
        setService(serviceData);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError('Failed to load service details');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchService();
    } else {
      router.push('/404-error');
    }
  }, [params.slug, router]);

  if (loading) {
    return <div>Loading...</div>; // You might want to add a proper loading component
  }

  if (error) {
    return <div>{error}</div>; // You might want to add a proper error component
  }

  if (!service) {
    return null; // or redirect to 404
  }

  return (
    <>
      <ServicesSingle serviceDetails={service} />
    </>
  );
};

export default ServicesDetail;
