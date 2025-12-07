"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import FaqPage from "./faq-page";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <FaqPage />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default Faq;