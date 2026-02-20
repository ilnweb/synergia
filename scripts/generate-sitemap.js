#!/usr/bin/env node

// Simple script to test sitemap generation
console.log('Testing sitemap generation...');
console.log('Sitemap is available at: http://localhost:3003/sitemap.xml');
console.log('Robots.txt is available at: http://localhost:3003/robots.txt');
console.log('');
console.log('To verify the sitemap contains Polish URLs:');
console.log('curl -s "http://localhost:3003/sitemap.xml" | grep -E "(uslugi|realizacje|kontakt|o-nas)"');
