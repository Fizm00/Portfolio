import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [nameText, setNameText] = useState("");
  const [isTypingText, setIsTypingText] = useState(true);
  const fullText = "Hello, My Name is";
  const fullName = "Firza Himawan";
  const typingSpeed = 60;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
    
    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex < fullText.length) {
        setText(fullText.slice(0, textIndex + 1));
        textIndex++;
      } else {
        clearInterval(textInterval);
        setIsTypingText(false);
        let nameIndex = 0;
        const nameInterval = setInterval(() => {
          if (nameIndex < fullName.length) {
            setNameText(fullName.slice(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(nameInterval);
          }
        }, typingSpeed);
      }
    }, typingSpeed);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 xl:px-34 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-40">
        {/* Teks Perkenalan */}
        <div className="space-y-8 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <div>{text}</div>
            <div className="mt-2">
              <span className="text-purple-500">
                {nameText}
                {!isTypingText && <span className="blinking-cursor text-purple-500">|</span>}
              </span>
            </div>
          </h1>
          <p className="text-base md:text-lg">
            I am a <span className="text-purple-500">Frontend Developer</span>{" "}
            with experience in building responsive, user-friendly websites & Progressive Web Apps using{" "}
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
            <a
              href="https://www.linkedin.com/in/firzahimawan/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Fizm00"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/firza_hmn/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 hover:text-purple-700"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="relative justify-self-end" data-aos="fade-up" data-aos-delay="300">
          <img
            src="pictprofile2.jpg"
            alt="Profile"
            className="rounded-full aspect-square w-[400px] object-cover border-2 border-purple-500 hover:scale-110 hover:rotate-3 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default hero;
