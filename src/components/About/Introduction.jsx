import React from "react";

const Introduction = () => {
  return (
    <div className="relative flex flex-col items-center md:items-start text-white gap-y-8 px-4 sm:px-6 md:px-12">
      <div className="md:w-full">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-purple-500">Me</span>
        </h1>
        <p className="text-lg text-gray-400 leading-loose text-justify">
          Hello! I am Firza Himawan, a junior programmer currently pursuing my
          studies and dreaming of becoming a Frontend Developer. I have explored
          various aspects of programming, including web development using
          technologies such as Node.js, React, Vite, Tailwind CSS, MongoDB, and
          Express.js. I also have experience in mobile development using Java and
          Kotlin, as well as design using Figma. Additionally, I have ventured
          into the world of Machine Learning and Deep Learning using Python,
          Streamlit, TensorFlow, and PyTorch.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
