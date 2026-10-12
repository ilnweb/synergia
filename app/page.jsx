import HomeOne from '@/components/pages/home';
import { buildCanonical } from '@/utils/canonical';

export const metadata = {
  alternates: { canonical: buildCanonical('/') },
};

export default function Home() {
  return (
    <>
      <HomeOne />
    </>
  );
}
