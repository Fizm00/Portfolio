import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Durasi animasi
      delay: 200,     // Waktu tunda sebelum animasi dimulai
    });
  }, []); // Dipanggil sekali saat komponen dimount
  return (
    <section className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 xl:px-34 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-40">
        {/* Teks Perkenalan */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hello, My Name is <br />
            <span className="text-purple-500 leading-relaxed">Firza Himawan</span>
          </h1>
          <p className="text-base md:text-lg">
            I am a <span className="text-purple-500">Frontend Developer</span>{" "}
            with experience in building responsive, user-friendly websites &
            Progressive Web Apps using{" "}
            <span className="text-purple-500">React</span>,{" "}
            <span className="text-purple-500">Vite</span>, and{" "}
            <span className="text-purple-500">Tailwind CSS</span>.
          </p>
          <p className="text-sm text-gray-400">
            Passionate about creating seamless user experiences and bridging the
            gap between design and technology.
          </p>
          <div className="flex flex-wrap space-x-4 justify-center md:justify-start">
            <button className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded transition duration-300">
              Let's Talk Now
            </button>
            <button className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded transition duration-300">
              View My Work
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/firzahimawan/" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Fizm00" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/firza_hmn/" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="relative justify-self-end">
          <img
            src="pictprofile2.jpg"
            alt="Profile"
            className="rounded-full aspect-square w-[400px] object-cover border-2 border-purple-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
