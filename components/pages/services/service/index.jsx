"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import ChooseUs from "../../homes/home-2/choose-us";
import Pricing from "../../homes/home-2/pricing";
import Testimonial from "../../homes/home/testimonial";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <ChooseUs addClass="services-page" />
            <Pricing addClass="services-page" />
            <div className="testimonial-service section-padding">
                <Testimonial />
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;