import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  const navigate = useNavigate();

  const handleCollaborate = () => {
    navigate("/contact");
  };

  return (
    <div className="text-center max-w-3xl mx-auto relative py-6">

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white inline-flex items-center justify-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500">Let&apos;s</span> Collaborate
      </h2>

      <p className="text-lg text-gray-400 mb-8 leading-relaxed">
        I&apos;m always looking for exciting projects and collaboration opportunities.
        Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
        Let&apos;s create something amazing together!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button
          onClick={handleCollaborate}
          className="group relative overflow-hidden text-white py-3 px-8 rounded-full font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-purple-400/80 z-0"></span>
          <span className="relative z-10">Contact Me</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
          <span className="absolute top-0 left-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-0"></span>
        </button>

        <a
          href="#"
          className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 relative group"
          onClick={(e) => {
            e.preventDefault();
            navigate("/projects");
          }}
        >
          <span>View My Projects →</span>
          <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      <div className="mt-16 pt-8 flex flex-wrap justify-center gap-8 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
          <span>GitHub</span>
          <span className="absolute left-0 bottom-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
          <span>LinkedIn</span>
          <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
          <span>Twitter</span>
          <span className="absolute left-0 bottom-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
          <span>Email</span>
          <span className="absolute left-0 bottom-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default CTA;