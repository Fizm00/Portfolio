import React from "react";

const tags = ["All", "React", "Node.js", "Python", "Frontend", "Backend"];

const ProjectFilters = ({ selectedTag, onFilterChange }) => {
  return (
    <div className="mb-16 px-4 sm:px-8 lg:px-0 flex flex-wrap justify-center gap-4">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`py-2 px-4 rounded-full transition-transform duration-300 transform ${
            selectedTag === tag
              ? "bg-purple-500 text-white scale-105"
              : "bg-gray-600 hover:scale-105"
          }`}
          onClick={() => onFilterChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
