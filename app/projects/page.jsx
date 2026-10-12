import ProjectGridMain from '../../components/pages/projects/project/project-grid';
import HeaderOne from '../../components/layout/headers/header-one';
import FooterOne from '../../components/layout/footers/footer-one';
import BreadCrumb from '../../components/pages/common/breadcrumb';
import { getProjects } from '../actions/projectActions';

export default async function ProjectsPage() {
  try {
    const projects = await getProjects();

    return (
      <>
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
