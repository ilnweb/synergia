import { getBlogs } from '../actions/blogActions.js';
import BlogGrid from '@/components/pages/blogs/blog';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Blog',
  description:
    'Poradniki i aktualności o fotowoltaice, pompach ciepła, magazynach energii, audytach energetycznych i programie Czyste Powietrze od ekspertów Synergia Energia.',
  image: '/assets/img/banner/banner-1.jpg',
});

export default async function BlogPage() {
  try {
    const blogs = await getBlogs();
    return <BlogGrid initialBlogs={blogs} />;
  } catch (error) {
    console.error('Error loading blog page:', error);
    return <BlogGrid initialBlogs={[]} error={error.message} />;
  }
}
