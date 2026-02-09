// components/pages/blogs/blog/index.jsx
'use client';

import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../../common/breadcrumb';
import BlogGridMain from './blog-grid';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const BlogGrid = ({ initialBlogs = [], error = null }) => {
  return (
    <>
      <SEO pageTitle='Blog Synergia Energia' />
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb title='Blog' innerTitle='Blog' backgroundImage='/assets/img/blog/blog-1.jpg' />
      <BlogGridMain initialBlogs={initialBlogs} error={error} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default BlogGrid;
