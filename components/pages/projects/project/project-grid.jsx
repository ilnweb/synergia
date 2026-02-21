'use client';
import React, { useState } from 'react';
import ProjectItem from './project-item';
import Pagination from './pagination';
import { STRAPI_URL } from '@/constants';

const ProjectGridMain = ({ initialProjects = [], error: serverError }) => {
  const projectItemShow = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const projects = initialProjects || [];

  // Show error message if there was an error
  if (serverError) {
    return (
      <div className='project__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center text-danger'>
              <h3>Error Loading Projects</h3>
              <p className='mb-4'>{serverError}</p>
              <button className='btn btn-primary' onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className='project__one section-padding-three dark_image'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>Brak dostępnych projektów.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Transform Strapi data to match the expected format
  const transformedProjects = projects.map((project, index) => ({
    id: project.documentId || project.id || `project-${index}`,
    title: project.title || 'Untitled Project',
    description: project.shortDescription || 'No description available.',
    content: project.content || project.shortDescription || 'No description available.', // Use content or fallback to shortDescription
    image: project.headerImage?.url
      ? {
          src: `${STRAPI_URL}${project.headerImage.formats?.medium?.url || project.headerImage.url}`,
          alt: project.title || 'Project Image',
        }
      : {
          src: '/assets/img/project/project-placeholder.jpg',
          alt: 'Project Placeholder',
        },
    category: 'Project', // Add category if available in the API
    slug: project.documentId || project.id,
  }));

  const totalPages = Math.ceil(transformedProjects.length / projectItemShow);
  const startIndex = currentPage * projectItemShow;
  const endIndex = startIndex + projectItemShow;
  const currentProjectItems = transformedProjects.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='project__one section-padding-three dark_image'>
      <div className='container'>
        <div className='row'>
          <ProjectItem currentProjectItems={currentProjectItems} />
        </div>
        <Pagination
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProjectGridMain;
