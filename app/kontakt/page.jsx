import ContactTwo from '@/components/pages/contacts/contact-two';
import React from 'react';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/kontakt',
  title: 'Kontakt',
  description:
    'Skontaktuj się z Synergia Energia - specjalistami od fotowoltaiki, pomp ciepła i odnawialnych źródeł energii. Zadzwoń +48 698 454 913, napisz biuro@synergiaenergia.pl. Kielce, Pon-Pt 09:00-17:00. Profesjonalne doradztwo energetyczne.',
  image: '/assets/img/banner/banner-2.jpg',
});

const ContactPage = () => {
  return (
    <>
      <ContactTwo />
    </>
  );
};

export default ContactPage;
