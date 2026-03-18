import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={project.category} />
          <div className="project-category">{project.category}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
