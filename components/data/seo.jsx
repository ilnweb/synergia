'use client';
import { useEffect } from 'react';
import Head from 'next/head';

const SEO = ({
  pageTitle = 'Fotowoltaika i Odnawialne Źródła Energii',
  pageDescription = 'Profesjonalne instalacje fotowoltaiczne, pompy ciepła, folie grzewcze i wiaty solarne. Zmniejsz rachunki za prąd i ciepło z ekologicznymi rozwiązaniami energetycznymi.',
  keywords = 'fotowoltaika, panele słoneczne, pompy ciepła, odnawialne źródła energii, OZE, energia słoneczna, audyt energetyczny, folie grzewcze, wiaty solarne',
  canonicalUrl = 'https://synergia.pl',
  ogImage = '/assets/img/banner/banner-1.jpg',
}) => {
  useEffect(() => {
    document.title = `${pageTitle} - Synergia - Fotowoltaika i Odnawialne Źródła Energii`;

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(
          name.includes('og:') || name.includes('twitter:') ? 'property' : 'name',
          name
        );
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Synergia');
    updateMetaTag(
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    updateMetaTag('language', 'pl');
    updateMetaTag('geo.region', 'PL');
    updateMetaTag('geo.placename', 'Poland');

    // Open Graph
    updateMetaTag('og:title', pageTitle);
    updateMetaTag('og:description', pageDescription);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', canonicalUrl);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:site_name', 'Synergia - Fotowoltaika i OZE');
    updateMetaTag('og:locale', 'pl_PL');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', '/favicon.ico');

    // Schema.org structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Synergia - Fotowoltaika i Odnawialne Źródła Energii',
      description: pageDescription,
      url: canonicalUrl,
      image: ogImage,
      telephone: '+48 123 456 789',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PL',
        addressLocality: 'Poland',
      },
      sameAs: ['https://www.facebook.com/synergia', 'https://www.instagram.com/synergia'],
      services: [
        'Instalacje fotowoltaiczne',
        'Pompy ciepła',
        'Folie i maty grzewcze',
        'Wiaty solarne',
        'Audyty energetyczne',
      ],
    };

    // Add structured data
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pageTitle, pageDescription, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEO;
