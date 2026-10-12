import { cache } from 'react';
import BlogDetails from '@/components/pages/blogs/blog-details';
import { blogService } from '../../../services/blogService';
import { notFound, permanentRedirect } from 'next/navigation';
import { blogCanonical, blogSlug } from '@/utils/canonical';
import { buildMetadata, descriptionFromMarkdown } from '@/utils/metadata';
import { STRAPI_URL } from '@/constants';

const findBlog = cache(async slug => {
  try {
    return await blogService.getBlogBySlug(slug);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
});

export async function generateMetadata({ params }) {
  const blog = await findBlog(params.slug);
  if (!blog) return {};

  return buildMetadata({
    title: blog.Title || 'Blog',
    description: blog.metaDescription || descriptionFromMarkdown(blog.Text),
    canonical: blogCanonical(blog),
    image: blog.HeaderImage?.url ? `${STRAPI_URL}${blog.HeaderImage.url}` : undefined,
  });
}

// Server component for proper 404 handling
const BlogDetail = async ({ params }) => {
  const blog = await findBlog(params.slug);

  if (!blog) {
    notFound();
  }

  if (params.slug !== blogSlug(blog)) {
    permanentRedirect(`/blog/${blogSlug(blog)}`);
  }

  return <BlogDetails singleData={blog} />;
};

export default BlogDetail;
