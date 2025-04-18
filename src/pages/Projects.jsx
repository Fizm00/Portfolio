import { useState, useEffect } from "react";
import Navbar from "../components/projects/Navbar";
import Filters from "../components/projects/Filters";
import List from "../components/projects/List";
import Modal from "../components/projects/Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const handleFilterChange = (tag) => {
    setSelectedTag(tag);
    AOS.refresh();
  };

  const handleViewDetails = (project) => setSelectedProject(project);

  return (
    <div id="projects" className="bg-black text-white min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/30 via-[#16213e]/20 to-black/80"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-5 bg-[size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"></div>
      </div>

      <Navbar isSticky={false} />
      
      <section className="relative z-10 max-w-screen-xl mx-auto px-4 py-24">
        <div data-aos="fade-up" className="mb-16">
          <h1 className="text-5xl font-bold text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-lg mx-auto">
            Explore my portfolio of web development work across various technologies and domains
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="100">
          <Filters
            selectedTag={selectedTag}
            onFilterChange={handleFilterChange}
          />
        </div>
        
        <List projects={filteredProjects} onViewDetails={handleViewDetails} />

        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>
    </div>
  );
};

export default Projects;