'use client';

import BlogSingleMain from './blog-details';
import BreadCrumb from '../../common/breadcrumb';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';
import { STRAPI_URL } from '@/services/blogService';

const BlogDetails = ({ singleData }) => {
  // Handle both Strapi v5 flat structure and legacy structure
  const blog = singleData.attributes || singleData;

  // Get the HeaderImage URL for the breadcrumb background
  const headerImage = blog.HeaderImage?.url ? `${STRAPI_URL}${blog.HeaderImage.url}` : null;

  return (
    <>
      <SEO pageTitle={blog.Title || 'Blog Details'} />
      {/* <SwitchTab /> */}
      <HeaderOne />
      <BreadCrumb
        title={blog.Title || 'Blog'}
        innerTitle={blog.Title || 'Blog'}
        backgroundImage={headerImage}
      />
      <BlogSingleMain singleData={singleData} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
