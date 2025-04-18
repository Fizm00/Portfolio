import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div className="relative py-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 relative">
          <div className="relative w-64 h-64 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/50 to-blue-600/50 p-0.5 backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-black/50 overflow-hidden backdrop-blur-sm">
                <img 
                  src="pictprofile5.jpg" 
                  alt="Firza Himawan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<span class="text-6xl text-white">FH</span>';
                  }}
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600/80 to-purple-400/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Full Stack Dev
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-emerald-500">About</span>
            <span className="text-white">Me</span>
          </h1>

          <div className="space-y-6 text-gray-200 leading-relaxed">
            <p className="text-lg backdrop-blur-sm">
              Hello! I am <span className="font-semibold text-white">Firza Himawan</span>, a programmer currently pursuing my
              studies and dreaming of becoming a Fullstack Developer. I have explored
              various aspects of programming, including web development using
              technologies such as Node.js, React, Vite, Tailwind CSS, MongoDB, and
              Express.js.
            </p>

            <p className="text-lg backdrop-blur-sm">
              I also have experience in mobile development using Java and
              Kotlin, as well as design using Figma. Additionally, I have ventured
              into the world of Machine Learning and Deep Learning using Python,
              Streamlit, TensorFlow, and PyTorch.
            </p>
          </div>

          <div className="mt-10 relative backdrop-blur-sm">
            <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400/0 via-purple-400/50 to-purple-400/0"></div>
            <div className="absolute -top-2 left-0 right-0 h-px bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0"></div>

            <h3 className="text-xl font-semibold mb-4 text-white pl-4">Fun Facts About Me</h3>
            <ul className="space-y-3 pl-4 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">♦</span>
                <p>I have a deep passion for <span className="text-purple-400 font-medium">Frontend Web Development</span>. I love creating interactive, visually appealing interfaces.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">♦</span>
                <p>I&apos;m a huge fan of <span className="text-purple-400 font-medium">seafood</span>. Whether it&apos;s shrimp, crab, or any ocean delicacy, seafood always makes me happy.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">♦</span>
                <p>I am the <span className="text-purple-400 font-medium">#1 fan of Gojo Satoru</span> from Jujutsu Kaisen. His charisma and power inspire me to strive for greatness.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;