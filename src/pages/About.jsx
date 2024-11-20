import React from "react";
import Navbar from "../components/Navbar";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiKotlin,
  SiFigma,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
} from "react-icons/si";

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Halaman About */}
      <section
        id="about"
        className="bg-black text-white min-h-screen px-6 py-20"
      >
        <div className="max-w-screen-lg mx-auto space-y-12">
          {/* Pengenalan Diri */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-purple-500">Me</span>
            </h1>
            <p className="text-lg text-gray-400">
              Hello! I am Firza Himawan, a junior programmer currently pursuing
              my studies and dreaming of becoming a Frontend Developer. I have
              explored various aspects of programming, including web development
              using technologies such as Node.js, React, Vite, Tailwind CSS,
              MongoDB, and Express.js. I also have experience in mobile
              development using Java and Kotlin, as well as design using Figma.
              Additionally, I have ventured into the world of Machine Learning
              and Deep Learning using Python, Streamlit, TensorFlow, and
              PyTorch.
            </p>
          </div>

          {/* Keterampilan Teknologi */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Technologies I Use</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-4xl">
              {/* Web Development */}
              <div className="flex flex-col items-center space-y-2">
                <FaReact className="text-purple-500" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaNodeJs className="text-green-500" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaHtml5 className="text-orange-500" />
                <span className="text-sm">HTML5</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaCss3Alt className="text-blue-500" />
                <span className="text-sm">CSS3</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaJsSquare className="text-yellow-500" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiTailwindcss className="text-blue-400" />
                <span className="text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiExpress className="text-gray-400" />
                <span className="text-sm">Express.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiMongodb className="text-green-400" />
                <span className="text-sm">MongoDB</span>
              </div>
              {/* Mobile Development */}
              <div className="flex flex-col items-center space-y-2">
                <FaJava className="text-red-600" />
                <span className="text-sm">Java</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiKotlin className="text-purple-700" />
                <span className="text-sm">Kotlin</span>
              </div>
              {/* Design */}
              <div className="flex flex-col items-center space-y-2">
                <SiFigma className="text-pink-500" />
                <span className="text-sm">Figma</span>
              </div>
              {/* Machine Learning */}
              <div className="flex flex-col items-center space-y-2">
                <FaPython className="text-blue-500" />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiTensorflow className="text-orange-500" />
                <span className="text-sm">TensorFlow</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiPytorch className="text-red-500" />
                <span className="text-sm">PyTorch</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiStreamlit className="text-red-600" />
                <span className="text-sm">Streamlit</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaGitAlt className="text-orange-600" />
                <span className="text-sm">Git</span>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              I am always open to exciting projects and collaboration
              opportunities. Let's create something amazing together!
            </p>
            <button className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-6 rounded transition duration-300">
              Let's Collaborate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
