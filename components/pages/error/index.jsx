"use client";
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import Error from './error';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FooterOne from '@/components/layout/footers/footer-one';
import SwitchTab from '../common/dark-light';

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title='Not Found' innerTitle='404' />
            <Error />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ErrorPage;