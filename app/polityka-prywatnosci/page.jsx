import PrivacyPolicy from '@/components/pages/privacy-policy';
import React from 'react';
import { buildCanonical } from '@/utils/canonical';

export const metadata = {
  alternates: { canonical: buildCanonical('/polityka-prywatnosci') },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
