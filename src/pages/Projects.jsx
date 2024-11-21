import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
    AOS.init({ duration: 1000 });
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
    <div id="projects" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section className="max-w-screen-lg mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-14 text-center">
          My <span className="text-purple-500">Projects</span>
        </h1>

        {/* Filter Buttons */}
        <div className="py-6">
          <Filters
            selectedTag={selectedTag}
            onFilterChange={handleFilterChange}
          />
        </div>
        {/* Project Cards */}
        <List projects={filteredProjects} onViewDetails={handleViewDetails} />

        {/* Modal for Project Details */}
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
