import React from "react";

const FunFact = () => {
  return (
    <div className="text-right md:px-12">
      <h2 className="text-4xl font-bold mb-6 leading-relaxed text-purple-500">
        Fun Facts <span className="text-white">About Me</span>
      </h2>
      <p className="text-lg text-gray-400">
        <span className="block text-right text-justify leading-loose">
          There are a few fun things about me that you might find interesting! I have a deep passion for 
          <span className="text-purple-500"> Frontend Web Development</span>. I love the process of creating 
          interactive, visually appealing, and user-friendly interfaces that make the digital world more 
          accessible and engaging. Aside from coding, I am a huge fan of <span className="text-purple-500">seafood</span>. Whether it’s 
          shrimp, crab, or any other ocean delicacy, seafood always makes me happy. It’s my go-to choice for 
          any celebration or a simple treat. Lastly, I am the <span className="text-purple-500">#1 fan of Gojo Satoru</span> from Jujutsu Kaisen. 
          His charisma and immense power inspire me both in fiction and in real life to strive for greatness 
          and stand out uniquely in whatever I do.
        </span>
      </p>
    </div>
  );
};

export default FunFact;
