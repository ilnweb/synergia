import Link from 'next/link';
import { STRAPI_URL } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';
import dayjs from 'dayjs';

const BlogSidebar = () => {
  const {
    data: blogPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blog-all'],
    queryFn: () => blogService.getBlogs(),
  });

  const firstThreePosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className='all__sidebar dark_image ml-25 xl-ml-0'>
      <div className='all__sidebar-item'>
        <h6>Recent Post</h6>
        <div className='all__sidebar-item-post'>
          {firstThreePosts.map(blogPost => (
            <div className='post__item' key={blogPost.id}>
              <div className='post__item-image'>
                <Link href={`/blog/${blogPost.documentId}`}>
                  <img
                    src={`${STRAPI_URL}${blogPost.HeaderImage.url}`}
                    alt={`${blogPost.HeaderImage.alternativeText}`}
                  />
                </Link>
              </div>
              <div className='post__item-title'>
                <h6>
                  <Link href={`/blog/${blogPost.documentId}`}>{blogPost.Title}</Link>
                </h6>
                <span>
                  <i className='far fa-calendar-alt'></i>
                  {dayjs(blogPost.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
