import { NEXT_PUBLIC_BASE_URL } from '@/constants';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Synergia Energia',
  description:
    'Instalacje fotowoltaiczne, pompy ciepła, folie grzewcze, wiaty solarne oraz audyty energetyczne.',
  url: NEXT_PUBLIC_BASE_URL,
  image: `${NEXT_PUBLIC_BASE_URL}/assets/img/banner/banner-1.jpg`,
  telephone: '+48 698 454 913',
  email: 'biuro@synergiaenergia.pl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jana Nowaka-Jeziorańskiego 121',
    postalCode: '25-408',
    addressLocality: 'Kielce',
    addressCountry: 'PL',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/SynergiaEnergiaPL',
    'https://www.linkedin.com/company/synergia-energia',
  ],
};

const LocalBusinessSchema = () => (
  <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
);

export default LocalBusinessSchema;
