'use client';

import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProjectItem = ({ currentProjectItems }) => {
  if (!currentProjectItems || currentProjectItems.length === 0) {
    return null;
  }

  return (
    <>
      {currentProjectItems.map(project => (
        <div className='col-lg-4 col-md-6' key={project.id}>
          <div
            className='project__item mb-30'
            style={{
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
              borderRadius: '12px',
              backgroundColor: '#fff',
              transition: 'all 0.3s ease',
              minHeight: '500px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow =
                '0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow =
                '0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className='project__thumb' style={{ margin: '-20px -20px 20px -20px' }}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={370}
                height={250}
                className='img-fluid'
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                }}
              />
            </div>
            <div className='project__content'>
              <h3 className='title' style={{ fontSize: '24px' }}>
                {project.title}
              </h3>
              <div className='project-content'>
                {project.content && (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
