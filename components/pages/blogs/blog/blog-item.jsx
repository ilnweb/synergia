import Link from 'next/link';
import React from 'react';

const BlogItem = ({ currentBlogItems }) => {
  return (
    <>
      {currentBlogItems?.map((data, id) => (
        <div className='col-xl-4 col-lg-6' key={id}>
          <div className='blog__one-item'>
            <div className='blog__one-item-image'>
              <Link href={`/blog/${data.id}`}>
                <img src={data.image.src} alt='blog' />
              </Link>
            </div>
            <div className='blog__one-item-content'>
              <div className='blog__one-item-content-date'>
                <h6>{data.date}</h6>
                <span>Apr</span>
              </div>
              <h6>
                <Link href={`/blog/${data.id}`}>{data.title}</Link>
              </h6>
              <Link className='simple-btn' href={`/blog/${data.id}`}>
                Read More<i className='fa-sharp fa-regular fa-arrow-up-right'></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
