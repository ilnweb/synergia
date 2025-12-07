"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const ServicesDetail = () => {
    const params = useParams();
    const serviceDetails = servicesData?.find((service) => service.id === params.id);
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} />
        </>
    );
};

export default ServicesDetail;