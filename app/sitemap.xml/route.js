import { getBlogs } from '../actions/blogActions.js';
import { getServices } from '../actions/serviceActions.js';
import { generateSlug } from '../../utils/slugUtils.js';

export async function GET() {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.synergiaenergia.pl'
      : 'http://localhost:3000';
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realizacje`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const dynamicPages = [];

  try {
    // Fetch blogs
    const blogs = await getBlogs();
    blogs.forEach(blog => {
      const slug = generateSlug(blog.Title || blog.title || blog.documentId || blog.id);
      dynamicPages.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: blog.updatedAt || blog.createdAt || new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Fetch services with Polish slugs
    const services = await getServices();
    services.forEach(service => {
      const title = service.Title || service.title || 'Untitled Service';
      const serviceId = service.id || service.documentId || 'unknown';
      const fallback = `service-${serviceId}`;
      const slug = generateSlug(title, fallback) || fallback || `service-${serviceId}`;

      dynamicPages.push({
        url: `${baseUrl}/uslugi/${slug}`,
        lastModified: service.updatedAt || service.createdAt || new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  } catch (error) {
    console.error('Error fetching dynamic pages for sitemap:', error);
  }

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date(page.lastModified).toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
