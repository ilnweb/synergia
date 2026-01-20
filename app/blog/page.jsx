import BlogGrid from '@/components/pages/blogs/blog';
import { getBlogs } from '../actions/blogActions';

export default async function Blog() {
  try {
    const blogs = await getBlogs();

    return <BlogGrid initialBlogs={blogs} error={null} />;
  } catch (error) {
    return (
      <BlogGrid
        initialBlogs={[]}
        error={error.message || 'Failed to load blog posts. Please try again later.'}
      />
    );
  }
}
