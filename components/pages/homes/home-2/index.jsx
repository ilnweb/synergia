"use client"
import SEO from "@/components/data/seo";
import HeaderTwo from "@/components/layout/headers/header-two";
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import WhoAre from "./who-are";
import Faq from "./faq";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import Blog from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import FooterTwo from "@/components/layout/footers/footer-two";
import ChooseUs from "./choose-us";

const HomeTwo = ({addClass}) => {
    return (
        <>
            <SEO pageTitle="Wind Energy" />
            <SwitchTab addClass={addClass} />
            <HeaderTwo addClass={addClass} />
            <BannerTwo />
            <About />
            <Services />
            <ChooseUs />
            <Portfolio />
            <Faq />
            <Pricing />
            <WhoAre />
            <Blog />
            <FooterTwo />
            <ScrollToTop addClass={addClass} /> 
        </>
    );
};

export default HomeTwo;