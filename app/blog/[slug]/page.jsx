import BlogDetails from '@/components/pages/blogs/blog-details';
import { blogService } from '../../../services/blogService';
import { notFound } from 'next/navigation';

// Server component for proper 404 handling
const BlogDetail = async ({ params }) => {
  const { slug } = params;

  try {
    // Fetch blog data on server side
    const blog = await blogService.getBlogBySlug(slug);

    // If blog is not found, return proper 404
    if (!blog) {
      notFound();
    }

    return <BlogDetails singleData={blog} />;
  } catch (error) {
    console.error('Error fetching blog:', error);
    notFound();
  }
};

export default BlogDetail;
