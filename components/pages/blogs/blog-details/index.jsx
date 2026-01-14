'use client';

import BlogSingleMain from './blog-details';
import BreadCrumb from '../../common/breadcrumb';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../../common/scroll/scroll-to-top';
import SwitchTab from '../../common/dark-light';

const BlogDetails = ({ singleData }) => {
  // Handle both Strapi v5 flat structure and legacy structure
  const blog = singleData.attributes || singleData;
  const firstThreeWords = blog.Title
    ? blog.Title.split(' ').slice(0, 3).join(' ') + '...'
    : 'Blog...';

  // Get the HeaderImage URL for the breadcrumb background
  const headerImage = blog.HeaderImage?.url
    ? `http://72.60.17.88:1337${blog.HeaderImage.url}`
    : null;

  return (
    <>
      <SEO pageTitle={blog.Title || 'Blog Details'} />
      <SwitchTab />
      <HeaderOne />
      <BreadCrumb
        title={firstThreeWords}
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
