import React from "react";
import GoogleMaps from "./GoogleMaps"; // Panggil GoogleMaps di sini

const ContactInfo = () => {
  return (
    <div className="space-y-8" data-aos="fade-right">
      <h2 className="text-2xl font-bold">
        Contact <span className="text-purple-500">Information</span>
      </h2>
      <p className="text-gray-400 leading-loose">
        I’m open to discussing new projects, creative ideas, or opportunities to
        be part of your visions. Feel free to contact me via email or social
        media platforms below.
      </p>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:himawanfirza21@gmail.com"
            className="text-purple-500 hover:underline"
          >
            himawanfirza21@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <span className="text-purple-500">+62-813-2073-2375</span>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/firzahimawan/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Fizm00"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/firza_hmn/"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
      {/* Google Maps Embed */} 
      <GoogleMaps /> {/* Tambahkan komponen GoogleMaps di sini */}
    </div>
  );
};

export default ContactInfo;
