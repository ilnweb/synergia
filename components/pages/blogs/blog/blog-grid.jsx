// components/pages/blogs/blog/blog-grid.jsx
'use client';
import React, { useState } from 'react';
import BlogItem from './blog-item';
import Pagination from './pagination';
import { STRAPI_URL } from '@/constants';

const BlogGridMain = ({ initialBlogs = [], error: serverError }) => {
  const blogItemShow = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const blogs = initialBlogs || [];

  // Show error message if there was an error
  if (serverError) {
    return (
      <div className='blog__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center text-danger'>
              <h3>Error Loading Blog</h3>
              <p className='mb-4'>{serverError}</p>
              <button className='btn btn-primary' onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state
  if (blogs.length === 0) {
    return (
      <div className='blog__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>No blog posts available at the moment. Please check back later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Transform Strapi data to match the expected format
  const transformedBlogs = blogs.map((blog, index) => ({
    number: String(index + 1).padStart(2, '0'),
    id: blog.documentId || blog.id || `blog-${index}`,
    date: blog.createdAt || new Date().toISOString(),
    comment: '0',
    title: blog.Title || 'Untitled Blog',
    image: blog.HeaderImage?.url
      ? { src: `${STRAPI_URL}${blog.HeaderImage.url}` }
      : '/assets/img/blog/blog-1.jpg',
    avatar: '/assets/img/avatar/avatar-1.jpg',
    name: 'Admin',
    position: 'Author',
  }));

  const totalPages = Math.ceil(transformedBlogs.length / blogItemShow);
  const startIndex = currentPage * blogItemShow;
  const endIndex = startIndex + blogItemShow;
  const currentBlogItems = transformedBlogs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='blog__one section-padding-three dark_image'>
      <div className='container'>
        <div className='row'>
          <BlogItem currentBlogItems={currentBlogItems} />
        </div>
        <Pagination
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BlogGridMain;
