import PrivacyPolicy from '@/components/pages/privacy-policy';
import React from 'react';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/polityka-prywatnosci',
  title: 'Polityka prywatności',
  description:
    'Polityka prywatności Synergia Energia - informacje o przetwarzaniu danych osobowych, RODO, cookies i ochronie prywatności użytkowników.',
  image: '/assets/img/banner/banner-2.jpg',
});

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
