export function GET() {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.synergiaenergia.pl'
      : 'http://localhost:3000';

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
