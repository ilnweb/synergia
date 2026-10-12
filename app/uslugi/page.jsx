import Services from '@/components/pages/services/service';
import { getServices } from '../actions/serviceActions';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/uslugi',
  title: 'Usługi',
  description:
    'Fotowoltaika, pompy ciepła, folie i maty grzewcze, wiaty solarne oraz audyty i świadectwa energetyczne. Poznaj ofertę Synergia Energia.',
  image: '/assets/img/banner/banner-1.jpg',
});

const ServicesPage = async () => {
  const services = await getServices().catch(() => null);

  return (
    <>
      <Services initialServices={services} />
    </>
  );
};

export default ServicesPage;
