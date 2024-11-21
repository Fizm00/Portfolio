import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleCollaborate = () => {
    navigate("/contact");
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 leading-relaxed">
        Interested in Collaborating?
      </h2>
      <p className="text-lg text-gray-400 mb-6">
        I am always open to exciting projects and collaboration opportunities.
        Let's create something amazing together!
      </p>
      <button
        onClick={handleCollaborate}
        className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-6 rounded transition duration-300 animate-bounce"
      >
        Let's Collaborate
      </button>
    </div>
  );
};

export default CTA;
