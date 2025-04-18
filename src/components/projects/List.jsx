import { useEffect } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./Card";
import AOS from "aos";

const ProjectList = ({ projects, onViewDetails }) => {
  useEffect(() => {
    AOS.refresh();
  }, [projects]);

  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">
        No projects match the selected filter.
      </p>
    );
  }

  return (
    <div key={projects.map((p) => p.id).join(",")} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProjectList;
