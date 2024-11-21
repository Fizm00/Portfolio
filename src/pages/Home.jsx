import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div id="home" className="pt-20">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
