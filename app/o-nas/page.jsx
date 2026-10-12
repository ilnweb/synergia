import AboutUs from '@/components/pages/about';
import { buildMetadata } from '@/utils/metadata';

export const metadata = buildMetadata({
  path: '/o-nas',
  title: 'O nas',
  description:
    'Poznaj historię Synergia Energia - firmy specjalizującej się w fotowoltaice, pompach ciepła i systemach grzewczych w Polsce. Od boomu na fotowoltaikę po certyfikowanego audytora energetycznego. Zaufanie, pasja i najwyższa jakość.',
  image: '/assets/img/banner/banner-4.jpg',
});

const About = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default About;
