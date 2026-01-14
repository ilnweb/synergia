'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BlogItem from './blog-item';
import Pagination from './pagination';
import { blogService } from '../../../../services/blogService';

const BlogGridMain = () => {
  const blogItemShow = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: blogs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  console.log('Raw blogs data:', blogs);

  // Handle case where blogs might be undefined or have different structure
  if (!blogs || !Array.isArray(blogs)) {
    console.log('Blogs is not an array or is undefined:', blogs);
    return (
      <div className='blog__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>No blogs available.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Transform Strapi data to match the expected format
  const transformedBlogs = blogs.map((blog, index) => {
    console.log('Processing blog:', blog);

    return {
      number: String(index + 1).padStart(2, '0'),
      id: blog.documentId || blog.id || `blog-${index}`,
      date: blog.publishedAt
        ? new Date(blog.publishedAt).getDate().toString()
        : new Date().getDate().toString(),
      comment: '0', // No comments field in current structure
      title: blog.Title || 'Untitled Blog',
      image: blog.HeaderImage?.url
        ? { src: `http://72.60.17.88:1337${blog.HeaderImage.url}` }
        : '/assets/img/blog/blog-1.jpg', // fallback image
      avatar: '/assets/img/avatar/avatar-1.jpg', // No author field, using fallback
      name: 'Admin', // No author field, using default
      position: 'Author', // No author field, using default
    };
  });

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

  if (isLoading) {
    return (
      <div className='blog__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>Loading blogs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='blog__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>Error loading blogs. Please try again later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

export default BlogGridMain;
