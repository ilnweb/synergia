"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import WhoAre from "../../homes/home-2/who-are";
import Faq from "../../homes/home-2/faq";
import TextSlide from "../../common/text-slide";
import starIcon from "../../../../public/assets/img/icon/star-1.png";
import Testimonial from "../../homes/home-3/testimonial";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Services Two" />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="Services Two" innerTitle="Services Two" />
            <ServicesMain />
            <WhoAre addClass="services-page" />
            <div className="section-padding pb-0">
                <Faq addClass="services-page" />
            </div>
            <TextSlide addIcon={starIcon} addClass="services-page" />
            <Testimonial addClass="services-page" />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;