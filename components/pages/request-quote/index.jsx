import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import React from 'react';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';
import SwitchTab from "../common/dark-light";
import FooterOne from '@/components/layout/footers/footer-one';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <SwitchTab />
            <HeaderOne />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
            <RequestQuoteMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;