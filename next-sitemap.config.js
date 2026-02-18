/** @type {import('next-sitemap').IConfig } */
module.exports = {
  siteUrl: 'https://synergiaenergia.com', // Replace with your actual domain
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/api'],
  transform: async (config, path) => {
    // Custom priority for different page types
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.includes('/blog') || path.includes('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.includes('/portfolio') || path.includes('/projects')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async config => {
    const { getBlogs } = await import('./app/actions/blogActions.js');
    const { getServices } = await import('./app/actions/serviceActions.js');

    const dynamicPaths = [];

    try {
      // Fetch blogs
      const blogs = await getBlogs();
      blogs.forEach(blog => {
        dynamicPaths.push({
          loc: `/blog/${blog.documentId || blog.id}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: blog.updatedAt || blog.createdAt,
        });
      });

      // Fetch services
      const services = await getServices();
      services.forEach(service => {
        dynamicPaths.push({
          loc: `/services/${service.documentId || service.id}`,
          changefreq: 'monthly',
          priority: 0.8,
          lastmod: service.updatedAt || service.createdAt,
        });
      });
    } catch (error) {
      console.error('Error fetching dynamic paths for sitemap:', error);
    }

    return dynamicPaths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
  },
};
