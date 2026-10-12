import AboutUs from '@/components/pages/about';
import { buildCanonical } from '@/utils/canonical';

export const metadata = {
  alternates: { canonical: buildCanonical('/o-nas') },
};

const About = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default About;
