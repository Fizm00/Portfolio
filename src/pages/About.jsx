import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/About/Introduction";
import Skills from "../components/About/Skills";
import CTA from "../components/About/CTA";

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Halaman About */}
      <section
        id="about"
        className="bg-black text-white min-h-screen px-6 py-20"
        data-aos="fade-up"
      >
        <div className="max-w-screen-lg mx-auto pt-24">
          {/* Introduction */}
          <div className="mb-24">
            <Introduction />
          </div>

          {/* Tech Stack */}
          <div className="mb-24">
            <Skills />
          </div>

          {/* Call-to-Action */}
          <CTA />
        </div>
      </section>
    </div>
  );
};

export default About;
