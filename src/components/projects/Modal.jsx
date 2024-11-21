import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-lg p-6 max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-white hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p>
          This project is built using{" "}
          {project.tags.map((tag, index) => (
            <span key={index} className="text-purple-500">
              {tag}
              {index < project.tags.length - 1 && ", "}
            </span>
          ))}
          .
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
