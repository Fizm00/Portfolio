import PropTypes from "prop-types";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700/50"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {project.isFeatured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium py-1 px-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-400 group-hover:to-purple-200 transition-all duration-300">
          {project.name}
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700/70 text-gray-300 text-xs py-1 px-3 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-gray-400 text-xs py-1">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
        
        <button
          onClick={() => onViewDetails(project)}
          className="w-full mt-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 text-white flex justify-center items-center group"
        >
          <span>View Details</span>
          <svg 
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    isFeatured: PropTypes.bool,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProjectCard;