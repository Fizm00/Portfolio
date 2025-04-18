import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [nameText, setNameText] = useState("");
  const [isTypingText, setIsTypingText] = useState(true);
  const fullText = "Hello, My Name is";
  const fullName = "Firza Himawan";
  const typingSpeed = 60;
  const canvasRef = useRef(null);

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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 40 + 280}, 100%, ${Math.random() * 20 + 40}%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 50;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(147, 51, 234, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(textInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="text-white fixed inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-purple-900/20 blur-[50px] md:blur-[80px] animate-float-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 md:w-80 md:h-80 rounded-full bg-pink-900/20 blur-[60px] md:blur-[90px] animate-float-medium" />
        <div className="absolute inset-0 opacity-5 md:opacity-10 bg-[length:20px_20px] md:bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-20 md:opacity-30 pointer-events-none z-0"
      />

      <div className="absolute inset-12 flex items-start md:items-center justify-center overflow-y-auto pt-12 md:pt-0">
        <div className="w-full h-full md:h-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-10 items-center px-4 md:px-12 pt-12 pb-12 relative z-10">
          <div
            className="order-1 md:order-none w-full flex justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="pictprofile2.jpg"
              alt="Profile"
              className="rounded-full aspect-square w-[200px] sm:w-[250px] md:w-[400px] object-cover border-2 border-purple-500 hover:scale-110 hover:rotate-3 transition-transform duration-500 mx-auto"
            />
          </div>

          <div className="order-2 md:order-none space-y-4 md:space-y-8 text-center md:text-left leading-relaxed px-2" data-aos="fade-up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <div>{text}</div>
              <div className="mt-1 md:mt-2">
                <span className="text-purple-500">
                  {nameText}
                  {!isTypingText && (
                    <span className="blinking-cursor text-purple-500">|</span>
                  )}
                </span>
              </div>
            </h1>

            <p className="text-base md:text-lg leading-relaxed">
              I am a{" "}
              <span className="text-purple-500">Fullstack Developer</span>{" "}
              specializing in the{" "}
              <span className="text-purple-500">MERN Stack</span> (MongoDB, Express.js, React, Node.js)
              with expertise in building end-to-end web applications.
            </p>
            <p className="text-sm text-gray-400">
              Passionate about creating full-cycle solutions that bridge business requirements
              with technical implementation, from database design to UI/UX.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded transition duration-300 text-sm md:text-base"
              >
                Let&#39;s Talk Now
              </Link>
              <Link
                to="/projects"
                className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-4 rounded transition duration-300 text-sm md:text-base"
              >
                View My Work
              </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-6">
              <a href="https://www.linkedin.com/in/firzahimawan/" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
                <FaLinkedin size={20} className="md:w-6" />
              </a>
              <a href="https://github.com/Fizm00" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
                <FaGithub size={20} className="md:w-6" />
              </a>
              <a href="https://www.instagram.com/firza_hmn/" target="_blank" rel="noreferrer" className="text-purple-500 hover:text-purple-700">
                <FaInstagram size={20} className="md:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;