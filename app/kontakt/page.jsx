import ContactTwo from '@/components/pages/contacts/contact-two';
import React from 'react';
import { buildCanonical } from '@/utils/canonical';

export const metadata = {
  alternates: { canonical: buildCanonical('/kontakt') },
};

const ContactPage = () => {
  return (
    <>
      <ContactTwo />
    </>
  );
};

export default ContactPage;
