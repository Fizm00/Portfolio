import { useState, useEffect } from "react";
import Navbar from "../components/contact/Navbar";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zxblbtn",
        "template_dbk34d7",
        e.target,
        "IofbVji-P5CwLCO2K"
      )
      .then(
        () => {
          setIsSnackbarVisible(true);
          setIsSubmitting(false);
          e.target.reset();

          setTimeout(() => {
            setIsSnackbarVisible(false);
          }, 3000);
        },
        () => {
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23]/90 via-[#16213e]/95 to-black/95"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-5 bg-[size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`,
                animation: `twinkle ${3 + Math.random() * 5}s infinite ease-in-out alternate`
              }}
            ></div>
          ))}
          
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            return (
              <div 
                key={`bright-star-${i}`}
                className="absolute rounded-full shadow-lg"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: 'white',
                  boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(255, 255, 255, 0.8)`,
                  animation: `twinkle ${2 + Math.random() * 4}s infinite ease-in-out alternate`
                }}
              ></div>
            )
          })}
          
          {[...Array(5)].map((_, i) => {
            const planetSize = Math.random() * 12 + 8;
            const planetColors = ['#a78bfa', '#818cf8', '#60a5fa', '#34d399', '#fbbf24'];
            const glowColors = [
              'rgba(167, 139, 250, 0.3)', 
              'rgba(129, 140, 248, 0.3)', 
              'rgba(96, 165, 250, 0.3)',  
              'rgba(52, 211, 153, 0.3)',  
              'rgba(251, 191, 36, 0.3)' 
            ];
            
            return (
              <div 
                key={`planet-${i}`}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${planetSize}px`,
                  height: `${planetSize}px`,
                  backgroundColor: planetColors[i],
                  opacity: 0.6,
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px ${glowColors[i]}`,
                  animation: `orbit ${30 + Math.random() * 50}s infinite linear`
                }}
              ></div>
            )
          })}
          
          {[...Array(3)].map((_, i) => (
            <div 
              key={`shooting-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 70}%`,
                left: '-5px',
                opacity: 0.8,
                boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.7)',
                animation: `shootingStar ${15 + Math.random() * 25}s ${Math.random() * 10}s infinite linear`
              }}
            ></div>
          ))}
          
          {[...Array(3)].map((_, i) => {
            const galaxySize = Math.random() * 40 + 30;
            return (
              <div 
                key={`galaxy-${i}`}
                className="absolute rounded-full blur-xl opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${galaxySize}px`,
                  height: `${galaxySize}px`,
                  backgroundColor: ['#a78bfa', '#818cf8', '#60a5fa'][i],
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `pulse ${20 + Math.random() * 30}s infinite ease-in-out alternate`
                }}
              ></div>
            )
          })}
        </div>
      </div>

      <Navbar />
      
      <section className="max-w-screen-xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-purple-500">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 backdrop-blur-sm bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 shadow-xl" 
              style={{boxShadow: '0 4px 30px rgba(123, 104, 238, 0.1)'}}>
            <ContactInfo />
          </div>
          
          <div className="lg:col-span-3 relative">
            <ContactForm
              handleFormSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
        
        {isSnackbarVisible && (
          <div
            className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-2"
            data-aos="fade-up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Message sent successfully!
          </div>
        )}
      </section>
      
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes orbit {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(100px) translateY(-50px); }
          50% { transform: translateX(200px) translateY(0); }
          75% { transform: translateX(100px) translateY(50px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes shootingStar {
          0% { 
            transform: translateX(0) translateY(0); 
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% { 
            transform: translateX(100vw) translateY(20vh);
            opacity: 0;
          }
          100% { 
            transform: translateX(100vw) translateY(20vh);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1) rotate(0deg); opacity: 0.15; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.2; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default Contact;