"use client"
import SEO from "@/components/data/seo";
import HeaderThree from "@/components/layout/headers/header-three";
import SwitchTab from "../../common/dark-light";
import FooterThree from "@/components/layout/footers/footer-three";
import About from "./about";
import Services from "./services";
import BannerThree from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import CounterSection from "../../common/counter";
import Consultation from "./consultation";
import Portfolio from "./portfolio";
import Work from "./work";
import Testimonial from "./testimonial";
import TextSlide from "../../common/text-slide";
import Blog from "./blog";
import starIcon from "../../../../public/assets/img/icon/star.png";

const HomeThree = ({addClass}) => {
    return (
        <>
            <SwitchTab addClass={addClass} />
            <SEO pageTitle="Renewable Energy" />
            <HeaderThree  addClass={addClass} />
            <BannerThree />
            <Services />
            <About />
            <CounterSection />
            <Consultation />
            <Portfolio />
            <Work />
            <Testimonial />
            <TextSlide addIcon={starIcon} />
            <Blog />
            <FooterThree />
            <ScrollToTop addClass={addClass} />
        </>
    );
};

export default HomeThree;
