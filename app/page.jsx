import HomeOne from '@/components/pages/home';
import LocalBusinessSchema from '@/components/data/local-business-schema';
import { getServices } from './actions/serviceActions';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/',
  title: 'Fotowoltaika i Odnawialne Źródła Energii',
  description:
    'Profesjonalne instalacje fotowoltaiczne, pompy ciepła, folie grzewcze i wiaty solarne w Polsce. Zmniejsz rachunki za prąd i ciepło z ekologicznymi rozwiązaniami energetycznymi. 3886 zakończonych projektów, 24456 kW zainstalowanej mocy.',
  image: '/assets/img/banner/banner-1.jpg',
});

export default async function Home() {
  const services = await getServices().catch(() => null);

  return (
    <>
      <LocalBusinessSchema />
      <HomeOne initialServices={services} />
    </>
  );
}
