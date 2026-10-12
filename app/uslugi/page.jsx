import Services from '@/components/pages/services/service';
import { buildCanonical } from '@/utils/canonical';

export const metadata = {
  alternates: { canonical: buildCanonical('/uslugi') },
};

const ServicesPage = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default ServicesPage;
