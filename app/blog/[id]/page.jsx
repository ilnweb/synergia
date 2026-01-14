'use client';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import BlogDetails from '@/components/pages/blogs/blog-details';
import { blogService } from '../../../services/blogService';

const BlogDetail = () => {
  const params = useParams();
  const router = useRouter();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blog', params.id],
    queryFn: () => blogService.getBlogBySlug(params.id),
    enabled: !!params.id,
  });

  if (isLoading) {
    return (
      <div className='blog__details dark__image section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>Loading blog...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return router.push('/404-error');
  }

  return (
    <>
      <BlogDetails singleData={blog} />
    </>
  );
};

export default BlogDetail;
