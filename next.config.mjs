/** @type {import('next').NextConfig} */

// Old (WordPress-era) addresses -> current pages. Every destination must exist.
const legacyRedirects = {
  '/contact': '/kontakt',
  '/services': '/uslugi',
  '/projects': '/realizacje',
  '/about-us': '/o-nas',

  '/fotowoltaika': '/uslugi/fotowoltaika',
  '/fotowoltaika-lodz': '/uslugi/fotowoltaika',
  '/fotowoltaika-swietokrzyskie': '/uslugi/fotowoltaika',
  '/pompy-ciepla': '/uslugi/pompy-ciepla',
  '/pompy-ciepla-kielce': '/uslugi/pompy-ciepla',
  '/folie-maty-grzewcze': '/uslugi/folie-i-maty-grzewcze',
  '/audyty-energetyczne': '/uslugi/audyty-i-swiadectwa',
  '/rekuperacja-lodz': '/uslugi',

  '/czy-pompa-ciepla-sie-oplaca':
    '/blog/gruntowa-czy-powietrzna-pompa-ciepla-porownanie-koszty-i-stabilnosc-czyli-co-naprawde-oplaca-sie-wybrac',
  '/pompa-ciepla-jak-prawidlowo-dobrac-moc':
    '/blog/pompa-ciepla-w-wojewodztwie-swietokrzyskim-jak-dobrac-ile-kosztuje-i-kiedy-ma-sens',
  '/moj-prad-6-0-budzet-przekroczony-ale-wciaz-mozesz-skladac-wniosek-na-instalacje-fotowoltaiczna':
    '/blog/moj-prad-60-rewolucja-w-fotowoltaice',
  '/moj-prad-6-0-w-swietokrzyskiem-jak-skorzystac-z-dofinansowania-na-fotowoltaike':
    '/blog/moj-prad-60-rewolucja-w-fotowoltaice',
  '/dofinansowanie-magazyny-energii-net-metering':
    '/blog/magazyn-energii-do-fotowoltaiki-poradnik-2026',
  '/audyt-energetyczny-w-swietokrzyskiem-sprawdz-ile-mozesz-zaoszczedzic':
    '/blog/audyt-energetyczny-w-swietokrzyskiem',
  '/swiadectwo-energetyczne-czym-jest-i-dlaczego-warto-je-miec':
    '/blog/swiadectwo-charakterystyki-energetycznej-wszystko-co-musisz-wiedziec',
  '/swiadectwo-energetyczne-a-audyt-energetyczny-roznice-i-obowiazki-w-woj-swietokrzyskim':
    '/blog/swiadectwo-energetyczne-w-2026-roku-kiedy-jest-potrzebne',
  '/ogrzewanie-kablami-grzewczymi-jak-dziala-i-dlaczego-warto-postawic-na-to-rozwiazanie':
    '/uslugi/folie-i-maty-grzewcze',
  '/ogrzewanie-elektryczne-pytania-i-odpowiedzi': '/uslugi/folie-i-maty-grzewcze',
  '/ogrzewanie-elektryczne-pytania-i-odpowiedzi-2': '/uslugi/folie-i-maty-grzewcze',
  '/najtanszy-dostawca-pradu-2024-w-swietokrzyskiem': '/blog',
  '/najtanszy-prad-od-lipca-2024-taryfy-godziny-i-oszczednosci': '/blog',
  '/taryfy-dynamiczne-na-prad': '/blog',
};

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...Object.entries(legacyRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      { source: '/services/:slug', destination: '/uslugi/:slug', permanent: true },
      { source: '/category/:slug*', destination: '/blog', permanent: false },
      { source: '/tag/:slug*', destination: '/blog', permanent: false },
      { source: '/author/:slug*', destination: '/o-nas', permanent: false },
    ];
  },
};

export default nextConfig;
