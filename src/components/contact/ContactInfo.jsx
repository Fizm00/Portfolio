import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiMapPin } from "react-icons/fi";
import GoogleMaps from "./GoogleMaps";

const ContactInfo = () => {
  return (
    <div className="space-y-8" data-aos="fade-right">
      <h2 className="text-2xl font-bold flex items-center">
        <span className="inline-block w-4 h-4 bg-purple-500 mr-3 rounded-sm transform rotate-45"></span>
        Contact <span className="text-purple-500 ml-2">Information</span>
      </h2>
      
      <p className="text-gray-300 leading-loose">
        I&apos;m open to discussing new projects, creative ideas, or opportunities to
        be part of your visions. Feel free to contact me via any channel below.
      </p>
      
      <div className="space-y-5">
        <div className="flex items-center space-x-3 group">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
            <FiMail className="text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <a
              href="mailto:himawanfirza21@gmail.com"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              himawanfirza21@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 group">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
            <FiPhone className="text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <span className="text-white">+62-813-2073-2375</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 group">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
            <FiMapPin className="text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <span className="text-white">Yogyakarta, Indonesia</span>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-400 mb-3">Connect with me</p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/firzahimawan/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500/20 text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/Fizm00"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500/20 text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.instagram.com/firza_hmn/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500/20 text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
      <GoogleMaps />
    </div>
  );
};

export default ContactInfo;