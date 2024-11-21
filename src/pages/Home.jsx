import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Home/hero";

const Home = () => {
  return (
    <div id="home" className="pt-20">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
