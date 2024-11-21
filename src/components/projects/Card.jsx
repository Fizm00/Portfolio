import React from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
      data-aos="fade-up"
    >
      {project.isFeatured && (
        <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs py-1 px-2 rounded">
          Featured
        </span>
      )}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover hover:scale-110 hover:opacity-90 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 hover:text-purple-500 hover:underline transition duration-300">
          {project.name}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-600 text-white text-sm py-1 px-3 rounded-full hover:bg-purple-500 hover:text-black transition duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="mt-4 bg-purple-500 hover:bg-purple-700 text-white py-1 px-4 rounded transform hover:scale-105 transition-transform duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
