import React from "react";
import ProjectCard from "./Card";

const ProjectList = ({ projects, onViewDetails }) => {
  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">
        No projects match the selected filter.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProjectList;
