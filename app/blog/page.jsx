import { getBlogs } from '../actions/blogActions.js';
import BlogGrid from '@/components/pages/blogs/blog';

export default async function BlogPage() {
  try {
    const blogs = await getBlogs();
    return <BlogGrid initialBlogs={blogs} />;
  } catch (error) {
    console.error('Error loading blog page:', error);
    return <BlogGrid initialBlogs={[]} error={error.message} />;
  }
}
