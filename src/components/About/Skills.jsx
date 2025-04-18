import { useState, useEffect } from "react";
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
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'tools', name: 'Tools' },
  ];

  const skills = [
    {
      icon: <FaReact className="text-blue-500" />,
      label: "React",
      link: "https://reactjs.org/",
      category: "frontend"
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      label: "Node.js",
      link: "https://nodejs.org/",
      category: "backend"
    },
    {
      icon: <FaHtml5 className="text-orange-500" />,
      label: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      category: "frontend"
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      label: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      category: "frontend"
    },
    {
      icon: <FaJsSquare className="text-yellow-500" />,
      label: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      category: "frontend"
    },
    {
      icon: <SiTailwindcss className="text-blue-400" />,
      label: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      category: "frontend"
    },
    {
      icon: <SiExpress className="text-gray-400" />,
      label: "Express.js",
      link: "https://expressjs.com/",
      category: "backend"
    },
    {
      icon: <SiNextdotjs className="text-white" />,
      label: "Next.js",
      link: "https://nextjs.org/",
      category: "frontend"
    },
    {
      icon: <SiMongodb className="text-green-400" />,
      label: "MongoDB",
      link: "https://www.mongodb.com/",
      category: "backend"
    },
    {
      icon: <FaPhp className="text-purple-500" />,
      label: "PHP",
      link: "https://www.php.net/",
      category: "backend"
    },
    {
      icon: <SiBootstrap className="text-purple-600" />,
      label: "Bootstrap",
      link: "https://getbootstrap.com/",
      category: "frontend"
    },
    {
      icon: <FaJava className="text-red-600" />,
      label: "Java",
      link: "https://www.oracle.com/java/",
      category: "mobile"
    },
    {
      icon: <SiKotlin className="text-purple-700" />,
      label: "Kotlin",
      link: "https://kotlinlang.org/",
      category: "mobile"
    },
    {
      icon: <SiFigma className="text-pink-500" />,
      label: "Figma",
      link: "https://www.figma.com/",
      category: "tools"
    },
    {
      icon: <FaPython className="text-blue-500" />,
      label: "Python",
      link: "https://www.python.org/",
      category: "ml"
    },
    {
      icon: <SiTensorflow className="text-orange-500" />,
      label: "TensorFlow",
      link: "https://www.tensorflow.org/",
      category: "ml"
    },
    {
      icon: <SiPytorch className="text-red-500" />,
      label: "PyTorch",
      link: "https://pytorch.org/",
      category: "ml"
    },
    {
      icon: <SiStreamlit className="text-red-600" />,
      label: "Streamlit",
      link: "https://streamlit.io/",
      category: "ml"
    },
    {
      icon: <FaGitAlt className="text-orange-600" />,
      label: "Git",
      link: "https://git-scm.com/",
      category: "tools"
    },
    {
      icon: <SiPostman className="text-orange-500" />,
      label: "Postman",
      link: "https://www.postman.com/",
      category: "tools"
    },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

    return (
      <div className="text-center relative py-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white inline-flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500">Tech</span> Stack
        </h2>
        
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I&apos;m always expanding my toolkit to tackle new challenges.
          Here are the technologies I&apos;ve worked with so far:
        </p>
        
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white backdrop-blur-sm'
                  : 'text-gray-400 hover:text-white border border-gray-800/50 hover:border-purple-500/30 backdrop-blur-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-4xl">
          {filteredSkills.map((skill, index) => (
            <a
              key={`${activeCategory}-${index}`}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex flex-col items-center justify-center h-full py-6 transition-all duration-300 hover:scale-110">
                <div className="text-4xl mb-3 relative">
                  {skill.icon}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 shadow-lg shadow-purple-500/20 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium text-gray-300 relative">
                  {skill.label}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;