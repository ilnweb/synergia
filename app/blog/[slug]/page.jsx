import BlogDetails from '@/components/pages/blogs/blog-details';
import { blogService } from '../../../services/blogService';
import { notFound } from 'next/navigation';
import { blogCanonical } from '@/utils/canonical';

export async function generateMetadata({ params }) {
  try {
    const blog = await blogService.getBlogBySlug(params.slug);
    return blog ? { alternates: { canonical: blogCanonical(blog) } } : {};
  } catch {
    return {};
  }
}

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
