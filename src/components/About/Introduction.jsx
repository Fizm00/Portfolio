import React from "react";

const Introduction = () => {
  return (
    <div className="relative flex flex-col items-center md:items-start text-white gap-y-8 px-4 sm:px-6 md:px-12">
      <div className="md:w-full">
        <h1 className="text-4xl font-bold mb-10 text-shadow-lg">
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
        <p className="text-lg text-gray-400 leading-loose text-justify mt-6">
          There are a few fun things about me that you might find interesting! I
          have a deep passion for{" "}
          <span className="text-purple-500">Frontend Web Development</span>. I
          love the process of creating interactive, visually appealing, and
          user-friendly interfaces that make the digital world more accessible
          and engaging. Aside from coding, I am a huge fan of{" "}
          <span className="text-purple-500">seafood</span>. Whether it’s shrimp,
          crab, or any other ocean delicacy, seafood always makes me happy. It’s
          my go-to choice for any celebration or a simple treat. Lastly, I am the{" "}
          <span className="text-purple-500">#1 fan of Gojo Satoru</span> from
          Jujutsu Kaisen. His charisma and immense power inspire me both in
          fiction and in real life to strive for greatness and stand out uniquely
          in whatever I do.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
