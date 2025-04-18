import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0"
      onClick={handleClose}
    >
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/70 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      ></div>
      <div
        className={`relative max-w-lg w-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

          <button
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-300"
            onClick={handleClose}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            {project.name}
          </h2>

          <div className="mb-6">
            <h3 className="text-sm uppercase text-gray-400 mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-300 text-xs py-1 px-3 rounded-full border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.description && (
            <div className="mb-6">
              <h3 className="text-sm uppercase text-gray-400 mb-2">About</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg flex justify-center items-center transition-all duration-300"
              >
                <span>Live Demo</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 border border-gray-600 hover:border-purple-500 text-white font-medium rounded-lg flex justify-center items-center transition-all duration-300"
              >
                <span>Source Code</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    liveUrl: PropTypes.string,
    repoUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
