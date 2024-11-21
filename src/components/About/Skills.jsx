import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiKotlin,
  SiFigma,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
  SiBootstrap,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      icon: <FaReact className="text-blue-500" />,
      label: "React",
      link: "https://reactjs.org/",
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      label: "Node.js",
      link: "https://nodejs.org/",
    },
    {
      icon: <FaHtml5 className="text-orange-500" />,
      label: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      label: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaJsSquare className="text-yellow-500" />,
      label: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <SiTailwindcss className="text-blue-400" />,
      label: "Tailwind CSS",
      link: "https://tailwindcss.com/",
    },
    {
      icon: <SiExpress className="text-gray-400" />,
      label: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      icon: <SiNextdotjs className="text-white" />,
      label: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      icon: <SiMongodb className="text-green-400" />,
      label: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      icon: <FaPhp className="text-purple-500" />,
      label: "PHP",
      link: "https://www.php.net/",
    },
    {
      icon: <SiBootstrap className="text-purple-600" />,
      label: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: <FaJava className="text-red-600" />,
      label: "Java",
      link: "https://www.oracle.com/java/",
    },
    {
      icon: <SiKotlin className="text-purple-700" />,
      label: "Kotlin",
      link: "https://kotlinlang.org/",
    },
    {
      icon: <SiFigma className="text-pink-500" />,
      label: "Figma",
      link: "https://www.figma.com/",
    },
    {
      icon: <FaPython className="text-blue-500" />,
      label: "Python",
      link: "https://www.python.org/",
    },
    {
      icon: <SiTensorflow className="text-orange-500" />,
      label: "TensorFlow",
      link: "https://www.tensorflow.org/",
    },
    {
      icon: <SiPytorch className="text-red-500" />,
      label: "PyTorch",
      link: "https://pytorch.org/",
    },
    {
      icon: <SiStreamlit className="text-red-600" />,
      label: "Streamlit",
      link: "https://streamlit.io/",
    },
    {
      icon: <FaGitAlt className="text-orange-600" />,
      label: "Git",
      link: "https://git-scm.com/",
    },
    {
      icon: <SiPostman className="text-orange-500" />,
      label: "Postman",
      link: "https://www.postman.com/",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-12 leading-relaxed">Tech Stack</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-4xl">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group relative"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="transform transition-transform duration-300 group-hover:scale-125">
              {skill.icon}
            </div>
            <span className="text-sm">{skill.label}</span>
            <span className="absolute bottom-[-1.5rem] bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {`Learn more about ${skill.label}`}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
