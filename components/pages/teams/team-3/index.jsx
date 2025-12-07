"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";

const TeamPageThree = () => {
    return (
        <>
            <SEO pageTitle='Team Three' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title='Team Three' innerTitle='Team Three'/>
            <TeamMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default TeamPageThree;