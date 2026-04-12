import ProjectGridMain from '@/components/pages/projects/project/project-grid';
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import FooterOne from '@/components/layout/footers/footer-one';
import BreadCrumb from '@/components/pages/common/breadcrumb';
import { getProjects } from '../actions/projectActions';

export default async function ProjectsPage() {
  try {
    const projects = await getProjects();

    return (
      <>
        <SEO
          pageTitle='Realizacje | Synergia'
          pageDescription='Zobacz nasze zrealizowane projekty fotowoltaiczne, pompy ciepła i inne odnawialne źródła energii. Profesjonalne instalacje na terenie całej Polski.'
          keywords='realizacje, projekty, fotowoltaika, pompy ciepła, instalacje, odnawialne źródła energii'
          canonicalUrl='https://www.synergiaenergia.pl/realizacje'
          ogImage='/assets/img/banner/banner-1.jpg'
        />
        <HeaderOne />
        <BreadCrumb
          title='Realizacje'
          innerTitle='Realizacje'
          backgroundImage='/assets/img/banner/banner-1.png'
        />
        <ProjectGridMain initialProjects={projects} error={null} />
        <FooterOne />
      </>
    );
  } catch (error) {
    return (
      <>
        <SEO
          pageTitle='Realizacje | Synergia'
          pageDescription='Zobacz nasze zrealizowane projekty fotowoltaiczne, pompy ciepła i inne odnawialne źródła energii. Profesjonalne instalacje na terenie całej Polski.'
          keywords='realizacje, projekty, fotowoltaika, pompy ciepła, instalacje, odnawialne źródła energii'
          canonicalUrl='https://www.synergiaenergia.pl/realizacje'
          ogImage='/assets/img/banner/banner-1.jpg'
        />
        <HeaderOne />
        <BreadCrumb
          title='Realizacje'
          innerTitle='Realizacje'
          backgroundImage='/assets/img/banner/banner-1.png'
        />
        <ProjectGridMain
          initialProjects={[]}
          error={error.message || 'Nie udało się załadować projektów. Spróbuj ponownie później.'}
        />
        <FooterOne />
      </>
    );
  }
}
