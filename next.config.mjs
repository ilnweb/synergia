/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simdashai.cloud',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  async redirects() {
    // High-priority Soft 404 URLs that need permanent 301 redirects
    const highPriorityRedirects = [
      {
        source: '/rekuperacja-lodz',
        destination: '/services/rekuperacja-lodz',
        permanent: true,
      },
      {
        source: '/rekuperacja-lodz/',
        destination: '/services/rekuperacja-lodz',
        permanent: true,
      },
      {
        source: '/fotowoltaika-lodz',
        destination: '/services/fotowoltaika-lodz',
        permanent: true,
      },
      {
        source: '/fotowoltaika-lodz/',
        destination: '/services/fotowoltaika-lodz',
        permanent: true,
      },
      {
        source: '/czy-pompa-ciepla-sie-oplaca',
        destination: '/blog/czy-pompa-ciepla-sie-oplaca',
        permanent: true,
      },
      {
        source: '/czy-pompa-ciepla-sie-oplaca/',
        destination: '/blog/czy-pompa-ciepla-sie-oplaca',
        permanent: true,
      },
      // Additional URLs from the provided list
      {
        source: '/folie-maty-grzewcze',
        destination: '/services/folie-maty-grzewcze',
        permanent: true,
      },
      {
        source:
          '/moj-prad-6-0-budzet-przekroczony-ale-wciaz-mozesz-skladac-wniosek-na-instalacje-fotowoltaiczna',
        destination:
          '/blog/moj-prad-6-0-budzet-przekroczony-ale-wciaz-mozesz-skladac-wniosek-na-instalacje-fotowoltaiczna',
        permanent: true,
      },
      {
        source:
          '/moj-prad-6-0-budzet-przekroczony-ale-wciaz-mozesz-skladac-wniosek-na-instalacje-fotowoltaiczna/',
        destination:
          '/blog/moj-prad-6-0-budzet-przekroczony-ale-wciaz-mozesz-skladac-wniosek-na-instalacje-fotowoltaiczna',
        permanent: true,
      },
      {
        source: '/fotowoltaika',
        destination: '/services/fotowoltaika',
        permanent: true,
      },
      {
        source: '/fotowoltaika/',
        destination: '/services/fotowoltaika',
        permanent: true,
      },
      {
        source: '/pompy-ciepla',
        destination: '/services/pompy-ciepla',
        permanent: true,
      },
      {
        source: '/pompy-ciepla/',
        destination: '/services/pompy-ciepla',
        permanent: true,
      },
      {
        source: '/audyt-energetyczny-w-swietokrzyskiem-sprawdz-ile-mozesz-zaoszczedzic',
        destination: '/blog/audyt-energetyczny-w-swietokrzyskiem-sprawdz-ile-mozesz-zaoszczedzic',
        permanent: true,
      },
      {
        source: '/audyt-energetyczny-w-swietokrzyskiem-sprawdz-ile-mozesz-zaoszczedzic/',
        destination: '/blog/audyt-energetyczny-w-swietokrzyskiem-sprawdz-ile-mozesz-zaoszczedzic',
        permanent: true,
      },
      {
        source: '/pompa-ciepla-jak-prawidlowo-dobrac-moc',
        destination: '/blog/pompa-ciepla-jak-prawidlowo-dobrac-moc',
        permanent: true,
      },
      {
        source: '/pompa-ciepla-jak-prawidlowo-dobrac-moc/',
        destination: '/blog/pompa-ciepla-jak-prawidlowo-dobrac-moc',
        permanent: true,
      },
      {
        source: '/dofinansowanie-magazyny-energii-net-metering',
        destination: '/blog/dofinansowanie-magazyny-energii-net-metering',
        permanent: true,
      },
      {
        source: '/dofinansowanie-magazyny-energii-net-metering/',
        destination: '/blog/dofinansowanie-magazyny-energii-net-metering',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/kontakt/',
        destination: '/contact',
        permanent: true,
      },
      {
        source:
          '/swiadectwo-energetyczne-a-audyt-energetyczny-roznice-i-obowiazki-w-woj-swietokrzyskim',
        destination:
          '/blog/swiadectwo-energetyczne-a-audyt-energetyczny-roznice-i-obowiazki-w-woj-swietokrzyskim',
        permanent: true,
      },
      {
        source:
          '/swiadectwo-energetyczne-a-audyt-energetyczny-roznice-i-obowiazki-w-woj-swietokrzyskim/',
        destination:
          '/blog/swiadectwo-energetyczne-a-audyt-energetyczny-roznice-i-obowiazki-w-woj-swietokrzyskim',
        permanent: true,
      },
      {
        source: '/moj-prad-6-0-w-swietokrzyskiem-jak-skorzystac-z-dofinansowania-na-fotowoltaike',
        destination:
          '/blog/moj-prad-6-0-w-swietokrzyskiem-jak-skorzystac-z-dofinansowania-na-fotowoltaike',
        permanent: true,
      },
      {
        source: '/moj-prad-6-0-w-swietokrzyskiem-jak-skorzystac-z-dofinansowania-na-fotowoltaike/',
        destination:
          '/blog/moj-prad-6-0-w-swietokrzyskiem-jak-skorzystac-z-dofinansowania-na-fotowoltaike',
        permanent: true,
      },
      {
        source: '/fotowoltaika-swietokrzyskie',
        destination: '/services/fotowoltaika-swietokrzyskie',
        permanent: true,
      },
      {
        source: '/fotowoltaika-swietokrzyskie/',
        destination: '/services/fotowoltaika-swietokrzyskie',
        permanent: true,
      },
      {
        source: '/swiadectwo-energetyczne-czym-jest-i-dlaczego-warto-je-miec',
        destination: '/blog/swiadectwo-energetyczne-czym-jest-i-dlaczego-warto-je-miec',
        permanent: true,
      },
      {
        source: '/swiadectwo-energetyczne-czym-jest-i-dlaczego-warto-je-miec/',
        destination: '/blog/swiadectwo-energetyczne-czym-jest-i-dlaczego-warto-je-miec',
        permanent: true,
      },
      {
        source: '/najtanszy-dostawca-pradu-2024-w-swietokrzyskiem',
        destination: '/blog/najtanszy-dostawca-pradu-2024-w-swietokrzyskiem',
        permanent: true,
      },
      {
        source: '/najtanszy-dostawca-pradu-2024-w-swietokrzyskiem/',
        destination: '/blog/najtanszy-dostawca-pradu-2024-w-swietokrzyskiem',
        permanent: true,
      },
      {
        source:
          '/ogrzewanie-kablami-grzewczymi-jak-dziala-i-dlaczego-warto-postawic-na-to-rozwiazanie',
        destination:
          '/blog/ogrzewanie-kablami-grzewczymi-jak-dziala-i-dlaczego-warto-postawic-na-to-rozwiazanie',
        permanent: true,
      },
      {
        source:
          '/ogrzewanie-kablami-grzewczymi-jak-dziala-i-dlaczego-warto-postawic-na-to-rozwiazanie/',
        destination:
          '/blog/ogrzewanie-kablami-grzewczymi-jak-dziala-i-dlaczego-warto-postawic-na-to-rozwiazanie',
        permanent: true,
      },
      {
        source: '/najtanszy-prad-od-lipca-2024-taryfy-godziny-i-oszczednosci',
        destination: '/blog/najtanszy-prad-od-lipca-2024-taryfy-godziny-i-oszczednosci',
        permanent: true,
      },
      {
        source: '/najtanszy-prad-od-lipca-2024-taryfy-godziny-i-oszczednosci/',
        destination: '/blog/najtanszy-prad-od-lipca-2024-taryfy-godziny-i-oszczednosci',
        permanent: true,
      },
      {
        source: '/taryfy-dynamiczne-na-prad',
        destination: '/blog/taryfy-dynamiczne-na-prad',
        permanent: true,
      },
      {
        source: '/taryfy-dynamiczne-na-prad/',
        destination: '/blog/taryfy-dynamiczne-na-prad',
        permanent: true,
      },
      {
        source: '/ogrzewanie-elektryczne-pytania-i-odpowiedzi',
        destination: '/blog/ogrzewanie-elektryczne-pytania-i-odpowiedzi',
        permanent: true,
      },
      {
        source: '/ogrzewanie-elektryczne-pytania-i-odpowiedzi/',
        destination: '/blog/ogrzewanie-elektryczne-pytania-i-odpowiedzi',
        permanent: true,
      },
      {
        source: '/ogrzewanie-elektryczne-pytania-i-odpowiedzi-2',
        destination: '/blog/ogrzewanie-elektryczne-pytania-i-odpowiedzi-2',
        permanent: true,
      },
    ];

    // WordPress pattern redirects
    const wordpressRedirects = [
      {
        source: '/category/:slug*',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/tag/:slug*',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/author/:slug*',
        destination: '/about-us',
        permanent: false,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/404-error',
        permanent: false,
      },
      {
        source: '/wp-login.php',
        destination: '/404-error',
        permanent: false,
      },
    ];

    // Try to load generated redirects from CSV processing
    let generatedRedirects = [];
    try {
      const fs = await import('fs');
      const path = await import('path');
      const redirectsPath = path.join(process.cwd(), 'redirects-output.json');

      if (fs.existsSync(redirectsPath)) {
        const redirectsData = JSON.parse(fs.readFileSync(redirectsPath, 'utf8'));
        generatedRedirects = redirectsData.redirects || [];
        console.log(`✅ Loaded ${generatedRedirects.length} generated redirects from CSV`);
      }
    } catch (error) {
      console.warn('⚠️  Could not load generated redirects:', error.message);
    }

    // Combine all redirects
    return [...highPriorityRedirects, ...wordpressRedirects, ...generatedRedirects];
  },
};

export default nextConfig;
