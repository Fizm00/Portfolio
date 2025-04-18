import PropTypes from "prop-types";
import { motion } from "framer-motion";

const tags = ["All", "React", "Node.js", "Python", "Frontend", "Backend"];

const ProjectFilters = ({ selectedTag, onFilterChange }) => {
  return (
    <div className="mb-16 relative">
      <div className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent top-1/2 -translate-y-1/2 -z-10"></div>
      
      <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`relative py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 ${
              selectedTag === tag
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => onFilterChange(tag)}
          >
            {selectedTag === tag && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative z-10">{tag}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

ProjectFilters.propTypes = {
  selectedTag: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ProjectFilters;