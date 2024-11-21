import React, { useState } from "react";
import Navbar from "../components/navbar";
import Filters from "../components/projects/Filters";
import List from "../components/projects/List";
import Modal from "../components/projects/Modal";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const handleFilterChange = (tag) => setSelectedTag(tag);

  const handleViewDetails = (project) => setSelectedProject(project);

  return (
    <div id="projects" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section id="projects" className="max-w-screen-lg mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-500">Projects</span>
        </h1>

        {/* Filter Buttons */}
        <Filters
          selectedTag={selectedTag}
          onFilterChange={handleFilterChange}
        />

        {/* Project Cards */}
        <List
          projects={filteredProjects}
          onViewDetails={handleViewDetails}
        />

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
