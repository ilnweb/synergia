'use client';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import BlogStandardMain from './blog-standard';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const BlogStandardPage = () => {
  return (
    <>
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='Blog Standard' innerTitle='Blog Standard' />
      <BlogStandardMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default BlogStandardPage;
