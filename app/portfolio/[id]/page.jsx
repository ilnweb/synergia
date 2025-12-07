"use client"
import { useParams, useRouter } from "next/navigation";
import portfolioData from '@/components/data/portfolio-data';
import PortfolioDetails from "@/components/pages/portfolio/portfolio-details";

const PortfolioDetail = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }
    return (
        <>
            <PortfolioDetails singleData={singleData} />
        </>
    );
};

export default PortfolioDetail;