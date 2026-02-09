import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';

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
                <h6>{dayjs(data.date).format('DD')}</h6>
                <span>{dayjs(data.date).format('MMM')}</span>
              </div>
              <h6>
                <Link href={`/blog/${data.id}`}>{data.title}</Link>
              </h6>
              <Link
                className='simple-btn'
                href={`/blog/${data.id}`}
                style={{ color: 'rgb(18, 89, 136)' }}
              >
                Read More
                <i
                  style={{ color: '#E63331' }}
                  className='fa-sharp fa-regular fa-arrow-up-right'
                ></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
